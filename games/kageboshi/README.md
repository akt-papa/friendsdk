# Shadow Friends (かげぼうし) · FriendSDK v0.1.2

A night shadow-theatre puzzle in 3D. Pieces float between an andon lamp and a
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
- Lamp color (andon lamp, moonlight, crimson, firefly) is purely cosmetic and free.

### Controls

| Input | Action |
| --- | --- |
| Drag left/right (swipe on touch) | Turn sideways |
| Drag up/down (from stage 2) | Tilt |
| Hold ⟲ ⟳, Q / E, or rotate two fingers (from stage 10) | Twist |
| Click the turning-mode chip | Free turning on/off |
| Arrow keys / WASD | Turn with the keyboard |
| ↺ button or R | Back to the starting angle |
| Omikuji button | Draw a fortune slip that lists the next moves (see below) |
| Enter | Start from the title |

A short control guide appears next to the buttons on the stages that introduce
a new move (1, 2, 10) and while free turning is on, with the new move marked.
Settings: language (日本語 / English, defaults to the browser language) and
sound on/off. The game follows the system "reduce motion" preference (the dust,
brush strokes and flicker are turned off and the clear animation is shortened).
The game pauses itself while the runtime menu is open (`paused` prop) and when
the tab is hidden.

## Economy (all simulated)

The hint is an **omikuji** (a Japanese fortune slip), powered by the SDK chance-game client:

| Rule | Exact value |
| --- | --- |
| Omikuji price | 1 RF (`1000000000000000000` base units) |
| Great Luck (大吉) | 10 % / 1,000 bps; the slip lists the next **3 moves**; the 1 RF price is refunded |
| Good Luck (中吉) | 30 % / 3,000 bps; the next **2 moves** |
| Small Luck (小吉) | 45 % / 4,500 bps; the next **move** |
| Bad Luck (凶) | 15 % / 1,500 bps; the pieces turn back to the starting angle |
| Expected reward | 0.1 RF per draw (0.9 RF sink per draw) |
| Consumable | One omikuji is drawn exactly once and produces one result |
| Backing | Each purchased or pending omikuji reserves 1 RF (the Great Luck refund); a kept refund reserves its fixed value |
| Redemption | Fixed value, no expiry, to the selected Friend's canonical wallet in a future approved integration |

- Press **Omikuji**: an in-game confirmation shows the price, the Friend's RF
  before → after and the odds. **Draw** then calls `client.buy(1n)` (only when no
  omikuji is held), `client.play(1n)` and `client.settle`; the runtime confirms
  each paid action.
- The draw plays a short shrine ritual: the wooden omikuji box rattles, turns
  over, a numbered stick slides out and the paper slip unfolds (tap to skip;
  reduced motion shows the slip at once). The slip names the result and lists
  the moves, e.g. "1. Turn right about a quarter turn 2. Tilt up a little".
- The moves are computed from the current angle with the moves the stage allows
  (sideways, tilt, twist). After the slip closes, the oracle stays at the top
  left for 30 seconds.
- A Great Luck refund is collected from the Omikuji panel (tap the RF chip):
  `client.redeem(1, 1n)`. An unsettled omikuji can be opened from the same panel.
- The clock and input pause during the ritual. Drawing an omikuji costs the
  third star on that stage. Skill never changes the odds.

## Art and credits

The 16 silhouettes come from the official Rare Friends creator kit (1-bit masks).
The player's own Friend is read from the SDK's canonical sprite reader (idle,
facing down, frame 0). The 3D stage, washi and wood textures, lights and effects
are original and generated at runtime with three.js (MIT). Music and sound
effects are original and synthesised at runtime with Web Audio (koto and
shakuhachi voices in the miyako-bushi scale, no noise). Title and omikuji font: Yuji Boku
(SIL OFL 1.1, subset to the characters used; see `FONT-LICENSE-OFL.txt`).
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
