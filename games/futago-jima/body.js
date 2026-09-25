/* ゲーム画面のひな形(サンドボックス内だけで描画する) */
export default `
<div id="app" class="tw-app">
  <section id="scr-title" class="scr">
    <canvas id="cT"></canvas>
    <div class="corner">
      <button type="button" class="chip" id="bLang">EN</button>
      <button type="button" class="chip" id="bMute" aria-pressed="true">♪ ON</button>
    </div>
    <div id="titleBox">
      <div id="logoJ">ふたご<span class="t2">島</span></div>
      <div id="logoSub" data-j="まちがいさがし" data-e="SPOT THE FAKE"></div>
      <div id="logoEn">TWIN ISLES</div>
      <div id="meTitle"></div>
      <div id="titleMenu" class="win">
        <button type="button" class="btn gold" id="bStart"><span class="cur">▶</span><span data-j="ぼうけんに出る" data-e="Start Adventure"></span></button>
        <button type="button" class="btn" id="bDaily"><span class="cur">▶</span><span data-j="きょうの1まい" data-e="Daily Puzzle"></span><small data-j="みんな同じ問題" data-e="Same puzzle for everyone today"></small></button>
        <div class="row2">
          <button type="button" class="btn" id="bTreasure"><span data-j="たからもの" data-e="Treasure"></span></button>
          <button type="button" class="btn" id="bHow"><span data-j="あそびかた" data-e="How to Play"></span></button>
        </div>
      </div>
    </div>
  </section>

  <section id="scr-map" class="scr" hidden>
    <div id="mapHead">
      <button type="button" class="chip" id="bMapBack" aria-label="Back">◀</button>
      <h2 data-j="島をえらぶ" data-e="Choose an Island"></h2>
      <button type="button" class="chip gold" id="bTreasure2"></button>
    </div>
    <div id="dailyCard" class="win">
      <div class="d1"><b data-j="きょうの1まい" data-e="Daily Puzzle"></b> <span id="dailyDate"></span><small id="dailyInfo"></small></div>
      <button type="button" class="btn gold" id="bDaily2" data-j="あそぶ" data-e="Play"></button>
    </div>
    <div id="isleList"></div>
    <div class="mapPad"></div>
  </section>

  <section id="scr-play" class="scr" hidden>
    <div id="hud">
      <button type="button" class="hb" id="bPause" aria-label="Pause">II</button>
      <div id="stLabel"></div>
      <div id="timeWrap" role="timer"><div id="timeBar"></div><div id="timeNum"></div></div>
      <div id="dots" aria-live="polite"></div>
      <div id="shardHud" class="rf"></div>
    </div>
    <div id="stageWrap">
      <div class="pcol"><span class="tag" data-j="ほんもの" data-e="REAL"></span><div class="pw" id="pwA"><canvas id="cA" width="800" height="500" aria-label="Real island"></canvas></div></div>
      <div class="pcol"><span class="tag fake" data-j="にせ島 (悪いジェネシス作)" data-e="FAKE (made by the evil Genesis)"></span><div class="pw" id="pwB"><canvas id="cB" width="800" height="500" aria-label="Fake island"></canvas></div></div>
      <div id="toast" aria-live="polite"></div>
    </div>
    <div id="foot">
      <div id="meCard"><canvas id="cMe" width="80" height="80"></canvas><div class="meTxt"><b id="meName"></b><span id="meSay"></span></div></div>
      <div class="fbtns">
        <button type="button" class="btn" id="bHint"><span data-j="ヒント" data-e="Hint"></span><small id="hintCost"></small></button>
        <button type="button" class="btn" id="bTime"><span data-j="+15秒" data-e="+15 s"></span><small id="timeCost"></small></button>
        <button type="button" class="btn sq" id="bSnd" aria-label="Sound">♪</button>
        <button type="button" class="btn" id="bAns" hidden></button>
      </div>
      <p id="keysHelp"></p>
    </div>
  </section>

  <div id="modal" hidden role="dialog" aria-modal="true"><div id="mBox" class="win"></div></div>
  <canvas id="fxCv" aria-hidden="true"></canvas>
</div>`;
