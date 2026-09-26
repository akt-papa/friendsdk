import type { GameClient } from "@rarefriends/friendsdk/game";

export type ShadowFriendsGame = {
  setPaused(paused: boolean): void;
  /** 16 rows of 16 characters from the SDK sprite reader; "#" marks a filled pixel. */
  setFriend(friend: { rows: readonly string[] } | null): void;
  destroy(): void;
};
export function createGame(root: HTMLElement, options: {
  client: GameClient;
  friendId: bigint;
  fmt: (value: bigint) => string;
  lang?: "ja" | "en";
}): ShadowFriendsGame;
