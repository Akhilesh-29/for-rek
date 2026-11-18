/**
 * ============================================================================
 * REKHA & AKKI — A DIGITAL LOVE LETTER
 * ============================================================================
 * 
 * 💖 HOW TO CUSTOMIZE THIS WEBSITE:
 * All the personal content (names, dates, text, reasons, photos, music)
 * is conveniently organized in the CONFIG object right below.
 * You can edit any text inside the quotes without touching the rest of the code!
 */

const CONFIG = {
  // 1. NAMES & HERO DETAILS
  HER_NAME: "Rekha",
  HIS_NAME: "Akki",
  HERO_TITLE: "Rekha & Akki",
  HERO_QUOTE: "In a world full of fleeting moments, every single second with you is my forever.",

  // 2. YOUR SPECIAL START DATE (Year-Month-DayTHour:Minute:Second)
  // Format: "YYYY-MM-DDTHH:MM:SS" (e.g., when you first met or became official)
  START_DATE: "2023-04-14T19:30:00",

  // 3. BACKGROUND MUSIC
  // Put your romantic MP3 song in the assets folder (e.g. assets/music.mp3).
  // If no file is provided or if audio fails to load, a gentle ambient romantic piano chime
  // plays automatically via Web Audio so you always have music out of the box!
  MUSIC_URL: "assets/music.mp3", 

  // 4. OUR STORY TIMELINE (Moments that define your journey)
  STORY_MOMENTS: [
    {
      date: "April 14, 2023",
      title: "The First Hello",
      subtitle: "Where everything quietly fell into place",
      description: "Neither of us knew that an ordinary conversation on an ordinary day would become the turning point of our lives. From that very first exchange, you felt like home."
    },
    {
      date: "May 2, 2023",
      title: "Our First Date",
      subtitle: "Coffee, nervous smiles & hours feeling like minutes",
      description: "I remember looking across the table and thinking how your laugh had this gentle way of making everything else in the room fade into the background. I never wanted that evening to end."
    },
    {
      date: "July 19, 2023",
      title: "The Moment I Knew",
      subtitle: "When you became my favorite person",
      description: "It wasn't a grand, dramatic moment—it was the quiet way you smiled at me while we walked, the way your hand naturally fit into mine, and the realization that I never wanted to let go."
    },
    {
      date: "September 8, 2023",
      title: "The First 'I Love You'",
      subtitle: "The easiest truth I have ever spoken",
      description: "Three simple words, yet they held every dream, every unspoken prayer, and every quiet promise I had made to you in my heart. Saying it felt like breathing."
    },
    {
      date: "December 28, 2023",
      title: "Our Favorite Getaway",
      subtitle: "Sunsets, long drives & quiet magic",
      description: "Watching the sun dip below the horizon with your head resting on my shoulder. No matter where we are on this map, as long as I am with you, I am home."
    },
    {
      date: "Today & Every Day After",
      title: "Still Choosing You",
      subtitle: "Through every season, with all my heart",
      description: "Every morning I wake up grateful for you. For your kindness, your warmth, and the beautiful story we continue to write together, page by page."
    }
  ],

  // 5. "WHY I LOVE YOU" (12 heart cards she can tap to reveal)
  REASONS_I_LOVE_YOU: [
    "The way your eyes crinkle with genuine joy whenever you laugh from your soul.",
    "How safe and peaceful the entire world feels the moment I hold your hand.",
    "Your endless kindness and the gentle grace you show to everyone around you.",
    "The adorable happy dance you do whenever good food arrives at the table.",
    "How you believe in me so wholeheartedly, especially during days I doubt myself.",
    "The way you remember the smallest, quietest details I mentioned weeks ago.",
    "How sweet and sleepy your voice sounds when you first wake up.",
    "The effortless comfort of our shared silences, where no words are needed.",
    "How even the most mundane grocery runs turn into an adventure with you.",
    "Your passionate heart and how fiercely you care for the things you love.",
    "The way your smile instantly melts away whatever stress I was carrying.",
    "Simply because you are you—my anchor, my warmth, and the love of my life."
  ],

  // 6. PHOTO MEMORIES POLAROID GALLERY
  // Place your photos in assets/photos/ and change the filenames here!
  PHOTOS: [
    {
      src: "assets/photos/photo1.svg",
      caption: "The spark that started it all",
      alt: "Akki and Rekha first memory"
    },
    {
      src: "assets/photos/photo2.svg",
      caption: "Endless late-night conversations",
      alt: "Late night talks together"
    },
    {
      src: "assets/photos/photo3.svg",
      caption: "Chasing sunsets by your side",
      alt: "Golden hour sunset with Rekha"
    },
    {
      src: "assets/photos/photo4.svg",
      caption: "The warmth of your laughter",
      alt: "Candlelit dinner and smiles"
    },
    {
      src: "assets/photos/photo5.svg",
      caption: "Every wish I ever made",
      alt: "Lanterns in the night sky"
    },
    {
      src: "assets/photos/photo6.svg",
      caption: "My forever and always",
      alt: "Holding hands forever"
    }
  ],

  // 7. HEARTFELT LOVE LETTER (Types out slowly on scroll)
  LOVE_LETTER: [
    "Dearest Rekha,",
    "If love was something that could be measured in words, I think all the libraries in the world would still fall short of describing what you mean to me.",
    "When I look back at our journey, I don't just remember the big milestones. I remember the quiet, tender moments—the way you reach for my hand when you're thinking, the warmth of your shoulder against mine on tired evenings, and the peace that washes over me whenever you walk into the room.",
    "You have shown me what gentle, patient, and unconditional love looks like. You make ordinary days feel like poetry, and even on the hardest days, just hearing your voice reminds me that everything is going to be okay.",
    "Thank you for being my confidante, my biggest cheerleader, and my absolute favorite person. No matter where life takes us or what mountains we have to climb, I promise you will never have to face them alone.",
    "I loved you yesterday, I love you today, and I will keep loving you in all the tomorrows to come."
  ],
  LETTER_SIGNATURE: "Forever yours,\nAkki",

  // 8. LITTLE PROMISES
  PROMISES: [
    "I promise to always listen—not just to your words, but to your quiet silences.",
    "I promise to be your safest shelter whenever the world outside feels too loud.",
    "I promise to make you laugh until your cheeks hurt, especially when you've had a tough day.",
    "I promise to celebrate your dreams with the same fierce pride as if they were my own.",
    "I promise to never take a single day with you for granted, and to remind you how cherished you are.",
    "I promise to choose you, stand by you, and hold your hand through every chapter of our lives."
  ],

  // 9. FINALE QUESTION & RESPONSE
  FINALE_QUESTION: "Will you keep choosing me, Rekha?",
  FINALE_RESPONSE: "Forever and always, my love. Happy moments, warm hugs, and all of my heart are yours.",
  FINALE_SIGN: "Forever yours, Akki",

  // 10. EASTER EGGS
  SECRET_HEART_NOTE: "You found my secret heart! 💖 Just a gentle reminder: no matter how hidden or quiet things seem, every beat of my heart belongs completely to you, Rekha.",
  MISS_ME_NOTE: "Hey my love, if you're reading this right now and missing me: take a deep breath. Close your eyes for three seconds and remember that you are deeply loved, cherished, and in my thoughts at this very moment. I'm always just one thought away."
};

/* ============================================================================
   APPLICATION CORE LOGIC
   ============================================================================ */

document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

function initApp() {
  populateStaticContent();
  initIntroCurtain();
  initLiveCounter();
  initPetalsCanvas();
  initAudioPlayer();
  renderTimeline();
  renderReasons();
  renderGallery();
  initLoveLetter();
  renderPromises();
  initConstellationCanvas();
  initFinale();
  initEasterEggs();
  initScrollAnimations();
}

/**
 * Populate dynamic names and texts from CONFIG into the HTML
 */
function populateStaticContent() {
  const herNameSpans = document.querySelectorAll(".her-name");
  herNameSpans.forEach(el => el.textContent = CONFIG.HER_NAME);

  const hisNameSpans = document.querySelectorAll(".his-name");
  hisNameSpans.forEach(el => el.textContent = CONFIG.HIS_NAME);

  const heroTitle = document.getElementById("hero-names");
  if (heroTitle) {
    heroTitle.innerHTML = `${CONFIG.HER_NAME} <span class="amp">&</span> ${CONFIG.HIS_NAME}`;
  }

  const heroQuote = document.getElementById("hero-quote");
  if (heroQuote) heroQuote.textContent = CONFIG.HERO_QUOTE;

  const finaleQuestion = document.getElementById("finale-question");
  if (finaleQuestion) finaleQuestion.textContent = CONFIG.FINALE_QUESTION;

  const finaleMsg = document.getElementById("finale-response-msg");
  if (finaleMsg) finaleMsg.textContent = CONFIG.FINALE_RESPONSE;

  const finaleSign = document.getElementById("finale-signoff");
  if (finaleSign) finaleSign.textContent = CONFIG.FINALE_SIGN;
}

/**
 * 1. OPENING SCREEN CURTAIN
 */
function initIntroCurtain() {
  const introScreen = document.getElementById("intro-screen");
  const openBtn = document.getElementById("open-btn");

  if (!openBtn || !introScreen) return;

  openBtn.addEventListener("click", () => {
    // Start Audio on user interaction
    window.LoveAudio.play();

    // Trigger sweet burst of hearts from button center
    const rect = openBtn.getBoundingClientRect();
    createBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 20);

    // Fade out intro screen
    introScreen.classList.add("unlocked");
    setTimeout(() => {
      introScreen.style.display = "none";
    }, 1200);
  });
}

/**
 * 2. LIVE LOVE COUNTER
 * Accurately calculates elapsed years, months, days, hours, minutes, seconds
 */
function initLiveCounter() {
  const yearsEl = document.getElementById("cnt-years");
  const monthsEl = document.getElementById("cnt-months");
  const daysEl = document.getElementById("cnt-days");
  const hoursEl = document.getElementById("cnt-hours");
  const minutesEl = document.getElementById("cnt-minutes");
  const secondsEl = document.getElementById("cnt-seconds");

  if (!yearsEl) return;

  function update() {
    const startDate = new Date(CONFIG.START_DATE);
    const now = new Date();

    if (isNaN(startDate.getTime())) {
      console.warn("Invalid START_DATE in CONFIG");
      return;
    }

    // Precise calendar difference
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    let hours = now.getHours() - startDate.getHours();
    let minutes = now.getMinutes() - startDate.getMinutes();
    let seconds = now.getSeconds() - startDate.getSeconds();

    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }
    if (days < 0) {
      // Days in previous month
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }

    yearsEl.textContent = Math.max(0, years);
    monthsEl.textContent = Math.max(0, months);
    daysEl.textContent = Math.max(0, days);
    hoursEl.textContent = String(Math.max(0, hours)).padStart(2, "0");
    minutesEl.textContent = String(Math.max(0, minutes)).padStart(2, "0");
    secondsEl.textContent = String(Math.max(0, seconds)).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

/**
 * 3. OUR STORY TIMELINE RENDERING
 */
function renderTimeline() {
  const container = document.getElementById("story-timeline");
  if (!container) return;

  container.innerHTML = "";
  CONFIG.STORY_MOMENTS.forEach((moment, index) => {
    const item = document.createElement("div");
    item.className = "timeline-item reveal";
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="timeline-date">${moment.date}</span>
        <h3 class="timeline-title">${moment.title}</h3>
        <p class="timeline-text"><em>"${moment.subtitle}"</em></p>
        <p class="timeline-text" style="margin-top: 0.6rem;">${moment.description}</p>
      </div>
    `;
    container.appendChild(item);
  });
}

/**
 * 4. "WHY I LOVE YOU" HEART CARDS
 */
function renderReasons() {
  const grid = document.getElementById("reasons-grid");
  if (!grid) return;

  grid.innerHTML = "";
  CONFIG.REASONS_I_LOVE_YOU.forEach((reason, index) => {
    const card = document.createElement("div");
    card.className = "reason-card reveal";
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Reason number ${index + 1}: Click to reveal`);

    card.innerHTML = `
      <div class="card-front">
        <div class="card-heart-badge">💖</div>
        <div class="card-front-num">Reason #${index + 1}</div>
        <div class="card-tap-hint">Tap to open</div>
      </div>
      <div class="card-back">
        <p class="card-back-text">"${reason}"</p>
        <div class="card-back-heart">✦ with all my love ✦</div>
      </div>
    `;

    const toggle = () => {
      card.classList.toggle("flipped");
      if (card.classList.contains("flipped")) {
        const rect = card.getBoundingClientRect();
        createBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 8);
      }
    };

    card.addEventListener("click", toggle);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    });

    grid.appendChild(card);
  });
}

/**
 * 5. PHOTO GALLERY & LIGHTBOX
 */
function renderGallery() {
  const grid = document.getElementById("gallery-grid");
  if (!grid) return;

  const modal = document.getElementById("photo-modal");
  const modalImg = document.getElementById("modal-img");
  const modalCaption = document.getElementById("modal-caption");
  const modalClose = document.getElementById("modal-close");

  grid.innerHTML = "";
  CONFIG.PHOTOS.forEach((photo) => {
    const polaroid = document.createElement("div");
    polaroid.className = "polaroid-card reveal";
    polaroid.setAttribute("tabindex", "0");
    polaroid.setAttribute("role", "button");
    polaroid.setAttribute("aria-label", `View photo: ${photo.caption}`);

    polaroid.innerHTML = `
      <div class="polaroid-img-wrap">
        <img class="polaroid-img" src="${photo.src}" alt="${photo.alt}" loading="lazy">
      </div>
      <div class="polaroid-caption">${photo.caption}</div>
    `;

    const openModal = () => {
      if (modalImg) modalImg.src = photo.src;
      if (modalCaption) modalCaption.textContent = photo.caption;
      if (modal) modal.classList.add("active");
    };

    polaroid.addEventListener("click", openModal);
    polaroid.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal();
      }
    });

    grid.appendChild(polaroid);
  });

  if (modalClose && modal) {
    modalClose.addEventListener("click", () => modal.classList.remove("active"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.classList.remove("active");
    });
  }
}

/**
 * 6. LOVE LETTER TYPEWRITER EFFECT
 */
function initLoveLetter() {
  const letterBody = document.getElementById("letter-body");
  const skipBtn = document.getElementById("skip-letter-btn");
  const letterSection = document.getElementById("letter");

  if (!letterBody) return;

  let hasStarted = false;
  let isCompleted = false;

  const fullHtml = CONFIG.LOVE_LETTER.map(p => `<p>${p}</p>`).join("");

  function typeLetter() {
    if (hasStarted) return;
    hasStarted = true;

    // Check prefers-reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      completeInstantly();
      return;
    }

    let pIndex = 0;
    let charIndex = 0;
    letterBody.innerHTML = '<span class="cursor"></span>';

    function step() {
      if (isCompleted) return;

      if (pIndex >= CONFIG.LOVE_LETTER.length) {
        completeInstantly();
        return;
      }

      const currentPara = CONFIG.LOVE_LETTER[pIndex];
      const cursor = letterBody.querySelector(".cursor");

      let currentPEl = letterBody.children[pIndex];
      if (!currentPEl || currentPEl.classList.contains("cursor")) {
        currentPEl = document.createElement("p");
        letterBody.insertBefore(currentPEl, cursor);
      }

      currentPEl.textContent = currentPara.slice(0, charIndex + 1);
      charIndex++;

      if (charIndex >= currentPara.length) {
        pIndex++;
        charIndex = 0;
        setTimeout(step, 240); // Soft breathing pause between paragraphs
      } else {
        setTimeout(step, 22); // Typing cadence
      }
    }

    step();
  }

  function completeInstantly() {
    isCompleted = true;
    letterBody.innerHTML = fullHtml;
    if (skipBtn) skipBtn.style.display = "none";
  }

  if (skipBtn) {
    skipBtn.addEventListener("click", completeInstantly);
  }

  // Trigger on scroll when letter is visible
  if (letterSection && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasStarted) {
          typeLetter();
        }
      });
    }, { threshold: 0.3 });

    observer.observe(letterSection);
  } else {
    completeInstantly();
  }
}

/**
 * 7. LITTLE PROMISES
 */
function renderPromises() {
  const container = document.getElementById("promises-list");
  if (!container) return;

  container.innerHTML = "";
  CONFIG.PROMISES.forEach((promise, i) => {
    const card = document.createElement("div");
    card.className = "promise-card reveal";
    card.innerHTML = `
      <div class="promise-icon">✨</div>
      <div class="promise-text">${promise}</div>
    `;
    container.appendChild(card);
  });
}

/**
 * 8. FINALE NIGHT SKY & CONSTELLATION CANVAS
 */
function initConstellationCanvas() {
  const canvas = document.getElementById("constellation-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let stars = [];
  let heartPoints = [];
  let animationId;

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
    generateStars();
    generateHeartPoints();
  }

  window.addEventListener("resize", resize);

  function generateStars() {
    stars = [];
    const count = Math.floor((width * height) / 4500);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2
      });
    }
  }

  // Parametric heart formula normalized to canvas center
  function generateHeartPoints() {
    heartPoints = [];
    const total = 42;
    const centerX = width / 2;
    const centerY = height * 0.42;
    const scale = Math.min(width, height) * 0.016;

    for (let i = 0; i < total; i++) {
      const t = (i / total) * Math.PI * 2;
      // Heart parametric curve
      const x = 16 * Math.pow(Math.sin(t), 3);
      const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

      heartPoints.push({
        x: centerX + x * scale,
        y: centerY + y * scale,
        alpha: 0.15,
        targetAlpha: 0.85
      });
    }
  }

  let progress = 0;

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Render twinkling stars
    stars.forEach(s => {
      s.phase += s.speed;
      const curAlpha = s.alpha * (0.6 + 0.4 * Math.sin(s.phase));
      ctx.fillStyle = `rgba(255, 245, 234, ${curAlpha})`;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    });

    // Draw Constellation Heart Lines
    progress = Math.min(1, progress + 0.003);

    ctx.strokeStyle = `rgba(247, 197, 159, ${0.35 * progress})`;
    ctx.lineWidth = 1.2;
    ctx.beginPath();

    const maxIndex = Math.floor(heartPoints.length * progress);
    for (let i = 0; i < maxIndex; i++) {
      const p = heartPoints[i];
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    }
    if (progress >= 1 && heartPoints.length > 0) {
      ctx.lineTo(heartPoints[0].x, heartPoints[0].y);
    }
    ctx.stroke();

    // Draw Constellation Star Nodes
    for (let i = 0; i < maxIndex; i++) {
      const p = heartPoints[i];
      ctx.fillStyle = "rgba(245, 167, 184, 0.9)";
      ctx.shadowColor = "#f5a7b8";
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 2.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    animationId = requestAnimationFrame(render);
  }

  resize();
  render();
}

/**
 * FINALE BUTTON CLICKS ("Yes" & "Always")
 */
function initFinale() {
  const yesBtn = document.getElementById("btn-yes");
  const alwaysBtn = document.getElementById("btn-always");
  const finaleResponse = document.getElementById("finale-response");

  function handleChoose(e) {
    const rect = e.target.getBoundingClientRect();
    createBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 40);

    if (finaleResponse) {
      finaleResponse.classList.add("show");
      finaleResponse.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    // Gentle celebration audio chime
    if (window.LoveAudio && window.LoveAudio.playChime) {
      window.LoveAudio.playChime();
    }
  }

  if (yesBtn) yesBtn.addEventListener("click", handleChoose);
  if (alwaysBtn) alwaysBtn.addEventListener("click", handleChoose);
}

/**
 * 9. EASTER EGGS
 */
function initEasterEggs() {
  // Secret Heart Easter Egg
  const secretHeart = document.getElementById("secret-heart");
  const secretModal = document.getElementById("secret-modal");
  const secretModalClose = document.getElementById("secret-modal-close");

  if (secretHeart && secretModal) {
    secretHeart.addEventListener("click", (e) => {
      e.stopPropagation();
      secretModal.classList.add("active");
      const rect = secretHeart.getBoundingClientRect();
      createBurst(rect.left + rect.width / 2, rect.top + rect.height / 2, 15);
    });
  }

  if (secretModalClose && secretModal) {
    secretModalClose.addEventListener("click", () => secretModal.classList.remove("active"));
    secretModal.addEventListener("click", (e) => {
      if (e.target === secretModal) secretModal.classList.remove("active");
    });
  }

  // "Open when you miss me" floating button
  const missMeBtn = document.getElementById("miss-me-btn");
  const missMeModal = document.getElementById("miss-me-modal");
  const missMeClose = document.getElementById("miss-me-close");
  const hugBtn = document.getElementById("hug-btn");
  const hugBox = document.getElementById("hug-box");

  if (missMeBtn && missMeModal) {
    missMeBtn.addEventListener("click", () => {
      missMeModal.classList.add("active");
    });
  }

  if (missMeClose && missMeModal) {
    missMeClose.addEventListener("click", () => missMeModal.classList.remove("active"));
    missMeModal.addEventListener("click", (e) => {
      if (e.target === missMeModal) missMeModal.classList.remove("active");
    });
  }

  if (hugBtn && hugBox) {
    hugBtn.addEventListener("click", () => {
      hugBox.style.display = "block";
      hugBtn.textContent = "Hugging you tightly right now... 🫂❤️";
      createBurst(window.innerWidth / 2, window.innerHeight / 2, 30);
      if (window.navigator.vibrate) window.navigator.vibrate([100, 50, 200]);
    });
  }

  // Mouse sparkle trail (Desktop) & Tap heart ripples (Mobile)
  let lastSparkleTime = 0;
  window.addEventListener("pointermove", (e) => {
    // Throttle for performance
    const now = Date.now();
    if (now - lastSparkleTime > 75) {
      lastSparkleTime = now;
      createSparkle(e.clientX, e.clientY);
    }
  });

  window.addEventListener("pointerdown", (e) => {
    createBurst(e.clientX, e.clientY, 5);
  });
}

/**
 * SPARKLE & HEART PARTICLE EFFECTS
 */
function createSparkle(x, y) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const particle = document.createElement("span");
  particle.className = "sparkle-particle";
  const symbols = ["✨", "💖", "🌸", "⭐", "🤍"];
  particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];

  const tx = (Math.random() - 0.5) * 50;
  const ty = -30 - Math.random() * 40;
  const rot = (Math.random() - 0.5) * 60;

  particle.style.left = `${x}px`;
  particle.style.top = `${y}px`;
  particle.style.setProperty("--tx", `${tx}px`);
  particle.style.setProperty("--ty", `${ty}px`);
  particle.style.setProperty("--rot", `${rot}deg`);

  document.body.appendChild(particle);
  setTimeout(() => particle.remove(), 1200);
}

function createBurst(x, y, count = 15) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const offsetX = x + (Math.random() - 0.5) * 40;
      const offsetY = y + (Math.random() - 0.5) * 40;
      createSparkle(offsetX, offsetY);
    }, i * 35);
  }
}

/**
 * BACKGROUND FLOATING PETALS CANVAS
 */
function initPetalsCanvas() {
  const canvas = document.getElementById("petals-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width, height;
  let petals = [];

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  window.addEventListener("resize", resize);
  resize();

  const count = Math.min(35, Math.floor(width / 35));
  for (let i = 0; i < count; i++) {
    petals.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 7 + 5,
      speedX: (Math.random() - 0.5) * 0.7,
      speedY: Math.random() * 0.8 + 0.4,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.5,
      opacity: Math.random() * 0.5 + 0.3,
      color: Math.random() > 0.4 ? "#f5a7b8" : "#fcd5ce"
    });
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);

    petals.forEach(p => {
      p.y += p.speedY;
      p.x += Math.sin(p.y * 0.01) * 0.6 + p.speedX;
      p.rotation += p.rotationSpeed;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) p.x = -20;
      if (p.x < -20) p.x = width + 20;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;

      // Draw delicate petal shape
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-p.size / 2, -p.size, -p.size, p.size / 2, 0, p.size);
      ctx.bezierCurveTo(p.size, p.size / 2, p.size / 2, -p.size, 0, 0);
      ctx.fill();

      ctx.restore();
    });

    requestAnimationFrame(loop);
  }

  loop();
}

/**
 * AUDIO PLAYER (HTML5 Audio + Web Audio Dreamy Ambient Synth Fallback)
 */
function initAudioPlayer() {
  const toggleBtn = document.getElementById("music-toggle");
  const waveBars = toggleBtn ? toggleBtn.querySelector(".music-wave") : null;

  let isPlaying = false;
  let audioEl = new Audio();
  let webAudioCtx = null;
  let synthInterval = null;

  audioEl.src = CONFIG.MUSIC_URL;
  audioEl.loop = true;
  audioEl.volume = 0.5;

  // Gentle dreamy Rhodes / Piano synthesizer using Web Audio API
  function startWebAudioSynth() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!webAudioCtx) webAudioCtx = new AudioContext();
      if (webAudioCtx.state === "suspended") webAudioCtx.resume();

      // Romantic chord notes (Cmaj9, Am9, Fmaj7, Gsus)
      const chords = [
        [261.63, 329.63, 392.00, 493.88], // C E G B
        [220.00, 261.63, 329.63, 392.00], // A C E G
        [174.61, 261.63, 329.63, 349.23], // F C E F
        [196.00, 293.66, 392.00, 440.00]  // G D G A
      ];
      let chordIndex = 0;

      function playChord() {
        if (!isPlaying || !webAudioCtx) return;
        const currentChord = chords[chordIndex % chords.length];
        chordIndex++;

        currentChord.forEach((freq, i) => {
          setTimeout(() => {
            if (!isPlaying || !webAudioCtx) return;
            const osc = webAudioCtx.createOscillator();
            const gain = webAudioCtx.createGain();

            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, webAudioCtx.currentTime);

            gain.gain.setValueAtTime(0.0001, webAudioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.05, webAudioCtx.currentTime + 0.4);
            gain.gain.exponentialRampToValueAtTime(0.0001, webAudioCtx.currentTime + 3.2);

            osc.connect(gain);
            gain.connect(webAudioCtx.destination);

            osc.start();
            osc.stop(webAudioCtx.currentTime + 3.5);
          }, i * 180);
        });
      }

      playChord();
      synthInterval = setInterval(playChord, 3600);
    } catch (err) {
      console.warn("Web Audio Ambient Synth unavailable", err);
    }
  }

  function stopWebAudioSynth() {
    if (synthInterval) clearInterval(synthInterval);
    if (webAudioCtx && webAudioCtx.state === "running") {
      webAudioCtx.suspend();
    }
  }

  function playSound() {
    isPlaying = true;
    if (toggleBtn) {
      toggleBtn.classList.add("playing");
      toggleBtn.setAttribute("aria-label", "Mute background music");
    }

    // Try playing provided MP3 first
    const playPromise = audioEl.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback to ambient dreamy synthesizer chords
        startWebAudioSynth();
      });
    }
  }

  function pauseSound() {
    isPlaying = false;
    if (toggleBtn) {
      toggleBtn.classList.remove("playing");
      toggleBtn.setAttribute("aria-label", "Play background music");
    }
    audioEl.pause();
    stopWebAudioSynth();
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      if (isPlaying) pauseSound();
      else playSound();
    });
  }

  // Export to global scope
  window.LoveAudio = {
    play: playSound,
    pause: pauseSound,
    playChime: () => {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = webAudioCtx || new AudioContext();
        [523.25, 659.25, 783.99, 1046.50].forEach((freq, idx) => {
          setTimeout(() => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.type = "sine";
            osc.frequency.setValueAtTime(freq, ctx.currentTime);
            gain.gain.setValueAtTime(0.08, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 1.2);
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.start();
            osc.stop(ctx.currentTime + 1.2);
          }, idx * 120);
        });
      } catch (e) {}
    }
  };
}

/**
 * INTERSECTION OBSERVER FOR SCROLL REVEALS
 */
function initScrollAnimations() {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach(el => el.classList.add("active"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  elements.forEach(el => observer.observe(el));
}
