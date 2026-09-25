"use client";

import { useEffect, useRef, useState } from "react";
import type { GameComponentProps } from "@rarefriends/friendsdk/runtime";
import { createFriendReader, spriteFrame, SPRITE_FACINGS } from "@rarefriends/friendsdk/sprites";
import { formatGameAmount } from "@rarefriends/friendsdk/ui";
import { createGame, type TwinIslesGame, type FriendFrames } from "./engine.js";
import "./style.css";

const ja = () => (navigator.language || "").toLowerCase().startsWith("ja");

/**
 * Twin Isles / ふたご島 — a spot-the-difference game.
 * The SDK runtime supplies wallet connection, the verified Friend, the sandbox and confirmations.
 * This thin adapter mounts the canvas engine and forwards the selected Friend, the fixed client and pause state.
 */
export default function TwinIsles({ friendId, client, paused }: GameComponentProps) {
  const host = useRef<HTMLDivElement>(null);
  const game = useRef<TwinIslesGame | null>(null);
  const pausedRef = useRef(paused);
  const [phase, setPhase] = useState<"loading" | "ready" | "error">("loading");
  const [error, setError] = useState("");
  const [attempt, setAttempt] = useState(0);
  pausedRef.current = paused;

  // Load the session snapshot first so the runtime can finish its loading state.
  useEffect(() => {
    let alive = true;
    setPhase("loading"); setError("");
    client.read().then(() => { if (alive) setPhase("ready"); }).catch(cause => {
      if (!alive) return;
      setError(cause instanceof Error ? cause.message : "Could not load the game session.");
      setPhase("error");
    });
    return () => { alive = false; };
  }, [client, friendId, attempt]);

  // Mount the engine once the session is ready; rebuild it when the Friend or client changes.
  useEffect(() => {
    if (phase !== "ready" || !host.current) return;
    const instance = createGame(host.current, { client, friendId, fmt: value => formatGameAmount(value, 18) });
    game.current = instance;
    instance.setPaused(pausedRef.current);
    let alive = true;
    createFriendReader().read(friendId).then(sprites => {
      if (!alive) return;
      const frames = Object.fromEntries(SPRITE_FACINGS.map(facing =>
        [facing, Array.from({ length: 8 }, (_, i) => spriteFrame(sprites, facing, false, i).frame.rows)])) as unknown as FriendFrames;
      instance.setFriend({ frames });
    }).catch(() => { /* Artwork is optional: the game stays playable and shows the Friend number only. */ });
    return () => { alive = false; instance.destroy(); if (game.current === instance) game.current = null; };
  }, [phase, client, friendId]);

  useEffect(() => { game.current?.setPaused(paused); }, [paused]);

  return <div className="tw-host" aria-busy={phase === "loading"}>
    {phase !== "ready" && <div className="loading" role={phase === "error" ? "alert" : "status"}>
      {phase === "error" ? <>
        <p>{ja() ? "読み込みに失敗しました。" : "Could not load the game."}</p><p style={{ fontSize: 12, opacity: .7 }}>{error}</p>
        <button type="button" disabled={paused} onClick={() => setAttempt(a => a + 1)}>{ja() ? "もう一度" : "Retry"}</button>
      </> : <p>{ja() ? "ふたご島を読み込み中…" : "Loading Twin Isles…"}</p>}
    </div>}
    <div ref={host} className="tw-root" />
  </div>;
}
