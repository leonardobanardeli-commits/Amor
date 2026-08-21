/* ============================================================
   PARA O AMOR DA MINHA VIDA — script.js
   Toda a lógica do site. Edite a área CONFIG abaixo para
   personalizar sem precisar entender o resto do código.
   ============================================================ */

/* ============================================================
   🔧 CONFIG — EDITE AQUI
   ============================================================ */
const CONFIG = {
  // Nomes usados no site
  nomeDela: "Maria",
  meuNome: "Com todo o meu amor, Leonardo",

  // Data de início do relacionamento.
  // Formato: "AAAA-MM-DDTHH:MM:SS" (ano-mês-dia + hora, 24h)
  // Exemplo: namoro começou em 14 de fevereiro de 2023, às 20h:
  // dataInicio: "2023-02-14T20:00:00"
  dataInicio: "2024-08-09T14:00:00", // <-- ex: "2023-02-14T20:00:00"

  // Caminho do arquivo de música (mp3). Veja assets/music/README.md
  musica: "music/nossa-musica.mp3",
  nomeMusica: "Me encontra",

  // Texto da carta. Use \n\n para pular parágrafo.
  carta: `Meu amor,

Se você está lendo isso, significa que encontrou um pequeno pedaço do meu coração que eu transformei em um site.

Eu queria encontrar uma maneira diferente de te mostrar o quanto você é importante para mim.

Cada momento ao seu lado se tornou uma lembrança que eu quero guardar para sempre.

Você faz parte da minha história, dos meus planos e dos meus melhores pensamentos.

Eu te amo.`,

  // Frases da seção final (surpresa)
  surpresaLinha1: "Se eu pudesse escolher novamente, escolheria você. Todas as vezes.",
  surpresaLinha2: "Eu te amo. Hoje, amanhã e em todos os dias que ainda vamos viver.",

  // Timeline — "Como tudo começou..."
  // Adicione, remova ou edite quantos itens quiser.
  historia: [
    {
      data: "Capítulo 1",
      titulo: "Nosso primeiro encontro",
      texto: "O dia em que tudo começou. Troque este texto pela nossa história de verdade.",
      foto: "images/foto1.jpg" // ex: "" (deixe vazio para não mostrar foto)
    },
    {
      data: "Capítulo 2",
      titulo: "Quando percebi que estava apaixonado(a)",
      texto: "O momento exato em que percebi que você era diferente de tudo.",
      foto: "images/foto2.jpg"
    },
    {
      data: "Capítulo 3",
      titulo: "Nosso primeiro beijo",
      texto: "Um instante pequeno que ficou guardado para sempre.",
      foto: "images/foto3.jpg"
    },
    {
      data: "Capítulo 4",
      titulo: "Um momento inesquecível",
      texto: "Escolha aqui uma lembrança marcante da nossa história.",
      foto: "images/foto4.jpg"
    },
    {
      data: "Continua...",
      titulo: "E todos os momentos que ainda vamos viver",
      texto: "Essa história ainda está sendo escrita, dia após dia, com você.",
      foto: "images/foto5.jpg"
    }
  ],

  // Fotos da galeria — troque pelos caminhos das suas fotos reais.
  fotos: [
    "images/foto1.jpg",
    "images/foto2.jpg",
    "images/foto3.jpg",
    "images/foto4.jpg",
    "images/foto5.jpg",
    "images/foto6.jpg"
  ],

  // Cartões "Por que eu amo você"
  motivos: [
    { icone: "✦", texto: "Seu sorriso" },
    { icone: "✦", texto: "Seu jeito" },
    { icone: "✦", texto: "Seu abraço" },
    { icone: "✦", texto: "A forma como você me entende" },
    { icone: "✦", texto: "Os momentos que vivemos" },
    { icone: "❤", texto: "Porque simplesmente é você" }
  ]
};

/* ============================================================
   FIM DA ÁREA DE CONFIGURAÇÃO
   A partir daqui é lógica do site — não precisa editar.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  initStarsCanvas();
  initScrollProgress();
  initRevealOnScroll();
  initHeroEnter();
  initCounter();
  initTimeline();
  initGallery();
  initLightbox();
  initPlayer();
  initEnvelope();
  initReasons();
  initSurprise();
  initClickHearts();
});

/* ---------- aplica textos do CONFIG no HTML ---------- */
function applyConfig(){
  document.querySelectorAll(".js-nome-dela").forEach(el => {
    if (CONFIG.nomeDela && CONFIG.nomeDela !== "NOME DELA") el.textContent = CONFIG.nomeDela;
  });
  document.querySelectorAll(".js-meu-nome").forEach(el => {
    el.textContent = CONFIG.meuNome;
  });
  document.getElementById("playerSongName").textContent = CONFIG.nomeMusica;
  document.getElementById("letterText").textContent = CONFIG.carta;
  document.getElementById("surpriseLine1").textContent = CONFIG.surpresaLinha1;
  document.getElementById("surpriseLine2").textContent = CONFIG.surpresaLinha2;
}

/* ============================================================
   FUNDO: estrelas + corações flutuando (canvas)
   ============================================================ */
function initStarsCanvas(){
  const canvas = document.getElementById("stars-canvas");
  const ctx = canvas.getContext("2d");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let w, h, particles;

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight * (document.body.scrollHeight / window.innerHeight > 1 ? 1 : 1);
    h = canvas.height = window.innerHeight;
  }

  function makeParticles(){
    const count = Math.min(140, Math.floor((window.innerWidth * window.innerHeight) / 9000));
    particles = new Array(count).fill(0).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.4 + 0.3,
      baseAlpha: Math.random() * 0.6 + 0.2,
      twinkleSpeed: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2,
      isHeart: Math.random() < 0.06,
      driftX: (Math.random() - 0.5) * 0.06,
      driftY: -Math.random() * 0.08 - 0.02
    }));
  }

  function drawHeart(x, y, size, alpha){
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(size / 14, size / 14);
    ctx.beginPath();
    ctx.moveTo(0, 4);
    ctx.bezierCurveTo(0, 2, -2, 0, -5, 0);
    ctx.bezierCurveTo(-9, 0, -9, 5, -9, 5);
    ctx.bezierCurveTo(-9, 9, -5, 12, 0, 16);
    ctx.bezierCurveTo(5, 12, 9, 9, 9, 5);
    ctx.bezierCurveTo(9, 5, 9, 0, 5, 0);
    ctx.bezierCurveTo(2, 0, 0, 2, 0, 4);
    ctx.closePath();
    ctx.fillStyle = `rgba(243, 205, 217, ${alpha})`;
    ctx.fill();
    ctx.restore();
  }

  function tick(t){
    ctx.clearRect(0, 0, w, h);
    for (const p of particles){
      const alpha = p.baseAlpha * (0.6 + 0.4 * Math.sin(t * p.twinkleSpeed + p.phase));
      if (p.isHeart){
        drawHeart(p.x, p.y, p.r * 6, alpha * 0.5);
      } else {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(232, 202, 160, ${alpha})`;
        ctx.fill();
      }

      if (!reduceMotion){
        p.x += p.driftX;
        p.y += p.driftY;
        if (p.y < -10){ p.y = h + 10; p.x = Math.random() * w; }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
      }
    }
    if (!reduceMotion) requestAnimationFrame(tick);
  }

  resize();
  makeParticles();
  window.addEventListener("resize", () => { resize(); makeParticles(); });

  if (reduceMotion){
    tick(0);
  } else {
    requestAnimationFrame(tick);
  }
}

/* ============================================================
   BARRA DE PROGRESSO DO SCROLL
   ============================================================ */
function initScrollProgress(){
  const bar = document.getElementById("scrollBar");
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + "%";
  }, { passive: true });
}

/* ============================================================
   REVEAL ON SCROLL (fade + slide-up ao entrar na tela)
   ============================================================ */
function initRevealOnScroll(){
  const items = document.querySelectorAll("[data-reveal]");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  items.forEach(el => observer.observe(el));
}

/* ============================================================
   HERO — botão "Entrar na nossa história"
   ============================================================ */
function initHeroEnter(){
  const btn = document.getElementById("enterBtn");
  btn.addEventListener("click", () => {
    document.getElementById("tempo").scrollIntoView({ behavior: "smooth" });
  });
}

/* ============================================================
   CONTADOR — "Nosso tempo juntos"
   ============================================================ */
function initCounter(){
  const startDateStr = CONFIG.dataInicio;
  if (!startDateStr || startDateStr === "COLOQUE-AQUI-A-DATA") return;

  const startDate = new Date(startDateStr);
  if (isNaN(startDate.getTime())) return;

  const els = {
    years: document.getElementById("c-years"),
    months: document.getElementById("c-months"),
    days: document.getElementById("c-days"),
    hours: document.getElementById("c-hours"),
    minutes: document.getElementById("c-minutes"),
    seconds: document.getElementById("c-seconds")
  };

  function update(){
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    if (seconds < 0){ seconds += 60; minutes--; }
    if (minutes < 0){ minutes += 60; hours--; }
    if (hours < 0){ hours += 24; days--; }
    if (days < 0){
      const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
      days += lastMonth;
      months--;
    }
    if (months < 0){ months += 12; years--; }

    els.years.textContent = String(Math.max(years, 0)).padStart(2, "0");
    els.months.textContent = String(Math.max(months, 0)).padStart(2, "0");
    els.days.textContent = String(Math.max(days, 0)).padStart(2, "0");
    els.hours.textContent = String(Math.max(hours, 0)).padStart(2, "0");
    els.minutes.textContent = String(Math.max(minutes, 0)).padStart(2, "0");
    els.seconds.textContent = String(Math.max(seconds, 0)).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

/* ============================================================
   TIMELINE — "Como tudo começou..."
   ============================================================ */
function initTimeline(){
  const container = document.getElementById("timeline");
  container.innerHTML = CONFIG.historia.map(item => `
    <div class="timeline-item" data-reveal>
      <p class="timeline-item__date">${escapeHtml(item.data)}</p>
      <h3 class="timeline-item__title">${escapeHtml(item.titulo)}</h3>
      <p class="timeline-item__text">${escapeHtml(item.texto)}</p>
      ${item.foto ? `<img class="timeline-item__photo" src="${item.foto}" alt="${escapeHtml(item.titulo)}" loading="lazy">` : ""}
    </div>
  `).join("");
  initRevealOnScroll(); // observa os itens recém-criados
}

/* ============================================================
   GALERIA
   ============================================================ */
function initGallery(){
  const container = document.getElementById("gallery");
  container.innerHTML = CONFIG.fotos.map((src, i) => `
    <button class="gallery__item" data-index="${i}" data-reveal aria-label="Ampliar foto ${i + 1}">
      <img src="${src}" alt="Nossa foto ${i + 1}" loading="lazy">
      <span class="gallery__icon">↗</span>
    </button>
  `).join("");
  initRevealOnScroll();
}

/* ============================================================
   LIGHTBOX
   ============================================================ */
function initLightbox(){
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");
  let currentIndex = 0;

  function open(index){
    currentIndex = index;
    img.src = CONFIG.fotos[currentIndex];
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function close(){
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  function next(){ currentIndex = (currentIndex + 1) % CONFIG.fotos.length; img.src = CONFIG.fotos[currentIndex]; }
  function prev(){ currentIndex = (currentIndex - 1 + CONFIG.fotos.length) % CONFIG.fotos.length; img.src = CONFIG.fotos[currentIndex]; }

  document.getElementById("gallery").addEventListener("click", (e) => {
    const item = e.target.closest(".gallery__item");
    if (item) open(Number(item.dataset.index));
  });

  closeBtn.addEventListener("click", close);
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);
  lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });
  document.addEventListener("keydown", (e) => {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  });
}

/* ============================================================
   PLAYER DE MÚSICA
   ============================================================ */
function initPlayer(){
  const audio = document.getElementById("audioPlayer");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const iconPlay = document.getElementById("iconPlay");
  const iconPause = document.getElementById("iconPause");
  const seek = document.getElementById("playerSeek");
  const currentEl = document.getElementById("playerCurrent");
  const durationEl = document.getElementById("playerDuration");
  const volumeSeek = document.getElementById("volumeSeek");
  const muteBtn = document.getElementById("muteBtn");
  const iconVolume = document.getElementById("iconVolume");
  const iconMuted = document.getElementById("iconMuted");
  const playerEl = document.querySelector(".player");
  const autoplayHint = document.getElementById("autoplayHint");

  audio.volume = Number(volumeSeek.value);

  function formatTime(s){
    if (!isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  }

  audio.addEventListener("loadedmetadata", () => {
    durationEl.textContent = formatTime(audio.duration);
    seek.max = audio.duration;
  });

  audio.addEventListener("timeupdate", () => {
    seek.value = audio.currentTime;
    currentEl.textContent = formatTime(audio.currentTime);
  });

  audio.addEventListener("error", () => {
    document.getElementById("playerSongName").textContent =
      CONFIG.nomeMusica + " (adicione o arquivo mp3 em assets/music/)";
  });

  seek.addEventListener("input", () => {
    audio.currentTime = Number(seek.value);
  });

  volumeSeek.addEventListener("input", () => {
    audio.volume = Number(volumeSeek.value);
    audio.muted = audio.volume === 0;
    updateVolumeIcon();
  });

  function updateVolumeIcon(){
    const muted = audio.muted || audio.volume === 0;
    iconVolume.style.display = muted ? "none" : "block";
    iconMuted.style.display = muted ? "block" : "none";
  }

  muteBtn.addEventListener("click", () => {
    audio.muted = !audio.muted;
    updateVolumeIcon();
  });

  function play(){
    const p = audio.play();
    if (p !== undefined){
      p.then(() => {
        playerEl.classList.add("is-playing");
        iconPlay.style.display = "none";
        iconPause.style.display = "block";
        autoplayHint.style.display = "none";
      }).catch(() => {
        // autoplay bloqueado pelo navegador
        autoplayHint.style.display = "block";
      });
    }
  }
  function pause(){
    audio.pause();
    playerEl.classList.remove("is-playing");
    iconPlay.style.display = "block";
    iconPause.style.display = "none";
  }

  playPauseBtn.addEventListener("click", () => {
    if (audio.paused) play(); else pause();
  });

  updateVolumeIcon();
  // Não inicia sozinho: respeitamos o bloqueio de autoplay do navegador.
  // O usuário precisa clicar em play — assim garantimos som sempre.
}

/* ============================================================
   ENVELOPE / CARTA DE AMOR
   ============================================================ */
function initEnvelope(){
  const envelope = document.getElementById("envelopeBtn");
  const letterFull = document.getElementById("letterFull");

  envelope.addEventListener("click", () => {
    const isOpen = envelope.classList.toggle("is-open");
    envelope.setAttribute("aria-expanded", String(isOpen));
    if (isOpen){
      letterFull.classList.add("is-open");
      setTimeout(() => {
        letterFull.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 550);
    } else {
      letterFull.classList.remove("is-open");
    }
  });
}

/* ============================================================
   MOTIVOS / CARTÕES
   ============================================================ */
function initReasons(){
  const container = document.getElementById("reasonsGrid");
  container.innerHTML = CONFIG.motivos.map(m => `
    <div class="reason-card" data-reveal>
      <span class="reason-card__icon">${escapeHtml(m.icone || "✦")}</span>
      <p class="reason-card__text">${escapeHtml(m.texto)}</p>
    </div>
  `).join("");
  initRevealOnScroll();
}

/* ============================================================
   SURPRESA FINAL
   ============================================================ */
function initSurprise(){
  const btn = document.getElementById("surpriseBtn");
  const reveal = document.getElementById("surpriseReveal");

  btn.addEventListener("click", () => {
    reveal.classList.add("is-open");
    btn.style.display = "none";
    launchConfettiHearts();
  });
}

function launchConfettiHearts(){
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const total = reduceMotion ? 8 : 34;
  const hearts = ["❤", "✦", "♡"];

  for (let i = 0; i < total; i++){
    setTimeout(() => {
      const el = document.createElement("span");
      el.className = "confetti-heart";
      el.textContent = hearts[Math.floor(Math.random() * hearts.length)];
      el.style.left = Math.random() * 100 + "vw";
      el.style.fontSize = (Math.random() * 14 + 12) + "px";
      el.style.opacity = String(Math.random() * 0.5 + 0.5);
      const duration = Math.random() * 2 + 2.5;
      el.style.animationDuration = duration + "s";
      document.body.appendChild(el);
      setTimeout(() => el.remove(), duration * 1000 + 200);
    }, i * 60);
  }
}

/* ============================================================
   CORAÇÕES AO CLICAR (interação espalhada pelo site)
   ============================================================ */
function initClickHearts(){
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  document.addEventListener("click", (e) => {
    // evita conflito em inputs de range e botões que já têm sua própria animação
    if (e.target.closest("input")) return;

    const heart = document.createElement("span");
    heart.className = "click-heart";
    heart.textContent = "❤";
    heart.style.left = (e.clientX - 8) + "px";
    heart.style.top = (e.clientY - 8) + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
  });
}

/* ============================================================
   UTIL
   ============================================================ */
function escapeHtml(str){
  const div = document.createElement("div");
  div.textContent = str ?? "";
  return div.innerHTML;
}
