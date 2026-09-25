# Twin Isles (ふたご島) · FriendSDK v0.1.2

An evil Genesis has forged a fake copy of each Rare Friends island. Compare the
**REAL** island with the **FAKE** one and tap every difference before time runs
out. Find them all and the fake crumbles. Your own verified Friend stands on
every island, cheers you on from the HUD and is named on the title screen.

The SDK runtime supplies wallet connection, owned Friend selection, the fresh
hardwired-NFT eligibility check (generation ≥ 1, Robinhood mainnet 4663), the
sandbox and in-frame confirmations. This directory contains only the game.

## Run

From the SDK root with Node.js 22+:

```sh
npm ci
npm run build
npm run dev:game -- games/futago-jima
```

Open `http://localhost:4173`, connect a wallet on Robinhood mainnet and select
an owned Generations Friend. Build static files with
`npx friendsdk build games/futago-jima` (output: `games/futago-jima/.friendsdk/`).

## How to play

- 30 stages on 6 islands (5 each) plus a **Daily Puzzle** that is the same for
  every player on a given day. Puzzles are generated from a fixed seed.
- Difficulty climbs island by island. Island 1: 3–4 obvious differences
  (missing/extra item, colour, a different Friend), 96–100 s, fewer objects.
  Island 2 adds facing, headwear and size. Island 3 introduces the subtle kinds.
  Islands 4–6: 6–7 differences, 71–85 s, more clutter. Daily: 6 differences,
  85 s. Differences include a missing or extra item, a colour change, a
  different Friend, facing, headwear, the size of a Friend or prop, mirroring,
  **animation timing** (a Friend or bird that is frozen, twice as fast or out
  of step) and **subtle terrain edits** (ground details erased or a new
  hatched patch painted into the island art). Every difference is checked
  pixel-by-pixel at 12 moments before play: static ones must be visible at all
  of them, timing ones at least 45 % of the time. Kinds are balanced per stage:
  at most one timing and one terrain difference, and at most two from any
  other group (presence, colour, shape, size).
- After Start, a 5-4-3-2-1 countdown with sound plays while both pictures stay
  hidden; the timer starts on "START!".
- Clearing shatters the fake isle; the evil Genesis types out a parting line in
  a speech bubble, then flees (about 4 s; tap or Enter to skip).
- A wrong tap costs 5 s; three wrong taps within 2.5 s lock input for 1.5 s.
- Stars: 1 for a clear, 2 with ≥ 20 % time left, 3 with ≥ 45 % left and no
  hint or time purchase.

### Controls

| Input | Action |
| --- | --- |
| Tap / click either picture | Mark a difference |
| Press and hold / drag | Magnifier (both pictures zoom at the same spot) |
| Arrow keys or WASD (Shift = faster) | Move the aiming cursor |
| Enter or Space | Tap at the cursor |
| Hold Z | Magnifier at the cursor |
| H / T | Hint / +15 s |
| P or Esc | Pause (the pictures are hidden while paused) |
| M | Mute |

Settings on the title screen: language (日本語 / English, defaults to the
browser language) and sound on/off. There is no motion toggle: the game follows
the system "reduce motion" preference automatically (it then turns off shake,
particles, the shatter animation and bobbing).
The game pauses itself when the runtime menu opens (`paused` prop), when the
tab is hidden, and while its own pause menu is open.

## Economy (all simulated)

The SDK chance-game client powers the treasure loop:

| Rule | Exact value |
| --- | --- |
| Treasure Key price | 1 RF (`1000000000000000000` base units) |
| Pebble | 60 % / 6,000 bps; 0.5 RF |
| Golden Daruma | 30 % / 3,000 bps; 1 RF |
| Lucky Cat | 10 % / 1,000 bps; 3 RF |
| Expected reward | 0.9 RF per key (0.1 RF sink per opening) |
| Consumable | One key opens exactly one chest and produces one treasure |
| Backing | Each purchased or pending key reserves 3 RF; kept treasures reserve their fixed value |
| Redemption | Fixed value, no expiry, to the selected Friend's canonical wallet in a future approved integration |

Opening plays a short chest animation (shake, lid burst, the treasure rising
with rays and sparkles; the Lucky Cat gets a rainbow jackpot). Tap to skip;
reduced motion shows the result directly. Redeeming first shows an in-game confirmation
(what you give, what you get, RF before → after, cannot be undone), then the
SDK confirmation; on success gold coins burst out and the RF balance counts up
(bigger burst and confetti for the Lucky Cat). The treasure screen explains the loop in four steps (clear → buy a key with
RF → open the chest → keep or redeem). A treasure chest drops the first time you clear each stage and on your first
Daily Puzzle clear of the day. Opening a chest uses one key (`client.play` +
`client.settle`). Skill decides whether you have a chest to open; it never
changes the odds, which are set by the table above.

**Genesis shards** are an in-session soft currency earned from clears (more
for more stars). They buy a hint (2), +15 s (3) or a continue after time runs
out (3). Shards are not redeemable and are not RF. The SDK v0.1.2 bridge has no
additional-currency or upgrade action, so shards stay local to the session. The
intended RF integration is an RF-priced shard pack (an RF sink) once such an
action exists.

## Effects

- Every click or tap sparks a small burst; the "START!" of the countdown
  flashes the screen and throws confetti. The system reduce-motion preference
  tones both down.

## Art and credits

Islands, the 16 Friend species and Genesis faces come from the official Rare
Friends creator kit (1-bit masks, recoloured per theme). The player's own Friend
is drawn from the SDK's canonical sprite reader in its original black-on-white
look. Japanese props (torii, daruma, stone lanterns, onigiri) are original
pixel art. Music and sound effects are original chiptunes generated at runtime
with Web Audio (pulse, triangle and noise only). Font: DotGothic16 (SIL OFL 1.1,
subset; see `FONT-LICENSE-OFL.txt`).

## Checks

```sh
npx friendsdk check games/futago-jima
npx friendsdk test games/futago-jima
npx friendsdk test games/futago-jima --width 360
```

## Known limits

- The sandbox has no storage, so stars, unlocks, shards and chests reset when
  the page reloads (as do the SDK's simulated ledgers).
- If the Friend artwork cannot be read, the game stays playable and shows the
  Friend number only.
