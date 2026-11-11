// JuicySuite — Social Media Post Template · runtime
// 1. <js-shape> renders the real DS silhouettes (shapes.js ← components/shapes/Blob.jsx).
// 2. <i class="ico" data-icon="gift"> renders DS icons (paths copied from components/core/Icon.jsx).
// 3. View modes for every format file:
//      (default)      browse — every template with name, tags and how-to-adapt note
//      ?t=03          export — template 03 alone at exact pixel size, no chrome (screenshot this)
//      ?sheet=1       contact sheet — all 8 on one board with labels (review)
//      ?row=1         one-row strip for the master overview (grouped formats wrap: one row per group)
//      &guides=1      dashed safe-area overlay on every post
//      Formats with grouped posts (data-group on <article>, Story / Reels only) also take
//      &set=core|general|image|core,general  filter groups · &cols=N  sheet columns; group headings are inserted
(() => {
  const P = window.JS_BLOB_PATHS || {};
  const G = window.JS_BLOB_GRADIENTS || {};
  // Shape fills from the eight approved pairings (guidelines/colors-gradient-pairings.html, e0–e7)
  const PAIR = {
    pair1: [[0, "#FFABE7"], [55, "#EDB1E5"], [100, "#76D1D9"]], // Sunset field  × Blush fill
    pair2: [[0, "#9E5C99"], [50, "#D5A35A"], [100, "#FBD62F"]], // Corner field  × Dusk fill
    pair3: [[0, "#FF7C33"], [50, "#FF8F7C"], [100, "#FFA4CB"]], // Meadow field  × Sunset fill
    pair4: [[0, "#FF6157"], [50, "#FF7D8D"], [100, "#FF9ECD"]], // Blush field   × Coral fill
    pair5: [[30, "#FF761A"], [55, "#7EBD90"], [100, "#38E2D0"]], // Coral field  × Citrus fill
    pair6: [[0, "#FE7D32"], [50, "#FF9181"], [100, "#FFA6D6"]], // Butter field  × Sunset fill
    pair7: [[0, "#FCACE6"], [50, "#D5B7E2"], [100, "#69D6D7"]], // Grape field   × Blush fill
    pair8: [[0, "#D38E42"], [50, "#67C9A6"], [100, "#38E2CF"]], // Rose field    × Aqua fill
  };
  // CSS equivalents for the radius-built geometrics (Marble · Drop · Ellipse)
  const css = (stops, deg) => `linear-gradient(${deg}deg,${stops.map(([o, c]) => c + " " + o + "%").join(",")})`;
  const CSSG = {
    sunsetFlat: "linear-gradient(90deg,#FF7420 0%,#FF9084 45%,#FFA8E6 100%)",
    grape: "linear-gradient(40deg,#00CE73 0%,#0CC27A 38%,#2E8FA8 62%,#4F5FD6 82%,#6B2BF0 100%)",
    blush: "linear-gradient(40deg,#FFABE7,#E9B0E6 40%,#AFC3E0 70%,#3BE3D2)",
    meadowSweep: "linear-gradient(210deg,#FDE51A,#C2E64E 55%,#37E4D2)",
  };
  for (const k in PAIR) CSSG[k] = css(PAIR[k], 24);
  const GEO = { marble: "50%", ellipse: "50%", dropTall: "9999px", dropShort: "9999px" };
  let uid = 0;

  class JsShape extends HTMLElement {
    connectedCallback() {
      if (this._done) return; this._done = true;
      const shape = this.getAttribute("shape") || "bloom";
      const fill = this.getAttribute("fill") || "#fff";
      const grad = this.getAttribute("grad");
      const photo = this.getAttribute("photo");
      const label = this.getAttribute("label") || "Photo";
      const flip = this.getAttribute("flip");
      if (flip) this.style.transform = (this.style.transform || "") + (flip === "x" ? " scaleX(-1)" : flip === "y" ? " scaleY(-1)" : " rotate(180deg)");
      if (GEO[shape]) {
        // Marble 1:1 · Ellipse √2:1 · DropTall 1:2√2 · DropShort 1:√2 — fully rounded boxes (components/shapes/*.jsx)
        this.style.borderRadius = GEO[shape];
        this.style.overflow = "hidden";
        if (photo) this.innerHTML = photoHTML(photo, label);
        else this.style.background = grad ? (CSSG[grad] || grad) : fill;
        return;
      }
      const d = P[shape] || P.bloom;
      if (photo) {
        // photo clipped to the silhouette: objectBoundingBox clip so the image is never stretched
        const id = "jsclip" + (++uid);
        this.innerHTML = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><clipPath id="${id}" clipPathUnits="objectBoundingBox"><path transform="scale(0.01)" d="${d}"/></clipPath></svg>` + photoHTML(photo, label);
        this.style.clipPath = `url(#${id})`;
        return;
      }
      let def = "", paint = fill;
      if (grad) {
        const id = "jsg" + (++uid);
        let v, stops;
        if (G[grad]) { v = G[grad].v; stops = G[grad].s; }
        else if (PAIR[grad]) { v = [0.2, 1, 0.65, 0]; stops = PAIR[grad]; }
        if (stops) {
          def = `<defs><linearGradient id="${id}" x1="${v[0]}" y1="${v[1]}" x2="${v[2]}" y2="${v[3]}">${stops.map(([o, c]) => `<stop offset="${o}%" stop-color="${c}"/>`).join("")}</linearGradient></defs>`;
          paint = `url(#${id})`;
        }
      }
      this.innerHTML = `<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${def}<path d="${d}" fill="${paint}"/></svg>`;
    }
  }
  function photoHTML(photo, label) {
    if (photo && photo !== "placeholder") return `<div class="js-photo"><img src="${photo}" alt=""></div>`;
    const [a, b] = label.split("|");
    return `<div class="js-photo"><span>${a}${b ? `<small>${b}</small>` : ""}</span></div>`;
  }
  customElements.define("js-shape", JsShape);

  // DS icons (components/core/Icon.jsx — stroke 2, round caps)
  const ICONS = {
    check: '<polyline points="20 6 9 17 4 12"/>',
    chevronRight: '<polyline points="9 18 15 12 9 6"/>',
    users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    gift: '<polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>',
    dollar: '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
    chart: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
    bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
    arrowUp: '<polyline points="6 14 12 8 18 14"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
    sparkle: '<path d="M12 3l1.9 5.5L19 10l-5.1 1.5L12 17l-1.9-5.5L5 10l5.1-1.5z"/>',
  };
  function pagers(root) {
    root.querySelectorAll(".pager[data-n]").forEach(p => {
      if (p.querySelector(".seg")) return;
      const n = +p.dataset.n || 1, i = +p.dataset.i || 1, z = v => String(v).padStart(2, "0");
      p.innerHTML = `<span>${z(i)} / ${z(n)}</span><span class="seg">${Array.from({ length: n }, (_, k) => `<i${k + 1 === i ? ' class="on"' : ""}></i>`).join("")}</span>`;
    });
  }
  function icons(root) {
    root.querySelectorAll(".ico[data-icon]").forEach(i => { if (!i.firstChild) i.innerHTML = `<svg viewBox="0 0 24 24">${ICONS[i.dataset.icon] || ""}</svg>`; });
  }

  // ---------- view modes ----------
  const q = new URLSearchParams(location.search);
  function boot() {
    icons(document); pagers(document);
    let posts = [...document.querySelectorAll("article.post")];
    const fmt = document.body.dataset;
    if (q.get("guides")) document.body.classList.add("guides");
    const t = q.get("t");
    const base = document.createElement("style");
    document.head.appendChild(base);
    if (t) {
      // EXPORT: one template, exact pixels, nothing else on the page
      base.textContent = "html,body{margin:0;background:transparent!important}body>*{display:none!important}body>.solo{display:block!important}";
      const p = posts.find(p => p.dataset.t === t.padStart(2, "0")) || posts[0];
      const wrap = document.createElement("div"); wrap.className = "solo"; wrap.appendChild(p);
      document.body.appendChild(wrap);
      document.title = `${fmt.name} ${p.dataset.t} · ${p.dataset.name}`;
      return;
    }
    const W = posts[0] ? posts[0].offsetWidth : 1080, H = posts[0] ? posts[0].offsetHeight : 1080;
    const sheet = q.get("sheet"), row = q.get("row");
    const grouped = posts.some(p => p.dataset.group);
    if (grouped && q.get("set")) { const keep = q.get("set").split(","); posts.filter(p => !keep.includes(p.dataset.group)).forEach(p => p.remove()); posts = posts.filter(p => keep.includes(p.dataset.group)); }
    const cols = +q.get("cols") || (row ? 8 : 4);
    const GL = { core: "Core set", general: "General · type & shape", image: "Image-led" };
    base.textContent = `
      html,body{margin:0;background:#F5F3EE;font-family:Montserrat,sans-serif;color:#474242}
      .hdr{display:flex;justify-content:space-between;align-items:flex-end;gap:24px;padding:40px 48px 8px}
      .hdr .e{font-size:13px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:#FF761A}
      .hdr h1{margin:6px 0 0;font-size:34px;font-weight:800;letter-spacing:-.03em;line-height:1.05}
      .hdr p{margin:6px 0 0;font-size:14px;line-height:1.5;color:#5E555A;max-width:760px}
      .hdr img{width:140px}
      .grid{display:grid;grid-template-columns:repeat(${cols},minmax(0,1fr));gap:${row ? 14 : 28}px;padding:${row ? "0" : "24px 48px 56px"}}
      .cell{display:flex;flex-direction:column;gap:10px;min-width:0}
      .cell .lb{display:flex;justify-content:space-between;align-items:baseline;gap:8px;font-size:13px;font-weight:800;letter-spacing:-.01em}
      .cell .lb span{font-size:10px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:#7F8C8D;white-space:nowrap}
      .cell .fr{position:relative;width:100%;aspect-ratio:${W}/${H};overflow:hidden;border-radius:${row ? 6 : 10}px;box-shadow:0 1px 3px rgba(71,66,66,.08)}
      .cell .fr .post{position:absolute;left:0;top:0;transform-origin:0 0}
      .cell .nt{font-size:12px;line-height:1.5;color:#5E555A}
      .cell .nt b{color:#474242}
      .cell a.ex{font-size:12px;font-weight:700}
      ${sheet || row ? ".cell .nt,.cell a.ex{display:none}" : ""}
      ${row ? ".hdr{display:none}.cell .lb{display:none}" : ""}
      .gl{grid-column:1/-1;display:flex;align-items:baseline;gap:14px;padding-top:${row ? 10 : 22}px;border-top:1px solid rgba(71,66,66,.12);font-size:${row ? 15 : 13}px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:#FF761A}
      .gl:first-child{border-top:0;padding-top:0}.gl span{font-size:${row ? 15 : 13}px;letter-spacing:.06em;text-transform:none;color:#474242}`;
    const hdr = document.createElement("header"); hdr.className = "hdr";
    hdr.innerHTML = `<div><div class="e">Social Media Post Template · ${fmt.no} / 08</div><h1>${fmt.name}</h1><p>${fmt.size} · ${fmt.use}</p></div><img src="../../assets/juicysuite-wordmark-orange.svg" alt="JuicySuite">`;
    const grid = document.createElement("main"); grid.className = "grid";
    let lastG = null;
    posts.forEach(p => {
      if (grouped && p.dataset.group !== lastG) {
        const gs = posts.filter(x => x.dataset.group === p.dataset.group);
        const g = document.createElement("div"); g.className = "gl";
        g.innerHTML = `${gs[0].dataset.t}–${gs[gs.length - 1].dataset.t}<span>${GL[p.dataset.group] || p.dataset.group} · ${gs.length} templates</span>`;
        grid.appendChild(g); lastG = p.dataset.group;
      }
      const c = document.createElement("section"); c.className = "cell";
      const tags = (p.dataset.tags || "").split("·").map(s => s.trim()).filter(Boolean).slice(0, 2).join(" · ");
      c.innerHTML = `<div class="lb">${p.dataset.t} · ${p.dataset.name}<span>${tags}</span></div><div class="fr"></div>`;
      c.querySelector(".fr").appendChild(p);
      if (p.dataset.adapt) {
        const n = document.createElement("div"); n.className = "nt"; n.innerHTML = p.dataset.adapt;
        c.appendChild(n);
        const a = document.createElement("a"); a.className = "ex"; a.href = `?t=${p.dataset.t}`; a.target = "_blank"; a.textContent = `Open ${W} × ${H} export ↗`;
        c.appendChild(a);
      }
      grid.appendChild(c);
    });
    document.body.append(hdr, grid);
    const fit = () => document.querySelectorAll(".cell .fr").forEach(fr => { fr.firstChild.style.transform = `scale(${fr.clientWidth / W})`; });
    addEventListener("resize", fit); fit();
    new ResizeObserver(fit).observe(grid);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
