import type { GameClient } from "@rarefriends/friendsdk/game";

export type FriendFrames = Readonly<Record<"down" | "up" | "left" | "right", readonly (readonly string[])[]>>;
export type TwinIslesGame = {
  setPaused(paused: boolean): void;
  setFriend(friend: { frames: FriendFrames } | null): void;
  destroy(): void;
};
export function createGame(root: HTMLElement, options: {
  client: GameClient;
  friendId: bigint;
  fmt: (value: bigint) => string;
  lang?: "ja" | "en";
  friend?: { frames: FriendFrames } | null;
}): TwinIslesGame;
