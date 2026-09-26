# Shadow Friends (かげぼうし) · FriendSDK v0.1.2

A night shadow-theatre puzzle in 3D. Pieces float between a paper lantern and a
shoji screen. Turn them until their shadow matches the silhouette card. When the
shadow fits, the pieces fly apart and reassemble as **your own Friend**, stepping
out of the shadow. The twelfth and last shadow is the silhouette of your own
Friend itself.

The SDK runtime supplies wallet connection, owned Friend selection, the fresh
hardwired-NFT eligibility check (generation ≥ 1, Robinhood mainnet 4663), the
sandbox and in-frame confirmations. This directory contains only the game.

## Run

From the SDK root with Node.js 22+:

```sh
npm ci
npm run build
npm run dev:game -- games/kageboshi
```

Open `http://localhost:4173`, connect a wallet on Robinhood mainnet and select
an owned Generations Friend. Build static files with
`npx friendsdk build games/kageboshi` (output: `games/kageboshi/.friendsdk/`).

`engine.js` is prebuilt from `src/` (three.js r170 bundled in). To rebuild it:

```sh
cd games/kageboshi
npm i --no-save three@0.170.0 esbuild
node build-engine.mjs
```

## How to play

- 12 shadows. Drag the floating pieces; the shadow on the shoji follows in real
  time. The "Shadow match" meter shows how close you are. Close enough and the
  pieces settle gently into place (a weak snap).
- Turning is introduced step by step:
  - Stage 1: sideways only.
  - Stages 2–9: sideways and up/down.
  - Stages 10–12: sideways, up/down and twist.
- Clicking the turning-mode chip at the top switches to **free turning** (drag in
  any direction). Click it again to go back.
- Every starting angle is checked before play with a greedy solver that turns
  one axis at a time. From stage 2 on, turning sideways alone is never enough.
- Behind the screen a few soft lights drift at random. While you turn, they lean
  very slightly toward the helpful direction. Now and then a stream of light
  motes crosses the stage like a single brush stroke.
- Stages 1–11 use the 16 official Rare Friends silhouettes. After every clear,
  the pieces reassemble as your selected Friend (from the SDK's canonical sprite)
  and step out of the shadow. Stage 12's goal is your own Friend's silhouette.
- Stars: 1 for a clear, 2 within the par time, 3 within par without a hint.
- Lamp colour (Lantern, Moonlight, Crimson, Firefly) is purely cosmetic and free.

### Controls

| Input | Action |
| --- | --- |
| Drag left/right (swipe on touch) | Turn sideways |
| Drag up/down (from stage 2) | Tilt |
| Hold ⟲ ⟳, Q / E, or rotate two fingers (from stage 10) | Twist |
| Click the turning-mode chip | Free turning on/off |
| Arrow keys / WASD | Turn with the keyboard |
| ↺ button or R | Back to the starting angle |
| Hint button | Light a lantern (see below) |
| Enter | Start from the title |

A short control guide appears next to the buttons on the stages that introduce
a new move (1, 2, 10) and while free turning is on, with the new move marked.
Settings: language (日本語 / English, defaults to the browser language) and
sound on/off. The game follows the system "reduce motion" preference (the dust,
brush strokes and flicker are turned off and the clear animation is shortened).
The game pauses itself while the runtime menu is open (`paused` prop) and when
the tab is hidden.

## Economy (all simulated)

The SDK chance-game client powers the hint lanterns:

| Rule | Exact value |
| --- | --- |
| Lantern price | 1 RF (`1000000000000000000` base units) |
| Small Luck (小吉) | 60 % / 6,000 bps; a 0.5 RF charm |
| Good Luck (中吉) | 30 % / 3,000 bps; a 1 RF charm |
| Great Luck (大吉) | 10 % / 1,000 bps; a 3 RF charm |
| Expected reward | 0.9 RF per lantern (0.1 RF sink per lantern) |
| Consumable | Lighting one lantern shows the hint for 15 s and draws exactly one fortune |
| Backing | Each purchased or pending lantern reserves 3 RF; kept charms reserve their fixed value |
| Redemption | Fixed value, no expiry, to the selected Friend's canonical wallet in a future approved integration |

- **Buy** a lantern from the Lantern panel (tap the RF chip, or the hint button
  when you have none): `client.buy(1n)`.
- **Light** it with the hint button: `client.play(1n)` then `client.settle`.
  For 15 seconds every piece whose shadow falls inside the goal glows gold and
  every piece whose shadow sticks out blinks red. The lantern's flame also draws
  one fortune; the charm it leaves is shown in the Lantern panel.
- **Redeem** a charm for its fixed RF value: `client.redeem(outcomeId, 1n)`.
- An unsettled lantern (for example after a declined confirmation) can be
  finished from the panel ("Open the fortune").

Skill never changes the odds; hints only cost the third star. Balances are
labelled "(sim)" in preview mode.

## Art and credits

The 16 silhouettes come from the official Rare Friends creator kit (1-bit masks).
The player's own Friend is read from the SDK's canonical sprite reader (idle,
facing down, frame 0). The 3D stage, washi and wood textures, lights and effects
are original and generated at runtime with three.js (MIT). Music and sound
effects are original and synthesised at runtime with Web Audio (koto and
shakuhachi voices in the miyako-bushi scale, no noise). Title font: Yuji Boku
(SIL OFL 1.1, subset to the title characters; see `FONT-LICENSE-OFL.txt`).
Other text uses the system's serif and sans-serif fonts.

## Checks

```sh
npx friendsdk check games/kageboshi
npx friendsdk test games/kageboshi
npx friendsdk test games/kageboshi --width 360
```

## Known limits

- The sandbox has no storage, so stars reset when the page reloads (as do the
  SDK's simulated ledgers).
- If the Friend artwork cannot be read, the game stays playable: the pieces do
  not reassemble into your Friend and the last stage uses an official silhouette.
- WebGL is required. On low-power devices the shadow map and particle count are
  reduced automatically.
