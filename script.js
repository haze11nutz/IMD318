// Shared site JS: nav, reveal, back-to-top, page-specific (story slider, counters, gallery, form)
document.documentElement.classList.add("js");
// Safety net: ensure all .reveal nodes become visible even if observer misses them
window.addEventListener("load", () => {
  setTimeout(() => document.querySelectorAll(".reveal:not(.in)").forEach(n => n.classList.add("in")), 1200);
});

const NAV = [
  ["/", "Home", "index.html"],
  ["/about", "About", "about.html"],
  ["/education", "Education", "education.html"],
  ["/skills", "Skills", "skills.html"],
  ["/hobbies", "Hobbies", "hobbies.html"],
  ["/achievements", "Achievements", "achievements.html"],
  ["/story", "Story", "story.html"],
  ["/gallery", "Gallery", "gallery.html"],
  ["/contact", "Contact", "contact.html"],
];

const SPIDER_LOGO = `<svg viewBox="0 0 64 64" class="w-10 h-10 swing" aria-hidden="true">
<defs><radialGradient id="spideyR" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#e84257"/><stop offset="100%" stop-color="#8b0a1f"/></radialGradient></defs>
<circle cx="32" cy="32" r="30" fill="url(#spideyR)" stroke="#0c0f14" stroke-width="2.5"/>
<g stroke="#0c0f14" stroke-width="1.2" fill="none" opacity=".65">
<path d="M32 4 L32 60 M4 32 L60 32 M12 12 L52 52 M52 12 L12 52"/>
<circle cx="32" cy="32" r="22"/><circle cx="32" cy="32" r="14"/><circle cx="32" cy="32" r="7"/></g>
<g fill="#0c0f14"><ellipse cx="32" cy="36" rx="5.5" ry="8"/><circle cx="32" cy="26" r="3.5"/>
<g stroke="#0c0f14" stroke-width="2" fill="none" stroke-linecap="round">
<path d="M28 30 Q20 26 14 18"/><path d="M36 30 Q44 26 50 18"/>
<path d="M28 34 Q18 34 10 32"/><path d="M36 34 Q46 34 54 32"/>
<path d="M28 40 Q20 44 14 52"/><path d="M36 40 Q44 44 50 52"/></g></g></svg>`;

function currentPage(){
  const p = location.pathname.split("/").pop() || "index.html";
  return p === "" ? "index.html" : p;
}

function buildHeader(){
  const cur = currentPage();
  const navLinks = NAV.map(([_,label,href])=>{
    const active = href === cur ? " active" : "";
    return `<a href="${href}" class="nav-link${active}">${label}</a>`;
  }).join("");
  const mobileLinks = NAV.map(([_,label,href])=>{
    const active = href === cur ? " active" : "";
    return `<a href="${href}" class="nav-link${active}" style="display:block;padding:.5rem .75rem;border-radius:.375rem">${label}</a>`;
  }).join("");

  return `<header class="site-header" id="siteHeader">
    <div class="container-x" style="height:4rem;display:flex;align-items:center;justify-content:space-between">
      <a href="index.html" class="flex items-center gap-2 font-display text-2xl text-white" style="font-size:1.5rem">
        ${SPIDER_LOGO}<span>FAREL<span class="text-spidey">.A</span></span>
      </a>
      <nav class="lg:flex hidden items-center gap-1">${navLinks}</nav>
      <a href="contact.html" class="btn-comic bg-spidey text-white pulse-glow lg:inline-flex hidden">SAY HI 🕷️</a>
      <button id="navToggle" aria-label="Toggle menu" class="lg:hidden" style="width:2.5rem;height:2.5rem;border:2px solid var(--spidey);background:var(--ink);color:#fff;border-radius:.375rem;display:inline-flex;align-items:center;justify-content:center">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>
      </button>
    </div>
    <div id="mobileNav" class="lg:hidden" style="display:none;background:var(--ink);border-top:2px solid var(--spidey)">
      <div class="container-x" style="padding-top:.75rem;padding-bottom:.75rem;display:grid;gap:.25rem">${mobileLinks}</div>
    </div>
  </header>`;
}

function buildFooter(){
  const year = new Date().getFullYear();
  const list1 = NAV.slice(0,5).map(([_,l,h])=>`<li><a href="${h}">${l}</a></li>`).join("");
  const list2 = NAV.slice(5).map(([_,l,h])=>`<li><a href="${h}">${l}</a></li>`).join("");
  return `<footer class="web-bg">
    <div class="container-x">
      <div class="grid-foot">
        <div>
          <div class="flex items-center gap-2 font-display" style="font-size:1.5rem">${SPIDER_LOGO.replace('w-10 h-10','w-9 h-9')}<span>FAREL<span class="text-spidey">.A</span></span></div>
          <p style="margin-top:.75rem;color:rgba(255,255,255,.75);font-size:.875rem;line-height:1.6">Your friendly neighborhood Information Management student. Building thoughtful, accessible things on the web.</p>
        </div>
        <div><p class="font-display text-xl mb-3">Explore</p><ul class="list-none" style="color:rgba(255,255,255,.8);font-size:.875rem;display:grid;gap:.5rem">${list1}</ul></div>
        <div><p class="font-display text-xl mb-3">More</p><ul class="list-none" style="color:rgba(255,255,255,.8);font-size:.875rem;display:grid;gap:.5rem">${list2}</ul></div>
        <div>
          <p class="font-display text-xl mb-3">Contact</p>
          <p style="color:rgba(255,255,255,.8);font-size:.875rem">hello@farel.dev</p>
          <p style="color:rgba(255,255,255,.8);font-size:.875rem">Selangor, Malaysia</p>
        </div>
      </div>
      <div style="margin-top:3rem;padding-top:1.5rem;border-top:1px solid rgba(255,255,255,.15);color:rgba(255,255,255,.6);font-size:.875rem;display:flex;flex-wrap:wrap;justify-content:space-between;gap:.5rem">
        <p>© ${year} Farel.A — Spun with web-fluid &amp; CSS.</p>
        <p>With great information comes great responsibility.</p>
      </div>
    </div>
  </footer>
  <button id="backTop" class="back-top" aria-label="Back to top">↑</button>`;
}

function initShell(){
  document.getElementById("site-header-slot").innerHTML = buildHeader();
  document.getElementById("site-footer-slot").innerHTML = buildFooter();

  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
    document.getElementById("backTop").classList.toggle("show", window.scrollY > 600);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  document.getElementById("navToggle").addEventListener("click", () => {
    const m = document.getElementById("mobileNav");
    m.style.display = m.style.display === "block" ? "none" : "block";
  });

  document.getElementById("backTop").addEventListener("click", () => window.scrollTo({top:0,behavior:"smooth"}));

  // Reveal animations (global so dynamically-added .reveal nodes can be observed too)
  if (!window.__revealIO) {
    window.__revealIO = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          e.target.style.animationDelay = `${(i % 6) * 90}ms`;
          e.target.classList.add("in");
          window.__revealIO.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    window.observeReveals = (root = document) => {
      root.querySelectorAll(".reveal:not(.in)").forEach(n => window.__revealIO.observe(n));
    };
  }
  window.observeReveals();
}

// --- Page-specific helpers ---

function initStorySlider(){
  const slides = [
    { q: "Farel built our department's first searchable archive — what used to take 20 minutes now takes 20 seconds.", a: "Dr. Aisyah, Lecturer" },
    { q: "He thinks like a librarian and codes like a developer. Rare combo.", a: "Hakim, Hackathon teammate" },
    { q: "The dashboard he shipped during internship is still our team's daily driver.", a: "Nadia, Mentor at Petronas Digital" },
  ];
  const el = document.getElementById("storySlider");
  if (!el) return;
  let i = 0;
  const render = () => {
    el.innerHTML = `
      <p style="font-size:1.25rem;line-height:1.6">"${slides[i].q}"</p>
      <p class="mt-4 font-semibold text-primary">— ${slides[i].a}</p>
      <div class="mt-6 flex gap-2">
        ${slides.map((_,k)=>`<button data-i="${k}" aria-label="Slide ${k+1}" style="height:.5rem;border-radius:9999px;transition:all .2s;${k===i?'background:var(--spidey);width:2rem':'background:rgba(12,15,20,.3);width:.75rem'}"></button>`).join("")}
      </div>`;
    el.querySelectorAll("button[data-i]").forEach(b => b.addEventListener("click", () => { i = +b.dataset.i; render(); }));
  };
  render();
  setInterval(() => { i = (i+1) % slides.length; render(); }, 5000);
}

function initCounters(){
  const root = document.getElementById("counters");
  if (!root) return;
  const stats = [
    {n:28,l:"Projects shipped",s:"+"},
    {n:12,l:"Hackathons",s:""},
    {n:4,l:"Years studying IM",s:""},
    {n:99,l:"Cups of coffee /mo",s:"+"},
  ];
  root.innerHTML = `<div class="container-x"><div class="grid">${stats.map((s,i)=>`
    <div class="text-center reveal"><p class="num" id="cnt${i}">0${s.s}</p><p class="lbl">${s.l}</p></div>
  `).join("")}</div></div>`;
  window.observeReveals && window.observeReveals(root);
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        stats.forEach((s,i) => {
          const target = document.getElementById("cnt"+i);
          const start = performance.now(), dur = 1400;
          const step = (t) => {
            const k = Math.min(1, (t-start)/dur);
            target.textContent = Math.round(s.n * (1-Math.pow(1-k,3))) + s.s;
            if (k<1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
        io.disconnect();
      }
    });
  }, { threshold: 0.4 });
  io.observe(root);
}

function initGallery(){
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  // ============================================================
  //  YOUR GALLERY — edit this list to add your own photos/videos
  // ------------------------------------------------------------
  //  1. Put your files in a "media/" folder next to gallery.html
  //  2. Add an entry below. Supported types: "image" or "video"
  //  3. For videos, you can also add an optional "poster" image
  // ============================================================
  const items = (window.GALLERY_ITEMS && window.GALLERY_ITEMS.length)
    ? window.GALLERY_ITEMS
    : [
        // EXAMPLES — replace with your own files in /media/
        { type:"image", src:"media/photo-1.jpg",  caption:"Replace me" },
        { type:"image", src:"media/photo-2.jpg",  caption:"Replace me" },
        { type:"image", src:"media/photo-3.jpg",  caption:"Replace me" },
        { type:"image", src:"media/photo-4.jpg",  caption:"Replace me" },
        { type:"video", src:"media/clip-1.mp4",  poster:"media/clip-1.jpg", caption:"My video" },
      ];

  // Fallback placeholder if a file is missing so the layout still shows
  const placeholder = (i)=>`https://picsum.photos/seed/farel${i+1}/800/600`;

  grid.innerHTML = items.map((it,i)=>{
    if (it.type === "video") {
      return `<button class="gallery-item reveal" data-i="${i}">
        <video src="${it.src}" ${it.poster?`poster="${it.poster}"`:""} autoplay loop muted playsinline preload="metadata"></video>
        <span class="play-badge" aria-hidden="true">▶</span>
      </button>`;
    }
    return `<button class="gallery-item reveal" data-i="${i}">
      <img src="${it.src}" alt="${it.caption||'Gallery image '+(i+1)}" loading="lazy" onerror="this.src='${placeholder(i)}'">
    </button>`;
  }).join("");
  window.observeReveals && window.observeReveals(grid);

  let open = null;
  const lb = document.getElementById("lightbox");
  const renderMedia = (it) => it.type === "video"
    ? `<video src="${it.src}" controls autoplay playsinline ${it.poster?`poster="${it.poster}"`:""} style="max-width:90vw;max-height:80vh;border-radius:14px"></video>`
    : `<img src="${it.src}" alt="${it.caption||''}">`;
  const show = (i) => {
    open = i;
    lb.innerHTML = `<button class="close" aria-label="Close">×</button>
      <button class="arrow prev" aria-label="Previous">‹</button>
      ${renderMedia(items[i])}
      <button class="arrow next" aria-label="Next">›</button>`;
    lb.style.display = "flex";
    lb.querySelector(".close").onclick = close;
    lb.querySelector(".prev").onclick = (ev)=>{ev.stopPropagation();show((i-1+items.length)%items.length)};
    lb.querySelector(".next").onclick = (ev)=>{ev.stopPropagation();show((i+1)%items.length)};
    lb.onclick = (ev)=>{ if (ev.target===lb) close(); };
  };
  const close = () => { open=null; lb.style.display="none"; lb.innerHTML=""; };
  grid.querySelectorAll(".gallery-item").forEach(b => b.addEventListener("click", () => show(+b.dataset.i)));
  window.addEventListener("keydown", (e)=>{
    if (open===null) return;
    if (e.key==="Escape") close();
    if (e.key==="ArrowRight") show((open+1)%items.length);
    if (e.key==="ArrowLeft") show((open-1+items.length)%items.length);
  });
}

function initContact(){
  const f = document.getElementById("contactForm");
  if (!f) return;
  f.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = f.name.value.trim();
    const email = f.email.value.trim();
    const message = f.message.value.trim();
    const errs = {};
    if (name.length < 2) errs.name = "Tell me your name (min 2 chars).";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "That email looks off.";
    if (message.length < 10) errs.message = "Message should be at least 10 characters.";
    ["name","email","message"].forEach(k => {
      const el = document.getElementById("err-"+k);
      if (el) el.textContent = errs[k] || "";
    });
    if (Object.keys(errs).length) return;

    const ok = document.getElementById("sentOk");
    const errBox = document.getElementById("sentErr");
    const btn = document.getElementById("contactSubmit");
    if (errBox) { errBox.style.display = "none"; errBox.textContent = ""; }
    if (ok) ok.style.display = "none";

    const cfg = window.EMAILJS_CONFIG;
    const ready = window.emailjs && cfg && cfg.publicKey && cfg.publicKey !== "YOUR_PUBLIC_KEY";

    if (!ready) {
      // Fallback: open user's email client so the message still reaches the owner.
      const to = (cfg && cfg.toEmail) || "farelazeem11@gmail.com";
      const subject = encodeURIComponent("Portfolio signal from " + name);
      const body = encodeURIComponent(message + "\n\n— " + name + " <" + email + ">");
      window.location.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
      if (ok) { ok.style.display = "block"; setTimeout(() => ok.style.display = "none", 5000); }
      f.reset();
      return;
    }

    try {
      if (btn) { btn.disabled = true; btn.textContent = "Sending…"; }
      await emailjs.send(cfg.serviceId, cfg.templateId, {
        from_name: name,
        from_email: email,
        reply_to: email,
        to_email: cfg.toEmail,
        message: message,
      });
      if (ok) ok.style.display = "block";
      f.reset();
      setTimeout(() => { if (ok) ok.style.display = "none"; }, 5000);
    } catch (err) {
      console.error("EmailJS error", err);
      if (errBox) {
        errBox.textContent = "Couldn't send right now. Please email farelazeem11@gmail.com directly.";
        errBox.style.display = "block";
      }
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = "Shoot a Web →"; }
    }
  });
}


// ============= SPIDER-VERSE PARALLAX SYSTEM =============

const SPIDER_SILHOUETTE = `<svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <g fill="#0c0f14">
    <ellipse cx="32" cy="36" rx="9" ry="13"/>
    <circle cx="32" cy="22" r="6"/>
  </g>
  <g stroke="#0c0f14" stroke-width="2.4" fill="none" stroke-linecap="round">
    <path d="M26 30 Q14 24 4 12"/><path d="M38 30 Q50 24 60 12"/>
    <path d="M24 36 Q12 36 0 32"/><path d="M40 36 Q52 36 64 32"/>
    <path d="M26 42 Q14 48 4 60"/><path d="M38 42 Q50 48 60 60"/>
  </g></svg>`;

function injectParallaxStage(){
  if (document.querySelector(".parallax-stage")) return;
  const stage = document.createElement("div");
  stage.className = "parallax-stage";
  stage.innerHTML = `
    <div class="layer layer-web" data-speed="0.15"></div>
    <div class="layer layer-dots" data-speed="0.35"></div>
    <div class="layer layer-corner tl" data-speed="0.05"></div>
    <div class="layer layer-corner br" data-speed="0.05"></div>
    <div class="layer layer-spider" data-speed="0.55" data-rot="1">${SPIDER_SILHOUETTE}</div>
    <div class="layer layer-burst b1" data-speed="0.45">THWIP!</div>
    <div class="layer layer-burst b2" data-speed="0.7">BAM!</div>
    <div class="layer layer-burst b3" data-speed="0.9">POW!</div>
  `;
  document.body.prepend(stage);

  const hang = document.createElement("div");
  hang.className = "hang-spider";
  hang.innerHTML = `<div class="thread"></div>${SPIDER_SILHOUETTE}`;
  document.body.appendChild(hang);

  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  document.body.appendChild(bar);
}

function initParallax(){
  const layers = document.querySelectorAll(".parallax-stage .layer");
  const hang = document.querySelector(".hang-spider");
  const bar = document.querySelector(".scroll-progress");
  const heroBg = document.querySelector(".hero-bg");
  let ticking = false;

  const update = () => {
    const y = window.scrollY;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const pct = h > 0 ? (y / h) : 0;

    layers.forEach(l => {
      const sp = parseFloat(l.dataset.speed) || 0.2;
      const rot = l.dataset.rot ? (y * 0.04) : 0;
      l.style.transform = `translate3d(0, ${-y * sp}px, 0) rotate(${rot}deg)`;
    });

    if (hang){
      // spider descends with scroll, max ~30vh down
      const drop = Math.min(window.innerHeight * 0.35, y * 0.45);
      hang.style.transform = `translate3d(0, ${drop}px, 0)`;
    }

    if (bar) bar.style.width = (pct * 100).toFixed(2) + "%";

    if (heroBg){
      // subtle zoom + parallax push
      const scale = 1 + Math.min(0.15, y / 4000);
      heroBg.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(${scale})`;
    }

    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (!ticking){ requestAnimationFrame(update); ticking = true; }
  }, { passive: true });
  update();
}

// Auto-inject a consistent page-hero on interior pages that don't have one
function injectPageHero(){
  const main = document.querySelector("main");
  if (!main) return;
  if (document.querySelector(".hero") || document.querySelector(".page-hero")) return;

  const cur = currentPage();
  const meta = {
    "about.html":      ["Origin Story",  "About Farel.A",      "Who's behind the mask — the student, the systems thinker, the coffee-fueled web-slinger."],
    "education.html":  ["School of Heroes","Education",          "From classrooms to code labs — the academic web that shaped this info manager."],
    "skills.html":     ["Powers & Abilities","Skill Set",        "Every hero has a kit. Here are the tools, frameworks, and instincts in mine."],
    "hobbies.html":    ["Off-Duty",      "Hobbies & Pastimes",   "When the mask comes off — what fuels the curiosity and creativity."],
    "achievements.html":["Wall of Wins", "Achievements",         "Trophies, citations, and shipped projects — the receipts behind the cape."],
    "story.html":      ["The Saga",     "My Story",              "A journey told in panels — origin, mentors, missions, and what's next."],
    "gallery.html":    ["From the Field","Photo Gallery",        "Snapshots from hackathons, campus life, and weekend swings around the city."],
    "contact.html":    ["Signal Up",    "Get in Touch",          "Drop a line — collaborations, questions, or just a friendly hello."],
  };
  const m = meta[cur];
  if (!m) return;

  const hero = document.createElement("section");
  hero.className = "page-hero";
  hero.innerHTML = `
    <div class="container-x reveal reveal-up">
      <span class="eyebrow">🕷️ ${m[0]}</span>
      <h1>${m[1]}</h1>
      <p class="lead">${m[2]}</p>
    </div>`;
  main.prepend(hero);
  // remove the top padding on main so hero hugs the nav
  main.style.paddingTop = "4rem";
  window.observeReveals && window.observeReveals(hero);
}

document.addEventListener("DOMContentLoaded", () => {
  injectParallaxStage();
  initShell();
  injectPageHero();
  initParallax();
  initStorySlider();
  initCounters();
  initGallery();
  initContact();
});
