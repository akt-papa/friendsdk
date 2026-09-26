/* かげぼうし / Shadow Friends — 光と影のパズル(試作)
   バラバラに浮かぶ立体を回して、障子に映る影をフレンドの形に合わせる。 */
import * as THREE from "three";
import CHARS from "./chars.json";
import BODY from "./body.js";
import { CATS, FORTUNE } from "./fortunes.js";

/* SDK の小さな受け口(index.tsx)から呼ばれる。root の中だけに画面を作り、destroy で全部かたづける */
export function createGame(root, opts = {}) {
root.innerHTML = BODY;
const offs = [], timers = new Set(), intervals = [];
const on = (t, ev, fn, o) => { t.addEventListener(ev, fn, o); offs.push(() => t.removeEventListener(ev, fn, o)); };
const later = (ms, fn) => { const id = setTimeout(() => { timers.delete(id); fn(); }, ms); timers.add(id); return id; };
const $ = id => root.querySelector("#" + id);
const RM = matchMedia("(prefers-reduced-motion: reduce)").matches;
const S = { free: false, lang: opts.lang || ((navigator.language || "").toLowerCase().startsWith("ja") ? "ja" : "en"), mute: false, stars: {}, started: false, ext: false, hid: false };
const J = (ja, en) => (S.lang === "ja" ? ja : en);
const fmtRF = opts.fmt || (v => (Number(v) / 1e18).toFixed(2).replace(/\.?0+$/, ""));
const paused = () => S.ext || S.hid || S.omi;
/* ---------- RF(SDK のチャンスゲーム: 灯籠) ---------- */
const ECON = { client: opts.client || null, snap: null, busy: false, err: "", canBuy: false };

/* ---------- お題(フレンドのシルエット) ---------- */
const MASKS = CHARS.map(rows => { const m = []; rows.forEach((r, y) => { for (let x = 0; x < 16; x++) if (r & (1 << (15 - x))) m.push([x, y]); }); return m; });
const LACQUER = ["#e8413a", "#3b78e7", "#c9873f", "#3fae4a", "#f2c230", "#ef7fb5", "#9a64e0", "#f2eee4"];
/* あなたのフレンド: SDK が選んだ NFT の絵(16×16)を setFriend で受けとる。読めない時は最終面も公式の形にする */
const ME = { mask: null, id: opts.friendId != null ? "#" + String(opts.friendId) : "", col: "#c8321e" };
const ORDER = [0, 3, 8, 12, 5, 1, 10, 6, 2, 14, 9, -1];
const TILT = [0, 0.26, 0.28, 0.3, 0.32, 0.34, 0.37, 0.42, 0.47, 0.42, 0.47, 0.52], TWIST = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0.25, 0.35, 0.45];
const STAGES = ORDER.map((sp, i) => ({ sp: sp < 0 ? 7 : sp, me: sp < 0, tilt: TILT[i], twist: TWIST[i], tier: i < 1 ? 1 : i < 9 ? 2 : 3, depth: [2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7][i], seed: 1000 + i * 77, par: [25, 30, 35, 40, 45, 50, 55, 60, 70, 75, 80, 90][i] }));
const maskOf = st => (st.me && ME.mask ? ME.mask : MASKS[st.sp]);
const meStage = st => !!(st && st.me && ME.mask);
function rng(seed) { let a = seed >>> 0; return () => { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

/* ---------- 3D の舞台 ---------- */
const canvas = $("stage");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
const LOW = /Mobi|Android/i.test(navigator.userAgent) || (navigator.hardwareConcurrency || 8) <= 4;
renderer.setPixelRatio(Math.min(devicePixelRatio || 1, LOW ? 1.5 : 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.outputColorSpace = THREE.SRGBColorSpace;

const scene = new THREE.Scene();
scene.background = new THREE.Color("#0b0806");
scene.fog = new THREE.Fog("#0b0806", 12, 30);
const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 80);

/* 光の向き(右手前・少し上から) と障子の座標系 */
const D = new THREE.Vector3(-0.3, -0.14, -1).normalize();   // 光が進む向き
const N = D.clone().negate();                               // 障子の表(光と観客の側)
const U = new THREE.Vector3(0, 1, 0).sub(N.clone().multiplyScalar(N.y)).normalize();
const R = new THREE.Vector3().crossVectors(U, N).normalize();
const SC = new THREE.Vector3(0, 1.55, -3.2);                // 障子の中心
const VS = 0.2;                                             // 1マスの大きさ
const P = SC.clone().addScaledVector(D, -3.7);              // 立体の位置(光と障子の間)

/* 和紙の質感(キャンバスで描く) */
function washiTexture() {
  const c = document.createElement("canvas"); c.width = c.height = 512; const x = c.getContext("2d");
  const g = x.createRadialGradient(256, 240, 40, 256, 256, 380); g.addColorStop(0, "#f4e7cb"); g.addColorStop(1, "#d9c49c");
  x.fillStyle = g; x.fillRect(0, 0, 512, 512);
  const r = rng(7);
  for (let i = 0; i < 2600; i++) { x.strokeStyle = `rgba(${150 + r() * 60},${120 + r() * 50},${80 + r() * 40},${0.05 + r() * 0.08})`; x.lineWidth = 0.5 + r();
    const px = r() * 512, py = r() * 512, a = r() * Math.PI * 2, l = 4 + r() * 22; x.beginPath(); x.moveTo(px, py); x.quadraticCurveTo(px + Math.cos(a + 1) * l * 0.5, py + Math.sin(a + 1) * l * 0.5, px + Math.cos(a) * l, py + Math.sin(a) * l); x.stroke(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4; return t;
}
function woodTexture() {
  const c = document.createElement("canvas"); c.width = 512; c.height = 512; const x = c.getContext("2d"); const r = rng(3);
  for (let p = 0; p < 8; p++) { const y0 = p * 64; x.fillStyle = `hsl(${22 + r() * 6},${30 + r() * 10}%,${9 + r() * 4}%)`; x.fillRect(0, y0, 512, 64);
    for (let i = 0; i < 40; i++) { x.strokeStyle = `rgba(0,0,0,${0.1 + r() * 0.2})`; x.lineWidth = 1; x.beginPath(); const yy = y0 + r() * 64; x.moveTo(0, yy); x.bezierCurveTo(170, yy + r() * 6 - 3, 340, yy + r() * 6 - 3, 512, yy + r() * 4 - 2); x.stroke(); }
    x.fillStyle = "rgba(0,0,0,.55)"; x.fillRect(0, y0, 512, 2); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(3, 3); return t;
}

/* 床(舞台の板) */
const floor = new THREE.Mesh(new THREE.PlaneGeometry(40, 40), new THREE.MeshStandardMaterial({ map: woodTexture(), roughness: 0.75, metalness: 0.05 }));
floor.rotation.x = -Math.PI / 2; floor.position.y = -1.35; floor.receiveShadow = true; scene.add(floor);

/* 障子(光を受ける紙と木枠) */
const screen = new THREE.Group();
const basis = new THREE.Matrix4().makeBasis(R, U, N);
screen.quaternion.setFromRotationMatrix(basis); screen.position.copy(SC); scene.add(screen);
const SW = 6.4, SH = 4.6;
const paperMat = new THREE.MeshStandardMaterial({ map: washiTexture(), color: "#cfc2a8", roughness: 1, metalness: 0, emissive: new THREE.Color("#ffb45c"), emissiveIntensity: 0 });
const paper = new THREE.Mesh(new THREE.PlaneGeometry(SW, SH), paperMat); paper.receiveShadow = true; screen.add(paper);
const frameMat = new THREE.MeshStandardMaterial({ color: "#2a1a10", roughness: 0.55, metalness: 0.1 });
function bar(w, h, x, y, z = 0.05, d = 0.1) { const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), frameMat); m.position.set(x, y, z); m.castShadow = false; m.receiveShadow = true; screen.add(m); return m; }
bar(SW + 0.5, 0.25, 0, SH / 2 + 0.12, 0.06, 0.2); bar(SW + 0.5, 0.25, 0, -SH / 2 - 0.12, 0.06, 0.2);
bar(0.25, SH + 0.5, -SW / 2 - 0.12, 0, 0.06, 0.2); bar(0.25, SH + 0.5, SW / 2 + 0.12, 0, 0.06, 0.2);
for (const fx of [-2.35, 2.35]) bar(0.05, SH, fx, 0, -0.04, 0.05);
for (const fy of [-1.55, 1.55]) bar(SW, 0.05, 0, fy, -0.04, 0.05);
/* 脚 */
for (const fx of [-SW / 2 - 0.12, SW / 2 + 0.12]) { const leg = bar(0.25, 0.9, fx, -SH / 2 - 0.45, 0.06, 0.25); leg.castShadow = true; }

/* お題のうす墨の輪郭(障子の上) */
const ghostCv = document.createElement("canvas"); ghostCv.width = ghostCv.height = 256;
const ghostTex = new THREE.CanvasTexture(ghostCv); ghostTex.colorSpace = THREE.SRGBColorSpace;
const ghost = new THREE.Mesh(new THREE.PlaneGeometry(16 * VS * 1.25, 16 * VS * 1.25), new THREE.MeshBasicMaterial({ map: ghostTex, transparent: true, opacity: 0.16, depthWrite: false }));
ghost.position.z = 0.004; screen.add(ghost);
function drawGhost(mask, fill) {
  const x = ghostCv.getContext("2d"); x.clearRect(0, 0, 256, 256); const c = 256 / 20, o = 2 * c; const m = new Set(mask.map(([a, b]) => a + "," + b));
  x.strokeStyle = "#3b2414"; x.lineWidth = 3; x.setLineDash([6, 5]); x.beginPath();
  for (const [a, b] of mask) { const L = o + a * c, T = o + b * c;
    if (!m.has(a + "," + (b - 1))) { x.moveTo(L, T); x.lineTo(L + c, T); } if (!m.has(a + "," + (b + 1))) { x.moveTo(L, T + c); x.lineTo(L + c, T + c); }
    if (!m.has(a - 1 + "," + b)) { x.moveTo(L, T); x.lineTo(L, T + c); } if (!m.has(a + 1 + "," + b)) { x.moveTo(L + c, T); x.lineTo(L + c, T + c); } }
  x.stroke();
  if (fill) { x.setLineDash([]); x.fillStyle = fill; for (const [a, b] of mask) x.fillRect(o + a * c, o + b * c, c, c); }
  ghostTex.needsUpdate = true;
}

/* 光(行灯の明かり) */
const key = new THREE.DirectionalLight("#ffd29a", 3.2);
key.position.copy(SC).addScaledVector(D, -14); key.target.position.copy(SC); scene.add(key, key.target);
key.castShadow = true; key.shadow.mapSize.set(LOW ? 1024 : 2048, LOW ? 1024 : 2048);
Object.assign(key.shadow.camera, { left: -5, right: 5, top: 5, bottom: -5, near: 4, far: 24 }); key.shadow.bias = -0.0006; key.shadow.normalBias = 0.02; key.shadow.radius = 3;
const hemi = new THREE.HemisphereLight("#3c2c4a", "#120906", 0.55); scene.add(hemi);
const rim = new THREE.PointLight("#7fa8ff", 6, 9, 2); rim.position.set(-2.6, 3.2, 1.2); scene.add(rim);
const glowLight = new THREE.PointLight("#ffb45c", 0, 7, 2); glowLight.position.copy(SC).addScaledVector(N, 0.8); scene.add(glowLight);

/* 行灯(光の出どころ) と光のすじ */
const andon = new THREE.Group(); andon.position.copy(SC).addScaledVector(D, -8.5).add(new THREE.Vector3(0, 0.4, 0)); scene.add(andon);
const andonBody = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 0.95, 24, 1, true), new THREE.MeshStandardMaterial({ color: "#ffd9a0", emissive: "#ff9e3d", emissiveIntensity: 2.2, side: THREE.DoubleSide }));
andon.add(andonBody);
const beamGeo = new THREE.CylinderGeometry(0.35, 3.6, 1, 32, 1, true); beamGeo.translate(0, -0.5, 0); beamGeo.rotateX(-Math.PI / 2);
const beamMat = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
  uniforms: { uCol: { value: new THREE.Color("#ffb766") }, uAmt: { value: 0.09 } },
  vertexShader: "varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main(){ vUv=uv; vec4 w=modelViewMatrix*vec4(position,1.); vN=normalize(normalMatrix*normal); vV=normalize(-w.xyz); gl_Position=projectionMatrix*w; }",
  fragmentShader: "uniform vec3 uCol; uniform float uAmt; varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main(){ float edge=pow(abs(dot(vN,vV)),1.6); float along=smoothstep(0.,.25,vUv.y)*(1.-vUv.y*.55); gl_FragColor=vec4(uCol*edge*along*uAmt,1.); }" });
const beam = new THREE.Mesh(beamGeo, beamMat);
beam.position.copy(andon.position); beam.lookAt(SC); beam.scale.set(1, 1, andon.position.distanceTo(SC)); scene.add(beam);

/* 光の中のちり */
const DUST = LOW ? 150 : 260; const dustGeo = new THREE.BufferGeometry(); const dustPos = new Float32Array(DUST * 3), dustSeed = new Float32Array(DUST);
{ const r = rng(11); for (let i = 0; i < DUST; i++) dustSeed[i] = r(); }
dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3)); const dustCol = new Float32Array(DUST * 3); dustGeo.setAttribute("color", new THREE.BufferAttribute(dustCol, 3));
const dotCv = document.createElement("canvas"); dotCv.width = dotCv.height = 32; { const x = dotCv.getContext("2d"); const g = x.createRadialGradient(16, 16, 0, 16, 16, 16); g.addColorStop(0, "rgba(255,230,190,1)"); g.addColorStop(1, "rgba(255,200,120,0)"); x.fillStyle = g; x.fillRect(0, 0, 32, 32); }
const dotTex = new THREE.CanvasTexture(dotCv);
const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({ size: 0.11, map: dotTex, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.9 }));
if (!RM) scene.add(dust);

/* はじける光(クリア時) */
const SPK = 220; const spkGeo = new THREE.BufferGeometry(); const spkPos = new Float32Array(SPK * 3); const spkVel = []; const spkLife = new Float32Array(SPK);
spkGeo.setAttribute("position", new THREE.BufferAttribute(spkPos, 3));
const sparks = new THREE.Points(spkGeo, new THREE.PointsMaterial({ size: 0.09, map: dotTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: "#ffd27a" }));
sparks.visible = false; scene.add(sparks);
function burst(at, n = SPK) { sparks.visible = true; for (let i = 0; i < SPK; i++) { spkPos.set([at.x, at.y, at.z], i * 3); const v = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.2, Math.random() - 0.5).normalize().multiplyScalar(1.2 + Math.random() * 3); spkVel[i] = v; spkLife[i] = i < n ? 1 + Math.random() * 1.2 : 0; } spkGeo.attributes.position.needsUpdate = true; }

/* ---------- 立体(ボクセル) ---------- */
const obj = new THREE.Group(); obj.position.copy(P); scene.add(obj);
const MAXV = 256;
const boxGeo = new THREE.BoxGeometry(VS * 0.985, VS * 0.985, VS * 0.985);
const voxMat = new THREE.MeshStandardMaterial({ roughness: 0.32, metalness: 0.35 });
const vox = new THREE.InstancedMesh(boxGeo, voxMat, MAXV); vox.castShadow = true; vox.receiveShadow = true; obj.add(vox);
const qSol = new THREE.Quaternion().setFromRotationMatrix(basis);
const qMir = qSol.clone().multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI));
let V = [];   // {x,y,w, w0, col}
const tmpM = new THREE.Matrix4(), tmpV = new THREE.Vector3(), tmpQ = new THREE.Quaternion(), one = new THREE.Vector3(1, 1, 1), tmpC = new THREE.Color();
function writeVox() { for (let i = 0; i < V.length; i++) { const v = V[i]; tmpV.set(v.x * VS, v.y * VS, v.w * VS); tmpM.compose(tmpV, tmpQ.identity(), one.setScalar(v.s ?? 1)); vox.setMatrixAt(i, tmpM); vox.setColorAt(i, tmpC.set(v.col)); } vox.count = V.length; vox.instanceMatrix.needsUpdate = true; if (vox.instanceColor) vox.instanceColor.needsUpdate = true; }

/* ---------- 影の一致度(障子の上で比べる) ---------- */
const GR = 3, GW = 24 * GR, grid = new Uint8Array(GW * GW), targetCells = [];
function stamp(sx, sy, bit) { const cx = (sx + 12) * GR, cy = (sy + 12) * GR, r = 0.62 * GR; for (let y = Math.max(0, Math.floor(cy - r)); y <= Math.min(GW - 1, Math.ceil(cy + r)); y++) for (let x = Math.max(0, Math.floor(cx - r)); x <= Math.min(GW - 1, Math.ceil(cx + r)); x++) { const dx = x + 0.5 - cx, dy = y + 0.5 - cy; if (dx * dx + dy * dy <= r * r) grid[y * GW + x] |= bit; } }
let targetMask = null;
function buildTarget() { const g = new Uint8Array(GW * GW); grid.fill(0); for (const v of V) stamp(v.x, v.y, 2); targetMask = grid.slice(); }
function iou(q) { grid.set(targetMask); for (const v of V) { tmpV.set(v.x, v.y, v.w).applyQuaternion(q); stamp(tmpV.dot(R), tmpV.dot(U), 1); } let a = 0, o = 0; for (let i = 0; i < grid.length; i++) { const g = grid[i]; if (g) { o++; if (g === 3) a++; } } return a / o; }

/* ---------- ステージ ---------- */
const G = { st: 0, stage: null, t0: 0, time: 0, running: false, won: false, hints: 0, oracleT: 0, turns: 0, sol: qSol, score: 0, winT: -1, faceQ: null, mag: false, vel: [0, 0, 0], lampAnim: null, attract: true };
function makeStage(i) {
  const st = STAGES[i], r = rng(st.seed); G.st = i; G.stage = st;
  const pal = [LACQUER[st.sp % 8], "#1a1412", "#c8962e", "#6b1d14"];
  V = maskOf(st).map(([x, y]) => { const w = Math.round((r() * 2 - 1) * st.depth); return { x: x - 7.5, y: 7.5 - y, w, w0: w, col: pal[r() < 0.45 ? 0 : r() < 0.5 ? 1 : r() < 0.6 ? 2 : 3], fin: LACQUER[st.sp % 8] }; }); V.forEach(v => v.col0 = v.col);
  writeVox(); buildTarget(); drawGhost(maskOf(st));
  G.sols = [qSol]; if (iou(qMir) > 0.985) G.sols.push(qMir);
  /* 最初の向きをずらす(段階ごとに回す軸をふやす) */
  let q0, tries = 0;
  do { const a = (r() < 0.5 ? -1 : 1) * (1.1 + r() * 1.5), b = st.tilt ? (r() < 0.5 ? -1 : 1) * st.tilt * (0.85 + r() * 0.3) : 0, c = st.twist ? (r() < 0.5 ? -1 : 1) * st.twist * (0.85 + r() * 0.3) : 0;
    q0 = new THREE.Quaternion().setFromAxisAngle(U, a).multiply(new THREE.Quaternion().setFromAxisAngle(R, b)).multiply(new THREE.Quaternion().setFromAxisAngle(N, c)).multiply(qSol);
  } while ((iou(q0) > 0.45 || !playable(q0, st)) && ++tries < 30);
  if (tries >= 30) q0 = new THREE.Quaternion().setFromAxisAngle(U, 1.4).multiply(new THREE.Quaternion().setFromAxisAngle(R, st.tilt)).multiply(qSol);
  obj.quaternion.copy(q0); obj.position.copy(P); obj.scale.setScalar(1); G.q0 = q0.clone();
  Object.assign(G, { won: false, running: false, hints: 0, turns: 0, time: 0, winT: -1, vel: [0, 0, 0], attract: false, resetAnim: null }); hideOracle(); tgtSet.clear(); for (const [x, y] of maskOf(st)) tgtSet.add(x + "," + y);
  paperMat.emissiveIntensity = 0; glowLight.intensity = 0;
  hud(); drawCard();
  if (i === 1) later(400, () => toast(TOUCH ? J("ここから、たてにも回します（上下になぞる）", "Now you can tilt too: swipe up or down") : J("ここから、たてにも回します（上下にドラッグ）", "Now you can tilt too: drag up or down"), 3200));
  if (i === 9) later(400, () => { toast(TOUCH ? J("ここから、ひねりも使います（2本指で回すか、右下の⟲⟳を長押し）", "Now you can twist too: use two fingers or hold ⟲⟳ (bottom right)") : J("ここから、ひねりも使います（右下の⟲⟳を長押しか、Q・E キー）", "Now you can twist too: hold ⟲⟳ (bottom right) or press Q / E"), 4200); pulseTwist(); });
}

/* 人のやり方(1本の軸で影が一番合う所まで回す、を軸を変えてくり返す)で解けるかを確かめる */
function playable(q0, st) {
  const axes = [U, st.tier >= 2 ? R : null, st.tier >= 3 ? N : null].filter(Boolean), q = q0.clone(), t = new THREE.Quaternion(), c = new THREE.Quaternion();
  /* 吸いつく条件(一致0.9超 か 角度0.19未満)と同じ基準で「よこだけで終わってしまわないか」も見る */
  const score = x => iou(x), near = x => G.sols.some(s => x.angleTo(s) < 0.19);
  for (let move = 0; move < 6; move++) { const ax = axes[move % axes.length]; let best = -1, bestQ = null;
    for (let a = -Math.PI; a <= Math.PI; a += 0.05) { c.copy(q).premultiply(t.setFromAxisAngle(ax, a)); const sc = score(c); if (sc > best) { best = sc; bestQ = c.clone(); } }
    q.copy(bestQ); if (best > 0.9 || near(q)) return move + 1 >= Math.min(2, axes.length); }
  return false;
}
/* ---------- 操作 ---------- */
const ptrs = new Map(); let lastTwist = null, drag = null;
canvas.addEventListener("pointerdown", e => { if (!S.started || G.won || paused()) return; canvas.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, { x: e.clientX, y: e.clientY }); if (!G.running) startClock(); drag = { moved: 0, axis: null, ax: 0, ay: 0 }; if (ptrs.size === 2) lastTwist = twistAngle(); audioInit(); });
canvas.addEventListener("pointermove", e => { const p = ptrs.get(e.pointerId); if (!p || G.won || paused()) return; let dx = e.clientX - p.x, dy = e.clientY - p.y; p.x = e.clientX; p.y = e.clientY;
  if (ptrs.size >= 2 && (G.stage.tier >= 3 || S.free)) { const a = twistAngle(); if (lastTwist !== null) rotate(N, -(a - lastTwist)); lastTwist = a; return; }
  const k = 0.0085; if (!drag) return; drag.moved += Math.abs(dx) + Math.abs(dy);
  /* ドラッグの向きを最初の動きで決めて、1回のドラッグでは1つの向きだけに回す */
  if (S.free) { rotate(U, dx * k); rotate(R, dy * k); G.vel = [dx * k, dy * k, 0]; return; }
  if (!drag.axis) { drag.ax += dx; drag.ay += dy; if (Math.abs(drag.ax) + Math.abs(drag.ay) < 10) return; drag.axis = G.stage.tier < 2 || Math.abs(drag.ax) >= Math.abs(drag.ay) ? "x" : "y"; dx = drag.ax; dy = drag.ay; }
  if (drag.axis === "x") { rotate(U, dx * k); G.vel = [dx * k, 0, 0]; } else { rotate(R, dy * k); G.vel = [0, dy * k, 0]; } });
function endPtr(e) { ptrs.delete(e.pointerId); if (ptrs.size < 2) lastTwist = null; if (!ptrs.size && drag) { if (drag.moved > 6) { G.turns++; tick(); } drag = null; } }
canvas.addEventListener("pointerup", endPtr); canvas.addEventListener("pointercancel", endPtr);
function twistAngle() { const [a, b] = [...ptrs.values()]; return Math.atan2(b.y - a.y, b.x - a.x); }
const qa = new THREE.Quaternion();
function axesNow() { return S.free ? [U, R, N] : [U, G.stage.tier >= 2 ? R : null, G.stage.tier >= 3 ? N : null].filter(Boolean); }
function rotate(axis, ang) { qa.setFromAxisAngle(axis, ang); obj.quaternion.premultiply(qa).normalize(); }
let twistHold = 0;
function resetTurn() { if (!S.started || G.won || paused()) return; obj.quaternion.copy(G.q0); G.vel = [0, 0, 0]; pluck(392, 0, 0.07, 0.6); pluck(293.66, 0.08, 0.07, 0.8); toast(J("はじめの向きに戻しました", "Back to the starting angle")); }
$("bReset").addEventListener("click", resetTurn);
$("stTier").addEventListener("click", () => { S.free = !S.free; hud(); sfxTap(); toast(S.free ? J("自由に回せます。ひねるのは右下の⟲⟳", "Free turn: twist with ⟲⟳ (bottom right)") : J("回す向きを決めて回します", "One direction at a time"), 2600); if (S.free) pulseTwist(); });
for (const [id, dir] of [["bTwL", 1], ["bTwR", -1]]) { const b = $(id); b.addEventListener("pointerdown", e => { e.preventDefault(); if (paused()) return; if (!G.running && !G.won) startClock(); twistHold = dir; audioInit(); }); for (const ev of ["pointerup", "pointerleave", "pointercancel"]) b.addEventListener(ev, () => { if (twistHold) { twistHold = 0; G.turns++; } }); }
const keys = new Set();
on(window, "keydown", e => { if (paused()) return; if (!S.started || G.won) { if (e.key === "Enter" && !$("title").hidden) startGame(); return; } const k = e.key.toLowerCase(); if (["arrowleft", "arrowright", "arrowup", "arrowdown", "a", "d", "w", "s", "q", "e"].includes(k)) { e.preventDefault(); if (!G.running) startClock(); keys.add(k); } if (k === "h") useHint(); if (k === "r") resetTurn(); });
on(window, "keyup", e => { const k = e.key.toLowerCase(); if (keys.delete(k) && !keys.size) G.turns++; });

function startClock() { G.running = true; G.t0 = performance.now() - G.time * 1000; }

/* ---------- ランプの色(見た目だけ・無料) ---------- */
const LIGHTS = [
  { id: "andon", j: "行灯", e: "Andon lamp", key: "#ffd29a", glow: "#ff9e3d", beam: "#ffb766", bg: "#0b0806", hemi: "#3c2c4a" },
  { id: "moon", j: "月あかり", e: "Moonlight", key: "#cfe0ff", glow: "#8fb4ff", beam: "#9cc0ff", bg: "#05070d", hemi: "#1c2a4a" },
  { id: "beni", j: "紅", e: "Crimson", key: "#ff9c8a", glow: "#ff4a3a", beam: "#ff6a55", bg: "#0d0505", hemi: "#4a1c24" },
  { id: "hotaru", j: "蛍", e: "Firefly", key: "#d8ffb0", glow: "#9dff5a", beam: "#b6ff7a", bg: "#050a05", hemi: "#1f3a22" } ];
let lightNo = 0;
function setLight(i) { lightNo = i; const L = LIGHTS[i]; key.color.set(L.key); andonBody.material.color.set(L.key); andonBody.material.emissive.set(L.glow); beamMat.uniforms.uCol.value.set(L.beam);
  scene.background.set(L.bg); scene.fog.color.set(L.bg); hemi.color.set(L.hemi);  paperMat.emissive.set(L.glow); backMat.uniforms.uCol.value.set(L.glow);
  root.querySelectorAll("#lights button").forEach((b, k) => b.setAttribute("aria-pressed", String(k === i))); $("bLight").style.setProperty("--lc", L.glow); }
$("bLight").addEventListener("click", () => { const box = $("lights"); box.hidden = !box.hidden; sfxTap(); });
LIGHTS.forEach((L, i) => { const b = document.createElement("button"); b.type = "button"; b.style.setProperty("--lc", L.glow); b.innerHTML = `<i></i><span data-j="${L.j}" data-e="${L.e}">${L.j}</span>`; b.addEventListener("click", () => { setLight(i); $("lights").hidden = true; pluck(YO[i + 3], 0, 0.08, 0.8); }); $("lights").appendChild(b); });

/* ---------- ヒント = おみくじ(1回 1 RF・SDK のチャンスゲーム) ----------
   買う(buy) → 引く(play) → 結果(settle)。紙には「いまから何手、どう回すと正解に近づくか」を書く。
   大吉 3手・中吉 2手・小吉 1手・凶 はじめの向きに戻る。大吉はお代 1 RF が返る(RF の画面で受け取る)。
   紙が消えたあとも、お告げは画面の左上に 30 秒残る。 */
const ORACLE_SECS = 30;
const LUCK = [{ j: "大吉", e: "Great Luck", steps: 3 }, { j: "中吉", e: "Good Luck", steps: 2 }, { j: "小吉", e: "Small Luck", steps: 1 }, { j: "凶", e: "Bad Luck", steps: 0 }];
const lname = i => J(LUCK[i]?.j || "?", LUCK[i]?.e || "?");
async function refresh() { if (!ECON.client) return null; const s = await ECON.client.read(); ECON.snap = s; try { ECON.canBuy = await ECON.client.canBuy(1n); } catch (e) { ECON.canBuy = false; } econUi(); return s; }
async function act(work, after) {
  if (ECON.busy || !ECON.client) return; ECON.busy = true; ECON.err = ""; econUi();
  try { await work(); await refresh(); if (after) after(); }
  catch (e) { ECON.err = e instanceof Error ? e.message : J("うまくいきませんでした", "Something went wrong"); toast(J("取り消しました", "Canceled"), 2200); await refresh().catch(() => {}); }
  finally { ECON.busy = false; econUi(); if (!$("shop").hidden) shopPanel(); }
}
const pendingPlay = () => ECON.snap ? ECON.snap.plays.find(p => p.outcomeId === null) : null;
/* お告げを作る: いま回せる向きだけで、正解に一番近づく回し方を1手ずつ選ぶ */
function oracleSteps(n) {
  const axes = axesNow(), tgt = nearestSol(), q = obj.quaternion.clone(), t = new THREE.Quaternion(), c = new THREE.Quaternion(), out = [];
  for (let k = 0; k < n; k++) {
    const base = q.angleTo(tgt); let best = null;
    for (const ax of axes) for (let a = -Math.PI; a <= Math.PI + 1e-6; a += Math.PI / 36) { c.copy(q).premultiply(t.setFromAxisAngle(ax, a)); const d = c.angleTo(tgt); if (!best || d < best.d) best = { ax, a, d }; }
    if (!best || base - best.d < 0.03 || Math.abs(best.a) < 0.06) break;
    q.premultiply(t.setFromAxisAngle(best.ax, best.a)); out.push(best);
    if (best.d < 0.19) { out.push({ done: true }); break; }
  }
  return out.map(s => ({ t: stepText(s), done: !!s.done }));
}
function stepText(s) {
  if (s.done) return J("これで影が合う", "…and the shadow fits");
  const deg = Math.abs(s.a) * 180 / Math.PI, amt = deg < 22 ? J("少し", "a little") : deg < 55 ? J("ぐっと", "a fair bit") : deg < 120 ? J("大きく（4分の1回転ほど）", "about a quarter turn") : J("ぐるっと（半回転ほど）", "about half a turn");
  if (s.ax === U) return s.a > 0 ? J(`右へ${amt}回す`, `Turn right ${amt}`) : J(`左へ${amt}回す`, `Turn left ${amt}`);
  if (s.ax === R) return s.a > 0 ? J(`下へ${amt}回す`, `Tilt down ${amt}`) : J(`上へ${amt}回す`, `Tilt up ${amt}`);
  return s.a > 0 ? J(`⟲ 左へ${amt}ひねる`, `⟲ Twist left ${amt}`) : J(`⟳ 右へ${amt}ひねる`, `⟳ Twist right ${amt}`);
}
function useHint() {
  if (G.won || !S.started || paused() || ECON.busy) return;
  audioInit();
  if (!ECON.client) { toast(J("この画面ではおみくじを引けません", "Omikuji is not available here"), 2200); return; }
  if (!ECON.snap) { refresh().catch(() => {}); return; }
  const s = ECON.snap;
  if (!pendingPlay() && s.consumables === 0n && !ECON.canBuy) { shopPanel(); return; }
  if (!pendingPlay() && !G.omiOk) { confirmPanel(); return; }
  G.omiOk = false;
  let result = null;
  act(async () => {
    let play = pendingPlay();
    if (!play) { if (ECON.snap.consumables === 0n) await ECON.client.buy(1n); play = (await ECON.client.play(1n))[0]; }
    result = await ECON.client.settle(play.id);
  }, () => {
    if (!result || !result.outcomeId) return;
    const i = result.outcomeId - 1, steps = LUCK[i] ? oracleSteps(LUCK[i].steps) : [];
    G.hints++; hud();
    omikuji(i, Number(result.id), steps, () => {
      if (G.won || !S.started) return;
      if (!G.running) startClock();
      if (i === 3) { G.resetAnim = { from: obj.quaternion.clone(), t: 0 }; G.vel = [0, 0, 0]; }
      showOracle(i, Number(result.id), steps);
    });
  });
}
function showOracle(i, no, steps) {
  const el = $("oracle"); if (!el) return;
  const lines = i === 3 ? [{ t: J("はじめの向きに戻しました", "Back to the starting angle") }] : steps.length ? steps : [{ t: J("もう、ほとんど合っている", "Almost there"), done: true }];
  el.innerHTML = `<div class="oHead"><b>${lname(i)}</b><span>${J(`おみくじ 第${KAN(((no * 37) % 98) + 1)}番のお告げ`, `Omikuji No. ${((no * 37) % 98) + 1}`)}</span></div><ol>${lines.map((l, k) => `<li class="${l.done ? "done" : ""}"><i>${l.done ? "◎" : i === 3 ? "・" : J("一二三四"[k] || k + 1, String(k + 1))}</i>${l.t}</li>`).join("")}</ol><div class="oBar"><i id="oracleBar"></i></div>`;
  el.className = i === 3 ? "kyo" : ""; el.hidden = false; G.oracleT = ORACLE_SECS;
}
function hideOracle() { const el = $("oracle"); if (el) el.hidden = true; G.oracleT = 0; }
function econUi() {
  const s = ECON.snap, pre = !ECON.client || ECON.client.mode !== "chain";
  $("rf").textContent = s ? `${fmtRF(s.rfBalance)} RF${pre ? J("（仮）", " (sim)") : ""}` : "— RF";
  const kept = s && ECON.client ? s.inventory.reduce((a, n, k) => a + (ECON.client.definition.outcomes[k]?.reward > 0n ? n : 0n), 0n) : 0n;
  $("lanternCnt").textContent = String(kept); $("lanternCnt").hidden = kept === 0n;
  $("hintSub").textContent = pendingPlay() ? J("引いたおみくじを開く", "Open your omikuji") : J("1回 1 RF・次の手を教えてくれる", "1 RF · tells you the next moves");
  if (G.stage) $("bHint").disabled = G.won || ECON.busy || !S.started;
}
/* 引く前の確認(ゲームの中の確認。本番ではこのあと公式の確認画面も出る) */
function confirmPanel() {
  const box = $("shopBox"), s = ECON.snap, def = ECON.client.definition, pre = ECON.client.mode !== "chain";
  const after = s.consumables > 0n ? s.rfBalance : s.rfBalance - def.price;
  const what = [J("次の3手＋お代が返る", "next 3 moves + refund"), J("次の2手", "next 2 moves"), J("次の1手", "next move"), J("はじめの向きに戻る", "back to the starting angle")];
  const rows = def.outcomes.map((o, i) => `<tr><td><b>${lname(i)}</b></td><td>${(o.chanceBps / 100).toFixed(0)}%</td><td>${what[i] || ""}</td></tr>`).join("");
  $("shop").hidden = false;
  box.innerHTML = `<h2>${J("おみくじを引きますか？", "Draw an omikuji?")} ${pre ? `<small>${J("RF はすべて仮（プレビュー）", "All RF is simulated (preview)")}</small>` : ""}</h2>
    <div class="bal"><span>${J("お代", "Price")}</span><b>${fmtRF(def.price)} RF</b><span>${J("フレンドの RF", "Friend's RF")}</span><b>${fmtRF(s.rfBalance)} → ${fmtRF(after)} RF</b></div>
    <table class="odds"><thead><tr><th>${J("結果", "Result")}</th><th>${J("確率", "Chance")}</th><th>${J("中身", "What it does")}</th></tr></thead><tbody>${rows}</tbody></table>
    <p class="dim">${J("引くと、この面は★3になりません。", "Drawing one rules out ★★★ on this stage.")}${opts.trial ? "" : " " + J("このあと、公式の確認画面（英語）も出ます。", "The official confirmation appears next.")}</p>
    <div class="row"><button type="button" class="btn gold" data-act="omiGo">${J("引く", "Draw")}</button><button type="button" class="btn" data-act="close">${J("やめる", "Cancel")}</button></div>`;
  box.querySelector('[data-act="omiGo"]').focus();
}
/* おみくじの画面(RF の札をさわると開く): 確率・お代・大吉の返金の受け取り */
function shopPanel() {
  const box = $("shopBox"), s = ECON.snap, def = ECON.client ? ECON.client.definition : null, pre = !ECON.client || ECON.client.mode !== "chain";
  $("shop").hidden = false;
  const head = `<h2>${J("おみくじ", "Omikuji")} <small>${pre ? J("RF はすべて仮（プレビュー）", "All RF is simulated (preview)") : J("本物の RF", "Live RF")}</small></h2>`;
  if (!def) { box.innerHTML = `${head}<p>${J("この画面では RF を使えません。", "RF is not available here.")}</p><div class="row"><button type="button" class="btn" data-act="close">${J("とじる", "Close")}</button></div>`; return; }
  if (!s) { box.innerHTML = `${head}<p>${J("読み込み中…", "Loading…")}</p>`; refresh().then(shopPanel, () => { box.innerHTML = `${head}<p class="err">${J("読み込めませんでした", "Could not load")}</p><div class="row"><button type="button" class="btn" data-act="retry">${J("もう一度", "Retry")}</button><button type="button" class="btn" data-act="close">${J("とじる", "Close")}</button></div>`; }); return; }
  const what = [J("次の3手を教えてくれる", "shows the next 3 moves"), J("次の2手を教えてくれる", "shows the next 2 moves"), J("次の1手を教えてくれる", "shows the next move"), J("はじめの向きに戻される", "resets to the starting angle")];
  const rows = def.outcomes.map((o, i) => `<tr><td><b>${lname(i)}</b></td><td>${(o.chanceBps / 100).toFixed(0)}%</td><td>${what[i] || ""}${o.reward > 0n ? J(`・お代 ${fmtRF(o.reward)} RF が返る`, ` · ${fmtRF(o.reward)} RF back`) : ""}</td></tr>`).join("");
  const kept = def.outcomes.map((o, i) => ({ o, i, n: s.inventory[i] || 0n })).filter(x => x.n > 0n && x.o.reward > 0n);
  const keptHtml = kept.length ? kept.map(({ o, i, n }) => `<li><span>${J(`${lname(i)}の返金`, `${lname(i)} refund`)} ×${n}</span><button type="button" class="btn sm" data-act="redeem" data-i="${i}" ${ECON.busy ? "disabled" : ""}>${J(`受け取る +${fmtRF(o.reward)} RF`, `Collect +${fmtRF(o.reward)} RF`)}</button></li>`).join("") : `<li class="dim">${J("受け取れる返金はありません", "Nothing to collect")}</li>`;
  const pend = pendingPlay();
  box.innerHTML = `${head}
    <p class="lead2">${J("「おみくじ」ボタンを押すと、1回 1 RF で引けます。引いたおみくじには、いまの向きから正解に近づく回し方が書いてあります。", "Press the Omikuji button to draw one for 1 RF. The slip shows how to turn the pieces from where they are now to get closer to the answer.")}</p>
    <div class="bal"><span>${J("フレンドの RF", "Friend's RF")}</span><b>${fmtRF(s.rfBalance)} RF</b><span>${J("お代", "Price")}</span><b>${fmtRF(def.price)} RF</b></div>
    ${pend ? `<div class="row"><button type="button" class="btn gold" data-act="draw" ${ECON.busy ? "disabled" : ""}>${J("引いたおみくじを開く", "Open your omikuji")}</button></div>` : ""}
    <table class="odds"><thead><tr><th>${J("結果", "Result")}</th><th>${J("確率", "Chance")}</th><th>${J("中身", "What it does")}</th></tr></thead><tbody>${rows}</tbody></table>
    <p class="dim">${J("うでまえで確率は変わりません。おみくじを引くと、その面は★3になりません。", "Skill never changes the odds. Drawing one rules out ★★★ on that stage.")}</p>
    <h3>${J("大吉の返金", "Great Luck refunds")}</h3><ul class="kept">${keptHtml}</ul>
    ${ECON.err ? `<p class="err">${ECON.err}</p>` : ""}
    <div class="row"><button type="button" class="btn" data-act="close">${J("とじる", "Close")}</button></div>`;
}
on(root, "click", e => { const b = e.target.closest && e.target.closest("[data-act]"); if (!b || !root.contains(b)) return; const a = b.dataset.act;
  if (a === "close") { $("shop").hidden = true; ECON.err = ""; }
  else if (a === "retry") shopPanel();
  else if (a === "draw") { $("shop").hidden = true; useHint(); }
  else if (a === "omiGo") { $("shop").hidden = true; G.omiOk = true; useHint(); }
  else if (a === "redeem") { const i = +b.dataset.i; act(() => ECON.client.redeem(i + 1, 1n), () => { pluck(784, 0, 0.08, 0.8); toast(J("返金を受け取りました", "Refund collected"), 2000); }); } });
/* ---------- おみくじの演出: みくじ筒を振って棒を出し、番号の紙を開く ----------
   見た目だけの演出。結果は SDK の settle で決まった outcome をそのまま見せる */
const KAN = n => { const d = "〇一二三四五六七八九"; if (n < 10) return d[n]; const t = Math.floor(n / 10), o = n % 10; return (t > 1 ? d[t] : "") + "十" + (o ? d[o] : ""); };
function omikuji(i, playId, steps, done) {
  const el = $("omi"), lang = S.lang === "ja" ? "ja" : "en", no = ((playId * 37) % 98) + 1, o = ECON.client.definition.outcomes[i];
  const fl = CATS[lang].map((c, k) => [c, FORTUNE[lang][i][k][(no + k * 3) % 4]]);
  const fort = `<div class="pSep"></div><ul class="pFort">${fl.map(([c, t]) => `<li><b>${c}</b>${t}</li>`).join("")}</ul>`;
  const body = i === 3 ? `<p class="pKyo">${J("はじめの向きから、やり直すべし", "Begin again from the starting angle")}</p>`
    : `<div class="pHead">${J("お告げ", "The oracle says")}</div><ol class="pSteps">${(steps.length ? steps : [{ t: J("もう、ほとんど合っている", "Almost there"), done: true }]).map((l, k) => l.done ? `<li class="done"><i>◎</i>${l.t}</li>` : `<li><i>${J("一二三四"[k] || "", String(k + 1) + ".")}</i>${l.t}</li>`).join("")}</ol>`;
  el.className = "omi" + (lang === "en" ? " en" : "") + (i === 0 ? " great" : i === 1 ? " good" : i === 3 ? " kyo" : "") + (RM ? " rm" : "");
  el.innerHTML = `<div class="omiBg"></div><div class="omiStage">
    <div class="tsBox"><div class="tsutsuWrap"><div class="stick"></div><div class="tsutsu"><svg viewBox="0 0 120 250" aria-hidden="true"><defs><linearGradient id="wd" x1="0" x2="1"><stop offset="0" stop-color="#5a3518"/><stop offset=".22" stop-color="#9a6634"/><stop offset=".5" stop-color="#c58d52"/><stop offset=".78" stop-color="#9a6634"/><stop offset="1" stop-color="#4a2a12"/></linearGradient></defs>
      <path d="M8 20 L30 8 H90 L112 20 V236 L90 246 H30 L8 236 Z" fill="url(#wd)" stroke="#2a170a" stroke-width="3"/>
      <path d="M30 8 V246 M90 8 V246" stroke="#2a170a" stroke-opacity=".35" stroke-width="2"/>
      <rect x="8" y="34" width="104" height="9" fill="#2a170a" opacity=".55"/><rect x="8" y="212" width="104" height="9" fill="#2a170a" opacity=".55"/>
      <ellipse cx="60" cy="14" rx="9" ry="4" fill="#140b04"/></svg>
      <span class="tsLabel">御神籤</span></div></div>
      <div class="stickNo">${lang === "ja" ? KAN(no) + "番" : "No. " + no}</div></div>
    <div class="paperWrap"><div class="paper"><div class="pIn">
      <div class="pNo">${lang === "ja" ? `第${KAN(no)}番` : `No. ${no}`}</div>
      <div class="pLuck">${LUCK[i] ? (lang === "ja" ? LUCK[i].j : LUCK[i].e) : ""}</div>
      <div class="pMain">${body}</div>${fort}
      ${o.reward > 0n ? `<div class="pPrize">${J(`お代 ${fmtRF(o.reward)} RF をお返しします`, `${fmtRF(o.reward)} RF refunded`)}</div>` : ""}
    </div></div></div></div>
    <p class="omiTap">${J("タップでとじる（お告げは左上に30秒残ります）", "Tap to close (the message stays at the top left for 30 s)")}</p>`;
  el.hidden = false; S.omi = true; applyPause();
  let phase = 0, closed = false;
  /* 音: 筒のカラカラ → 棒の「コン」→ 紙 → 鈴(大吉は琴の音、凶は低い音) */
  if (!RM) { for (let k = 0; k < 13; k++) clack(0.25 + k * 0.095 + Math.random() * 0.03, 850 + Math.random() * 500, 0.05);
    clack(1.95, 420, 0.12); for (let k = 0; k < 4; k++) pluck(YO[k] * 2, 2.8 + k * 0.05, 0.03, 0.4); }
  bell(RM ? 0.1 : 3.45, i);
  const finish = () => { el.getAnimations({ subtree: true }).forEach(a => { try { a.finish(); } catch (e) {} }); phase = 1; };
  later(RM ? 50 : 4000, () => { phase = 1; });
  const onTap = () => { if (closed) return; if (!phase) { finish(); return; } closed = true; el.classList.add("out"); sfxTap();
    later(RM ? 10 : 520, () => { el.hidden = true; el.innerHTML = ""; S.omi = false; applyPause(); econUi(); done(); }); };
  el.onclick = onTap; el.onkeydown = e => { if (e.key === "Enter" || e.key === " " || e.key === "Escape") { e.preventDefault(); onTap(); } };
  el.tabIndex = -1; el.focus({ preventScroll: true });
}
function clack(t, f, v) { if (!AC) return; const o = AC.createOscillator(), g = AC.createGain(), fl = AC.createBiquadFilter(); o.type = "triangle"; const s = AC.currentTime + t; o.frequency.setValueAtTime(f, s); o.frequency.exponentialRampToValueAtTime(f * 0.6, s + 0.04); fl.type = "bandpass"; fl.frequency.value = f; fl.Q.value = 4;
  g.gain.setValueAtTime(0, s); g.gain.linearRampToValueAtTime(v, s + 0.002); g.gain.exponentialRampToValueAtTime(0.0005, s + 0.07); o.connect(fl); fl.connect(g); g.connect(master); o.start(s); o.stop(s + 0.1); }
function bell(t, i) { if (!AC) return; const s = AC.currentTime + t, low = i === 3;
  for (const [f, v, d] of low ? [[392, 0.08, 1.8], [196, 0.05, 1.6]] : [[1318.5, 0.07, 2.4], [2637, 0.025, 1.6], [3951, 0.012, 0.9]]) { const o = AC.createOscillator(), g = AC.createGain(); o.type = "sine"; o.frequency.value = f; g.gain.setValueAtTime(0, s); g.gain.linearRampToValueAtTime(v, s + 0.01); g.gain.exponentialRampToValueAtTime(0.0004, s + d); o.connect(g); g.connect(master); o.start(s); o.stop(s + d + 0.05); }
  if (i === 0) [0, 2, 4, 5, 7].forEach((k, j) => pluck(YO[k] * 2, t + 0.25 + j * 0.09, 0.07, 1.4));
  else if (i === 1) [0, 2, 4].forEach((k, j) => pluck(YO[k] * 2, t + 0.25 + j * 0.1, 0.05, 1.1)); }
const tgtSet = new Set();
function hintColors() { let on = 0; for (let i = 0; i < V.length; i++) { const v = V[i]; tmpV.set(v.x, v.y, v.w).applyQuaternion(obj.quaternion); const px = Math.round(tmpV.dot(R) + 7.5), py = Math.round(7.5 - tmpV.dot(U));
    const ok = tgtSet.has(px + "," + py); if (ok) on++; v.hint = ok ? 1 : -1; } return on; }
function nearestSol() { let best = G.sols[0], bd = 9; for (const s of G.sols) { const d = obj.quaternion.angleTo(s); if (d < bd) { bd = d; best = s; } } return best; }

/* ---------- クリア ---------- */
function win() {
  if (G.won) return;
  G.won = true; G.resetAnim = null; hideOracle(); for (const v of V) { v.s = 1; v.col = v.col0; } writeVox(); G.running = false; G.winT = 0; G.winFrom = obj.quaternion.clone(); G.winTo = nearestSol();
  const camDir = camera.position.clone().sub(P).normalize(); const up = new THREE.Vector3(0, 1, 0); const zx = new THREE.Vector3().crossVectors(up, camDir).normalize(); const zy = new THREE.Vector3().crossVectors(camDir, zx);
  G.faceQ = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().makeBasis(zx, zy, camDir));
  const st = G.stage, t = G.time; const stars = 1 + (t <= st.par ? 1 : 0) + (t <= st.par && !G.hints ? 1 : 0);
  G.result = { stars, time: t }; S.stars[G.st] = Math.max(S.stars[G.st] || 0, stars);
  /* 影から出てくるのは、いつも「あなたのフレンド」。形を組みかえる準備 */
  const key = v => -v.y * 100 + v.x; const from = V.slice().sort((a, b) => key(a) - key(b));
  if (!ME.mask) { G.morph = null; sfxWin(); drawGhost(maskOf(st)); hud(); return; }
  const to = ME.mask.map(([x, y]) => ({ x: x - 7.5, y: 7.5 - y })).sort((a, b) => key(a) - key(b));
  const n = Math.max(from.length, to.length), nv = [];
  for (let i = 0; i < n; i++) { const f = from[Math.min(i, from.length - 1)], t2 = to[i];
    nv.push({ x: f.x, y: f.y, w: f.w0, w0: f.w0, fx: f.x, fy: f.y, tx: t2 ? t2.x : f.x, ty: t2 ? t2.y : f.y, s: 1, s0: i < from.length ? 1 : 0, s1: t2 ? 1 : 0, col: f.col, col0: f.col, fin: f.fin }); }
  G.morph = nv;
  sfxWin(); drawGhost(maskOf(st)); hud();
}
function showClear() {
  const { stars, time } = G.result; const last = G.st >= STAGES.length - 1;
  $("clearStars").textContent = "★".repeat(stars) + "☆".repeat(3 - stars);
  $("clearInfo").textContent = J(`${time.toFixed(1)}秒 ・ ${G.turns}回まわした${G.hints ? ` ・ おみくじ${G.hints}回` : ""}`, `${time.toFixed(1)} s · ${G.turns} turns${G.hints ? ` · ${G.hints} omikuji` : ""}`);
  $("clearHint").textContent = stars < 3 ? J(`★3の条件：${G.stage.par}秒以内・おみくじなし`, `★★★: within ${G.stage.par} s, no omikuji`) : J("かんぺき！", "Perfect!");
  $("bNext").textContent = last ? J("はじめから", "Play again") : J("次の影へ", "Next shadow");
  $("clearTitle").textContent = !ME.mask ? J("影がぴたりと重なった。", "The shadow fits perfectly.") : last && G.stage.me ? J(`最後の影は、あなたのフレンド ${ME.id} でした。`, `The last shadow was your own Friend ${ME.id}.`) : J(`影から、あなたのフレンド ${ME.id} が現れた。`, `Your Friend ${ME.id} steps out of the shadow.`);
  $("clear").hidden = false; $("bNext").focus();
}
$("bNext").addEventListener("click", () => { $("clear").hidden = true; makeStage(G.st >= STAGES.length - 1 ? 0 : G.st + 1); sfxTap(); });
$("bRetry").addEventListener("click", () => { $("clear").hidden = true; makeStage(G.st); sfxTap(); });

/* ---------- HUD ---------- */
function hud() { updateHow();
  $("stNo").textContent = `${G.st + 1} / ${STAGES.length}`;
  $("stTierTxt").textContent = S.free ? J("自由に回す", "Free turn") : [J("よこに回す", "Turn left/right"), J("たて・よこに回す", "Turn & tilt"), J("たて・よこ・ひねる", "Turn, tilt & twist")][G.stage.tier - 1];
  $("stTier").setAttribute("aria-pressed", String(S.free)); $("stTier").classList.toggle("on", S.free);
  econUi();
  $("twist").hidden = G.stage.tier < 3 && !S.free; $("bReset").disabled = G.won;
  $("cardLab").textContent = meStage(G.stage) ? J("お題：あなた", "Goal: you") : J("お題", "Goal");
}
function drawCard() {
  const c = $("card"), x = c.getContext("2d"), n = c.width, m = maskOf(G.stage), s = n / 20;
  x.clearRect(0, 0, n, n); x.fillStyle = "#1b120c"; for (const [a, b] of m) x.fillRect((a + 2) * s, (b + 2) * s, s + 0.5, s + 0.5);
}
let toastT = 0; function toast(t, ms = 1800) { const el = $("toast"); el.textContent = t; el.classList.add("on"); clearTimeout(toastT); timers.delete(toastT); toastT = later(ms, () => el.classList.remove("on")); }
/* 画面下の操作説明: 今の回し方と、マウスかタッチかで出し分ける */
const TOUCH = matchMedia("(pointer:coarse)").matches;
function updateHow() { if (!G.stage) return; const el = $("how"), ja = S.lang === "ja";
  /* 新しい操作が出る面(1面・2面・10面)と自由回転の時だけ、ボタン列の左に出す */
  const newOp = S.free ? "free" : G.st === 0 ? "yoko" : G.st === 1 ? "tate" : G.st === 9 ? "hineru" : null;
  el.hidden = !newOp || !S.started; if (el.hidden) return;
  const tier = S.free ? 0 : G.stage.tier, rows = [];
  const row = (key, jl, jv, el_, ev) => rows.push(`<span class="${key === newOp ? "new" : ""}"><b>${ja ? jl : el_}</b>${ja ? jv : ev}</span>`);
  if (tier === 0) row("free", "回す", TOUCH ? "好きな向きになぞる" : "好きな向きにドラッグ", "Turn", TOUCH ? "swipe any way" : "drag any way");
  else { row("yoko", "よこ", TOUCH ? "左右になぞる" : "左右にドラッグ", "Turn", TOUCH ? "swipe left/right" : "drag left/right");
    if (tier >= 2) row("tate", "たて", TOUCH ? "上下になぞる" : "上下にドラッグ", "Tilt", TOUCH ? "swipe up/down" : "drag up/down"); }
  if (tier === 0 || tier === 3) row("hineru", "ひねる", TOUCH ? "2本指か ⟲⟳ 長押し" : "⟲⟳ 長押しか Q・E キー", "Twist", TOUCH ? "two fingers or hold ⟲⟳" : "hold ⟲⟳ or Q / E");
  row("", "もどす", TOUCH ? "↺" : "↺ か R キー", "Reset", TOUCH ? "↺" : "↺ or R");
  el.innerHTML = rows.join(""); }
function pulseTwist() { const el = $("twist"); el.classList.remove("pulse"); void el.offsetWidth; el.classList.add("pulse"); }
function applyLang() {
  document.documentElement.lang = S.lang;
  root.querySelectorAll("[data-j]").forEach(el => { el.textContent = S.lang === "ja" ? el.dataset.j : el.dataset.e; });
  $("bLang").textContent = S.lang === "ja" ? "EN" : "日本語"; hud();
}
$("bLang").addEventListener("click", () => { S.lang = S.lang === "ja" ? "en" : "ja"; applyLang(); });
$("bMute").addEventListener("click", () => { S.mute = !S.mute; $("bMute").setAttribute("aria-pressed", String(!S.mute)); $("bMute").textContent = S.mute ? "♪ OFF" : "♪ ON"; if (AC) master.gain.value = S.mute ? 0 : 0.8; });
$("bHint").addEventListener("click", useHint);
$("rf").addEventListener("click", () => { sfxTap(); shopPanel(); });
$("bStart").addEventListener("click", startGame);
function startGame() { S.started = true; $("title").hidden = true; $("hud").hidden = false; audioInit(); makeStage(0); sfxTap(); }

/* ---------- 音(Web Audio・その場で合成) ---------- */
let AC = null, master = null;
function audioInit() { if (AC) return; try { AC = new AudioContext(); master = AC.createGain(); master.gain.value = S.mute ? 0 : 0.8; master.connect(AC.destination); drone(); } catch (e) { AC = null; } }
function pluck(f, t = 0, v = 0.18, dur = 1.2) { if (!AC) return; const o = AC.createOscillator(), g = AC.createGain(), fl = AC.createBiquadFilter(); o.type = "triangle"; o.frequency.value = f; fl.type = "lowpass"; fl.frequency.value = f * 5;
  const s = AC.currentTime + t; g.gain.setValueAtTime(0, s); g.gain.linearRampToValueAtTime(v, s + 0.005); g.gain.exponentialRampToValueAtTime(0.0008, s + dur); o.connect(fl); fl.connect(g); g.connect(master); o.start(s); o.stop(s + dur + 0.05); }
function thump(t = 0) { if (!AC) return; const o = AC.createOscillator(), g = AC.createGain(); o.type = "sine"; const s = AC.currentTime + t; o.frequency.setValueAtTime(120, s); o.frequency.exponentialRampToValueAtTime(42, s + 0.35); g.gain.setValueAtTime(0.6, s); g.gain.exponentialRampToValueAtTime(0.001, s + 0.6); o.connect(g); g.connect(master); o.start(s); o.stop(s + 0.65); }
/* BGM: 都節音階(レ・ミ♭・ソ・ラ・シ♭)の琴と尺八。ノイズは使わない */
let bgm = null;
function drone() {
  const bus = AC.createGain(); bus.gain.value = 0.6; bus.connect(master);
  const dly = AC.createDelay(1.5); dly.delayTime.value = 0.55; const fb = AC.createGain(); fb.gain.value = 0.3; const wet = AC.createGain(); wet.gain.value = 0.3;
  const lp = AC.createBiquadFilter(); lp.type = "lowpass"; lp.frequency.value = 2200;
  bus.connect(dly); dly.connect(lp); lp.connect(fb); fb.connect(dly); lp.connect(wet); wet.connect(master);
  bgm = { bus, next: AC.currentTime + 0.3, step: 0 };
  intervals.push(setInterval(schedule, 120));
}
const NT = { D3: 146.83, A3: 220, Bb3: 233.08, D4: 293.66, Eb4: 311.13, G4: 392, A4: 440, Bb4: 466.16, D5: 587.33, Eb5: 622.25, G5: 783.99 };
/* 琴: はじいた直後に少し高く、すぐ落ちつく */
function koto(f, t, v, len = 1.8) { const o = AC.createOscillator(), o2 = AC.createOscillator(), g = AC.createGain(), fl = AC.createBiquadFilter(), g2 = AC.createGain();
  o.type = "triangle"; o2.type = "sine"; o.frequency.setValueAtTime(f * 1.012, t); o.frequency.exponentialRampToValueAtTime(f, t + 0.05); o2.frequency.value = f * 3.01; g2.gain.value = 0.12;
  fl.type = "lowpass"; fl.frequency.setValueAtTime(f * 9, t); fl.frequency.exponentialRampToValueAtTime(f * 1.6, t + 0.5);
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(v, t + 0.003); g.gain.exponentialRampToValueAtTime(0.0005, t + len);
  o.connect(fl); o2.connect(g2); g2.connect(fl); fl.connect(g); g.connect(bgm.bus); o.start(t); o2.start(t); o.stop(t + len + 0.05); o2.stop(t + len + 0.05); }
/* 尺八: 少し低めから息を入れるように立ち上がり、ゆれながら伸ばす(息の雑音は入れない) */
function shaku(f, t, len, v = 0.05) { const o = AC.createOscillator(), o2 = AC.createOscillator(), g = AC.createGain(), g2 = AC.createGain(), vib = AC.createOscillator(), vg = AC.createGain(), fl = AC.createBiquadFilter();
  o.type = "sine"; o2.type = "sine"; o.frequency.setValueAtTime(f * 0.975, t); o.frequency.linearRampToValueAtTime(f, t + 0.28); o2.frequency.setValueAtTime(f * 2 * 0.975, t); o2.frequency.linearRampToValueAtTime(f * 2, t + 0.28); g2.gain.value = 0.18;
  vib.frequency.value = 4.6; vg.gain.setValueAtTime(0, t); vg.gain.linearRampToValueAtTime(f * 0.006, t + len * 0.7); vib.connect(vg); vg.connect(o.frequency); vg.connect(o2.frequency);
  fl.type = "lowpass"; fl.frequency.value = 1800;
  g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(v, t + 0.22); g.gain.setValueAtTime(v, t + len * 0.75); g.gain.linearRampToValueAtTime(v * 0.6, t + len * 0.9); g.gain.linearRampToValueAtTime(0, t + len);
  o.connect(g); o2.connect(g2); g2.connect(g); g.connect(fl); fl.connect(bgm.bus); for (const x of [o, o2, vib]) { x.start(t); x.stop(t + len + 0.05); } }
/* 旋律(拍の長さつき)。null は休み */
const MELODY = [["A4", 2], ["Bb4", 1], ["A4", 1], ["G4", 3], [null, 1], ["Eb4", 2], ["D4", 2], ["Eb4", 1], ["G4", 1], ["A4", 2], ["D5", 3], ["Bb4", 1], ["A4", 2], ["G4", 2], ["A4", 6], [null, 2],
  ["G4", 2], ["A4", 1], ["Bb4", 1], ["D5", 2], ["Eb5", 2], ["D5", 3], ["Bb4", 1], ["A4", 4], ["G4", 2], ["Eb4", 2], ["D4", 4], [null, 8]];
const MEL_T = []; { let b = 0; for (const [n, l] of MELODY) { MEL_T.push([b, n, l]); b += l; } MEL_T.len = b; }
const KOTO = ["D3", "A3", "D4", "Eb4", "D4", "A3", "Bb3", "A3"];
function schedule() {
  if (!AC || !bgm) return; const beat = 60 / 66, half = beat / 2;
  while (bgm.next < AC.currentTime + 0.6) { const t = bgm.next, st = bgm.step, loopBeat = (st / 2) % (MEL_T.len * 2);
    /* 琴の伴奏: 8分音符で 1小節ずつ。2周目の後半は少し休む */
    const bar = Math.floor(st / 8); if (!(bar % 8 === 7 && st % 8 >= 4)) koto(NT[KOTO[st % 8]], t, st % 8 === 0 ? 0.075 : 0.05);
    if (st % 32 === 0) koto(NT.D3 / 2, t, 0.09, 3.2);
    /* 尺八: 1周目は休み、2周目から旋律 */
    if (st % 2 === 0 && loopBeat >= MEL_T.len) { const lb = loopBeat - MEL_T.len; for (const [b0, n, l] of MEL_T) if (b0 === lb && n) shaku(NT[n], t, l * beat * 0.98); }
    bgm.next += half; bgm.step++; }
}
const YO = [293.7, 329.6, 392, 440, 493.9, 587.3, 659.3, 784];   // 陽旋法ふう
function sfxTap() { pluck(587.3, 0, 0.1, 0.5); }
function sfxLamp() { const n = 4; for (let i = 0; i < n; i++) pluck(YO[i + 2] * 2, i * 0.07, 0.07, 0.9); }
function sfxWin() { thump(0); [0, 2, 4, 5, 7].forEach((k, i) => pluck(YO[k], 0.12 + i * 0.11, 0.16, 1.6)); pluck(YO[7] * 2, 0.8, 0.08, 2.2); }
let lastBand = 0; function sfxMatch(sc) { const band = Math.floor(sc * 10); if (band > lastBand && band >= 5) pluck(YO[Math.min(7, band - 3)], 0, 0.05, 0.4); lastBand = band; }

/* ---------- 画面サイズ ---------- */
function resize() { const w = innerWidth, h = innerHeight; renderer.setSize(w, h, false); camera.aspect = w / h;
  const port = w < h; camera.fov = port ? 52 : 34;
  /* 障子の正面から少し左に回りこんだ位置(立体と影が両方見える) */
  const dir = N.clone().applyAxisAngle(new THREE.Vector3(0, 1, 0), port ? -0.5 : -0.62); dir.y += 0.08;
  const dist = port ? 15.5 : 11.2;
  const look = SC.clone().lerp(P, port ? 0.5 : 0.42).add(new THREE.Vector3(0, port ? 0.75 : -0.15, 0));
  camera.position.copy(look).addScaledVector(dir.normalize(), dist); camera.lookAt(look); camera.updateProjectionMatrix(); G.look = look; }
on(window, "resize", resize); resize();

/* ---------- 障子の裏をゆっくりさまよう明かり ----------
   ふだんは気ままに漂う。回している間だけ、ほんの少し「回すと近づく向き」へ寄っていく */
const BACK_N = 3;
const backMat = new THREE.ShaderMaterial({ transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  uniforms: { uB: { value: Array.from({ length: BACK_N }, () => new THREE.Vector3()) }, uCol: { value: new THREE.Color("#ffb45c") }, uAmt: { value: 1 } },
  vertexShader: "varying vec2 vP; void main(){ vP=position.xy; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",
  fragmentShader: `uniform vec3 uB[${BACK_N}]; uniform vec3 uCol; uniform float uAmt; varying vec2 vP;
    void main(){ float v=0.; for(int i=0;i<${BACK_N};i++){ vec2 d=vP-uB[i].xy; v+=uB[i].z*(exp(-dot(d,d)*2.2)*.8+exp(-dot(d,d)*.5)*.25); } gl_FragColor=vec4(uCol*v*.3*uAmt,1.); }` });
const back = new THREE.Mesh(new THREE.PlaneGeometry(SW, SH), backMat); back.position.z = 0.006; screen.add(back);
const BL = Array.from({ length: BACK_N }, (_, i) => ({ x: (i - 1) * 1.6, y: (i % 2 ? 0.6 : -0.5), vx: 0, vy: 0, ph: i * 2.1, a: 1 - i * 0.25 }));
const STAR = { guide: 0, idle: 9, axis: null, sign: 0, recalc: 0 };
function bestTurn() { const axes = axesNow(); const tgt = nearestSol(), c = new THREE.Quaternion(), t = new THREE.Quaternion(); const base = obj.quaternion.angleTo(tgt);
  let best = { axis: null, sign: 0, gain: 0 }; for (const ax of axes) for (const sg of [1, -1]) { c.copy(obj.quaternion).premultiply(t.setFromAxisAngle(ax, sg * 0.1)); const g = base - c.angleTo(tgt); if (g > best.gain) best = { axis: ax, sign: sg, gain: g }; } return best; }
function updateBack(dt) {
  const operating = S.started && !G.won && !G.attract && (ptrs.size > 0 || keys.size > 0 || twistHold !== 0);
  STAR.idle = operating ? 0 : STAR.idle + dt;
  const canGuide = (operating || STAR.idle < 1.5) && !G.near && G.stage && !G.won;
  STAR.recalc -= dt; if (canGuide && STAR.recalc <= 0) { STAR.recalc = 0.4; const b = bestTurn(); STAR.axis = b.axis; STAR.sign = b.sign; }
  STAR.guide += ((canGuide && STAR.axis ? 1 : 0) - STAR.guide) * Math.min(1, dt * 0.8);   // ゆっくり切りかわる
  const g = STAR.guide, lim = [SW / 2 - 0.4, SH / 2 - 0.4];
  BL.forEach((b, i) => {
    /* 気ままな漂い(ゆっくり向きが変わる) */
    const ang = Math.sin(T * 0.11 + b.ph) * 2.2 + Math.sin(T * 0.047 + b.ph * 1.7) * 1.4;
    let tx = Math.cos(ang) * 0.22, ty = Math.sin(ang) * 0.16;
    /* 回している間だけ、ほんの少しだけ寄せる */
    if (g > 0.01 && STAR.axis) { let gx = 0, gy = 0;
      if (STAR.axis === U) gx = STAR.sign; else if (STAR.axis === R) gy = -STAR.sign; else { const r = Math.hypot(b.x, b.y) || 1; gx = -b.y / r * STAR.sign; gy = b.x / r * STAR.sign; }
      tx = tx * (1 - 0.45 * g) + gx * 0.26 * g; ty = ty * (1 - 0.45 * g) + gy * 0.2 * g; }
    b.vx += (tx - b.vx) * Math.min(1, dt * 0.6); b.vy += (ty - b.vy) * Math.min(1, dt * 0.6);
    b.x += b.vx * dt; b.y += b.vy * dt;
    /* 端まで行ったら反対の端へまわりこむ(ふっと消えて、ふっと出る) */
    let fade = 1; for (const [k, L] of [["x", lim[0]], ["y", lim[1]]]) { if (b[k] > L + 1.2) b[k] = -L - 1.2; if (b[k] < -L - 1.2) b[k] = L + 1.2; fade = Math.min(fade, Math.min(1, (L + 1.2 - Math.abs(b[k])) / 1.2)); }
    const flick = 1 + Math.sin(T * 1.7 + b.ph) * 0.08;
    backMat.uniforms.uB.value[i].set(b.x, b.y, b.a * fade * flick * (G.won ? 0.4 : 1)); });
}
/* ---------- 光のつぶ: 舞台いっぱいに漂い、ときどき一筆書きのように ス～ッ と流れる ---------- */
const cR = new THREE.Vector3(), cU = new THREE.Vector3(), cF = new THREE.Vector3();
const BOX = { x: 8, y: 4.6, z: 5 }, dLoc = new Float32Array(DUST * 3), dVel = new Float32Array(DUST * 3), inStroke = new Int16Array(DUST).fill(-1);
const strokeTrailPos = new Float32Array(DUST * 6), strokeTrailCol = new Float32Array(DUST * 6);
const stGeo = new THREE.BufferGeometry(); stGeo.setAttribute("position", new THREE.BufferAttribute(strokeTrailPos, 3)); stGeo.setAttribute("color", new THREE.BufferAttribute(strokeTrailCol, 3));
const stLines = new THREE.LineSegments(stGeo, new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
if (!RM) scene.add(stLines);
let strokes = [], nextStroke = 3;
{ const r = rng(29); for (let i = 0; i < DUST; i++) { dLoc[i * 3] = (r() * 2 - 1) * BOX.x; dLoc[i * 3 + 1] = (r() * 2 - 1) * BOX.y; dLoc[i * 3 + 2] = (r() * 2 - 1) * BOX.z; } }
/* 筆の運び: ゆるい弧を描く3次ベジェ。ゆっくり入って、中ほどで速く、ふっと抜ける */
function bez(a, b, c, d, t) { const u = 1 - t; return a * u * u * u + 3 * b * u * u * t + 3 * c * u * t * t + d * t * t * t; }
function startStroke() {
  const r = Math.random, M = 16 + Math.floor(r() * 10), sx = (r() < 0.5 ? -1 : 1), VX = 5.2, VY = 2.8, z = (r() * 2 - 1) * 1.5;
  const P0 = [-sx * VX * (0.6 + r() * 0.3), (r() * 2 - 1) * VY * 0.8, z], P3 = [sx * VX * (0.3 + r() * 0.6), (r() * 2 - 1) * VY * 0.8, z + (r() - 0.5) * 1.5];
  const P1 = [P0[0] + sx * (1.5 + r() * 2.5), P0[1] + (r() - 0.5) * 5, z], P2 = [P3[0] - sx * (1.5 + r() * 2.5), P3[1] + (r() - 0.5) * 5, z];
  const free = []; for (let i = 0; i < DUST; i++) if (inStroke[i] < 0) free.push(i);
  const ids = []; for (let k = 0; k < M && free.length; k++) ids.push(free.splice(Math.floor(r() * free.length), 1)[0]);
  const st = { P: [P0, P1, P2, P3], ids, t: 0, dur: 1.8 + r() * 1.0, lag: 0.03 };
  /* 選んだ粒は、筆の入りの位置へそっと移しておく(暗いので移動は見えない) */
  ids.forEach(id => { inStroke[id] = 1; dLoc[id * 3] = P0[0]; dLoc[id * 3 + 1] = P0[1]; dLoc[id * 3 + 2] = P0[2]; });
  strokes.push(st);
}
function updateDust(dt) {
  if (RM) return;
  camera.matrixWorld.extractBasis(cR, cU, cF); const c = G.look || SC, L = LIGHTS[lightNo], col = new THREE.Color(L.key);
  if (!G.won && (nextStroke -= dt) <= 0) { startStroke(); nextStroke = 5 + Math.random() * 5; }
  for (let i = 0; i < DUST; i++) { const o = i * 3; if (inStroke[i] >= 0) continue;
    /* ゆるやかな空気の流れ(場所と時間でなめらかに変わる) */
    const x = dLoc[o], y = dLoc[o + 1], z = dLoc[o + 2], sd = dustSeed[i] * 6.28;
    const fx = Math.sin(y * 0.45 + T * 0.13 + sd) * 0.16 + 0.05, fy = Math.sin(x * 0.38 - T * 0.11 + sd * 0.7) * 0.12 + Math.sin(T * 0.3 + sd) * 0.03, fz = Math.cos(x * 0.3 + y * 0.3 + T * 0.09) * 0.08;
    dVel[o] += (fx - dVel[o]) * Math.min(1, dt * 0.8); dVel[o + 1] += (fy - dVel[o + 1]) * Math.min(1, dt * 0.8); dVel[o + 2] += (fz - dVel[o + 2]) * Math.min(1, dt * 0.8);
    dLoc[o] += dVel[o] * dt; dLoc[o + 1] += dVel[o + 1] * dt; dLoc[o + 2] += dVel[o + 2] * dt;
    if (dLoc[o] > BOX.x) dLoc[o] -= 2 * BOX.x; if (dLoc[o] < -BOX.x) dLoc[o] += 2 * BOX.x; if (dLoc[o + 1] > BOX.y) dLoc[o + 1] -= 2 * BOX.y; if (dLoc[o + 1] < -BOX.y) dLoc[o + 1] += 2 * BOX.y; if (dLoc[o + 2] > BOX.z) dLoc[o + 2] -= 2 * BOX.z; if (dLoc[o + 2] < -BOX.z) dLoc[o + 2] += 2 * BOX.z;
    const tw = 0.45 + 0.3 * Math.sin(T * (0.7 + dustSeed[i]) + sd); dustCol[o] = col.r * tw; dustCol[o + 1] = col.g * tw; dustCol[o + 2] = col.b * tw;
    const k = i * 6; strokeTrailCol.fill(0, k, k + 6); }
  /* 一筆書き */
  strokes = strokes.filter((st, si) => { st.t += dt; let alive = false;
    st.ids.forEach((id, k) => { const o = id * 3; const tt = Math.min(1, Math.max(0, (st.t - k * st.lag) / st.dur)); const e = tt < 0.5 ? 4 * tt * tt * tt : 1 - Math.pow(-2 * tt + 2, 3) / 2;
      const P = st.P; const nx = bez(P[0][0], P[1][0], P[2][0], P[3][0], e), ny = bez(P[0][1], P[1][1], P[2][1], P[3][1], e), nz = bez(P[0][2], P[1][2], P[2][2], P[3][2], e);
      dVel[o] = (nx - dLoc[o]) / Math.max(dt, 1e-3); dVel[o + 1] = (ny - dLoc[o + 1]) / Math.max(dt, 1e-3); dVel[o + 2] = (nz - dLoc[o + 2]) / Math.max(dt, 1e-3);
      dLoc[o] = nx; dLoc[o + 1] = ny; dLoc[o + 2] = nz;
      const pressure = Math.sin(Math.PI * (k + 0.5) / st.ids.length), speed = Math.sin(Math.PI * tt), br = (0.2 + (1 + pressure * 1.3) * speed) * (tt > 0 ? 1 : 0.15);
      dustCol[o] = col.r * br; dustCol[o + 1] = col.g * br; dustCol[o + 2] = col.b * br;
      if (tt < 1) alive = true; else if (st.t - k * st.lag > st.dur + 0.1) { inStroke[id] = -1; dVel[o] *= 0.15; dVel[o + 1] *= 0.15; dVel[o + 2] *= 0.15; }
      /* 墨のにじみのような短い尾 */
      const kk = id * 6, tl = 0.12 * speed; strokeTrailPos[kk + 3] = 0; strokeTrailCol[kk] = col.r * br * 0.8; strokeTrailCol[kk + 1] = col.g * br * 0.8; strokeTrailCol[kk + 2] = col.b * br * 0.8; strokeTrailCol[kk + 3] = strokeTrailCol[kk + 4] = strokeTrailCol[kk + 5] = 0;
      dLoc[o] -= 0; st._tl = tl; });
    if (!alive) st.ids.forEach(id => { inStroke[id] = -1; }); return alive; });
  /* カメラに合わせて舞台の中に置く */
  for (let i = 0; i < DUST; i++) { const o = i * 3, x = dLoc[o], y = dLoc[o + 1], z = dLoc[o + 2];
    const wx = c.x + cR.x * x + cU.x * y + cF.x * z, wy = c.y + cR.y * x + cU.y * y + cF.y * z, wz = c.z + cR.z * x + cU.z * y + cF.z * z; dustPos[o] = wx; dustPos[o + 1] = wy; dustPos[o + 2] = wz;
    const kk = i * 6; strokeTrailPos[kk] = wx; strokeTrailPos[kk + 1] = wy; strokeTrailPos[kk + 2] = wz;
    const tl = inStroke[i] >= 0 ? 0.07 : 0, vx = dVel[o] * tl, vy = dVel[o + 1] * tl, vz = dVel[o + 2] * tl;
    strokeTrailPos[kk + 3] = wx - (cR.x * vx + cU.x * vy + cF.x * vz); strokeTrailPos[kk + 4] = wy - (cR.y * vx + cU.y * vy + cF.y * vz); strokeTrailPos[kk + 5] = wz - (cR.z * vx + cU.z * vy + cF.z * vz); }
  dustGeo.attributes.position.needsUpdate = true; dustGeo.attributes.color.needsUpdate = true; stGeo.attributes.position.needsUpdate = true; stGeo.attributes.color.needsUpdate = true;
}
/* ---------- メインループ ---------- */
let last = performance.now(), T = 0;
let raf = 0;
function frame(now) {
  const dt = window.__dt || Math.min(0.05, (now - last) / 1000); last = now; T += dt;
  if (G.running && !paused()) { G.time = (now - G.t0) / 1000; $("time").textContent = G.time.toFixed(1); }
  /* 題名画面: ゆっくり回して影が形になる所を見せる */
  if (G.attract) { const k = (Math.sin(T * 0.35) * 0.5 + 0.5); obj.quaternion.copy(qSol).premultiply(new THREE.Quaternion().setFromAxisAngle(U, (1 - k) * 1.6 + Math.sin(T * 0.23) * 0.2)); }
  else if (!G.won && !paused()) {
    const k = 1.4 * dt; if (keys.has("arrowleft") || keys.has("a")) rotate(U, -k); if (keys.has("arrowright") || keys.has("d")) rotate(U, k);
    if (G.stage.tier >= 2 || S.free) { if (keys.has("arrowup") || keys.has("w")) rotate(R, -k); if (keys.has("arrowdown") || keys.has("s")) rotate(R, k); }
    if (G.stage.tier >= 3 || S.free) { if (keys.has("q")) rotate(N, k); if (keys.has("e")) rotate(N, -k); if (twistHold) rotate(N, twistHold * k); }
    if (!ptrs.size) { const dec = Math.exp(-5 * dt); G.vel = G.vel.map(v => v * dec); if (Math.abs(G.vel[0]) > 1e-4) rotate(U, G.vel[0]); if (Math.abs(G.vel[1]) > 1e-4) rotate(R, G.vel[1]); }
    /* 凶: はじめの向きへ、ゆっくり戻る */
    if (G.resetAnim) { const r = G.resetAnim; r.t = Math.min(1, r.t + dt / 0.9); const e = r.t * r.t * (3 - 2 * r.t); obj.quaternion.copy(r.from).slerp(G.q0, e); if (r.t >= 1) G.resetAnim = null; }
    /* お告げは 30 秒で消える */
    if (G.oracleT > 0) { G.oracleT = Math.max(0, G.oracleT - dt); const bar = $("oracleBar"); if (bar) bar.style.transform = `scaleX(${G.oracleT / ORACLE_SECS})`; if (G.oracleT === 0) hideOracle(); }
    G.score = iou(obj.quaternion); sfxMatch(G.score);
    /* 近づいたら吸いつく */
    const near = obj.quaternion.angleTo(nearestSol()) < 0.19; G.near = G.score > 0.9 || near;
    if (G.near && !ptrs.size && !keys.size && !twistHold && STAR.idle > 0.3) { const tgt = nearestSol(); obj.quaternion.slerp(tgt, 1 - Math.exp(-2.2 * dt)); if (obj.quaternion.angleTo(tgt) < 0.02) { obj.quaternion.copy(tgt); win(); } }
    if (G.score > 0.985) win();
        const pct = Math.round(G.score * 100); $("meterFill").style.transform = `scaleX(${G.score})`; $("meterNum").textContent = pct + "%";
    $("meter").classList.toggle("hot", G.near);
  }
  /* クリアの演出 */
  if (G.won && G.winT >= 0) { G.winT += dt * (RM ? 3 : 1); const t = G.winT;
    if (t < 0.5) obj.quaternion.copy(G.winFrom).slerp(G.winTo, 1 - Math.pow(1 - t / 0.5, 3));
    paperMat.emissiveIntensity = Math.min(0.32, t * 0.6) * (t < 2.4 ? 1 : Math.max(0.25, 1 - (t - 2.4) * 0.3)); glowLight.intensity = paperMat.emissiveIntensity * 14;
    if (t > 0.5 && t < 1.5) { const k = (t - 0.5) / 1.0, e = k * k * (3 - 2 * k); for (const v of V) { v.w = v.w0 * (1 - e); v.col = v.fin; v.s = 1; } voxMat.emissive.set(LACQUER[G.stage.sp % 8]); voxMat.emissiveIntensity = e * 0.25; writeVox(); if (k > 0.02 && !G.burst1) { G.burst1 = true; } }
    if (t >= 1.5 && !G.burst2) { G.burst2 = true; burst(P); thump(0); }
    if (t > 1.5) { const k = Math.min(1, (t - 1.5) / 0.7), e = 1 - Math.pow(1 - k, 3); obj.quaternion.copy(G.winTo).slerp(G.faceQ, e); obj.position.copy(P).add(new THREE.Vector3(0, Math.abs(Math.sin((t - 1.5) * 5)) * 0.25 * e, 0)).addScaledVector(camera.position.clone().sub(P).normalize(), e * 0.5); obj.scale.setScalar(1 + e * 0.08); }
    /* 影の形から、あなたのフレンドの形へ組みかわる */
    if (t > 1.9 && G.morph) { if (V !== G.morph) { V = G.morph; } const k = Math.min(1, (t - 1.9) / 0.8), e = k * k * (3 - 2 * k);
      for (const v of V) { v.x = v.fx + (v.tx - v.fx) * e; v.y = v.fy + (v.ty - v.fy) * e; v.w = 0; v.s = v.s0 + (v.s1 - v.s0) * e; v.col = e > 0.5 ? ME.col : v.fin; }
      voxMat.emissive.set(e > 0.5 ? ME.col : LACQUER[G.stage.sp % 8]); writeVox(); if (k >= 1 && !G.meShown) { G.meShown = true; pluck(587.33, 0, 0.1, 1.2); pluck(784, 0.1, 0.08, 1.4); } }
    if (t > 3.0 && !G.shown) { G.shown = true; showClear(); }
  }
  if (!G.won) { G.burst1 = G.burst2 = G.shown = G.meShown = false; voxMat.emissiveIntensity = 0; }
  /* 火花 */
  if (sparks.visible) { let alive = 0; for (let i = 0; i < SPK; i++) { if (spkLife[i] <= 0) { spkPos[i * 3 + 1] = -99; continue; } alive++; spkLife[i] -= dt; const v = spkVel[i]; v.y -= 2.2 * dt; v.multiplyScalar(Math.exp(-1.2 * dt)); spkPos[i * 3] += v.x * dt; spkPos[i * 3 + 1] += v.y * dt; spkPos[i * 3 + 2] += v.z * dt; } spkGeo.attributes.position.needsUpdate = true; if (!alive) sparks.visible = false; }
  /* ちりと行灯のゆらぎ */
  if (!RM) {
    const fl = 1 + Math.sin(T * 7.3) * 0.025 + Math.sin(T * 12.1) * 0.015; key.intensity = 3.2 * fl; andonBody.material.emissiveIntensity = 2.2 * fl; beamMat.uniforms.uAmt.value = 0.09 * fl;
    camera.position.x += Math.sin(T * 0.25) * 0.0008; camera.lookAt(G.look); }
  updateBack(dt); updateDust(dt);
  renderer.render(scene, camera);
  raf = requestAnimationFrame(frame);
}
function tick() { sfxTap(); }

/* ---------- 一時停止(実行環境のメニュー・タブが隠れた時) ---------- */
function applyPause() { const p = paused();
  if (p) { if (G.running) { G.time = (performance.now() - G.t0) / 1000; G.running = false; G.resume = true; } ptrs.clear(); keys.clear(); twistHold = 0; drag = null; if (AC && AC.state === "running" && (S.ext || S.hid)) AC.suspend().catch(() => {}); }
  else { if (G.resume) { G.resume = false; if (!G.won) startClock(); } }
  if (!(S.ext || S.hid) && AC && AC.state === "suspended" && !S.mute) AC.resume().catch(() => {}); }
on(document, "visibilitychange", () => { S.hid = document.hidden; applyPause(); });

/* ---------- 起動 ---------- */
makeStage(0); G.attract = true; setLight(0); applyLang(); $("hud").hidden = true;
raf = requestAnimationFrame(frame);
refresh().catch(() => {});
window.__kage = { G, S, ECON, STAGES, makeStage, iou: () => iou(obj.quaternion), solve: () => { obj.quaternion.copy(qSol); }, obj, useHint, startGame, rotate, nearAng: () => obj.quaternion.angleTo(nearestSol()), ME };
return {
  setPaused(p) { S.ext = !!p; applyPause(); },
  /* rows: SDK の公式スプライト(16行×16文字、"#" が塗り) */
  setFriend(friend) { const rows = friend && friend.rows; const m = [];
    if (rows) rows.forEach((r, y) => { for (let x = 0; x < 16; x++) if (r[x] === "#") m.push([x, y]); });
    ME.mask = m.length >= 12 ? m : null;
    if (G.stage && G.stage.me && !G.won) makeStage(G.st); else hud(); },
  destroy() { cancelAnimationFrame(raf); intervals.forEach(clearInterval); timers.forEach(clearTimeout); offs.forEach(f => f()); try { if (AC) AC.close(); } catch (e) {} renderer.dispose(); root.innerHTML = ""; if (window.__kage) delete window.__kage; }
};
}
