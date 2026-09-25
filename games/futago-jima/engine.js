/* ============================================================
   ふたご島 まちがいさがし / TWIN ISLES — FriendSDK v0.1.2 game engine
   悪いジェネシスが作った「にせ島」のまちがいを見つけて壊すゲーム。
   島・キャラ・ジェネシスの絵は Rare Friends 公式クリエイターキット由来。
   プレイヤーの友達(選ばれたNFT)は SDK の公式スプライトで描く。
   ============================================================ */
import ASSETS from "./assets.json";
import BODY from "./body.js";

export function createGame(root, opts){
root.innerHTML=BODY;
const offs=[], timers=[];
const on=(t,ev,fn,o)=>{ t.addEventListener(ev,fn,o); offs.push(()=>t.removeEventListener(ev,fn,o)); };
const after=(ms,fn)=>{ timers.push(setTimeout(fn,ms)); };
const ECON={client:opts.client, fmt:opts.fmt, snap:null, busy:false, err:"", view:null};
const FRIEND_ID=opts.friendId!=null?String(opts.friendId):"";
let FRIEND=opts.friend||null; const SPR_ME=new Map();
const TEST=!!opts.test;
/* ============================================================
   ふたご島 まちがいさがし / TWIN ISLES
   悪いジェネシスが作った「にせ島」のまちがいを見つけて壊すゲーム。
   絵はすべて Rare Friends 公式クリエイターキット由来(島6種・キャラ16種・ジェネシス16種)。
   ============================================================ */
const A=ASSETS;
const PW=800, PH=500;
const $=id=>root.querySelector("#"+id);

/* ---------- セーブ ---------- */
let S={shards:6, stars:{}, daily:{}, lang:opts.lang||((navigator.language||"").toLowerCase().startsWith("ja")?"ja":"en"), mute:false, story:false,
  rm:!!(window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches)};
const J=(j,e)=>S.lang==="en"?e:j;

/* ---------- 乱数(問題を毎回同じにするため種つき) ---------- */
function mulberry(a){ return function(){ a|=0; a=a+0x6D2B79F5|0; let t=Math.imul(a^a>>>15,1|a); t=t+Math.imul(t^t>>>7,61|t)^t; return ((t^t>>>14)>>>0)/4294967296; }; }
const ri=(r,n)=>Math.floor(r()*n);
const pick=(r,arr)=>arr[Math.floor(r()*arr.length)];
function shuffle(r,a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(r()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function hashStr(s){ let h=2166136261; for(const c of s){ h^=c.charCodeAt(0); h=Math.imul(h,16777619); } return h>>>0; }

/* ---------- 島とテーマ ---------- */
const ISLES=[
  {j:"はじまりの庭",   e:"Starter Garden",   sky:["#5fb6ef","#8fd0f5","#c4ebfb"], light:"#f6efd6", mid:"#9cc46a", ink:"#23452b", acc:"#ffd23c", deco:"cloud"},
  {j:"からくり工房",   e:"Gizmo Workshop",   sky:["#2d6b86","#3f93a6","#85c6bd"], light:"#e8f0f2", mid:"#7fb0c4", ink:"#1b2838", acc:"#5cf2d0", deco:"cloud"},
  {j:"水晶のほらあな", e:"Crystal Cavern",   sky:["#221941","#3b2a6b","#634596"], light:"#ece6ff", mid:"#a78de2", ink:"#211838", acc:"#ff7ad9", deco:"star"},
  {j:"夕やけ屋上",     e:"Sunset Rooftop",   sky:["#ff7e59","#ffab66","#ffd98e"], light:"#fff2de", mid:"#dc9b6d", ink:"#3b2230", acc:"#ffe14d", deco:"cloud"},
  {j:"しおかぜ諸島",   e:"Sea-Breeze Isles", sky:["#3a9ede","#76c3ee","#bde5f7"], light:"#fdf6e3", mid:"#6fb7c9", ink:"#15314a", acc:"#c8ff3c", deco:"sea"},
  {j:"星見の前線基地", e:"Stargazer Outpost",sky:["#06061a","#121234","#232352"], light:"#dfe6ff", mid:"#8792c9", ink:"#0e0f25", acc:"#c6ff00", deco:"space"}
];
const EVIL={sky:["#1a0b2e","#35154f","#5a1f5e"], light:"#d9c6ff", mid:"#8a62c4", ink:"#170b28", acc:"#ff4fa0"};
const STAGES=5;

/* ---------- 色 ---------- */
const PAL={k:"#1a1423",w:"#ffffff",y:"#f7d23c",o:"#f08a2e",r:"#e8413a",R:"#9c1f1a",b:"#3b78e7",B:"#1f3f8a",g:"#46b04f",G:"#23692c",
  n:"#a0673a",N:"#5c3717",p:"#ef7fb5",v:"#9a64e0",s:"#f6e0b0",e:"#b4b4c0",E:"#6c6c80",c:"#8fe3ff"};
const FCOL=["#e8413a","#3b78e7","#a0673a","#3fae4a","#f2c230","#ef7fb5","#9a64e0","#f2f2f2"];
function hexRgb(h){ const n=parseInt(h.slice(1),16); return [n>>16&255,n>>8&255,n&255]; }
function mix(h,t,k){ const a=hexRgb(h),b=hexRgb(t); return "rgb("+a.map((v,i)=>Math.round(v+(b[i]-v)*k)).join(",")+")"; }
function cdist(a,b){ const x=hexRgb(a),y=hexRgb(b); return Math.abs(x[0]-y[0])+Math.abs(x[1]-y[1])+Math.abs(x[2]-y[2]); }

/* ---------- ドット絵(小物・空・かざり) ----------
   a = 色替えできる本体色 */
const PROPS={
  coin:{rows:[".kkkkk.","kyyyyyk","kywyyok","kywyyok","kyyyyok","kyooook",".kkkkk."]},
  toro:{alts:["#b8b8c4","#c98d4e","#6fbf8a"],rows:["...k...","..kak..",".kaaak.","kkkkkkk",".kyyyk.",".kkkkk.","..kak..","..kak..",".kaaak.","kkkkkkk"]},
  daruma:{alts:["#e8413a","#3b78e7","#f2c230","#f2f2f2"],rows:["..kkk..",".kaaak.","kwwwwwk","kwkwkwk","kwwwwwk","kaaaaak","kaayaak",".kaaak.","..kkk.."]},
  kinoko:{alts:["#e8413a","#3b78e7","#9a64e0","#f08a2e"],rows:["..kkk..",".kawak.","kaaaaak","kwaaawk","kkkkkkk","..ksk..","..ksk..","..kkk.."]},
  tulip:{alts:["#e8413a","#ef7fb5","#f2c230","#f2f2f2"],rows:["k.k.k","kakak","kaaak","kaaak",".kkk.","..G..",".GG..","..G.."]},
  torii:{alts:["#e8413a","#3b78e7"],rows:["kkkkkkkkkkk","kaaaaaaaaak","kkkkkkkkkkk","..ka...ak..",".kkkkkkkkk.",".kaaaaaaak.",".kkkkkkkkk.","..ka...ak..","..ka...ak..","..ka...ak..","..kk...kk.."]},
  chest:{alts:["#a0673a","#3b78e7","#e8413a"],rows:[".kkkkkk.","kaaaaaak","kaaaaaak","kkkkkkkk","kaakyaak","kaaaaaak","kkkkkkkk"]},
  sign:{alts:["#c98d4e","#6fbf8a","#ef7fb5"],asym:true,rows:["kkkkkk.","kaaaaak","kawwwak","kaaaaak","kkkkkk.","..k....","..k....",".kkk..."]},
  gem:{alts:["#3b78e7","#ef7fb5","#3fae4a","#9a64e0"],rows:["..k..",".kak.","kawak","kaaak","kaaak","kaaak",".kak.","..k.."]},
  onigiri:{rows:["...kk...","..kwwk..",".kwwwwk.","kwwwwwwk","kwkkkkwk","kkGGGGkk",".kkkkkk."]},
  flag:{alts:["#e8413a","#3b78e7","#f2c230"],asym:true,rows:["kkkk..","kaaakk","kaaaak","kaaakk","kkkk..","k.....","k.....","k.....","k.....","kk...."]},
  bush:{alts:["#46b04f","#8fcf4a","#2f8f63"],rows:["..kkkkk..",".kaaawak.","kaawaaaak","kaaaaawak","kaaaaaaak",".kkkkkkk."]}
};
const SKY={
  cloud:{sc:5,rows:["....wwww.....","..wwwwwwww...",".wwwwwwwwwww.","wwwwwwwwwwwww",".eeeeeeeeeee."]},
  balloon:{sc:4,alts:["#e8413a","#3b78e7","#f2c230","#3fae4a"],rows:[".kkk.","kaawk","kaaak","kaaak",".kak.","..k..","..k..","...k.","..k.."]},
  bird:{sc:4,asym:true,frames:[["k...k",".k.k.","..k.."],[".....","kk.kk","..k.."]]},
  star:{sc:4,rows:["..y..",".yyy.","yyyyy",".yyy.","..y.."]}
};
const ACC=[
  {rows:["..y..","..r..",".ryr.",".rrr.","ryryr"]},
  {rows:["y.y.y","yyyyy","yrybr"]},
  {rows:["pp.pp","ppkpp","pp.pp"]},
  {rows:[".gg.","gggG","..k."]}
];
const GROUND_PROPS=["toro","daruma","kinoko","tulip","torii","chest","sign","gem","onigiri","flag","bush","coin"];
const SMALL_PROPS=["coin","tulip","gem","kinoko","onigiri"];

/* ---------- ビットマップ → スプライト(縁取り・白目つき) ---------- */
function bitsFromHex(h){ const out=new Uint8Array(256); let bi=0;
  for(const ch of h){ const v=parseInt(ch,16); for(let k=3;k>=0;k--) out[bi++]=(v>>k)&1; } return out; }
function interior(mask,w,h){ /* 外から届かない空白=目の穴 */
  const seen=new Uint8Array(w*h), st=[];
  for(let x=0;x<w;x++){ st.push(x,0); st.push(x,h-1); } for(let y=0;y<h;y++){ st.push(0,y); st.push(w-1,y); }
  while(st.length){ const y=st.pop(), x=st.pop(); if(x<0||y<0||x>=w||y>=h)continue; const i=y*w+x; if(seen[i]||mask[i])continue; seen[i]=1; st.push(x+1,y,x-1,y,x,y+1,x,y-1); }
  const inn=new Uint8Array(w*h); for(let i=0;i<w*h;i++) if(!mask[i]&&!seen[i]) inn[i]=1; return inn;
}
const SPR=new Map();
function maskSprite(key,mask,w,h,sc,col,ink){
  let c=SPR.get(key); if(c)return c;
  c=document.createElement("canvas"); c.width=w*sc+2; c.height=h*sc+2;
  const x=c.getContext("2d"), inn=interior(mask,w,h);
  x.fillStyle=ink;
  for(let yy=0;yy<h;yy++)for(let xx=0;xx<w;xx++) if(mask[yy*w+xx]||inn[yy*w+xx]) x.fillRect(xx*sc,yy*sc,sc+2,sc+2);
  for(let yy=0;yy<h;yy++)for(let xx=0;xx<w;xx++){ const i=yy*w+xx;
    if(mask[i]){ x.fillStyle=col; x.fillRect(xx*sc+1,yy*sc+1,sc,sc);
      if(yy===0||!mask[i-w]){ x.fillStyle=mix(col,"#ffffff",.45); x.fillRect(xx*sc+1,yy*sc+1,sc,1); }
      if(yy===h-1||!mask[i+w]){ x.fillStyle=mix(col,"#000000",.3); x.fillRect(xx*sc+1,yy*sc+sc,sc,1); } }
    else if(inn[i]){ x.fillStyle="#ffffff"; x.fillRect(xx*sc+1,yy*sc+1,sc,sc); } }
  SPR.set(key,c); return c;
}
function rowsSprite(key,rows,sc,aCol,flip){
  let c=SPR.get(key); if(c)return c;
  const h=rows.length, w=rows[0].length;
  c=document.createElement("canvas"); c.width=w*sc; c.height=h*sc;
  const x=c.getContext("2d");
  for(let yy=0;yy<h;yy++)for(let xx=0;xx<w;xx++){ const ch=rows[yy][flip?w-1-xx:xx]; if(ch===".")continue;
    x.fillStyle=ch==="a"?aCol:PAL[ch]; x.fillRect(xx*sc,yy*sc,sc,sc); }
  SPR.set(key,c); return c;
}

/* キャラ16種(公式キット idle 8コマ) */
const CH=A.chars.map(d=>{ const o={}; for(const dir of ["front","left","right","back"]){
  const u=d[dir].u.map(bitsFromHex);
  let bot=0; for(let i=0;i<256;i++) if(u[0][i]) bot=Math.max(bot,i>>4);
  const tops=u.map(m=>{ let ty=16,sx=0,n=0; for(let i=0;i<256;i++) if(m[i]&&(i>>4)<ty) ty=i>>4;
    for(let x=0;x<16;x++) if(m[ty*16+x]){sx+=x;n++;} return {ty,cx:n?sx/n:8}; });
  o[dir]={u,seq:d[dir].s,bot,tops}; } return o; });
const GEN=A.gen.map(s=>Uint8Array.from(s,ch=>+ch));
const DIRS=["front","left","right","back"];

/* ---------- 島画像の色付け ---------- */
/* 画像ファイルを使わず、ランレングス圧縮した画素データから直接組み立てる
   (共有ページの中ではdata:画像を読むとキャンバスが「汚染」されて画素が読めなくなるため) */
const ISLE_IDX=[], ISLE_MASK=[];
function decodeIsle(i){ const o=A.isles[i], bin=atob(o.rle), n=o.w*o.h, idx=new Uint8Array(n); let p=0;
  for(let k=0;k<bin.length;k++){ const b=bin.charCodeAt(k), v=b>>5, l=b&31; idx.fill(v,p,p+l); p+=l; }
  const m=new Uint8Array(n); for(let k=0;k<n;k++) m[k]=idx[k]?1:0; ISLE_IDX[i]=idx; ISLE_MASK[i]=m; }
const ISLE_CACHE=new Map();
function isleCanvas(i,th){
  const key=i+"|"+th.light+th.ink; if(ISLE_CACHE.has(key))return ISLE_CACHE.get(key);
  if(!ISLE_IDX[i]) decodeIsle(i);
  const idx=ISLE_IDX[i], w=A.isles[i].w, h=A.isles[i].h;
  const c=document.createElement("canvas"); c.width=w; c.height=h; const x=c.getContext("2d");
  const d=x.createImageData(w,h), p=d.data, COLS=[null,hexRgb(th.ink),hexRgb(th.light),hexRgb(th.mid),hexRgb(th.acc)];
  for(let k=0,q=0;k<idx.length;k++,q+=4){ const t=COLS[idx[k]]; if(!t)continue; p[q]=t[0];p[q+1]=t[1];p[q+2]=t[2];p[q+3]=255; }
  x.putImageData(d,0,0);
  ISLE_CACHE.set(key,c); return c;
}

/* ---------- 物の描画 ---------- */
function friendFrame(o,t){ const d=CH[o.sp][o.dir]; if(o.frz) return d.seq[0]; return d.seq[Math.floor(t*6*(o.spd||1)+o.ph)%8]; }
function drawFriend(x,o,t,ink){
  const d=CH[o.sp][o.dir], fi=friendFrame(o,t), sc=o.sc;
  const spr=maskSprite("f"+o.sp+o.dir+fi+o.col+sc+ink,d.u[fi],16,16,sc,o.col,ink);
  const left=o.x-8*sc-1, top=o.y-(d.bot+1)*sc-1;
  x.fillStyle="rgba(0,0,0,.22)"; x.fillRect(o.x-5*sc,o.y-2,10*sc,4); x.fillRect(o.x-4*sc,o.y-3,8*sc,6);
  x.drawImage(spr,left,top);
  if(o.acc>=0){ const a=ACC[o.acc], tp=d.tops[fi], as=rowsSprite("acc"+o.acc+sc,a.rows,sc,"#000");
    x.drawImage(as, Math.round(left+1+(tp.cx+.5)*sc-as.width/2), top+1+tp.ty*sc-as.height+sc); }
}
/* 選ばれた友達(公式の黒い体+白いふち) */
function friendSprite(facing,fr,sc){
  const key=facing+fr+"|"+sc; let c=SPR_ME.get(key); if(c) return c;
  const rows=FRIEND.frames[facing][fr]; c=document.createElement("canvas"); c.width=16*sc+2; c.height=16*sc+2; const x=c.getContext("2d");
  x.fillStyle="#ffffff"; for(let yy=0;yy<16;yy++) for(let xx=0;xx<16;xx++) if(rows[yy][xx]==="#") x.fillRect(xx*sc,yy*sc,sc+2,sc+2);
  x.fillStyle="#000000"; for(let yy=0;yy<16;yy++) for(let xx=0;xx<16;xx++) if(rows[yy][xx]==="#") x.fillRect(xx*sc+1,yy*sc+1,sc,sc);
  SPR_ME.set(key,c); return c;
}
function drawMe(x,o,t){
  if(!FRIEND) return;
  const hopAge=G.t-G.hop, hop=(!S.rm&&hopAge>=0&&hopAge<.4)?Math.round(Math.sin(hopAge/.4*Math.PI)*10):0;
  const spr=friendSprite("down",S.rm?0:Math.floor(t*8)%8,o.sc);
  x.fillStyle="rgba(0,0,0,.25)"; x.fillRect(o.x-5*o.sc,o.y-2,10*o.sc,4);
  x.drawImage(spr,Math.round(o.x-spr.width/2),Math.round(o.y-spr.height+o.sc-hop));
  x.font="bold 15px DotGothic16, monospace"; x.textAlign="center"; x.lineWidth=4; x.strokeStyle="#000"; x.strokeText(friendLabel(),o.x,o.y+17);
  x.fillStyle="#ffe6a0"; x.fillText(friendLabel(),o.x,o.y+17);
}
function drawProp(x,o,t){
  const P=PROPS[o.p], spr=rowsSprite("p"+o.p+o.col+o.sc+(o.flip?1:0),P.rows,o.sc,o.col,o.flip);
  x.fillStyle="rgba(0,0,0,.22)"; x.fillRect(o.x-spr.width/2+2,o.y-2,spr.width-4,4);
  x.drawImage(spr,Math.round(o.x-spr.width/2),o.y-spr.height);
}
function drawSky(x,o,t){
  const bob=Math.round(Math.sin(t*1.6+o.ph)*2);
  if(o.s==="gen"){ const spr=maskSprite("g"+o.g+o.col+o.sc+"k",GEN[o.g],6,6,o.sc,o.col,"#140a22");
    x.drawImage(spr,Math.round(o.x-spr.width/2),o.y-spr.height+bob); return; }
  const Q=SKY[o.s]; let rows=Q.rows;
  const fi=Q.frames?(o.frz?0:Math.floor(t*4*(o.spd||1)+o.ph)%2):"";
  if(Q.frames) rows=Q.frames[fi];
  const spr=rowsSprite("s"+o.s+fi+o.col+o.sc+(o.flip?1:0),rows,o.sc,o.col,o.flip);
  x.drawImage(spr,Math.round(o.x-spr.width/2),o.y-spr.height+bob);
}
/* 当たり判定用の箱(描画範囲+余白) */
function boxOf(o,reserve){
  if(o.k==="me") return [o.x-8*o.sc-3,o.y-17*o.sc-14,o.x+8*o.sc+3,o.y+22];
  if(o.k==="f"){ const sc=o.sc;
    const d=CH[o.sp][o.dir]; const top=reserve?o.y-17*sc-6*sc:o.y-(d.bot+1)*sc-1-(o.acc>=0?5*sc:0);
    return [o.x-8*sc-2,top-2,o.x+8*sc+2,o.y+4]; }
  if(o.k==="p"){ const P=PROPS[o.p], sc=reserve?5:o.sc, w=P.rows[0].length*sc, h=P.rows.length*sc; return [o.x-w/2-2,o.y-h-2,o.x+w/2+2,o.y+4]; }
  if(o.s==="gen"){ const w=6*o.sc+2; return [o.x-w/2-1,o.y-w-3,o.x+w/2+1,o.y+3]; }
  const Q=SKY[o.s], rows=Q.rows||Q.frames[0], w=rows[0].length*o.sc, h=rows.length*o.sc;
  return [o.x-w/2-1,o.y-h-3,o.x+w/2+1,o.y+3];
}
const overlap=(a,b,p)=>!(a[2]+p<=b[0]||b[2]+p<=a[0]||a[3]+p<=b[1]||b[3]+p<=a[1]);

/* ---------- 背景(空・遠景・島) ---------- */
function makeBg(sc){
  const th=sc.th, c=document.createElement("canvas"); c.width=PW; c.height=PH; const x=c.getContext("2d");
  const r=mulberry(sc.seed^0x5bd1e995);
  const bands=[th.sky[0],th.sky[1],th.sky[2]], bh=[0,PH*.34,PH*.64,PH];
  for(let b=0;b<3;b++){ x.fillStyle=bands[b]; x.fillRect(0,bh[b],PW,bh[b+1]-bh[b]); }
  for(let b=1;b<3;b++){ x.fillStyle=bands[b]; /* ファミコン風の市松ぼかし */
    for(let yy=-8;yy<0;yy+=2) for(let xx=(yy/2&1)*2;xx<PW;xx+=4) x.fillRect(xx,bh[b]+yy,2,2);
    x.fillStyle=bands[b-1]; for(let yy=0;yy<8;yy+=2) for(let xx=((yy/2&1)?0:2);xx<PW;xx+=8) x.fillRect(xx,bh[b]+yy,2,2); }
  if(th.deco==="star"||th.deco==="space"){ for(let i=0;i<90;i++){ x.fillStyle=r()<.2?"#fff6c0":"#ffffff"; const s=r()<.15?2:1; x.globalAlpha=.35+r()*.6; x.fillRect(ri(r,PW),ri(r,PH*.8),s,s);} x.globalAlpha=1; }
  if(th.deco==="space"){ x.fillStyle="#3a3a78"; x.beginPath(); x.arc(690,70,38,0,7); x.fill(); x.fillStyle="#4c4c96"; x.beginPath(); x.arc(680,62,30,0,7); x.fill(); }
  /* 遠くの浮き島(静物・まちがいには使わない) */
  const far=mix(th.sky[1],th.ink,.25);
  for(let i=0;i<4;i++){ const fx=ri(r,PW), fy=40+ri(r,PH*.45), fw=30+ri(r,50);
    x.fillStyle=far; x.fillRect(fx-fw/2,fy,fw,4); x.fillRect(fx-fw/2+4,fy+4,fw-8,4); x.fillRect(fx-fw/2+10,fy+8,fw-20,4); }
  if(th.deco==="sea"){ const sy=PH*.58; x.fillStyle="#2f86c4"; x.fillRect(0,sy,PW,PH-sy); x.fillStyle="#58a9dc";
    for(let yy=sy+6;yy<PH;yy+=10) for(let xx=((yy/10|0)%2)*14;xx<PW;xx+=28) x.fillRect(xx,yy,10,2); }
  x.drawImage(isleCanvas(sc.isle,th),sc.ox,sc.oy);
  return c;
}

/* ---------- 場面の描画 ---------- */
function drawWorld(x,sc,objs,t){
  x.drawImage(objs===sc.objsB?(sc.bgB||sc.bg):(sc.bgA||sc.bg),0,0);
  const sky=objs.filter(o=>o.k==="s"), gr=objs.filter(o=>o.k!=="s").sort((a,b)=>a.y-b.y||a.x-b.x);
  for(const o of sky) drawSky(x,o,t);
  for(const o of gr){ if(o.k==="f") drawFriend(x,o,t,sc.th.ink==="#0e0f25"?"#05050f":"#1a1423"); else if(o.k==="me") drawMe(x,o,t); else drawProp(x,o,t); }
}

/* ---------- 問題づくり ---------- */
function stageCfg(i,s){
  /* 難しさの階段: 島1はやさしい種類だけ・少なめ・長め。島ごとに種類と数が増える */
  const ND=[[3,3,4,4,4],[4,5,5,5,5],[5,5,5,6,6],[6,6,6,6,6],[6,6,7,7,7],[7,7,7,7,7]];
  const tier=i===0?0:i===1?1:i===2?2:3;
  return {isle:i, nd:ND[i][s], time:Math.round(100-i*5-s), nF:4+i+(s>>1), nP:5+i+s, nS:2+(i>>1)+(s>>2),
    tier, minPx:[160,100,60,40][tier], subtleCap:[0,1,2,3,4,4][i], seed:hashStr("twin-"+i+"-"+s)};
}
function dailyCfg(date){ const h=hashStr("daily-"+date); return {isle:h%6, nd:6, time:85, nF:8, nP:10, nS:3, tier:2, minPx:60, subtleCap:3, seed:h, daily:date}; }
const POOLS=[
  {gone:3,add:2,color:3,swap:2},
  {gone:2,add:1,color:2,swap:2,turn:2,acc:2,big:1,fbig:1},
  {gone:1,add:1,color:2,swap:1,turn:2,acc:2,big:1,small:1,fbig:1,flip:1,terrain:1,tempo:1},
  {gone:1,add:1,color:1,swap:1,turn:2,acc:2,big:1,small:1,fbig:1,flip:1,terrain:3,tempo:3}
];
/* 動きのちがいに使える友達: コマ同士の差が大きい種類と向きだけ */
const ANIM_OK=CH.map(sp=>{ const o={}; for(const dir of DIRS){ const d=sp[dir]; let mx=0;
  for(let a=0;a<d.u.length;a++) for(let b=a+1;b<d.u.length;b++){ let n=0; for(let i=0;i<256;i++) if(d.u[a][i]!==d.u[b][i]) n++; mx=Math.max(mx,n); }
  o[dir]=mx>=6&&new Set(d.seq).size>1; } return o; });
/* 種類をグループに分け、1ステージの中で偏らないように選ぶ */
const GROUP={gone:"exist",add:"exist",color:"color",swap:"shape",acc:"shape",turn:"shape",flip:"shape",big:"size",small:"size",fbig:"size",tempo:"motion",terrain:"ground"};
const GROUP_CAP={exist:2,color:2,shape:2,size:2,motion:1,ground:1};
const SUBTLE=new Set(["terrain","tempo","small","turn","acc","flip"]);
function pickKind(r,pool,count,subCap){
  const groups={}; for(const k in pool){ const g=GROUP[k]; if((count[g]||0)>=GROUP_CAP[g]) continue; if(SUBTLE.has(k)&&(count.sub||0)>=subCap) continue; (groups[g]=groups[g]||{})[k]=pool[k]; }
  const names=Object.keys(groups); if(!names.length) return wpick(r,pool);
  const least=Math.min(...names.map(g=>count[g]||0)), cand=names.filter(g=>(count[g]||0)===least);
  const gw={}; for(const g of cand){ let w=0; for(const k in groups[g]) w+=groups[g][k]; gw[g]=w; }
  return wpick(r,groups[wpick(r,gw)]);
}
function wpick(r,w){ let tot=0; for(const k in w) tot+=w[k]; let v=r()*tot; for(const k in w){ v-=w[k]; if(v<0) return k; } return Object.keys(w)[0]; }

function isleClear(sc,b){ /* 空の物が島に重ならないか */
  const m=ISLE_MASK[sc.isle], w=A.isles[sc.isle].w, h=A.isles[sc.isle].h; if(!m)return true;
  for(let yy=b[1];yy<=b[3];yy+=4) for(let xx=b[0];xx<=b[2];xx+=4){ const ix=Math.round(xx-sc.ox), iy=Math.round(yy-sc.oy);
    if(ix>=0&&iy>=0&&ix<w&&iy<h&&m[iy*w+ix]) return false; }
  return true;
}
function inPanel(b){ return b[0]>=4&&b[2]<=PW-4&&b[1]>=6&&b[3]<=PH-4; }

function buildBase(sc,cfg,r){
  const objs=[], boxes=[]; let id=0;
  const cand=shuffle(r,A.isles[sc.isle].c.map(([cx,cy])=>[cx+sc.ox,cy+sc.oy]).filter(([cx,cy])=>cx>30&&cx<PW-30&&cy>70&&cy<PH-8));
  const tryPlace=(o)=>{ const b=boxOf(o,true); if(!inPanel(b))return false; for(const q of boxes) if(overlap(b,q,6))return false; boxes.push(b); o.id=id++; objs.push(o); return true; };
  /* あなたの友達(両方の絵で同じ・まちがいにはしない) */
  const meC=cand.filter(([cx,cy])=>cx<PW*.4&&cy>PH*.45).sort((p,q)=>q[1]-p[1]||p[0]-q[0])[0]||cand[0];
  if(meC) tryPlace({k:"me",x:meC[0],y:meC[1],sc:4});
  let ci=0;
  const nextSpot=()=>ci<cand.length?cand[ci++]:null;
  for(let n=0,tries=0;n<cfg.nF&&tries<200;tries++){ const p=nextSpot(); if(!p)break;
    const d=r(); const o={k:"f",x:p[0],y:p[1],sp:ri(r,16),dir:d<.55?"front":d<.75?"left":d<.93?"right":"back",col:pick(r,FCOL),sc:4,ph:ri(r,8),acc:r()<.3?ri(r,ACC.length):-1};
    if(tryPlace(o))n++; }
  for(let n=0,tries=0;n<cfg.nP&&tries<200;tries++){ const p=nextSpot(); if(!p)break;
    const pn=pick(r,GROUND_PROPS), P=PROPS[pn]; const o={k:"p",x:p[0],y:p[1],p:pn,col:P.alts?pick(r,P.alts):"#000",sc:4,flip:P.asym&&r()<.5};
    if(tryPlace(o))n++; }
  const skyKinds=sc.th.deco==="space"||sc.th.deco==="star"?["star","star","gen","balloon","bird"]:["cloud","cloud","bird","balloon","gen"];
  for(let n=0,tries=0;n<cfg.nS&&tries<300;tries++){
    const s=pick(r,skyKinds); const o={k:"s",s,x:40+ri(r,PW-80),y:30+ri(r,PH*.55),ph:ri(r,8)*.7,sc:s==="gen"?5:(SKY[s].sc),flip:r()<.5};
    if(s==="gen"){ o.g=ri(r,16); o.col=pick(r,["#9a64e0","#e8413a","#3b78e7","#46b04f"]); }
    else o.col=SKY[s].alts?pick(r,SKY[s].alts):"#000";
    const b=boxOf(o,true); if(!inPanel(b)||!isleClear(sc,b))continue;
    let ok=true; for(const q of boxes) if(overlap(b,q,8)){ok=false;break;} if(!ok)continue;
    boxes.push(b); o.id=id++; objs.push(o); n++; }
  return {objs,boxes,cand:cand.slice(ci),nextId:id};
}

function mutate(kind,base,r,sc,used,diffBoxes){
  const far=b=>diffBoxes.every(q=>{ const dx=(b[0]+b[2])/2-(q[0]+q[2])/2, dy=(b[1]+b[3])/2-(q[1]+q[3])/2; return dx*dx+dy*dy>110*110; });
  const pool=base.objs.filter(o=>o.k!=="me"&&!used.has(o.id)&&far(boxOf(o,true)));
  const side=r()<.5?"A":"B";
  const clone=o=>Object.assign({},o);
  let t;
  switch(kind){
    case "gone": { if(!pool.length)return null; t=pick(r,pool); return {kind,side,id:t.id,remove:true}; }
    case "color":{ const c=pool.filter(o=>o.k==="f"||(o.k==="p"&&PROPS[o.p].alts)||(o.k==="s"&&(o.s==="gen"||SKY[o.s]&&SKY[o.s].alts))); if(!c.length)return null;
      t=pick(r,c); const alts=t.k==="f"?FCOL:t.k==="p"?PROPS[t.p].alts:t.s==="gen"?["#9a64e0","#e8413a","#3b78e7","#46b04f"]:SKY[t.s].alts;
      const ok=alts.filter(a=>cdist(a,t.col)>160); if(!ok.length)return null; const n=clone(t); n.col=pick(r,ok); return {kind,side,id:t.id,obj:n}; }
    case "swap":{ const c=pool.filter(o=>o.k==="f"); if(!c.length)return null; t=pick(r,c); const n=clone(t); do{ n.sp=ri(r,16); }while(n.sp===t.sp); return {kind,side,id:t.id,obj:n}; }
    case "turn":{ const c=pool.filter(o=>o.k==="f"); if(!c.length)return null; t=pick(r,c); const n=clone(t);
      n.dir=t.dir==="left"?"right":t.dir==="right"?"left":pick(r,t.dir==="front"?["back","left","right"]:["front","left"]); return {kind,side,id:t.id,obj:n}; }
    case "acc":{ const c=pool.filter(o=>o.k==="f"); if(!c.length)return null; t=pick(r,c); const n=clone(t);
      if(t.acc>=0) n.acc=r()<.6?-1:(t.acc+1+ri(r,ACC.length-1))%ACC.length; else n.acc=ri(r,ACC.length); return {kind,side,id:t.id,obj:n}; }
    case "big":{ const c=pool.filter(o=>o.k==="p"); if(!c.length)return null; t=pick(r,c); const n=clone(t); n.sc=5; return {kind,side,id:t.id,obj:n}; }
    case "small":{ const c=pool.filter(o=>o.k==="p"&&PROPS[o.p].rows.length>=7); if(!c.length)return null; t=pick(r,c); const n=clone(t); n.sc=3; return {kind,side,id:t.id,obj:n}; }
    case "fbig":{ const c=pool.filter(o=>o.k==="f"); if(!c.length)return null; t=pick(r,c); const n=clone(t); n.sc=5; return {kind,side,id:t.id,obj:n}; }
    case "tempo":{ const c=pool.filter(o=>(o.k==="f"&&ANIM_OK[o.sp][o.dir])||(o.k==="s"&&o.s==="bird")); if(!c.length)return null; t=pick(r,c);
      /* 見える時間が45%以上になる変え方だけ使う */
      const opts=shuffle(r,[{frz:true},{spd:2},{ph:(t.ph+4)%8},{ph:(t.ph+2)%8}]);
      for(const v of opts){ const n=Object.assign(clone(t),v); if(t.k==="s"||animFrac(t,n)>=.45) return {kind,side,id:t.id,obj:n,anim:true}; }
      return null; }
    case "terrain": return terrainDiff(base,r,sc,side,far);
    case "flip":{ const c=pool.filter(o=>o.k==="p"&&PROPS[o.p].asym); if(!c.length)return null; t=pick(r,c); const n=clone(t); n.flip=!t.flip; return {kind,side,id:t.id,obj:n}; }
    case "add":{ for(let k=0;k<30&&base.cand.length;k++){ const p=base.cand.splice(ri(r,base.cand.length),1)[0];
        const pn=pick(r,SMALL_PROPS), P=PROPS[pn]; const o={k:"p",x:p[0],y:p[1],p:pn,col:P.alts?pick(r,P.alts):"#000",sc:4,flip:false,id:base.nextId++};
        const b=boxOf(o,true); if(!inPanel(b)||!far(b))continue; let ok=true; for(const q of base.boxes) if(overlap(b,q,6)){ok=false;break;} if(!ok)continue;
        base.boxes.push(b); return {kind,side,id:o.id,add:o}; }
      return null; }
  }
  return null;
}

/* 動きのちがいが「見えている時間」の割合(2周期ぶんを細かく比べる) */
function animFrac(a,b){ const d=CH[a.sp][a.dir]; let on=0, N=96;
  for(let k=0;k<N;k++){ const t=k/N*2.67, fa=friendFrame(a,t), fb=friendFrame(b,t); if(fa===fb) continue;
    let n=0; const ma=d.u[fa], mb=d.u[fb]; for(let i=0;i<256;i++) if(ma[i]!==mb[i]) n++; if(n>=6) on++; }
  return on/N; }
/* 地面(マップ)のちがい: 島の絵そのものを少しだけ描きかえる */
function terrainDiff(base,r,sc,side,far){
  const idx=ISLE_IDX[sc.isle], w=A.isles[sc.isle].w, th=sc.th; if(!idx) return null;
  for(let k=0;k<40&&base.cand.length;k++){
    const p=base.cand.splice(ri(r,base.cand.length),1)[0], bx=[p[0]-24,p[1]-30,p[0]+24,p[1]+6];
    if(!inPanel(bx)||!far(bx)) continue;
    let bad=false; for(const q of base.boxes) if(overlap(bx,q,4)){bad=true;break;} if(bad) continue;
    let ink=0, light=0, hole=false;
    for(let y=bx[1];y<bx[3];y++) for(let x=bx[0];x<bx[2];x++){ const v=idx[(y-sc.oy)*w+(x-sc.ox)]; if(!v){hole=true;break;} if(v===1) ink++; else if(v===2) light++; }
    if(hole) continue;
    const mode=ink>=45&&ink<=320?"erase":(light>1200?"patch":null); if(!mode) continue;
    const src=side==="A"?(sc.bgA||sc.bg):(sc.bgB||sc.bg), c=document.createElement("canvas"); c.width=PW; c.height=PH; const x=c.getContext("2d"); x.drawImage(src,0,0);
    const img=x.getImageData(bx[0],bx[1],bx[2]-bx[0],bx[3]-bx[1]), d=img.data, L=hexRgb(th.light), M=hexRgb(th.mid), K=hexRgb(th.ink);
    const cx=(bx[2]-bx[0])/2, cy=(bx[3]-bx[1])/2+2, rx=16+ri(r,6), ry=9+ri(r,4);
    for(let yy=0;yy<bx[3]-bx[1];yy++) for(let xx=0;xx<bx[2]-bx[0];xx++){ const v=idx[(bx[1]+yy-sc.oy)*w+(bx[0]+xx-sc.ox)], q=(yy*(bx[2]-bx[0])+xx)*4;
      if(mode==="erase"&&v===1){ d[q]=L[0];d[q+1]=L[1];d[q+2]=L[2]; }
      if(mode==="patch"&&v===2&&((xx-cx)/rx)**2+((yy-cy)/ry)**2<1&&(xx+yy)%2===0){ d[q]=M[0];d[q+1]=M[1];d[q+2]=M[2]; } }
    x.putImageData(img,bx[0],bx[1]);
    if(side==="A") sc.bgA=c; else sc.bgB=c;
    base.boxes.push(bx);
    return {kind:"terrain",side,id:"t"+k+"-"+p[0]+"-"+p[1],terrain:bx};
  }
  return null;
}
const VC=[document.createElement("canvas"),document.createElement("canvas")];
VC.forEach(c=>{c.width=PW;c.height=PH;});
function makeScene(cfg){
  const th=ISLES[cfg.isle];
  for(let attempt=0;attempt<40;attempt++){
    const r=mulberry(cfg.seed+attempt*7919);
    const w=A.isles[cfg.isle].w, h=A.isles[cfg.isle].h;
    const slack=Math.max(0,w-PW+40);
    const sc={seed:cfg.seed+attempt, cfg, isle:cfg.isle, th, ox:Math.round((PW-w)/2+(r()-.5)*slack), oy:PH-h-6-ri(r,14)};
    sc.bg=makeBg(sc); sc.bgA=sc.bg; sc.bgB=sc.bg;
    const base=buildBase(sc,cfg,r);
    const used=new Set(), diffs=[], dboxes=[];
    let objsA=base.objs.slice(), objsB=base.objs.slice();
    const pool=POOLS[cfg.tier], gcount={};
    for(let k=0,tries=0;k<cfg.nd&&tries<80;tries++){
      const m=mutate(pickKind(r,pool,gcount,cfg.subtleCap==null?9:cfg.subtleCap),base,r,sc,used,dboxes); if(!m)continue;
      used.add(m.id); gcount[GROUP[m.kind]]=(gcount[GROUP[m.kind]]||0)+1; if(SUBTLE.has(m.kind)) gcount.sub=(gcount.sub||0)+1;
      if(m.terrain){ diffs.push({kind:"terrain",side:m.side,id:m.id,box:m.terrain,found:false}); dboxes.push(m.terrain); k++; continue; }
      const orig=base.objs.find(o=>o.id===m.id);
      const list=m.side==="A"?objsA:objsB;
      let boxes=[];
      if(m.remove){ const i=list.findIndex(o=>o.id===m.id); list.splice(i,1); boxes.push(boxOf(orig,false)); }
      else if(m.add){ list.push(m.add); boxes.push(boxOf(m.add,false)); }
      else { const i=list.findIndex(o=>o.id===m.id); list[i]=m.obj; boxes.push(boxOf(orig,false),boxOf(m.obj,false)); }
      const bb=[Math.min(...boxes.map(b=>b[0])),Math.min(...boxes.map(b=>b[1])),Math.max(...boxes.map(b=>b[2])),Math.max(...boxes.map(b=>b[3]))];
      diffs.push({kind:m.kind,side:m.side,id:m.id,box:bb,found:false,anim:!!m.anim}); dboxes.push(boxOf(orig||m.add,true)); k++;
    }
    if(diffs.length<cfg.nd) continue;
    sc.objsA=objsA; sc.objsB=objsB; sc.diffs=diffs;
    if(validate(sc)) { sc.attempt=attempt; return sc; }
  }
  return null;
}
/* 違いが本当に目に見えるか、画素を比べて確かめる */
function validate(sc){
  const xa=VC[0].getContext("2d",{willReadFrequently:true}), xb=VC[1].getContext("2d",{willReadFrequently:true});
  const n=sc.diffs.length, tb=sc.diffs.map(()=>[1e9,1e9,-1,-1]), seen=sc.diffs.map(()=>0), TS=[];
  for(let k=0;k<12;k++) TS.push(k*.173);
  for(let k=0;k<TS.length;k++){ const t=TS[k], full=k%4===0;
    drawWorld(xa,sc,sc.objsA,t); drawWorld(xb,sc,sc.objsB,t);
    const cnt=new Array(n).fill(0);
    if(full){ const a=xa.getImageData(0,0,PW,PH).data, b=xb.getImageData(0,0,PW,PH).data;
      for(let y=0;y<PH;y++) for(let x=0;x<PW;x++){ const q=(y*PW+x)*4;
        if(Math.abs(a[q]-b[q])+Math.abs(a[q+1]-b[q+1])+Math.abs(a[q+2]-b[q+2])<=30) continue;
        let hit=-1; for(let d=0;d<n;d++){ const B=sc.diffs[d].box; if(x>=B[0]-3&&x<=B[2]+3&&y>=B[1]-3&&y<=B[3]+3){hit=d;break;} }
        if(hit<0) return false;
        cnt[hit]++; const T=tb[hit]; if(x<T[0])T[0]=x; if(y<T[1])T[1]=y; if(x>T[2])T[2]=x; if(y>T[3])T[3]=y; } }
    else for(let d=0;d<n;d++){ const B=sc.diffs[d].box, x0=Math.max(0,B[0]-3|0), y0=Math.max(0,B[1]-3|0), w=Math.min(PW,B[2]+4|0)-x0, h=Math.min(PH,B[3]+4|0)-y0; if(w<=0||h<=0) continue;
      const a=xa.getImageData(x0,y0,w,h).data, b=xb.getImageData(x0,y0,w,h).data;
      for(let yy=0;yy<h;yy++) for(let xx=0;xx<w;xx++){ const q=(yy*w+xx)*4; if(Math.abs(a[q]-b[q])+Math.abs(a[q+1]-b[q+1])+Math.abs(a[q+2]-b[q+2])<=30) continue;
        cnt[d]++; const T=tb[d], x=x0+xx, y=y0+yy; if(x<T[0])T[0]=x; if(y<T[1])T[1]=y; if(x>T[2])T[2]=x; if(y>T[3])T[3]=y; } }
    const need=sc.cfg.minPx||40;
    for(let d=0;d<n;d++){ if(cnt[d]>=need) seen[d]++; else if(!sc.diffs[d].anim) return false; }
  }
  for(let d=0;d<n;d++) if(sc.diffs[d].anim&&seen[d]<5) return false;
  sc.diffs.forEach((d,i)=>{ const T=tb[i]; d.cx=(T[0]+T[2])/2; d.cy=(T[1]+T[3])/2; d.r=Math.min(72,Math.max(30,Math.max(T[2]-T[0],T[3]-T[1])/2+14)); });
  return true;
}

/* ============================================================
   音(初期ファミコン風:矩形波・三角波・ノイズのみ・オリジナル曲)
   ============================================================ */
let AC=null;
function ac(){ if(S.mute)return null; try{ AC=AC||new (window.AudioContext||window.webkitAudioContext)(); return AC; }catch(e){ return null; } }
function sq(f,d,v,delay,f2){ const a=ac(); if(!a)return;
  const t0=a.currentTime+(delay||0);
  const o=a.createOscillator(),g=a.createGain();
  o.type="square"; o.frequency.setValueAtTime(f,t0);
  if(f2)o.frequency.linearRampToValueAtTime(f2,t0+d);
  g.gain.setValueAtTime(v||.06,t0);
  g.gain.exponentialRampToValueAtTime(.001,t0+d);
  o.connect(g);g.connect(a.destination);o.start(t0);o.stop(t0+d);
}
function tri(f,d,v,delay,f2){ const a=ac(); if(!a)return;
  const t0=a.currentTime+(delay||0);
  const o=a.createOscillator(),g=a.createGain();
  o.type="triangle"; o.frequency.setValueAtTime(f,t0);
  if(f2)o.frequency.linearRampToValueAtTime(f2,t0+d);
  g.gain.setValueAtTime(v||.09,t0);
  g.gain.exponentialRampToValueAtTime(.001,t0+d);
  o.connect(g);g.connect(a.destination);o.start(t0);o.stop(t0+d);
}
function noise(d,v,delay){ const a=ac(); if(!a)return;
  const t0=a.currentTime+(delay||0);
  const len=Math.max(1,(a.sampleRate*d)|0);
  const buf=a.createBuffer(1,len,a.sampleRate);
  const ch=buf.getChannelData(0);
  for(let i=0;i<len;i++)ch[i]=Math.random()*2-1;
  const s=a.createBufferSource(),g=a.createGain();
  s.buffer=buf;
  g.gain.setValueAtTime(v||.05,t0);
  g.gain.exponentialRampToValueAtTime(.001,t0+d);
  s.connect(g);g.connect(a.destination);s.start(t0);
}

const SONGS={
  title:{bpm:104,loop:true,ch:[
    {w:"p25",v:.065,n:"E5.2 G5.2 C6.2 G5.2 A5.3 G5.1 E5.4 F5.2 A5.2 D6.2 C6.2 B5.3 A5.1 G5.4 E5.2 G5.2 C6.2 E6.2 D6.3 C6.1 A5.4 F5.2 E5.2 D5.2 G5.2 C5.6 r.2"},
    {w:"p12",v:.03,n:"r.2 E4.2 r.2 G4.2 r.2 F4.2 r.2 A4.2 r.2 F4.2 r.2 A4.2 r.2 D4.2 r.2 B4.2 r.2 E4.2 r.2 G4.2 r.2 F4.2 r.2 A4.2 r.2 F4.2 r.2 B4.2 r.2 E4.2 r.2 G4.2"},
    {w:"tri",v:.12,n:"C3.2 G2.2 E3.2 G2.2 F2.2 C3.2 A2.2 C3.2 D3.2 A2.2 F2.2 A2.2 G2.2 D3.2 B2.2 D3.2 C3.2 G2.2 E3.2 G2.2 F2.2 C3.2 A2.2 C3.2 D3.2 A2.2 G2.2 B2.2 C3.4 G2.4"},
    {w:"drum",v:.035,n:"k.2 h.2 s.2 h.2 k.2 h.2 s.2 h.2 k.2 h.2 s.2 h.2 k.2 h.2 s.2 h.2 k.2 h.2 s.2 h.2 k.2 h.2 s.2 h.2 k.2 h.2 s.2 h.2 k.2 h.2 s.2 s.2"}]},
  play:{bpm:132,loop:true,ch:[
    {w:"p25",v:.06,n:"A4.1 C5.1 E5.1 C5.1 A4.1 C5.1 E5.2 F5.1 E5.1 D5.1 C5.1 D5.2 E5.2 G4.1 B4.1 D5.1 B4.1 G4.1 B4.1 D5.2 E5.1 D5.1 C5.1 B4.1 C5.4 A4.1 C5.1 E5.1 A5.1 G5.2 E5.2 F5.1 G5.1 A5.1 F5.1 E5.2 C5.2 D5.1 E5.1 F5.1 D5.1 B4.2 G#4.2 A4.4 r.2 E5.2"},
    {w:"p12",v:.028,n:"r.1 E4.1 r.1 E4.1 r.1 E4.1 r.1 E4.1 r.1 A4.1 r.1 A4.1 r.1 A4.1 r.1 A4.1 r.1 B4.1 r.1 B4.1 r.1 B4.1 r.1 B4.1 r.1 G4.1 r.1 G4.1 r.1 G4.1 r.1 G4.1 r.1 E4.1 r.1 E4.1 r.1 E4.1 r.1 E4.1 r.1 A4.1 r.1 A4.1 r.1 A4.1 r.1 A4.1 r.1 F4.1 r.1 F4.1 r.1 G#4.1 r.1 G#4.1 r.1 E4.1 r.1 E4.1 r.1 E4.1 r.1 E4.1"},
    {w:"tri",v:.12,n:"A2.1 E3.1 A3.1 E3.1 A2.1 E3.1 A3.1 E3.1 F2.1 C3.1 F3.1 C3.1 F2.1 C3.1 F3.1 C3.1 G2.1 D3.1 G3.1 D3.1 G2.1 D3.1 G3.1 D3.1 C3.1 G3.1 C4.1 G3.1 C3.1 G3.1 C4.1 G3.1 A2.1 E3.1 A3.1 E3.1 A2.1 E3.1 A3.1 E3.1 F2.1 C3.1 F3.1 C3.1 F2.1 C3.1 F3.1 C3.1 D3.1 A3.1 D3.1 A3.1 E2.1 B2.1 E3.1 G#3.1 A2.1 E3.1 A3.1 E3.1 A2.2 E2.2"},
    {w:"drum",v:.035,n:"k.1 h.1 s.1 h.1 k.1 k.1 s.1 h.1 k.1 h.1 s.1 h.1 k.1 k.1 s.1 h.1 k.1 h.1 s.1 h.1 k.1 k.1 s.1 h.1 k.1 h.1 s.1 h.1 k.1 k.1 s.1 h.1 k.1 h.1 s.1 h.1 k.1 k.1 s.1 h.1 k.1 h.1 s.1 h.1 k.1 k.1 s.1 h.1 k.1 h.1 s.1 h.1 k.1 k.1 s.1 h.1 k.1 h.1 s.1 h.1 s.1 s.1 s.1 s.1"}]},
  clear:{bpm:150,loop:false,ch:[
    {w:"p25",v:.08,n:"C5.1 E5.1 G5.1 C6.2 r.1 A5.1 B5.1 C6.1 D6.1 E6.6"},
    {w:"p12",v:.04,n:"E4.1 G4.1 C5.1 E5.2 r.1 F5.1 G5.1 A5.1 B5.1 C6.6"},
    {w:"tri",v:.13,n:"C3.3 r.2 F2.3 G2.2 C3.6"},
    {w:"drum",v:.05,n:"s.1 s.1 s.1 k.2 r.1 s.1 s.1 s.1 s.1 k.6"}]},
  fail:{bpm:110,loop:false,ch:[
    {w:"p25",v:.07,n:"E5.2 D#5.2 D5.2 C#5.6"},
    {w:"tri",v:.12,n:"A2.2 G#2.2 G2.2 F#2.6"}]}
};
SONGS.hurry={bpm:168,loop:true,ch:SONGS.play.ch};
const PC={C:0,D:2,E:4,F:5,G:7,A:9,B:11};
function noteFreq(nm){ const m=/^([A-G])([#b]?)(\d)$/.exec(nm); if(!m)return 0;
  const midi=12*(+m[3]+1)+PC[m[1]]+(m[2]==="#"?1:m[2]==="b"?-1:0); return 440*Math.pow(2,(midi-69)/12); }
function parseTrack(str){ return str.trim().split(/\s+/).map(t=>{ const [a,b]=t.split("."); return {k:a,d:+b}; }); }
Object.values(SONGS).forEach(s=>s.ch.forEach(c=>{ if(!c.ev) c.ev=parseTrack(c.n); }));
const MUSIC={cur:null,timer:null,gain:null,chans:null,song:null};
let PWAVE={};
function pulseWave(a,duty){
  const key=duty; if(PWAVE[key]&&PWAVE[key].ctx===a)return PWAVE[key].w;
  const n=32, re=new Float32Array(n), im=new Float32Array(n);
  for(let k=1;k<n;k++) re[k]=(2/(k*Math.PI))*Math.sin(Math.PI*k*duty);
  const w=a.createPeriodicWave(re,im); PWAVE[key]={ctx:a,w}; return w;
}
let NOISEBUF=null;
function noiseBuf(a){
  if(NOISEBUF&&NOISEBUF.ctx===a)return NOISEBUF.b;
  const b=a.createBuffer(1,a.sampleRate,a.sampleRate), ch=b.getChannelData(0);
  for(let i=0;i<ch.length;i++)ch[i]=Math.random()*2-1;
  NOISEBUF={ctx:a,b}; return b;
}
function mNote(a,out,c,ev,t,dur){
  if(ev.k==="r")return;
  if(c.w==="drum"){
    if(ev.k==="k"){ const o=a.createOscillator(),g=a.createGain(); o.type="triangle";
      o.frequency.setValueAtTime(160,t); o.frequency.exponentialRampToValueAtTime(40,t+.12);
      g.gain.setValueAtTime(c.v*2.4,t); g.gain.exponentialRampToValueAtTime(.001,t+.14);
      o.connect(g);g.connect(out);o.start(t);o.stop(t+.15); return; }
    const s=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain();
    s.buffer=noiseBuf(a); f.type="highpass"; f.frequency.value=ev.k==="h"?7000:1200;
    const len=ev.k==="h"?.035:.11;
    g.gain.setValueAtTime(ev.k==="h"?c.v*.7:c.v*1.3,t); g.gain.exponentialRampToValueAtTime(.001,t+len);
    s.connect(f);f.connect(g);g.connect(out);s.start(t,Math.random()*.5);s.stop(t+len+.01); return;
  }
  const f=noteFreq(ev.k); if(!f)return;
  const o=a.createOscillator(),g=a.createGain();
  if(c.w==="tri")o.type="triangle"; else o.setPeriodicWave(pulseWave(a,c.w==="p12"?.125:.25));
  o.frequency.setValueAtTime(f,t);
  const end=t+dur*.92;
  g.gain.setValueAtTime(c.v,t);
  if(c.w!=="tri")g.gain.linearRampToValueAtTime(c.v*.6,t+Math.min(.18,dur*.5));
  g.gain.setValueAtTime(c.w!=="tri"?c.v*.6:c.v,Math.max(t,end-.03));
  g.gain.linearRampToValueAtTime(0,end);
  o.connect(g);g.connect(out);o.start(t);o.stop(end+.02);
}
function stopSong(){
  if(MUSIC.timer){clearInterval(MUSIC.timer);MUSIC.timer=null;}
  if(MUSIC.gain&&AC){ try{ const gg=MUSIC.gain; gg.gain.setValueAtTime(gg.gain.value,AC.currentTime); gg.gain.linearRampToValueAtTime(0,AC.currentTime+.08); setTimeout(()=>{try{gg.disconnect();}catch(e){}},200);}catch(e){} }
  MUSIC.gain=null; MUSIC.chans=null;
}
function playSong(name){
  stopSong(); MUSIC.cur=name;
  if(!name||S.mute)return;
  const a=ac(); if(!a)return;
  const song=SONGS[name]; MUSIC.song=song;
  MUSIC.gain=a.createGain(); MUSIC.gain.gain.value=.55; MUSIC.gain.connect(a.destination);
  const t0=a.currentTime+.06;
  MUSIC.chans=song.ch.map(c=>({c,i:0,t:t0,done:false}));
  MUSIC.timer=setInterval(musicTick,25); musicTick();
}
function musicTick(){
  const a=AC; if(!a||!MUSIC.chans)return;
  const step=60/MUSIC.song.bpm/2, horizon=a.currentTime+.2, out=MUSIC.gain;
  MUSIC.chans.forEach(ch=>{
    if(ch.t<a.currentTime-.5) ch.t=a.currentTime+.02;   /* タブ復帰時の追いつき */
    while(!ch.done&&ch.t<horizon){
      const ev=ch.c.ev[ch.i], dur=ev.d*step;
      mNote(a,out,ch.c,ev,ch.t,dur);
      ch.t+=dur; ch.i++;
      if(ch.i>=ch.c.ev.length){ if(MUSIC.song.loop)ch.i=0; else ch.done=true; }
    }
  });
}

on(document,"pointerdown",()=>{ const a=ac(); if(a&&a.state==="suspended")a.resume(); if(MUSIC.want&&!MUSIC.chans&&!S.mute) playSong(MUSIC.want); },true);
function music(name){ MUSIC.want=name; if(MUSIC.cur===name&&MUSIC.chans)return; playSong(name); }
function sfxRight(){ sq(1175,.09,.08); sq(1568,.22,.08,.09); }
function sfxWrong(){ sq(196,.3,.06); sq(185,.3,.05); }
function sfxHint(){ [1568,2093,2637,2093].forEach((f,i)=>sq(f,.06,.045,i*.05)); }
function sfxCoin(){ sq(988,.06,.07); sq(1319,.14,.07,.06); }
function sfxTick(){ sq(1760,.03,.04); }
function sfxBreak(){ noise(.7,.12); tri(220,.6,.12,0,40); noise(.4,.08,.35); }
function sfxDecide(){ sq(1319,.05,.06); sq(1760,.08,.06,.05); }
function sfxCancel(){ sq(659,.05,.06); sq(494,.07,.06,.05); }
function sfxStart(){ sq(784,.08,.07); sq(1047,.2,.07,.09); }
function sfxCombo(n){ for(let i=0;i<Math.min(n,4)+1;i++) sq(1047*Math.pow(1.12,i),.05,.05,.02+i*.045); }

/* ============================================================
   ゲーム進行
   ============================================================ */
const G={mode:"title", cfg:null, sc:null, tLeft:0, running:false, paused:false, ext:false, t:0, fx:[], shake:0,
  wrongs:[], lockUntil:0, hints:0, buys:0, misses:0, lastFind:-9, combo:0, stageKey:null, breakT:-1, snap:null, reveal:false,
  lastTick:0, ended:false, veil:false, press:null, loupe:null, cur:{x:PW/2,y:PH/2,on:false}, hop:-9, say:"", sayT:0, chests:0};
const cA=$("cA"), cB=$("cB"), xA=cA.getContext("2d"), xB=cB.getContext("2d");
xA.imageSmoothingEnabled=false; xB.imageSmoothingEnabled=false;
const COST={hint:2, time:3, cont:3};

function show(id){ ["scr-title","scr-map","scr-play"].forEach(s=>$(s).hidden=s!==id); G.mode=id.slice(4); layout(); }
function applyLang(){
  root.querySelectorAll("[data-j]").forEach(el=>{ el.textContent=S.lang==="en"?el.dataset.e:el.dataset.j; });
  $("bLang").textContent=S.lang==="en"?"日本語":"EN";
  $("bMute").textContent=S.mute?"♪ OFF":"♪ ON"; $("bMute").setAttribute("aria-pressed",String(!S.mute));
  $("bSnd").textContent=S.mute?"♪×":"♪";
  root.querySelector(".tw-app").classList.toggle("rm",S.rm);
  $("hintCost").textContent=J("かけら","shards")+" "+COST.hint; $("timeCost").textContent=J("かけら","shards")+" "+COST.time;
  $("keysHelp").textContent=J("キー: 矢印で照準 · Enterでタップ · Z長押しでズーム · Hヒント · T時間 · Pポーズ · M音","Keys: arrows aim · Enter tap · hold Z zoom · H hint · T time · P pause · M mute");
  $("meName").textContent=friendLabel();
  $("bAns").innerHTML=`${J("こたえ","Answers")}<small>${J("テスト用","test only")}</small>`;
  if(G.mode==="map") buildMap(); if(G.mode==="play") hud();
  titleFriend(); econUi();
}
function econUi(){
  const snap=ECON.snap;
  $("shardHud").innerHTML=`${J("かけら","Shards")} <b>${S.shards}</b>`;
  $("bTreasure2").textContent=snap?`${J("たからもの","Treasure")} · ${ECON.fmt(snap.rfBalance)} RF`:J("たからもの","Treasure");
  $("bHint").style.opacity=S.shards>=COST.hint?1:.5; $("bTime").style.opacity=S.shards>=COST.time?1:.5;
}
const isleName=i=>J(ISLES[i].j,ISLES[i].e);
const todayStr=()=>{ const d=new Date(); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); };
const friendLabel=()=>FRIEND_ID?("#"+FRIEND_ID):"";
function say(txt){ G.say=txt; G.sayT=G.t; const el=$("meSay"); if(el) el.textContent=txt; }

/* ---------- 島マップ ---------- */
function starsOf(i,s){ return S.stars[i+"-"+s]||0; }
function unlocked(i,s){ if(TEST||(i===0&&s===0))return true; if(s>0) return starsOf(i,s-1)>0; return starsOf(i-1,STAGES-1)>0; }
const THUMB={};
function thumb(i){
  if(THUMB[i])return THUMB[i];
  const th=ISLES[i], c=document.createElement("canvas"); c.width=320; c.height=160; const x=c.getContext("2d");
  const g=x.createLinearGradient(0,0,0,160); g.addColorStop(0,th.sky[0]); g.addColorStop(1,th.sky[2]); x.fillStyle=g; x.fillRect(0,0,320,160);
  if(th.deco==="sea"){ x.fillStyle="#2f86c4"; x.fillRect(0,95,320,65); }
  const ic=isleCanvas(i,th), s=Math.min(300/ic.width,140/ic.height); x.imageSmoothingEnabled=true;
  x.drawImage(ic,(320-ic.width*s)/2,(160-ic.height*s)/2+6,ic.width*s,ic.height*s);
  c.className="thumb"; THUMB[i]=c; return c;
}
function buildMap(){
  econUi();
  const dt=todayStr(), dd=S.daily[dt];
  $("dailyDate").textContent=dt.slice(5).replace("-","/");
  $("dailyInfo").textContent=dd?J("クリア済み ★"+dd.stars+" のこり"+dd.t.toFixed(1)+"秒","Cleared ★"+dd.stars+" · "+dd.t.toFixed(1)+"s left")
                                :J("まちがい6つ・80秒・みんな同じ問題","6 differences · 80 s · same puzzle for everyone");
  $("bDaily2").textContent=dd?J("結果","Result"):J("あそぶ","Play");
  const L=$("isleList"); L.innerHTML="";
  let nextMarked=false, focusBtn=null;
  for(let i=0;i<ISLES.length;i++){
    const card=document.createElement("div"); card.className="isle win"+(unlocked(i,0)?"":" lock");
    card.appendChild(thumb(i));
    let tot=0; for(let s=0;s<STAGES;s++) tot+=starsOf(i,s);
    const h=document.createElement("h3"); h.innerHTML=`<span>${i+1}. ${isleName(i)}</span><small>★ ${tot}/${STAGES*3}</small>`; card.appendChild(h);
    const row=document.createElement("div"); row.className="stg";
    for(let s=0;s<STAGES;s++){ const b=document.createElement("button"); b.type="button"; const st=starsOf(i,s), ok=unlocked(i,s);
      b.innerHTML=`${i+1}-${s+1}<span class="st">${st?"★".repeat(st):""}</span>`; b.disabled=!ok;
      b.setAttribute("aria-label",`${J("ステージ","Stage")} ${i+1}-${s+1}${st?" ★"+st:""}`);
      if(ok&&!st&&!nextMarked){ b.classList.add("next"); nextMarked=true; focusBtn=b; }
      b.onclick=()=>{ sfxDecide(); startStage(stageCfg(i,s),i+"-"+s); };
      row.appendChild(b); }
    card.appendChild(row); L.appendChild(card);
  }
  if(focusBtn) setTimeout(()=>{ try{ focusBtn.focus({preventScroll:true}); }catch(e){} },0);
}

/* ---------- ステージ開始 ---------- */
function startStage(cfg,key){
  G.clearSeq=(G.clearSeq||0)+1; G.res=null; G.resultShown=false;
  const sc=makeScene(cfg);
  if(!sc){ toast(J("問題づくりに失敗…もう一度","Could not build puzzle")); return; }
  Object.assign(G,{cfg,sc,stageKey:key,tLeft:cfg.time,running:false,paused:false,fx:[],shake:0,wrongs:[],lockUntil:0,hints:0,buys:0,misses:0,lastFind:-9,combo:0,breakT:-1,snap:null,reveal:false,ended:false,veil:true,press:null,loupe:null,hop:-9,count:null});
  G.cur={x:PW/2,y:PH/2,on:G.cur.on};
  show("scr-play"); hud(); music("play"); say(J("いっしょにさがそう!","Let's find them!"));
  const title=cfg.daily?J("きょうの1まい","Daily Puzzle")+" "+cfg.daily.slice(5).replace("-","/"):`${cfg.isle+1}-${key.split("-")[1]*1+1} ${isleName(cfg.isle)}`;
  const story=!S.story?`<p>${J("悪いジェネシスが、島そっくりの<b style='color:#ff9fcb'>「にせ島」</b>を作った。","An evil Genesis forged a <b style='color:#ff9fcb'>FAKE</b> copy of the island.")}</p>
    <p>${J("あなたの友達 "+friendLabel()+" といっしょに、ちがう所をタップしよう。ぜんぶ見つけると、にせ島がくずれるぞ!","Team up with your Friend "+friendLabel()+" and tap every difference. Find them all and the fake crumbles!")}</p>`:"";
  modal(`<h2>${title}</h2>${story}
    <div class="res"><span>${J("まちがい","Differences")}</span><b>${cfg.nd}</b><span>${J("制限時間","Time limit")}</span><b>${cfg.time}${J("秒","s")}</b>
    <span>${J("まちがえてタップ","Wrong tap")}</span><b style="color:#ff8a80">-5${J("秒","s")}</b></div>
    <button type="button" class="btn gold" data-act="go">${J("はじめ!","Start!")}</button>
    <button type="button" class="btn" data-act="introBack">${J("もどる(島マップへ)","Back to the map")}</button>`);
}
/* 5・4・3・2・1・スタート! のカウントダウン(この間は絵を見せず、時間も減らない) */
function beginRun(){ S.story=true; closeModal(); G.count={left:5,shown:6}; say(J("じゅんびはいい?","Ready?")); countTick(); }
function countTick(){ const c=G.count; if(!c) return; const n=Math.ceil(c.left);
  if(n!==c.shown){ c.shown=n; c.pop=G.t; if(n>0){ sq(n===1?740:587,.13,.08); tri(n===1?370:294,.13,.08); } } }
function countEnd(){ G.count=null; G.veil=false; G.running=true; G.lastTick=Math.ceil(G.tLeft);
  { const r=$("stageWrap").getBoundingClientRect(), rr=root.getBoundingClientRect(); fxFlash("#ffffff",.55); fxBurst(r.left-rr.left+r.width/2,r.top-rr.top+r.height/2,{n:40,r:120,v:420,ring:"#ffd84a",ring2:"#ff9fcb",w:5}); fxConfetti(60); }
  sq(1175,.35,.08); sq(1568,.35,.06); tri(294,.4,.1); noise(.08,.04); toast(J("スタート!","START!")); say(J("さがそう!","Let's go!")); }

/* ---------- HUD ---------- */
function hud(){
  if(!G.cfg)return;
  const c=G.cfg;
  $("stLabel").innerHTML=c.daily?`${J("きょうの1まい","Daily")}<small>${c.daily.slice(5).replace("-","/")}</small>`:`${c.isle+1}-${G.stageKey.split("-")[1]*1+1}<small>${isleName(c.isle)}</small>`;
  const d=$("dots"); const n=G.sc.diffs.filter(x=>x.found).length;
  d.innerHTML=G.sc.diffs.map(x=>`<i class="${x.found?"on":""}"></i>`).join(""); d.setAttribute("aria-label",`${n}/${G.sc.diffs.length}`);
  econUi(); timeUi();
}
function timeUi(){ if(!G.cfg)return; const p=Math.max(0,G.tLeft/G.cfg.time); const b=$("timeBar"); b.style.width=Math.min(100,p*100)+"%";
  b.className=G.tLeft<=10?"hot":G.tLeft<=G.cfg.time*.35?"warn":""; $("timeNum").textContent=Math.max(0,G.tLeft).toFixed(1); }

/* ---------- 入力(タッチ・マウス・キーボード) ---------- */
const canPlay=()=>G.mode==="play"&&G.running&&!G.paused&&!G.ext;
function toLogical(e,which){ const c=which==="A"?cA:cB, r=c.getBoundingClientRect(); return [(e.clientX-r.left)*PW/r.width,(e.clientY-r.top)*PH/r.height]; }
/* プレイ画面で窓を閉じた時、ゲームが止まったままにならないよう元の画面に戻す */
function backToStage(){ if(G.mode!=="play"||!$("modal").hidden) return false;
  if(G.ended&&G.res&&G.resultShown){ renderResult(); return true; }
  if(G.ended&&G.reveal&&!G.res){ giveUpModal(); return true; }
  return false; }
function onDown(e,which){ e.preventDefault(); if(skipClear()||backToStage()) return; if(!canPlay())return;
  const [x,y]=toLogical(e,which); G.cur.on=false; G.press={which,x,y,x0:x,y0:y,t0:performance.now(),id:e.pointerId};
  try{ e.target.setPointerCapture(e.pointerId); }catch(_){} }
function onMove(e){ const p=G.press; if(!p||p.id!==e.pointerId)return; const [x,y]=toLogical(e,p.which); p.x=x; p.y=y;
  if(!G.loupe&&Math.hypot(x-p.x0,y-p.y0)>40) G.loupe={x,y}; if(G.loupe){ G.loupe.x=x; G.loupe.y=y; } }
function onUp(e){ const p=G.press; if(!p||p.id!==e.pointerId)return; G.press=null;
  const wasLoupe=!!G.loupe; G.loupe=null; if(wasLoupe) return;
  onTap(p.x0,p.y0); }
function onTap(x,y){
  if(!canPlay())return;
  G.fx.push({k:"tap",x,y,t0:G.t});
  if(performance.now()<G.lockUntil){ toast(J("おちついて…","Easy now...")); return; }
  const hitR=d=>Math.max(d.r+6,44);
  let best=null,bd=1e9;
  for(const d of G.sc.diffs){ if(d.found)continue; const dd=Math.hypot(x-d.cx,y-d.cy); if(dd<=hitR(d)&&dd<bd){best=d;bd=dd;} }
  if(best) found(best);
  else if(G.sc.diffs.some(d=>d.found&&Math.hypot(x-d.cx,y-d.cy)<=hitR(d))) { /* 見つけ済みの所は何もしない */ }
  else wrong(x,y);
}
for(const [c,w] of [[cA,"A"],[cB,"B"]]){ on(c,"pointerdown",e=>onDown(e,w)); on(c,"pointermove",onMove);
  on(c,"pointerup",onUp); on(c,"pointercancel",()=>{G.press=null;G.loupe=null;}); on(c,"contextmenu",e=>e.preventDefault()); }

function found(d){
  d.found=true; const now=G.t;
  G.combo=(now-G.lastFind<4)?G.combo+1:0; G.lastFind=now; G.hop=now;
  G.fx.push({k:"ring",x:d.cx,y:d.cy,r:d.r,t0:now});
  for(const c of [cA,cB]){ const r=c.getBoundingClientRect(), rr=root.getBoundingClientRect(); fxBurst(r.left-rr.left+d.cx*r.width/PW,r.top-rr.top+d.cy*r.height/PH,{n:14,r:40,v:240,ring:"#ffd84a",ring2:"#ffffff"}); }
  if(!S.rm) for(let i=0;i<14;i++){ const a=i/14*Math.PI*2; G.fx.push({k:"pt",x:d.cx,y:d.cy,vx:Math.cos(a)*(120+Math.random()*80),vy:Math.sin(a)*(120+Math.random()*80)-60,col:i%2?"#f7c948":"#ffffff",t0:now}); }
  let msg=J("見つけた!","Found!");
  if(G.combo>0){ msg=J("コンボ ×"+(G.combo+1),"Combo x"+(G.combo+1)); sfxCombo(G.combo); } else sfxRight();
  G.fx.push({k:"txt",x:d.cx,y:d.cy-d.r-8,txt:msg,col:"#ffe6a0",t0:now});
  say(pick(Math.random,[J("そこだ!","There!"),J("いいね!","Nice!"),J("さすが!","Sharp eyes!")]));
  hud();
  if(G.sc.diffs.every(q=>q.found)) stageClear();
}
function wrong(x,y){
  const now=G.t; G.misses++; G.tLeft-=5; if(!S.rm) G.shake=.25;
  G.fx.push({k:"x",x,y,t0:now}); G.fx.push({k:"txt",x,y:y-30,txt:J("-5秒","-5s"),col:"#ff8a80",t0:now});
  sfxWrong(); G.combo=0; say(J("ちがうかも…","Not there..."));
  G.wrongs=G.wrongs.filter(t=>now-t<2.5); G.wrongs.push(now);
  if(G.wrongs.length>=3){ G.lockUntil=performance.now()+1500; G.wrongs=[]; toast(J("れんだ禁止! 1.5秒休み","No spamming! 1.5 s cooldown")); }
  timeUi();
}
function useHint(){
  if(!canPlay())return;
  if(S.shards<COST.hint){ toast(J("かけらが足りない","Not enough shards")); sfxCancel(); return; }
  const left=G.sc.diffs.filter(d=>!d.found); if(!left.length)return;
  const d=left[Math.floor(Math.random()*left.length)];
  S.shards-=COST.hint; G.hints++; econUi();
  const a=Math.random()*Math.PI*2, off=d.r*.7;
  G.fx.push({k:"hint",x:d.cx+Math.cos(a)*off,y:d.cy+Math.sin(a)*off,r:d.r*1.9,t0:G.t});
  sfxHint(); toast(J("このあたりが あやしい…","Something's off around here...")); say(J("このへん あやしい","Look around here"));
}
function buyTime(){
  if(!canPlay())return;
  if(S.shards<COST.time){ toast(J("かけらが足りない","Not enough shards")); sfxCancel(); return; }
  S.shards-=COST.time; G.buys++; G.tLeft+=15; econUi(); sfxCoin(); toast(J("じかん +15秒!","+15 seconds!")); timeUi();
}
$("bHint").onclick=useHint; $("bTime").onclick=buyTime; $("bPause").onclick=()=>pause();
$("bSnd").onclick=()=>toggleMute();
if(TEST){ const b=$("bAns"); b.hidden=false; b.onclick=()=>{ G.showAns=!G.showAns; b.classList.toggle("gold",G.showAns); sfxDecide(); }; }
function pause(){
  if((!G.running&&!G.count)||G.paused)return; G.paused=true; sfxCancel();
  modal(`<h2>${J("ひと休み","Paused")}</h2><p class="note">${J("絵はかくしています","The picture is hidden")}</p>
    <button type="button" class="btn gold" data-act="resume">${J("つづける","Resume")}</button>
    <button type="button" class="btn" data-act="quit">${J("やめて島マップへ","Quit to map")}</button>`);
}
on(document,"visibilitychange",()=>{ if(document.hidden) pause(); });
on(window,"blur",()=>{ G.press=null; G.loupe=null; G.zoomKey=false; });

/* キーボード: 照準を動かしてEnterでタップ */
on(document,"keydown",e=>{
  if(G.ext) return;
  const k=e.key;
  if(!$("modal").hidden){ if(k==="Escape"){ const b=$("mBox").querySelector("[data-act=resume],[data-act=close],[data-act=introBack]"); if(b){ e.preventDefault(); b.click(); } } return; }
  if(k==="m"||k==="M"){ toggleMute(); return; }
  if(G.mode!=="play") return;
  if((k==="Enter"||k===" ")&&skipClear()){ e.preventDefault(); return; }
  if(k==="Escape"||k==="p"||k==="P"){ e.preventDefault(); pause(); return; }
  if(!canPlay()) return;
  const step=e.shiftKey?48:16; let mv=true;
  if(k==="ArrowLeft"||k==="a"||k==="A") G.cur.x-=step; else if(k==="ArrowRight"||k==="d"||k==="D") G.cur.x+=step;
  else if(k==="ArrowUp"||k==="w"||k==="W") G.cur.y-=step; else if(k==="ArrowDown"||k==="s"||k==="S") G.cur.y+=step; else mv=false;
  if(mv){ e.preventDefault(); G.cur.on=true; G.cur.x=Math.max(0,Math.min(PW,G.cur.x)); G.cur.y=Math.max(0,Math.min(PH,G.cur.y)); if(G.loupe){G.loupe.x=G.cur.x;G.loupe.y=G.cur.y;} return; }
  if(k==="Enter"||k===" "){ e.preventDefault(); if(!G.cur.on){ G.cur.on=true; return; } onTap(G.cur.x,G.cur.y); return; }
  if(k==="z"||k==="Z"){ e.preventDefault(); G.cur.on=true; G.loupe={x:G.cur.x,y:G.cur.y}; G.zoomKey=true; return; }
  if(k==="h"||k==="H"){ useHint(); return; }
  if(k==="t"||k==="T"){ buyTime(); return; }
});
on(document,"keyup",e=>{ if((e.key==="z"||e.key==="Z")&&G.zoomKey){ G.zoomKey=false; G.loupe=null; } });

/* ---------- クリア・時間切れ ---------- */
/* クリア演出: にせ島がくずれる → 悪いジェネシスがひと言(1文字ずつ) → 逃げる → 結果。タップでとばせる */
const LINES=[["おのれ〜… おぼえてろ!","Curses... I'll be back!"],["にせ島が… くずれていく…!","My fake isle... it's crumbling...!"],["くっ… 見やぶられたか…!","Ugh... you saw through it...!"],["つぎの島では こうはいかんぞ!","The next isle won't be so easy!"]];
const CLEAR_T={start:.9, get fly(){ return S.rm?2.6:3.6; }, get end(){ return S.rm?3.0:4.3; }};
function stageClear(){
  G.running=false; G.ended=true; G.hop=G.t; G.resultShown=false;
  toast(J("ぜんぶ見つけた!","All found!")); say(J("やったね!","We did it!"));
  G.clearLine=LINES[G.cfg.seed%LINES.length]; const id=G.clearSeq=(G.clearSeq||0)+1;
  after(CLEAR_T.start*1000,()=>{ if(G.clearSeq!==id) return; G.snap=document.createElement("canvas"); G.snap.width=PW; G.snap.height=PH;
    drawWorld(G.snap.getContext("2d"),G.sc,G.sc.objsB,G.t); G.breakT=G.t; G.typed=0; sfxBreak(); music(null); });
  after((CLEAR_T.start+CLEAR_T.end)*1000,()=>{ if(G.clearSeq===id) showResultOnce(); });
}
function showResultOnce(){ if(G.resultShown||G.mode!=="play"||!G.ended||G.reveal) return; G.resultShown=true; resultPanel(); }
function skipClear(){ if(G.ended&&!G.resultShown&&G.breakT>=0&&!G.reveal){ showResultOnce(); return true; } return false; }
function calcStars(){ const p=G.tLeft/G.cfg.time; let s=1; if(p>=.2)s++; if(p>=.45&&G.hints===0&&G.buys===0)s++; return s; }
function resultPanel(){
  playSong("clear"); MUSIC.want=null;
  const st=calcStars(), c=G.cfg; let shards=0, chest=0, first=false, share="";
  if(c.daily){ const prev=S.daily[c.daily]; if(!prev){ first=true; S.daily[c.daily]={stars:st,t:G.tLeft}; shards=2+st; chest=1; }
    share=`Twin Isles / ふたご島 ${c.daily.replace(/-/g,"/")}\n${"★".repeat(st)}${"☆".repeat(3-st)} ${G.tLeft.toFixed(1)}s left · misses ${G.misses}\n#RareFriends`; }
  else { const prev=S.stars[G.stageKey]||0; if(!prev){ first=true; chest=1; } if(st>prev) S.stars[G.stageKey]=st;
    shards=first?st+1:Math.max(1,st-prev); }
  S.shards+=shards; G.chests+=chest; econUi();
  const [i,s]=c.daily?[c.isle,0]:G.stageKey.split("-").map(Number);
  const hasNext=!c.daily&&(s<STAGES-1||i<ISLES.length-1);
  G.res={st,shards,chest,first,share,hasNext,daily:!!c.daily,tLeft:G.tLeft,misses:G.misses,hints:G.hints};
  renderResult();
}
/* 結果画面(宝物画面などから戻った時は、ごほうびを重ねずに同じ内容を出し直す) */
function renderResult(){
  const {st,shards,chest,first,share,hasNext}=G.res, c=G.cfg;
  modal(`<h2>${J("にせ島をこわした!","Fake Isle Destroyed!")}</h2>
    <div class="stars">${[0,1,2].map(k=>`<span class="${k<st?"on":""}" style="animation-delay:${k*.25}s">★</span>`).join("")}</div>
    <div class="res"><span>${J("のこり時間","Time left")}</span><b>${G.res.tLeft.toFixed(1)}${J("秒","s")}</b>
    <span>${J("ミス","Misses")}</span><b>${G.res.misses}</b><span>${J("ヒント","Hints")}</span><b>${G.res.hints}</b>
    <span class="g">${J("ジェネシスのかけら","Genesis shards")}</span><b class="g">+${shards}</b>
    ${chest?`<span class="g">${J("たからばこ","Treasure chest")}</span><b class="g">+1</b>`:""}</div>
    ${chest?`<p class="note">${J("たからばこを手に入れた! 開けるには「カギ」(RFで買う)が1本いる。","You got a treasure chest! Opening it needs one key, bought with RF.")}</p><button type="button" class="btn gold" data-act="treasure">${J("たからばこを開けにいく","Open the treasure chest")}</button>`:""}
    ${c.daily&&first?`<textarea class="share" rows="3" readonly>${share}</textarea><button type="button" class="btn" data-act="copy">${J("結果をコピー","Copy result")}</button>`:""}
    ${hasNext?`<button type="button" class="btn${chest?"":" gold"}" data-act="next">${J("つぎへ","Next")}</button>`:""}
    <div class="row2"><button type="button" class="btn" data-act="retry">${J("もう一度","Retry")}</button><button type="button" class="btn" data-act="map">${J("島マップ","Map")}</button></div>`);
}
function timeUp(){
  G.running=false; G.tLeft=0; timeUi(); music(null); playSong("fail"); MUSIC.want=null; say(J("まだあきらめない!","Don't give up!"));
  const left=G.sc.diffs.filter(d=>!d.found).length;
  modal(`<h2>${J("時間切れ…","Time's up...")}</h2>
    <p style="text-align:center">${J("まちがいは あと <b style='color:#ffe6a0'>"+left+"つ</b>!","<b style='color:#ffe6a0'>"+left+"</b> left to find!")}</p>
    <button type="button" class="btn gold" data-act="cont" ${S.shards<COST.cont?"disabled":""}>${J("15秒たしてつづける","Continue +15 s")}<small>${J("かけら","shards")} ${COST.cont} · ${J("のこり","you have")} ${S.shards}</small></button>
    ${S.shards<COST.cont?`<p class="note">${J("かけらが足りない。クリアするともらえる。","Not enough shards. Clears earn more.")}</p>`:""}
    <button type="button" class="btn" data-act="giveup">${J("こたえを見る","Show answers")}</button>`);
}
function giveUpModal(){ modal(`<h2>${J("また挑戦しよう","Try again")}</h2>
  <div class="row2"><button type="button" class="btn gold" data-act="retry">${J("もう一度","Retry")}</button><button type="button" class="btn" data-act="map">${J("島マップ","Map")}</button></div>`); }
function giveUp(){ closeModal(); G.reveal=true; G.ended=true; G.res=null; const id=G.clearSeq; after(2600,()=>{ if(G.clearSeq===id&&G.mode==="play") giveUpModal(); }); }

/* ============================================================
   たからもの(SDKの仮想RFアクション: カギを買う→箱を開ける→換金)
   ============================================================ */
const ITEM_ART=[
  {j:"石ころ",e:"Pebble",rows:["..kkk..",".keeek.","keewEek","kEeeeEk",".kkkkk."]},
  {j:"金のだるま",e:"Golden Daruma",rows:["......kkkkkk......","....kkyyyyyokk....","...ksyyyyyyyyok...","..kssyooooooyyok..",".kyykowwwwwwokyok.",".kyokkkkwwkkkkook.","kyyowwkkwwkkwwoyok","kyyowwkkwwkkwwoyok","kyyowwwkkkkwwwoyok","kyyookkwrrwkkooyok","kyyyoowwkkwwooyyok","kyyyyooowwoooyyyok","kyyyyyyyooyyyyyyok","kyyyyyyRRRRyyyyyok","koyyyyyyRRyyyyyyok",".kooyyyRyyRyyyook.","..kkooooooooookk..","....kkkkkkkkkk...."]},
  {j:"まねき猫",e:"Lucky Cat",rows:[".k.....k.","kwk...kwk","kwwkkkwwk","kwwwwwwwk","kwkwwwkwk","kwwwpwwwk",".krrrrrk.","kwwwywwwk","kwwwwwwwk",".kkkkkkk."]}
];
function itemName(i){ const d=ECON.client.definition.outcomes[i]; const a=ITEM_ART[i]; return a?J(a.j,a.e):(d?d.name:"?"); }
function itemScale(a,sc){ const m=Math.max(a.rows.length,a.rows[0].length); return m>10?Math.max(1,Math.round(sc*10/m)):sc; }
function itemCanvas(i,sc0){ const a=ITEM_ART[i]||ITEM_ART[0], sc=itemScale(a,sc0); const s=rowsSprite("item"+i+sc,a.rows,sc,"#000");
  const c=document.createElement("canvas"); const n=Math.max(a.rows.length,a.rows[0].length)*sc+8; c.width=n; c.height=n; const x=c.getContext("2d");
  x.drawImage(s,Math.round((n-s.width)/2),Math.round((n-s.height)/2)); return c; }
async function refresh(){ const v=await ECON.client.read(); ECON.snap=v; econUi(); return v; }
async function act(work,after){
  if(ECON.busy) return; ECON.busy=true; ECON.err="";
  try{ await work(); await refresh(); if(after) after(); }
  catch(e){ ECON.err=e instanceof Error?e.message:J("うまくいかなかった","Action failed"); }
  finally{ ECON.busy=false; if(ECON.view==="treasure") treasurePanel(); }
}
function treasurePanel(){
  ECON.view="treasure";
  const s=ECON.snap, def=ECON.client.definition, f=ECON.fmt;
  if(!s){ modal(`<h2>${J("たからもの","Treasure")}</h2><p class="note">${J("読み込み中…","Loading…")}</p>`); refresh().then(treasurePanel,()=>{ ECON.err=J("読み込みに失敗","Could not load"); modal(`<h2>${J("たからもの","Treasure")}</h2><p class="err">${ECON.err}</p><button type="button" class="btn" data-act="treasure">${J("もう一度","Retry")}</button><button type="button" class="btn" data-act="close">${J("とじる","Close")}</button>`); }); return; }
  const maxPrize=def.outcomes.reduce((m,o)=>o.reward>m?o.reward:m,0n);
  const canBuy=s.rfBalance>=def.price&&s.freeStake>=maxPrize&&s.freeStake+def.price>=maxPrize;
  const pending=s.plays.find(p=>p.outcomeId===null);
  const keys=s.consumables;
  const preview=(ECON.client.mode||s.mode)!=="chain";
  modal(`<h2>${J("たからもの","Treasure")}</h2>
    ${preview?`<p class="note"><span class="demo">${J("プレビュー: RF・カギ・たからは仮のものです","Preview: RF, keys and treasures are simulated")}</span></p>`:""}
    <div class="res"><span>${J("友達のRF","Friend RF")}</span><b>${f(s.rfBalance)} RF</b>
      <span>${J("たからのカギ","Treasure keys")}</span><b>${keys.toString()}</b>
      <span>${J("開けられる箱","Chests to open")}</span><b>${G.chests}</b></div>
    <div class="flow">
      <div><b>1</b>${J("ステージを<br>初クリア","Clear a stage<br>(first time)")}<small>${J("→ たからばこ","→ a chest")}</small></div>
      <div><b>2</b>${J("RFで<br>カギを買う","Buy a key<br>with RF")}<small>${J("1本 = ","1 key = ")}${f(def.price)} RF</small></div>
      <div><b>3</b>${J("カギで<br>箱を開ける","Open the chest<br>with the key")}<small>${J("中身は運","Luck decides")}</small></div>
      <div><b>4</b>${J("たからは<br>とっておく","Keep the<br>treasure")}<small>${J("or 換金でRFに","or redeem for RF")}</small></div>
    </div>
    <p class="note">${J("たからは3種類。よく出る石ころ、ときどき金のだるま、たまにまねき猫。平均するとカギ代より少し少なく戻る(平均0.9RF)。","Three treasures: the common Pebble, the Golden Daruma and the rare Lucky Cat. On average you get back a little less than the key costs (0.9 RF).")}</p>
    <div class="row2">
      <button type="button" class="btn" data-act="buyKey" ${!canBuy||ECON.busy?"disabled":""}>${J("カギを買う","Buy a key")}<small>${f(def.price)} RF</small></button>
      <button type="button" class="btn gold" data-act="openChest" ${ECON.busy||(!pending&&(keys===0n||G.chests<1))?"disabled":""}>${pending?J("開けかけの箱","Resume chest"):J("箱を開ける","Open chest")}<small>${pending?J("つづきから","continue"):J("カギ1本","1 key")}</small></button>
    </div>
    ${!canBuy&&s.rfBalance<def.price?`<p class="err">${J("RFが足りない","Not enough RF")}</p>`:""}
    <table class="tbl"><tr><th>${J("中身","Inside")}</th><th>${J("確率","Chance")}</th><th>${J("価値","Value")}</th></tr>
      ${def.outcomes.map((o,i)=>`<tr><td>${itemName(i)}</td><td>${o.chanceBps/100}%</td><td>${f(o.reward)} RF</td></tr>`).join("")}</table>
    <div id="invList">${def.outcomes.map((o,i)=>`<div class="item"><span data-art="${i}"></span><div class="nm">${itemName(i)}<small>${s.inventory[i].toString()} ${J("こ","owned")} · ${f(o.reward)} RF</small></div>
      <button type="button" class="btn" data-act="redeem" data-i="${i}" ${ECON.busy||s.inventory[i]===0n||o.reward===0n?"disabled":""}>${J("換金","Redeem")}</button></div>`).join("")}</div>
    ${ECON.err?`<p class="err" role="alert">${ECON.err}</p>`:""}${ECON.busy?`<p class="note" role="status">${J("確認を待っています…","Waiting for confirmation…")}</p>`:""}
    <button type="button" class="btn" data-act="close">${J("とじる","Close")}</button>`);
  $("mBox").querySelectorAll("[data-art]").forEach(el=>el.replaceWith(itemCanvas(+el.dataset.art,4)));
}
function openChest(){
  const s=ECON.snap; const pending=s&&s.plays.find(p=>p.outcomeId===null);
  let result=null;
  act(async()=>{ const play=pending||(await ECON.client.play(1n))[0]; if(!pending) G.chests=Math.max(0,G.chests-1); result=await ECON.client.settle(play.id); },
    ()=>{ if(result&&result.outcomeId){ ECON.view="reveal"; revealPanel(result.outcomeId); } });
}
/* ---------- 換金: 確認画面 → 換金 → コインがはじける ---------- */
function redeemAsk(i){
  ECON.view="redeemAsk"; ECON.err="";
  const s=ECON.snap, o=ECON.client.definition.outcomes[i], f=ECON.fmt, have=s?s.inventory[i]:0n, rare=rarityOf(i);
  if(!s||have===0n||o.reward===0n){ treasurePanel(); return; }
  modal(`<div class="rdm"><h2>${J("換金しますか?","Redeem this treasure?")}</h2>
    <div class="rdmArt${rare===2?" r2":rare===1?" r1":""}"><span data-art="${i}"></span></div>
    <p class="rdmName">${itemName(i)} <b>×1</b></p>
    <div class="rdmSwap"><div><small>${J("わたすもの","You give")}</small><b>${itemName(i)} ×1</b><small>${J("のこり","left")} ${have.toString()} → ${(have-1n).toString()}</small></div>
      <span class="arr">→</span>
      <div><small>${J("もらえるもの","You get")}</small><b class="g">+${f(o.reward)} RF</b><small>RF ${f(s.rfBalance)} → ${f(s.rfBalance+o.reward)}</small></div></div>
    <p class="note">${J("換金したたからは なくなります。とり消しはできません。","The treasure is used up. This cannot be undone.")}</p>
    ${(ECON.client.mode||s.mode)!=="chain"?`<p class="note"><span class="demo">${J("プレビュー: RFは仮のものです","Preview: RF is simulated")}</span></p>`:""}
    <div class="row2"><button type="button" class="btn" data-act="treasure">${J("やめる","Cancel")}</button>
      <button type="button" class="btn gold" data-act="redeemGo" data-i="${i}">${J("換金する","Redeem")}<small>+${f(o.reward)} RF</small></button></div></div>`);
  $("mBox").querySelectorAll("[data-art]").forEach(el=>el.replaceWith(itemCanvas(+el.dataset.art,8)));
}
function redeemGo(i){
  const o=ECON.client.definition.outcomes[i], before=ECON.snap?ECON.snap.rfBalance:0n;
  ECON.view="treasure";
  const box=$("mBox"); if(box) box.querySelectorAll("button").forEach(b=>b.disabled=true);
  const st=box&&box.querySelector(".rdm .note"); if(st) st.textContent=J("確認を待っています…","Waiting for confirmation…");
  act(()=>ECON.client.redeem(i+1,1n),()=>{ ECON.view="redeemDone"; redeemDone(i,o.reward,before); });
}
function redeemDone(i,reward,before){
  const s=ECON.snap, f=ECON.fmt, rare=rarityOf(i), after_=s?s.rfBalance:before+reward;
  modal(`<div class="rdm done"><h2>${J("換金できた!","Redeemed!")}</h2>
    <div class="rdmGain${rare===2?" r2":""}">+${f(reward)} <span>RF</span></div>
    <p class="note">${itemName(i)} → ${f(reward)} RF</p>
    <div class="res"><span>${J("友達のRF","Friend RF")}</span><b id="rdmBal">${f(before)} RF</b></div>
    <div class="row2"><button type="button" class="btn gold" data-act="treasure">${J("たからものへ","Back to Treasure")}</button>
      <button type="button" class="btn" data-act="close">${J("とじる","Close")}</button></div></div>`);
  const r=$("mBox").getBoundingClientRect(), rr=root.getBoundingClientRect(), cx=r.left-rr.left+r.width/2, cy=r.top-rr.top+r.height*.33;
  fxCoins(cx,cy,rare===2?30:rare===1?16:9,rare);
  fxFlash(rare===2?"#ffd84a":"#fff3c0",rare===2?.5:.25); if(rare===2) fxConfetti(80);
  sfxRedeem(rare);
  const el=$("rdmBal"), t0=performance.now(), d=S.rm?0:900, a=Number(before)/1e18, b=Number(after_)/1e18;
  const tick=()=>{ if(!el.isConnected) return; const k=d?Math.min(1,(performance.now()-t0)/d):1; el.textContent=(a+(b-a)*k).toFixed(1).replace(/\.0$/,"")+" RF";
    if(k<1) requestAnimationFrame(tick); else el.textContent=f(after_)+" RF"; };
  tick();
}
function sfxRedeem(rare){ const n=rare===2?9:rare===1?6:4; for(let k=0;k<n;k++) sq(1175+k*90,.05,.05,k*.07); sq(1568,.25,.07,n*.07); sq(2093,.35,.06,n*.07+.1);
  if(rare===2) [784,988,1175,1568].forEach((f,k)=>sq(f,.16,.06,n*.07+.3+k*.1)); }

/* ---------- 宝箱を開ける演出 ---------- */
const CHEST={raf:0};
const CHEST_BODY=["kkkkkkkkkkkk","knnnnyynnnnk","knnnnykynnnk","knnnnyynnnnk","kNNNNNNNNNNk","kkkkkkkkkkkk"];
const CHEST_LID=["..kkkkkkkk..",".knnnnnnnnk.","knnnnnnnnnnk","kyyyyyyyyyyk","kkkkkkkkkkkk"];
function rarityOf(i){ const o=ECON.client.definition.outcomes; return o.filter(q=>q.chanceBps<o[i].chanceBps).length===0?2:o.filter(q=>q.chanceBps>o[i].chanceBps).length===0?0:1; }
function revealPanel(outcomeId){
  const i=outcomeId-1, o=ECON.client.definition.outcomes[i], rare=rarityOf(i);
  modal(`<div class="reveal"><h2 id="rvTitle">${J("たからばこを開けるよ…","Opening the chest…")}</h2>
    <canvas id="chestCv" width="320" height="220" aria-hidden="true"></canvas>
    <div id="rvBody" hidden><h2 style="color:${rare===2?"#ffd84a":rare===1?"#ffe6a0":"#d6d6e0"}">${rare===2?"★ ":""}${itemName(i)}${rare===2?" ★":""}</h2>
    <p class="note">${ECON.fmt(o.reward)} RF · ${o.chanceBps/100}%${rare===2?J(" · 大当たり!"," · Jackpot!"):rare===0?J(" · ざんねん…"," · Better luck next time"):""}</p>
    <p class="note">${J("友達の持ち物に入った(仮)","Added to your Friend's inventory (simulated)")}</p>
    <div class="row2"><button type="button" class="btn gold" data-act="treasure">${J("とっておく","Keep it")}</button>
    ${o.reward>0n?`<button type="button" class="btn" data-act="redeem" data-i="${i}">${J("換金","Redeem")} ${ECON.fmt(o.reward)} RF</button>`:""}</div></div>
    <p class="note" id="rvSkip">${J("タップでとばす","Tap to skip")}</p></div>`);
  const cv=$("chestCv"), x=cv.getContext("2d"); x.imageSmoothingEnabled=false;
  const item=rowsSprite("item"+i+"x",(ITEM_ART[i]||ITEM_ART[0]).rows,1,"#000");
  const body=rowsSprite("chestB",CHEST_BODY,8,"#000"), lid=rowsSprite("chestL",CHEST_LID,8,"#000");
  const COL=rare===2?null:rare===1?"#ffd84a":"#b8b8c8";
  const t0=performance.now(); let skipAt=S.rm?0:null, done=false, lastHop=-1, parts=[];
  const END=2.2;
  cv.onclick=()=>{ if(skipAt===null) skipAt=(performance.now()-t0)/1000; };
  const finish=()=>{ if(done) return; done=true; const bd=$("rvBody"), tt=$("rvTitle"), sk=$("rvSkip"); if(bd) bd.hidden=false; if(sk) sk.hidden=true;
    if(tt) tt.textContent=J("たからばこの中身は…","Inside the chest…");
    if(rare===2){ [523,659,784,1047,784,1047,1319].forEach((f,k)=>sq(f,k===6?.4:.09,.08,k*.09)); tri(262,.6,.1,.3); }
    else if(rare===1) sfxFanfareSmall(); else { sq(392,.12,.06); sq(330,.25,.06,.13); }
    const b=$("mBox").querySelector("#rvBody .btn.gold"); if(b) try{ b.focus({preventScroll:true}); }catch(e){} };
  const hue=t=>`hsl(${(t*240)%360},95%,65%)`;
  function frame(now){
    let t=(now-t0)/1000; if(skipAt!==null) t=Math.max(t,END+.3);
    x.clearRect(0,0,320,220);
    const open=t>=1.0, cx=160, by=150;
    /* 背景の光 */
    if(open){ const k=Math.min(1,(t-1)/.3); x.save(); x.globalAlpha=.9*k; x.translate(cx,by-6);
      const n=rare===2?12:rare===1?9:6; for(let r=0;r<n;r++){ x.rotate(Math.PI*2/n); x.fillStyle=COL||hue(t+r*.08); x.globalAlpha=(rare===0?.25:.45)*k;
        x.beginPath(); x.moveTo(0,0); x.lineTo(-10,-150); x.lineTo(10,-150); x.fill(); }
      x.restore(); x.globalAlpha=1; }
    /* 箱 */
    let sx=0, sy=0;
    if(!open&&!S.rm){ const amp=1+t*4; sx=Math.round(Math.sin(t*38)*amp); const hop=[.35,.7].find(h=>t>=h&&t<h+.12); if(hop!==undefined){ sy=-Math.round(Math.sin((t-hop)/.12*Math.PI)*8); if(lastHop!==hop){ lastHop=hop; noise(.05,.05); sq(196,.05,.05); } } }
    x.fillStyle="rgba(0,0,0,.35)"; x.fillRect(cx-52,by+46,104,6);
    x.drawImage(body,cx-48+sx,by-2+sy);
    if(!open){ x.drawImage(lid,cx-48+sx,by-42+sy);
      if(rare>0&&!S.rm&&Math.floor(t*10)%2===0){ x.fillStyle=COL||hue(t); x.fillRect(cx-40+sx,by-4+sy,80,3); } }
    else { const k=S.rm?1:Math.min(1,(t-1)/.22), ang=-k*1.9; x.save(); x.translate(cx-48,by-2); x.rotate(ang); x.drawImage(lid,0,-40); x.restore();
      if(t<1.25&&!S.rm){ x.fillStyle=`rgba(255,255,255,${1-(t-1)/.25})`; x.fillRect(0,0,320,220); }
      if(lastHop!==-9){ lastHop=-9; if(!S.rm){ sq(784,.06,.06); sq(1175,.1,.06,.05); } }
      /* 中身が上がってくる */
      const k2=S.rm?1:Math.max(0,Math.min(1,(t-1.15)/.7)), e=1-Math.pow(1-k2,3);
      const art=ITEM_ART[i]||ITEM_ART[0], big=Math.max(art.rows.length,art.rows[0].length)>10?10/Math.max(art.rows.length,art.rows[0].length):1, scl=Math.max(1,Math.round((3+e*3)*big)), iw=item.width*scl, ih=item.height*scl, iy=by-8-e*58-ih/2+(k2>=1&&!S.rm?Math.sin(t*3)*3:0);
      if(k2>0){ x.drawImage(item,Math.round(cx-iw/2),Math.round(iy-ih/2),iw,ih); }
      /* きらきら */
      if(!S.rm&&k2>0&&parts.length<(rare===2?90:rare===1?40:12)&&t<END+1){ parts.push({x:cx+(Math.random()-.5)*60,y:by-20,vx:(Math.random()-.5)*(rare===0?40:160),vy:-60-Math.random()*(rare===0?40:160),t:t,c:rare===2?hue(Math.random()):rare===1?(Math.random()<.5?"#ffd84a":"#fff"):"#9a9aa8"}); }
      for(const q of parts){ const a=t-q.t; if(a>1.4) continue; x.globalAlpha=Math.max(0,1-a/1.4); x.fillStyle=q.c; x.fillRect(Math.round(q.x+q.vx*a),Math.round(q.y+q.vy*a+120*a*a),rare===2?5:4,rare===2?5:4); }
      x.globalAlpha=1;
      if(rare===0&&k2>=1){ x.font="bold 20px DotGothic16, monospace"; x.textAlign="center"; x.fillStyle="#d6d6e0"; x.fillText("…",cx+62,by-90); }
    }
    if(t>=END&&!done) finish();
    if($("chestCv")===cv) CHEST.raf=requestAnimationFrame(frame);
  }
  cancelAnimationFrame(CHEST.raf); CHEST.raf=requestAnimationFrame(frame);
}
function sfxFanfareSmall(){ [523,659,784,1047].forEach((f,i)=>sq(f,i===3?.3:.08,.07,i*.08)); }

/* ---------- モーダル ---------- */
function modal(html){ cancelAnimationFrame(CHEST.raf); $("mBox").innerHTML=html; $("modal").hidden=false;
  const b=$("mBox").querySelector(".btn.gold:not([disabled])")||$("mBox").querySelector("button:not([disabled])"); if(b) setTimeout(()=>{ try{ b.focus({preventScroll:true}); }catch(e){} },0); }
function closeModal(){ $("modal").hidden=true; ECON.view=null; cancelAnimationFrame(CHEST.raf); }
on($("mBox"),"click",e=>{
  const b=e.target.closest("[data-act]"); if(!b||b.disabled)return; const act_=b.dataset.act;
  if(act_!=="copy") sfxDecide();
  if(act_==="go") beginRun();
  else if(act_==="resume"){ closeModal(); G.paused=false; }
  else if(act_==="introBack"){ closeModal(); G.running=false; G.count=null; G.clearSeq=(G.clearSeq||0)+1; openMap(); }
  else if(act_==="quit"||act_==="map"){ closeModal(); G.running=false; openMap(); }
  else if(act_==="retry"){ closeModal(); startStage(G.cfg,G.stageKey); }
  else if(act_==="next"){ closeModal(); const [i,s]=G.stageKey.split("-").map(Number); const ni=s<STAGES-1?i:i+1, ns=s<STAGES-1?s+1:0; startStage(stageCfg(ni,ns),ni+"-"+ns); }
  else if(act_==="cont"){ if(S.shards<COST.cont){ toast(J("かけらが足りない","Not enough shards")); sfxCancel(); return; }
    S.shards-=COST.cont; G.buys++; closeModal(); G.tLeft=15; G.running=true; music("hurry"); econUi(); timeUi(); }
  else if(act_==="giveup") giveUp();
  else if(act_==="treasure"){ ECON.err=""; treasurePanel(); }
  else if(act_==="buyKey") act(()=>ECON.client.buy(1n),()=>{ sfxCoin(); });
  else if(act_==="openChest") openChest();
  else if(act_==="redeem") redeemAsk(+b.dataset.i);
  else if(act_==="redeemGo") redeemGo(+b.dataset.i);
  else if(act_==="dailyReplay"){ closeModal(); startStage(dailyCfg(todayStr()),"daily"); }
  else if(act_==="copy"){ const ta=$("mBox").querySelector("textarea"); ta.select();
    const done=()=>{ b.textContent=J("コピーしました","Copied!"); sfxCoin(); };
    const fb=()=>{ try{ if(document.execCommand("copy")) done(); else b.textContent=J("文字を選んでコピーしてね","Select the text to copy"); }catch(e){ b.textContent=J("文字を選んでコピーしてね","Select the text to copy"); } };
    const pp=document.permissionsPolicy||document.featurePolicy; let allowed=true; try{ if(pp&&pp.allowsFeature) allowed=pp.allowsFeature("clipboard-write"); }catch(e){}
    if(allowed&&navigator.clipboard&&navigator.clipboard.writeText) navigator.clipboard.writeText(ta.value).then(done,fb); else fb(); }
  else if(act_==="close"){ closeModal(); backToStage(); }
});
let toastTimer=0;
function toast(t){ const el=$("toast"); el.textContent=t; el.classList.remove("show"); void el.offsetWidth; el.classList.add("show");
  clearTimeout(toastTimer); toastTimer=setTimeout(()=>{ el.classList.remove("show"); el.textContent=""; },1100); timers.push(toastTimer); }

/* ---------- 描画ループ ---------- */
function renderPanel(x,side){
  const sc=G.sc; if(!sc)return;
  x.save();
  if(G.shake>0&&!S.rm) x.translate(Math.round((Math.random()-.5)*10*G.shake/.25),Math.round((Math.random()-.5)*6*G.shake/.25));
  if(G.veil){ x.fillStyle="#0b0916"; x.fillRect(0,0,PW,PH); x.fillStyle="#241f3d"; for(let yy=0;yy<PH;yy+=16) for(let xx=(yy/16&1)*16;xx<PW;xx+=32) x.fillRect(xx,yy,16,16);
    x.fillStyle=side==="A"?"#f5f0e6":"#ff9fcb"; x.font="34px DotGothic16, monospace"; x.textAlign="center";
    if(G.count){ const n=Math.ceil(G.count.left), age=G.t-(G.count.pop||0), k=S.rm?1:Math.min(1,age/.18), sz=Math.round(170-50*k);
      x.fillText(side==="A"?J("ほんもの","REAL"):J("にせ島","FAKE"),PW/2,90);
      x.font=`bold ${sz}px DotGothic16, monospace`; x.lineWidth=12; x.strokeStyle="#000"; x.strokeText(String(n),PW/2,PH/2+sz*.35); x.fillStyle=n===1?"#ffd84a":"#ffffff"; x.fillText(String(n),PW/2,PH/2+sz*.35); }
    else x.fillText(side==="A"?J("ほんもの","REAL"):J("にせ島","FAKE"),PW/2,PH/2+12);
    x.restore(); return; }
  if(G.paused||G.ext){ x.fillStyle="#000"; x.fillRect(0,0,PW,PH); x.fillStyle="#6b6490"; x.font="28px DotGothic16, monospace"; x.textAlign="center"; x.fillText("PAUSE",PW/2,PH/2); x.restore(); return; }
  if(side==="B"&&G.breakT>=0){ drawBreak(x); x.restore(); return; }
  drawWorld(x,sc,side==="A"?sc.objsA:sc.objsB,G.t);
  drawFx(x);
  x.restore();
  if(G.loupe) drawLoupe(x);
  if(G.cur.on&&G.running) drawCursor(x);
}
function drawCursor(x){ const c=G.cur; x.save(); x.lineWidth=6; x.strokeStyle="#1a1423";
  const seg=(a,b,c2,d)=>{ x.beginPath(); x.moveTo(a,b); x.lineTo(c2,d); x.stroke(); };
  for(const [w,col] of [[6,"#1a1423"],[3,"#ffffff"]]){ x.lineWidth=w; x.strokeStyle=col; seg(c.x-22,c.y,c.x-8,c.y); seg(c.x+8,c.y,c.x+22,c.y); seg(c.x,c.y-22,c.x,c.y-8); seg(c.x,c.y+8,c.x,c.y+22);
    x.beginPath(); x.arc(c.x,c.y,14,0,Math.PI*2); x.stroke(); }
  x.restore(); }
function ring(x,cx,cy,r,col,w){ x.lineWidth=w+4; x.strokeStyle="#1a1423"; x.beginPath(); x.arc(cx,cy,r,0,Math.PI*2); x.stroke();
  x.lineWidth=w; x.strokeStyle=col; x.beginPath(); x.arc(cx,cy,r,0,Math.PI*2); x.stroke(); }
function drawFx(x){
  const t=G.t;
  for(const d of G.sc.diffs){ if(d.found){ const f=G.fx.find(q=>q.k==="ring"&&q.x===d.cx&&q.y===d.cy); const age=f?t-f.t0:9;
      const rr=(age<.22&&!S.rm)?d.r*(1.6-age/.22*.6):d.r; ring(x,d.cx,d.cy,rr,"#f7c948",5); }
    else if(G.reveal&&(S.rm||Math.floor(t*4)%2===0)) ring(x,d.cx,d.cy,d.r,"#e8413a",5);
    else if(G.showAns){ x.setLineDash([8,6]); ring(x,d.cx,d.cy,d.r,"#ff5c8a",3); x.setLineDash([]); } }
  x.font="bold 26px DotGothic16, monospace"; x.textAlign="center";
  for(const f of G.fx){ const age=t-f.t0;
    if(f.k==="pt"&&age<.7){ x.fillStyle=f.col; x.fillRect(Math.round(f.x+f.vx*age),Math.round(f.y+f.vy*age+220*age*age),6,6); }
    else if(f.k==="x"&&age<.7){ x.lineWidth=9; x.strokeStyle="#1a1423"; const s=22; x.beginPath(); x.moveTo(f.x-s,f.y-s); x.lineTo(f.x+s,f.y+s); x.moveTo(f.x+s,f.y-s); x.lineTo(f.x-s,f.y+s); x.stroke();
      x.lineWidth=5; x.strokeStyle="#e8413a"; x.stroke(); }
    else if(f.k==="txt"&&age<1.1){ const yy=S.rm?f.y:f.y-age*40; x.globalAlpha=Math.min(1,(1.1-age)*3); x.lineWidth=6; x.strokeStyle="#1a1423"; x.strokeText(f.txt,f.x,yy); x.fillStyle=f.col; x.fillText(f.txt,f.x,yy); x.globalAlpha=1; }
    else if(f.k==="tap"&&age<.4){ const k=age/.4; x.globalAlpha=1-k; x.lineWidth=4; x.strokeStyle="#ffffff"; x.beginPath(); x.arc(f.x,f.y,8+k*34,0,7); x.stroke(); x.lineWidth=2; x.strokeStyle="#ffe6a0"; x.beginPath(); x.arc(f.x,f.y,4+k*18,0,7); x.stroke(); x.globalAlpha=1; }
    else if(f.k==="hint"&&age<3.2){ const pulse=S.rm?1:1+Math.sin(age*9)*.06; x.setLineDash([10,8]); ring(x,f.x,f.y,f.r*pulse,"#8fe3ff",4); x.setLineDash([]); }
  }
}
const LZ=document.createElement("canvas"); LZ.width=PW; LZ.height=PH;
function drawLoupe(x){
  const L=G.loupe, R=95, Z=2.2; const lx=Math.min(PW-R-4,Math.max(R+4,L.x)), ly=Math.max(R+4,L.y-R-30);
  const z=LZ.getContext("2d"); z.imageSmoothingEnabled=false; z.clearRect(0,0,PW,PH); z.drawImage(x.canvas,0,0);
  x.save(); x.beginPath(); x.arc(lx,ly,R,0,Math.PI*2); x.clip(); x.imageSmoothingEnabled=false;
  x.drawImage(LZ,L.x-R/Z,L.y-R/Z,2*R/Z,2*R/Z,lx-R,ly-R,2*R,2*R); x.restore();
  ring(x,lx,ly,R,"#ffffff",4);
}
function drawBreak(x){
  const age=G.t-G.breakT, B=25;
  x.fillStyle="#05030c"; x.fillRect(0,0,PW,PH);
  if(S.rm){ x.globalAlpha=Math.max(0,1-age*2); x.drawImage(G.snap,0,0); x.globalAlpha=1; }
  else for(let by=0;by<PH;by+=B) for(let bx=0;bx<PW;bx+=B){
    const k=((bx*7+by*13)%97)/97, delay=(1-by/PH)*.35+k*.35, a=Math.max(0,age-delay);
    const dy=a*a*900, dx=(k-.5)*a*120;
    if(dy>PH)continue;
    x.globalAlpha=Math.max(0,1-a*1.2);
    x.drawImage(G.snap,bx,by,B,B,bx+dx,by+dy,B,B); }
  x.globalAlpha=1;
  const g=GEN[G.cfg.seed%16], sz=S.rm?20:Math.round(Math.min(22,12+age*12)), spr=maskSprite("gb"+g.join("")+sz,g,6,6,sz,"#9a64e0","#140a22");
  const flyA=Math.max(0,age-CLEAR_T.fly), gy=PH/2-spr.height/2-30-(S.rm?0:flyA*flyA*900);
  if(age>.4){ x.globalAlpha=Math.min(1,(age-.4)*3)*(S.rm&&flyA>0?Math.max(0,1-flyA*3):1);
    const shake=(!S.rm&&age<CLEAR_T.fly)?Math.round(Math.sin(age*30)*3):0;
    x.drawImage(spr,Math.round(PW/2-spr.width/2+shake),Math.round(gy));
    /* せりふ(1文字ずつ・吹き出し) */
    const full=J(G.clearLine[0],G.clearLine[1]), chars=[...full], n=S.rm?chars.length:Math.min(chars.length,Math.floor(Math.max(0,age-.8)*14));
    if(n>G.typed){ G.typed=n; if(!S.rm&&n<chars.length&&chars[n-1]!==" ") sq(330+((n*37)%5)*40,.03,.03); }
    if(n>0&&flyA<.35){ const txt=chars.slice(0,n).join(""); x.font="bold 30px DotGothic16, monospace"; x.textAlign="center";
      const w=Math.max(260,x.measureText(full).width+40), bx=PW/2-w/2, by=gy+spr.height+22;
      x.fillStyle="rgba(10,6,20,.92)"; x.fillRect(bx,by,w,58); x.strokeStyle="#ff9fcb"; x.lineWidth=3; x.strokeRect(bx+1.5,by+1.5,w-3,55);
      x.fillStyle="#ffd6ea"; x.fillText(txt,PW/2,by+39); }
    x.globalAlpha=1; }
  if(age>1.2&&!G.resultShown){ x.font="16px DotGothic16, monospace"; x.textAlign="center"; x.fillStyle="rgba(255,255,255,"+(.45+.35*Math.sin(age*5))+")"; x.fillText(J("タップで つぎへ","Tap to continue"),PW/2,PH-18); }
}
/* あなたの友達カード */
const cMe=$("cMe"), xMe=cMe.getContext("2d");
function drawMeCard(){
  const x=xMe; x.imageSmoothingEnabled=false; x.fillStyle="#2a2450"; x.fillRect(0,0,80,80);
  x.fillStyle="#3a3370"; for(let i=0;i<80;i+=8) x.fillRect(i,70,4,2);
  if(!FRIEND) { x.fillStyle="#6b6490"; x.font="12px DotGothic16, monospace"; x.textAlign="center"; x.fillText("…",40,44); return; }
  const hopAge=G.t-G.hop, hop=(!S.rm&&hopAge<.4)?Math.round(Math.sin(hopAge/.4*Math.PI)*10):0;
  const fr=S.rm?0:Math.floor(G.t*8)%8, spr=friendSprite("down",fr,4);
  x.drawImage(spr,Math.round(40-spr.width/2),Math.round(72-spr.height-hop));
}

let last=performance.now(), rafId=0;
function loop(now){
  const dt=Math.max(0,Math.min(.05,(now-last)/1000)); last=now; G.t+=dt;
  if(G.mode==="play"&&G.sc){
    if(G.count&&!G.paused&&!G.ext){ G.count.left-=dt; if(G.count.left<=0) countEnd(); else countTick(); }
    if(G.running&&!G.paused&&!G.ext){ G.tLeft-=dt;
      const sec=Math.ceil(G.tLeft); if(sec!==G.lastTick){ G.lastTick=sec; if(sec<=5&&sec>0) sfxTick(); if(sec===10) say(J("いそいで!","Hurry!")); }
      if(G.tLeft<=10&&MUSIC.want!=="hurry") music("hurry");
      if(G.tLeft<=0) timeUp();
      timeUi(); }
    if(G.press&&!G.loupe&&performance.now()-G.press.t0>280) G.loupe={x:G.press.x,y:G.press.y};
    if(G.shake>0) G.shake=Math.max(0,G.shake-dt);
    G.fx=G.fx.filter(f=>G.t-f.t0<3.5||f.k==="ring");
    renderPanel(xA,"A"); renderPanel(xB,"B"); drawMeCard();
  } else if(G.mode==="title") drawTitle();
  fxStep(dt);
  rafId=requestAnimationFrame(loop);
}

/* ---------- タイトル画面 ---------- */
const cT=$("cT"), xT=cT.getContext("2d");
let TT={friends:null};
function titleFriend(){ const el=$("meTitle"); if(el) el.textContent=FRIEND_ID?J("あなたの友達 "+friendLabel()+" といっしょに","With your Friend "+friendLabel()):""; }
function drawTitle(){
  const W=cT.width, H=cT.height, t=S.rm?0:G.t, x=xT; x.imageSmoothingEnabled=false;
  { const m=$("titleMenu").getBoundingClientRect(), r=cT.getBoundingClientRect(); TT.menu=m.width?{l:m.left-r.left-6,r:m.right-r.left+6,t:m.top-r.top-6,b:m.bottom-r.top+6}:null; }
  const g=x.createLinearGradient(0,0,0,H); g.addColorStop(0,"#120a2a"); g.addColorStop(.55,"#3a1f5c"); g.addColorStop(1,"#ff7e79"); x.fillStyle=g; x.fillRect(0,0,W,H);
  const r=mulberry(7); for(let i=0;i<120;i++){ const sx=r()*W, sy=r()*H*.7, tw=Math.sin(t*2+i)*.5+.5; x.globalAlpha=.3+tw*.7; x.fillStyle="#fff"; x.fillRect(sx|0,sy|0,r()<.1?2:1,r()<.1?2:1); } x.globalAlpha=1;
  if(!ISLE_IDX[0])return;
  const real=isleCanvas(0,ISLES[0]), fake=isleCanvas(0,EVIL);
  const port=W<H*.9;
  let s=port?Math.min(1,W*.8/real.width,H*.16/real.height):Math.min(1,W*.5/real.width, H*.32/real.height);
  /* 縦長で背が低い画面(9:16など)はロゴにかからないよう、上の島を小さく上へ */
  let topY=port?H*.07:H*.08;
  if(port){ const lg=$("logoJ").getBoundingClientRect(), r=cT.getBoundingClientRect(), lt=lg.height?lg.top-r.top:H;
    if(topY+real.height*s+6>lt){ topY=Math.max(6,H*.015); s=Math.max(.18,Math.min(s,(lt-6-topY)/real.height)); } }
  const w=real.width*s, h=real.height*s;
  const ax=port?W*.42-w/2:W*.22-w/2, ay=topY+Math.sin(t*.9)*(port&&topY<H*.05?3:6),
        bx=port?W*.58-w/2:W*.78-w/2, by=(port?H*.8:H*.6)+Math.sin(t*.9+2)*6;
  x.imageSmoothingEnabled=s<1; x.drawImage(real,ax,ay,w,h); x.drawImage(fake,bx,by,w,h); x.imageSmoothingEnabled=false;
  if(!TT.friends){ /* 島の上にばらけて置く(いちばん離れた場所を順にえらぶ・ロゴにかかる右上はさける) */
    const I=A.isles[0], iw=I.w||real.width, ih=I.h||real.height;
    const pool=I.c.filter(p=>p[0]>iw*.1&&p[0]<iw*.76&&p[1]>ih*.14&&p[1]<ih*.72);
    const d2=(a,b)=>{ const dx=a[0]-b[0], dy=(a[1]-b[1])*1.8; return dx*dx+dy*dy; };
    const pick=[pool.reduce((m,p)=>d2(p,[iw*.14,ih*.45])<d2(m,[iw*.14,ih*.45])?p:m,pool[0])];
    while(pick.length<4) pick.push(pool.reduce((m,p)=>{ const a=Math.min(...pick.map(q=>d2(p,q))), b=Math.min(...pick.map(q=>d2(m,q))); return a>b?p:m; },pool[0]));
    pick.sort((a,b)=>a[1]-b[1]);
    TT.friends=pick.map((p,i)=>({p,sp:[5,8,12,3][i],col:FCOL[[0,1,3,5][i]]})); }
  const fs=Math.max(2,Math.round(3*s));
  for(const f of TT.friends){ const o={x:0,y:0,sp:f.sp,dir:"front",col:f.col,sc:fs,ph:f.sp,acc:-1};
    const d=CH[o.sp][o.dir], fi=friendFrame(o,t), spr=maskSprite("t"+o.sp+fi+o.col+o.sc,d.u[fi],16,16,o.sc,o.col,"#1a1423");
    x.drawImage(spr,Math.round(ax+f.p[0]*s-spr.width/2),Math.round(ay+f.p[1]*s-spr.height+2)); }
  { /* 悪ジェネシス3体: にせ島の上。メニューと重なる時は右へ寄せ、入らなければ下へ */
    const sz=Math.max(4,Math.round(7*s)), sw=6*sz, M=TT.menu, baseY=by-sw+14;
    let x0=bx+w*.2, x1=bx+w*.8;
    if(M&&baseY-8<M.b&&baseY+sw+8>M.t&&x0-sw<M.r){ x0=Math.max(x0,M.r+sw*.6+10); }
    const fitX=x1-x0>=sw*2.2, dropY=M?M.b+10:baseY;
    for(let i=0;i<3;i++){ const gg=GEN[[2,6,11][i]], spr=maskSprite("tg"+i+sz,gg,6,6,sz,["#9a64e0","#e8413a","#ff4fa0"][i],"#140a22");
      const bob=Math.sin(t*2+i*2)*8, gx=(fitX?x0+(x1-x0)*i/2:bx+w*(.2+i*.3))-spr.width/2+Math.sin(t*1.3+i)*(fitX?6:10);
      let gy=baseY+bob;
      if(M&&gx+spr.width>M.l&&gx<M.r&&gy-8<M.b&&gy+spr.height>M.t) gy=dropY+bob;
      x.drawImage(spr,Math.round(gx),Math.round(gy)); } }
}

/* ---------- 画面サイズ ---------- */
function layout(){
  const W=root.clientWidth||innerWidth, H=root.clientHeight||innerHeight;
  if(typeof fxCv!=="undefined"){ fxCv.width=W; fxCv.height=H; }
  cT.width=Math.ceil(W); cT.height=Math.ceil(H);
  if(G.mode!=="play")return;
  const hudH=$("hud").offsetHeight, gap=10, ar=PW/PH;
  const compact=W<600||H<520; $("foot").classList.toggle("compact",compact);
  const footMin=compact?122:140;
  const tagH=24, aw=W-16, ah=Math.max(120,H-hudH-footMin-16);
  const side=Math.min((aw-gap)/2, (ah-tagH)*ar), stack=Math.min(aw,(ah-gap-2*tagH)/2*ar);
  const useSide=side>=stack;
  const wrap=$("stageWrap"); wrap.style.flexDirection=useSide?"row":"column";
  const w=Math.floor(useSide?side:stack), h=Math.floor(w/ar);
  for(const id of ["pwA","pwB"]){ const el=$(id); el.style.width=w+"px"; el.style.height=h+"px"; }
}
on(window,"resize",layout);

/* ---------- ボタン ---------- */
function openMap(){ show("scr-map"); buildMap(); music("title"); }
function toggleMute(){ S.mute=!S.mute; applyLang(); if(S.mute) stopSong(); else { MUSIC.cur=null; music(MUSIC.want||(G.mode==="play"?"play":"title")); } }
$("bStart").onclick=()=>{ sfxDecide(); openMap(); };
$("bMapBack").onclick=()=>{ sfxCancel(); show("scr-title"); };
$("bTreasure").onclick=$("bTreasure2").onclick=()=>{ sfxDecide(); ECON.err=""; treasurePanel(); };
function daily(){ const dt=todayStr(); sfxDecide();
  if(S.daily[dt]){ const d=S.daily[dt];
    const share=`Twin Isles / ふたご島 ${dt.replace(/-/g,"/")}\n${"★".repeat(d.stars)}${"☆".repeat(3-d.stars)} ${d.t.toFixed(1)}s left\n#RareFriends`;
    modal(`<h2>${J("きょうの1まい","Daily Puzzle")}</h2><div class="stars">${[0,1,2].map(k=>`<span class="${k<d.stars?"on":""}">★</span>`).join("")}</div>
      <textarea class="share" rows="3" readonly>${share}</textarea><button type="button" class="btn" data-act="copy">${J("結果をコピー","Copy result")}</button>
      <button type="button" class="btn gold" data-act="dailyReplay">${J("もう一度あそぶ(記録なし)","Play again (unranked)")}</button><button type="button" class="btn" data-act="close">${J("とじる","Close")}</button>`);
    return; }
  startStage(dailyCfg(dt),"daily"); }
$("bDaily").onclick=daily; $("bDaily2").onclick=daily;
$("bHow").onclick=()=>{ sfxDecide(); modal(`<h2>${J("あそびかた","How to Play")}</h2>
  <div class="how"><i>1</i><div>${J("左(上)が<b>ほんもの</b>、右(下)が悪いジェネシスの作った<b style='color:#ff9fcb'>にせ島</b>。","Left/top is the <b>real</b> isle; right/bottom is the evil Genesis's <b style='color:#ff9fcb'>fake</b>.")}</div></div>
  <div class="how"><i>2</i><div>${J("ちがう所を、どちらかの絵でタップ。色・向き・大きさ・かざり・消えた物・増えた物、<b>動きのタイミング</b>や<b>地面の模様</b>まで…","Tap a difference on either picture: colour, facing, size, accessories, missing or extra items, even <b>animation timing</b> and <b>ground details</b>…")}</div></div>
  <div class="how"><i>3</i><div>${J("まちがえてタップすると <b style='color:#ff8a80'>-5秒</b>。れんだすると少し休み。","Wrong taps cost <b style='color:#ff8a80'>5 s</b>. Spamming locks you briefly.")}</div></div>
  <div class="how"><i>4</i><div>${J("こまったら <b style='color:#f7c948'>ジェネシスのかけら</b> で、ヒントや +15秒。かけらはクリアでもらえる。","Stuck? Spend <b style='color:#f7c948'>Genesis shards</b> on a hint or +15 s. Clears earn shards.")}</div></div>
  <div class="how"><i>5</i><div>${J("初めてクリアすると <b style='color:#f7c948'>たからばこ</b>。RFで買ったカギで開けると、たからが出る(仮)。","First clears drop a <b style='color:#f7c948'>treasure chest</b>. Open it with a key bought with RF to win a treasure (simulated).")}</div></div>
  <div class="how"><i>+</i><div>${J("絵を<b>長おし</b>でズーム。キーボード: 矢印で照準、Enterでタップ、Z長押しでズーム、H/T/P/M。","<b>Press and hold</b> to zoom. Keyboard: arrows aim, Enter taps, hold Z to zoom, H/T/P/M.")}</div></div>
  <button type="button" class="btn gold" data-act="close">${J("わかった","Got it")}</button>`); };
$("bLang").onclick=()=>{ S.lang=S.lang==="en"?"ja":"en"; applyLang(); sfxDecide(); };
$("bMute").onclick=()=>toggleMute();

/* ============================================================
   エフェクト(画面全体): クリック・スタート・換金
   ============================================================ */
/* ---------- 画面全体のエフェクト層(クリックした所・スタート時など) ---------- */
const fxCv=$("fxCv"), fxX=fxCv.getContext("2d");
const FX={p:[],rings:[],flash:null,coins:[],txt:[]};
function fxSize(){ fxCv.width=root.clientWidth||innerWidth; fxCv.height=root.clientHeight||innerHeight; }
function fxLocal(e){ const r=root.getBoundingClientRect(); return [e.clientX-r.left,e.clientY-r.top]; }
function fxBurst(x,y,o={}){
  const n=S.rm?0:(o.n||8), cols=o.cols||["#ffe6a0","#ffffff","#ff9fcb","#8fe3ff"];
  FX.rings.push({x,y,t:0,max:o.r||26,c:o.ring||"#ffe6a0",w:o.w||3});
  if(o.ring2) FX.rings.push({x,y,t:-.06,max:(o.r||26)*1.7,c:o.ring2,w:2});
  for(let i=0;i<n;i++){ const a=Math.random()*Math.PI*2, v=(o.v||160)*(.5+Math.random()*.8);
    FX.p.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-(o.up||40),g:o.g||500,t:0,life:.45+Math.random()*.35,c:cols[i%cols.length],s:o.s||3}); }
}
function fxConfetti(n){ if(S.rm) return; const W=fxCv.width;
  for(let i=0;i<n;i++) FX.p.push({x:Math.random()*W,y:-10-Math.random()*80,vx:(Math.random()-.5)*80,vy:60+Math.random()*120,g:260,t:0,life:1.6+Math.random()*.8,
    c:["#f7c948","#ff6fb0","#8fe3ff","#46d37a","#ffffff","#9a64e0"][i%6],s:4,spin:Math.random()*6}); }
/* 換金: 金貨がはじけて、くるくる回りながら落ちる */
function fxCoins(x,y,n,rare){ if(S.rm) return; FX.rings.push({x,y,t:0,max:60,c:"#ffd84a",w:4}); FX.rings.push({x,y,t:-.08,max:100,c:"#fff3a0",w:2});
  for(let i=0;i<n;i++){ const a=-Math.PI/2+(Math.random()-.5)*2.4, v=260+Math.random()*320;
    FX.coins.push({x,y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,t:-i*.018,life:1.3+Math.random()*.5,sp:8+Math.random()*8,ph:Math.random()*6,s:rare===2?4:3,bounce:0}); } }
function fxFloat(x,y,text,c){ FX.txt.push({x,y,text,c,t:0,life:S.rm?1:1.4}); }
function fxFlash(c,a){ FX.flash={c:c||"#ffffff",a:S.rm?Math.min(.25,a||.6):(a||.6),t:0}; }
function fxStep(dt){
  const x=fxX, W=fxCv.width, H=fxCv.height; x.clearRect(0,0,W,H);
  if(!FX.p.length&&!FX.rings.length&&!FX.flash&&!FX.coins.length&&!FX.txt.length) return;
  x.imageSmoothingEnabled=false;
  if(FX.flash){ const f=FX.flash; f.t+=dt; const a=f.a*(1-f.t/.35); if(a<=0) FX.flash=null; else { x.globalAlpha=a; x.fillStyle=f.c; x.fillRect(0,0,W,H); x.globalAlpha=1; } }
  FX.rings=FX.rings.filter(r=>{ r.t+=dt; if(r.t<0) return true; const k=r.t/.38; if(k>=1) return false;
    x.globalAlpha=1-k; x.strokeStyle="#000"; x.lineWidth=r.w+2; x.beginPath(); x.arc(r.x,r.y,4+r.max*k,0,7); x.stroke();
    x.strokeStyle=r.c; x.lineWidth=r.w; x.stroke(); x.globalAlpha=1; return true; });
  FX.p=FX.p.filter(q=>{ q.t+=dt; if(q.t>q.life) return false; q.vy+=q.g*dt; q.x+=q.vx*dt; q.y+=q.vy*dt;
    x.globalAlpha=Math.max(0,1-q.t/q.life); x.fillStyle=q.c;
    const s=q.spin?Math.max(1,Math.round(q.s*Math.abs(Math.cos(q.t*q.spin)))):q.s; x.fillRect(Math.round(q.x),Math.round(q.y),q.s,s); x.globalAlpha=1; return true; });
  FX.coins=FX.coins.filter(c=>{ c.t+=dt; if(c.t<0) return true; if(c.t>c.life) return false;
    c.vy+=1500*dt; c.x+=c.vx*dt; c.y+=c.vy*dt; if(c.y>H-14&&c.vy>0&&c.bounce<2){ c.vy*=-.45; c.vx*=.7; c.bounce++; }
    const u=c.s, wf=Math.abs(Math.cos(c.ph+c.t*c.sp)), w=Math.max(1,Math.round(4*u*wf)), h=4*u, X=Math.round(c.x-w/2), Y=Math.round(c.y-h/2);
    x.globalAlpha=Math.min(1,(c.life-c.t)*3); x.fillStyle="#3a2400"; x.fillRect(X-1,Y-1,w+2,h+2); x.fillStyle=wf>.35?"#f7c948":"#c98a1a"; x.fillRect(X,Y,w,h);
    if(wf>.5){ x.fillStyle="#fff3a0"; x.fillRect(X+Math.round(w*.2),Y+u,Math.max(1,Math.round(w*.2)),u*2); }
    if(Math.random()<.08) FX.p.push({x:c.x,y:c.y,vx:0,vy:-20,g:0,t:0,life:.3,c:"#fff3a0",s:2});
    x.globalAlpha=1; return true; });
  FX.txt=FX.txt.filter(q=>{ q.t+=dt; if(q.t>q.life) return false; const k=q.t/q.life, sc=k<.12?.6+k/.12*.6:k<.2?1.2-(k-.12)/.08*.2:1;
    x.save(); x.translate(q.x,q.y-k*50); x.scale(sc,sc); x.globalAlpha=k>.7?1-(k-.7)/.3:1; x.font="bold 34px DotGothic16, monospace"; x.textAlign="center"; x.textBaseline="middle";
    x.lineWidth=6; x.strokeStyle="#1a0f2e"; x.strokeText(q.text,0,0); x.fillStyle=q.c; x.fillText(q.text,0,0); x.restore(); return true; });
}
on(root,"pointerdown",e=>{ const [x,y]=fxLocal(e); fxBurst(x,y,{n:7,r:22}); },true);
on(window,"resize",fxSize);

/* ---------- 起動 ---------- */
try{ ISLES.forEach((th,i)=>isleCanvas(i,th)); }catch(e){ console.error(e); }
applyLang(); layout(); fxSize(); music("title");
if(document.fonts&&document.fonts.load) document.fonts.load("20px DotGothic16").catch(()=>{});
rafId=requestAnimationFrame(loop);
refresh().catch(()=>{});
const api={
  setPaused(p){ const was=G.ext; G.ext=!!p; if(G.ext){ G.press=null; G.loupe=null; } if(G.ext!==was&&!S.mute){ if(G.ext) stopSong(); else { MUSIC.cur=null; music(MUSIC.want); } } },
  setFriend(f){ FRIEND=f; SPR_ME.clear(); titleFriend(); },
  destroy(){ cancelAnimationFrame(rafId); cancelAnimationFrame(CHEST.raf); timers.forEach(clearTimeout); offs.forEach(f=>f()); stopSong(); try{ if(AC) AC.close(); }catch(e){} root.innerHTML=""; },
  debug:{G,S,makeScene,stageCfg,dailyCfg,startStage,found,beginRun,treasurePanel,revealPanel,redeemAsk,redeemDone,ECON,drawWorld,FX}
};
try{ window.__twinIsles=api.debug; }catch(e){}
return api;

}
