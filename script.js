const loader = document.getElementById("loader");
const loaderPercent = document.getElementById("loader-percent");
const heroVideo = document.getElementById("hero-video");
const topbar = document.querySelector(".topbar");
const topbarMenuButton = document.getElementById("topbar-menu-button");
const journeyTrigger = document.getElementById("journey-trigger");
const journeyTriggerMobile = document.getElementById("journey-trigger-mobile");
const journeyModal = document.getElementById("journey-modal");
const journeyCloseItems = document.querySelectorAll("[data-journey-close]");

let displayProgress = 0;
let targetProgress = 0;
let rafId = 0;
let revealTriggered = false;
let loaderFallbackTimerId = 0;

const syncHeroMediaState = () => {
  if (!heroVideo) {
    return;
  }

  if (window.innerWidth <= 1120) {
    heroVideo.pause();
    return;
  }

  const playPromise = heroVideo.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
};

const renderProgress = () => {
  displayProgress += (targetProgress - displayProgress) * 0.08;

  if (targetProgress === 100 && 100 - displayProgress < 0.35) {
    displayProgress = 100;
  }

  if (loaderPercent) {
    loaderPercent.textContent = `${Math.round(displayProgress)}%`;
  }

  if (displayProgress < 99.9 || targetProgress < 100) {
    rafId = requestAnimationFrame(renderProgress);
    return;
  }

  if (!revealTriggered && loader) {
    revealTriggered = true;
    loader.classList.add("is-hidden");
    window.setTimeout(() => {
      loader.remove();
    }, 800);
  }
};

const setTargetProgress = (value) => {
  targetProgress = Math.max(targetProgress, Math.min(value, 100));
  if (!rafId) {
    rafId = requestAnimationFrame(renderProgress);
  }
};

const finalizeLoader = () => {
  if (loaderFallbackTimerId) {
    window.clearTimeout(loaderFallbackTimerId);
    loaderFallbackTimerId = 0;
  }

  setTargetProgress(100);
};

const armLoaderFallback = (delay = 2200) => {
  if (loaderFallbackTimerId) {
    window.clearTimeout(loaderFallbackTimerId);
  }

  loaderFallbackTimerId = window.setTimeout(() => {
    finalizeLoader();
  }, delay);
};

setTargetProgress(12);

if (document.readyState === "interactive" || document.readyState === "complete") {
  setTargetProgress(28);
} else {
  document.addEventListener("DOMContentLoaded", () => setTargetProgress(28), { once: true });
}

window.addEventListener("load", () => {
  setTargetProgress(60);
  if (heroVideo) {
    armLoaderFallback();
  }
});

if (heroVideo) {
  heroVideo.addEventListener("loadedmetadata", () => setTargetProgress(72), { once: true });
  heroVideo.addEventListener("loadeddata", () => setTargetProgress(80), { once: true });
  heroVideo.addEventListener("canplay", () => setTargetProgress(88), { once: true });
  heroVideo.addEventListener("playing", finalizeLoader, { once: true });
  heroVideo.addEventListener("canplaythrough", finalizeLoader, { once: true });
  heroVideo.addEventListener("error", finalizeLoader, { once: true });
  heroVideo.addEventListener("stalled", finalizeLoader, { once: true });
  heroVideo.addEventListener("suspend", finalizeLoader, { once: true });
  heroVideo.addEventListener("abort", finalizeLoader, { once: true });

  if (heroVideo.readyState >= 2) {
    setTargetProgress(72);
  }

  if (heroVideo.readyState >= 3) {
    setTargetProgress(88);
  }

  if (heroVideo.readyState >= 4) {
    finalizeLoader();
  }
} else if (document.getElementById("character-host")) {
  window.addEventListener("character:ready", finalizeLoader, { once: true });
  window.addEventListener("load", () => armLoaderFallback(8000), { once: true });
} else {
  window.addEventListener("load", () => {
    finalizeLoader();
  }, { once: true });
}

syncHeroMediaState();
window.addEventListener("resize", syncHeroMediaState);

// всё, что под мутным экраном, неактивно: шапка («кто я») не ловит нажатия, пока открыто окно
// или раскрыты разделы под кнопкой «проекты»; открытая панель «кто я» при этом закрывается
const syncCovered = () => {
  if (!topbar) return;
  const covered = !!document.querySelector(".journey-modal.is-open") || !!document.querySelector(".hero__canvas.is-sections");
  topbar.inert = covered;
  topbar.classList.toggle("is-covered", covered);
  if (covered && topbar.classList.contains("is-open")) {
    topbar.classList.remove("is-open");
    document.getElementById("topbar-menu-button")?.setAttribute("aria-expanded", "false");
  }
};

const openModal = (modal) => {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  syncCovered();
};

const closeModal = (modal) => {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  syncCovered();
};

// окно раздела закрывается своей анимацией (пузыри лопаются), остальные — сразу
const requestClose = (modal) => {
  if (modal.id === "section-modal" && window.popSectionModal) window.popSectionModal();
  else closeModal(modal);
};

for (const item of journeyCloseItems) {
  item.addEventListener("click", () => requestClose(item.closest(".journey-modal")));
}

window.addEventListener("keydown", (event) => {
  const openedModal = document.querySelector(".journey-modal.is-open");
  if (event.key === "Escape" && openedModal) {
    requestClose(openedModal);
  }
});

// путь героя: фото в пузыре медленно плавает по свободной полосе слева от резюме,
// на узком экране пузырь встаёт в начало резюме
const cvPhoto = document.getElementById("cv-photo");
const cvSlot = document.getElementById("cv-photo-slot");
const cvCard = journeyModal && journeyModal.querySelector(".cv");
let cvFrame = 0;
let cvStart = 0;

const cvWander = (now) => {
  if (!journeyModal.classList.contains("is-open")) {
    cvFrame = 0;
    return;
  }
  const d = cvPhoto.offsetWidth;
  const pad = 32;
  const zoneW = cvCard.getBoundingClientRect().left - pad * 2;
  const zoneH = window.innerHeight - pad * 2;
  const t = (now - cvStart) / 1000;
  // сумма медленных синусов — плавный путь без резких разворотов
  const nx = 0.62 * Math.sin(t * 0.23) + 0.38 * Math.sin(t * 0.41 + 1.3);
  const ny = 0.6 * Math.sin(t * 0.19 + 0.7) + 0.4 * Math.sin(t * 0.33 + 2.1);
  const x = pad + (zoneW - d) / 2 + (nx * Math.max(0, zoneW - d)) / 2;
  const y = pad + (zoneH - d) / 2 + (ny * Math.max(0, zoneH - d)) / 2;
  cvPhoto.style.transform = `translate(${x}px, ${y}px)`;
  cvFrame = requestAnimationFrame(cvWander);
};

const placeCvPhoto = () => {
  if (!cvPhoto || !cvSlot) return;
  const narrow = window.matchMedia("(max-width: 900px)").matches;
  if (narrow && cvPhoto.parentElement !== cvSlot) cvSlot.append(cvPhoto);
  if (!narrow && cvPhoto.parentElement === cvSlot) journeyModal.insertBefore(cvPhoto, cvCard);
  const glass = cvPhoto.querySelector(".orbit__glass");
  const d = cvPhoto.offsetWidth;
  glass.dataset.glassBezel = Math.round(d * 0.15);
  glass.dataset.glassScale = Math.round(d * 0.19);
  if (window.liquidGlass) window.liquidGlass(glass);
  if (!narrow && !cvFrame && journeyModal.classList.contains("is-open")) {
    cvStart = performance.now() - 4000;
    cvFrame = requestAnimationFrame(cvWander);
  }
};

const openJourney = () => {
  openModal(journeyModal);
  placeCvPhoto();
};

if (journeyTrigger && journeyModal) {
  journeyTrigger.addEventListener("click", openJourney);
  if (journeyTriggerMobile) {
    journeyTriggerMobile.addEventListener("click", openJourney);
  }
  window.addEventListener("resize", () => {
    if (journeyModal.classList.contains("is-open")) placeCvPhoto();
  });
}

// окно раздела по клику на бабл: из него выплывают круглые пузыри проектов с заставками,
// клик по пузырю ведёт на страницу кейса (клик отличает от перетаскивания bubbles.js)
const sectionModal = document.getElementById("section-modal");
if (sectionModal) {
  const title = document.getElementById("orbit-title");
  const stage = document.getElementById("orbit-stage");
  const related = document.getElementById("orbit-related");
  let current = null; // { items, origin } — чтобы переразложить пузыри при смене размера окна

  // раздел — планета: в центре большая картинка-пример, вокруг по наклонённой орбите летают пузыри проектов.
  // Задняя половина орбиты уходит за планету, передняя проходит перед ней.
  const NS = "http://www.w3.org/2000/svg";
  let geo = null;
  let raf = 0;
  let last = 0;
  let spin = 0;
  let pace = 1;
  let hovered = 0;

  const measurePlanet = (n) => {
    const box = stage.getBoundingClientRect();
    const w = box.width;
    const h = box.height;
    const portrait = h > w;
    const P = Math.min(h * (portrait ? 0.42 : 0.56), w * (portrait ? 0.62 : 0.32), 540);
    // на телефоне орбита вытягивается по высоте экрана, на десктопе — по ширине
    const radii = (d) => portrait
      ? { rx: Math.min(w / 2 - d * 0.5, P / 2 + d * 0.7), ry: Math.min(h / 2 - d * 0.5, P / 2 + d * 1.2) }
      : { rx: Math.min(w / 2 - d * 0.5, P / 2 + d * 1.25), ry: Math.min(h / 2 - d * 0.5, P / 2 + d * 0.15) };
    let d = Math.min(h * (portrait ? 0.15 : 0.22), portrait ? 120 : 200);
    // у боков орбиты соседи сближаются — уменьшаем пузыри, чтобы не слипались
    if (n > 1) {
      const { rx, ry } = radii(d);
      d = Math.max(portrait ? 72 : 84, Math.min(d, (Math.min(rx * 1.3, ry) * Math.PI * 2) / n * 0.9));
    }
    const { rx, ry } = radii(d);
    return { box, w, h, P, d, rx, ry, cx: w / 2, cy: h / 2 };
  };

  const renderPlanet = () => {
    if (!geo) return;
    const { cx, cy, rx, ry, d } = geo;
    const slots = stage.querySelectorAll(".orbit__slot");
    slots.forEach((slot, i) => {
      const a = Math.PI / 2 + 0.35 + (i / slots.length) * Math.PI * 2 + spin;
      const depth = Math.sin(a);
      const near = (depth + 1) / 2;
      const s = 0.68 + near * 0.32;
      slot.style.transform = `translate3d(${cx + Math.cos(a) * rx - d / 2}px, ${cy + depth * ry - d / 2}px, 0) scale(${s})`;
      slot.style.zIndex = slot.matches(":hover") ? 6 : depth > 0 ? 4 : 1;
      slot.style.opacity = (0.78 + near * 0.22).toFixed(3);
    });
  };

  const spinTick = (now) => {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    pace += ((hovered ? 0 : 1) - pace) * Math.min(1, dt * 4);
    spin += dt * 0.09 * pace;
    renderPlanet();
    raf = requestAnimationFrame(spinTick);
  };
  const stopSpin = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };
  const startSpin = () => {
    stopSpin();
    renderPlanet();
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    last = performance.now();
    raf = requestAnimationFrame(spinTick);
  };

  const place = (animate) => {
    if (!current) return;
    const { items, origin } = current;
    geo = measurePlanet(items.length);
    const { box, P, d, cx, cy, rx, ry } = geo;
    const planet = stage.querySelector(".orbit__planet");
    if (planet) {
      planet.style.width = planet.style.height = `${P}px`;
      planet.style.left = `${cx - P / 2}px`;
      planet.style.top = `${cy - P / 2}px`;
      planet.style.setProperty("--fx", `${origin.x - box.left - cx}px`);
      planet.style.setProperty("--fy", `${origin.y - box.top - cy}px`);
      const glass = planet.querySelector(".orbit__glass");
      glass.dataset.glassBezel = Math.round(P * 0.12);
      glass.dataset.glassScale = Math.round(P * 0.14);
      if (!animate) planet.style.animation = "none";
    }
    stage.querySelectorAll(".system__rings").forEach((svg, k) => {
      svg.setAttribute("viewBox", `0 0 ${geo.w} ${geo.h}`);
      svg.innerHTML = `<path d="M ${cx - rx} ${cy} A ${rx} ${ry} 0 0 ${k ? 0 : 1} ${cx + rx} ${cy}"/>`;
    });
    renderPlanet();
    stage.querySelectorAll(".orbit__slot").forEach((slot, i) => {
      slot.style.width = slot.style.height = `${d}px`;
      const node = slot.firstElementChild;
      // пузыри вылетают из планеты
      const r = slot.getBoundingClientRect();
      node.style.setProperty("--fx", `${box.left + cx - (r.left + r.width / 2)}px`);
      node.style.setProperty("--fy", `${box.top + cy - (r.top + r.height / 2)}px`);
      node.style.animationDelay = `${380 + i * 70}ms`;
      const glass = node.querySelector(".orbit__glass");
      glass.dataset.glassBezel = Math.round(d * 0.15);
      glass.dataset.glassScale = Math.round(d * 0.19);
      if (!animate) node.style.animation = "none";
    });
  };

  // картинка планеты: data-planet="id-кейса/файл" у бабла раздела, иначе второй кадр галереи главного кейса
  const planetImage = (bubble, item) => {
    const own = bubble.dataset.planet;
    if (own) return `./assets/cases/${own}`;
    const src = (item.gallery || [])
      .map((g) => g.src)
      .find((f) => f && f !== item.cover && /\.(jpe?g|png|webp|avif)$/i.test(f));
    return window.caseImage(item, src || item.cover);
  };

  const bubbleFor = (item, i, href, planetSrc) => {
    const a = document.createElement(href ? "a" : "div");
    a.className = "orbit__bubble";
    if (href) {
      a.href = href;
      a.setAttribute("aria-label", item.title);
    }
    // лёгкая квадратная миниатюра (assets/thumbs, см. thumbs.sh); проявляется, когда загрузилась
    const img = document.createElement("img");
    img.alt = "";
    img.decoding = "async";
    img.addEventListener("load", () => a.classList.add("is-loaded"), { once: true });
    img.addEventListener("error", () => {
      img.src = window.caseImage(item, item.cover);
    }, { once: true });
    // планете нужна картинка покрупнее миниатюры
    img.src = planetSrc || window.caseThumb(item);
    if (img.complete && img.naturalWidth) a.classList.add("is-loaded");
    const glass = document.createElement("span");
    glass.className = "orbit__glass";
    glass.dataset.glassRound = "";
    glass.dataset.glassId = `orbit-${i}`;
    a.append(img, glass);
    return a;
  };

  window.openSectionModal = (bubble) => {
    const tag = bubble.dataset.section;
    // сначала кейсы, для которых это направление основное (первый тег), потом остальные
    const items = (window.CASES || [])
      .filter((c) => c.tags.includes(tag))
      .sort((a, b) => a.tags.indexOf(tag) - b.tags.indexOf(tag));
    title.textContent = bubble.innerText.replace(/\s+/g, " ").trim();
    // вайбкодинг тесно связан с архивом инструментов — даём перейти туда прямо отсюда
    related.hidden = tag !== "vibe";

    const r = bubble.getBoundingClientRect();
    current = { items, origin: { x: r.left + r.width / 2, y: r.top + r.height / 2 } };
    stage.classList.toggle("is-empty", !items.length);
    hovered = 0;
    pace = 1;
    spin = 0;
    if (!items.length) {
      stage.replaceChildren(
        Object.assign(document.createElement("p"), {
          className: "orbit__empty",
          textContent: `скоро здесь появятся кейсы. ${bubble.dataset.sectionText || ""}`.trim(),
        }),
      );
      current = null;
      geo = null;
    } else {
      const ring = (cls) => {
        const svg = document.createElementNS(NS, "svg");
        svg.setAttribute("class", `system__rings ${cls}`);
        svg.setAttribute("aria-hidden", "true");
        return svg;
      };
      // планета — картинка главного кейса направления
      const planet = document.createElement("div");
      planet.className = "orbit__item orbit__planet";
      planet.append(bubbleFor(items[0], "planet", null, planetImage(bubble, items[0])));
      const slots = items.map((item, i) => {
        const slot = document.createElement("div");
        slot.className = "orbit__slot";
        const wrap = document.createElement("div");
        wrap.className = "orbit__item";
        wrap.append(bubbleFor(item, i, `./case.html?id=${encodeURIComponent(item.id)}`));
        const label = document.createElement("span");
        label.className = "orbit__label";
        label.textContent = item.title;
        wrap.append(label);
        slot.append(wrap);
        // наведение останавливает вращение
        slot.addEventListener("pointerenter", () => { hovered++; });
        slot.addEventListener("pointerleave", () => { hovered = Math.max(0, hovered - 1); });
        return slot;
      });
      stage.replaceChildren(ring("system__rings--back"), planet, ring("system__rings--front"), ...slots);
    }
    openModal(sectionModal);
    place(true);
    if (current) startSpin();
    // стеклянная линза (тяжёлый SVG-фильтр) включается, когда пузыри долетели, — иначе полёт дёргается
    clearTimeout(glassTimer);
    const settle = 1300 + 380 + Math.max(0, items.length - 1) * 70;
    glassTimer = setTimeout(() => {
      // линза только у планеты: на постоянно летящих пузырях она съедает кадры — у них мягкое CSS-стекло
      const glass = stage.querySelector(".orbit__planet .orbit__glass");
      if (window.liquidGlass && glass) window.liquidGlass(glass);
    }, settle);
  };
  let glassTimer = 0;

  // миниатюры всех пузырей подгружаем заранее, когда страница уже ничем не занята
  const preloadThumbs = () => (window.CASES || []).forEach((item) => {
    new Image().src = window.caseThumb(item);
  });
  window.addEventListener("load", () => {
    if ("requestIdleCallback" in window) requestIdleCallback(preloadThumbs, { timeout: 4000 });
    else setTimeout(preloadThumbs, 2500);
  }, { once: true });

  window.addEventListener("resize", () => {
    if (sectionModal.classList.contains("is-open")) place(false);
  });

  // закрытие: пузыри по очереди лопаются, разбрызгивая капли, и только потом гаснет фон
  let popping = false;
  window.popSectionModal = () => {
    const bubbles = [...stage.querySelectorAll(".orbit__item")];
    if (popping) return;
    if (!bubbles.length || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      closeModal(sectionModal);
      return;
    }
    popping = true;
    const step = 70;
    // лопаются вразнобой, а не по порядку
    const order = bubbles.map((_, i) => i).sort(() => Math.random() - 0.5);
    order.forEach((index, k) => {
      const node = bubbles[index];
      node.style.setProperty("--pop-delay", `${k * step}ms`);
      for (let i = 0; i < 9; i++) {
        const drop = document.createElement("span");
        drop.className = "orbit__drop";
        const angle = (i / 9) * Math.PI * 2 + Math.random() * 0.5;
        const reach = (node.offsetWidth / 2) * (1.05 + Math.random() * 0.45);
        drop.style.setProperty("--dx", `${Math.cos(angle) * reach}px`);
        drop.style.setProperty("--dy", `${Math.sin(angle) * reach}px`);
        drop.style.setProperty("--size", `${8 + Math.random() * 12}px`);
        node.append(drop);
      }
      node.classList.add("is-popping");
    });
    window.setTimeout(() => {
      closeModal(sectionModal);
      popping = false;
      window.setTimeout(() => {
        if (!sectionModal.classList.contains("is-open")) {
          stopSpin();
          stage.replaceChildren();
        }
      }, 300);
    }, bubbles.length * step + 420);
  };
}

if (topbar && topbarMenuButton) {
  const syncTopbarCompactState = () => {
    if (!topbar) {
      return;
    }

    if (window.innerWidth <= 1120) {
      topbar.classList.add("topbar--compact");
      return;
    }

    topbar.classList.remove("topbar--compact");
  };

  const closeTopbarMenu = () => {
    topbar.classList.remove("is-open");
    topbarMenuButton.setAttribute("aria-expanded", "false");
    const mobilePanel = document.getElementById("topbar-mobile-panel");
    if (mobilePanel) {
      mobilePanel.setAttribute("aria-hidden", "true");
    }
  };

  topbarMenuButton.addEventListener("click", () => {
    const isOpen = topbar.classList.toggle("is-open");
    topbarMenuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    const mobilePanel = document.getElementById("topbar-mobile-panel");
    if (mobilePanel) {
      mobilePanel.setAttribute("aria-hidden", isOpen ? "false" : "true");
    }
  });

  // пункты навигации в панели «кто я» закрывают её
  document.querySelectorAll("#topbar-mobile-panel .topbar__mobile-nav a, #topbar-mobile-panel .topbar__mobile-nav button").forEach((item) => {
    item.addEventListener("click", closeTopbarMenu);
  });

  syncTopbarCompactState();

  window.addEventListener("resize", () => {
    syncTopbarCompactState();

    if (!topbar.classList.contains("topbar--compact")) {
      closeTopbarMenu();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && topbar.classList.contains("is-open")) {
      closeTopbarMenu();
    }
  });

  window.addEventListener("load", syncTopbarCompactState, { once: true });
}


// мобильная главная: разделы спрятаны в кнопку «проекты» — по нажатию фон плавно мутнеет,
// пузыри разделов вылетают из кнопки двумя колонками «ёлочкой»; тап по фону прячет их обратно
(() => {
  const canvas = document.querySelector(".hero__canvas");
  const toggle = document.getElementById("hero-projects");
  const veil = document.getElementById("hero-sections-veil");
  if (!canvas || !toggle || !veil) return;
  const mobile = window.matchMedia("(max-width: 1120px)");
  const bubbles = [...canvas.querySelectorAll(".hero__bubble")];

  const layout = () => {
    const w = canvas.clientWidth;
    const top = toggle.offsetTop + toggle.offsetHeight;
    const ox = w / 2;
    const oy = toggle.offsetTop + toggle.offsetHeight / 2;
    const step = Math.min(78, Math.max(64, (window.innerHeight - top - 120) / 6));
    const half = Math.min(84, w / 4 - 6);
    bubbles.forEach((b, i) => {
      const col = i % 2;
      const row = Math.floor(i / 2);
      // лёгкий разброс, чтобы колонки не выглядели таблицей
      const jitter = ((i * 37) % 17) - 8;
      const tx = ox + (col ? half : -half) + jitter;
      const ty = top + 70 + row * step + (col ? step / 2 : 0);
      b.style.setProperty("--tx", `${tx}px`);
      b.style.setProperty("--ty", `${ty}px`);
      // сдвиг до кнопки: из этой точки пузырь вылетает и туда же прячется
      b.style.setProperty("--dx", `${ox - tx}px`);
      b.style.setProperty("--dy", `${oy - ty}px`);
      b.style.setProperty("--in", `${i * 45}ms`);
      b.style.setProperty("--out", `${(bubbles.length - 1 - i) * 25}ms`);
    });
  };

  let movingTimer = 0;
  const setOpen = (open) => {
    if (open) layout();
    // пока пузыри летят — без тяжёлой стеклянной линзы
    canvas.classList.add("is-moving");
    clearTimeout(movingTimer);
    movingTimer = setTimeout(() => canvas.classList.remove("is-moving"), open ? 820 + bubbles.length * 45 + 60 : 800);
    canvas.classList.toggle("is-sections", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    syncCovered();
  };

  toggle.addEventListener("click", () => setOpen(!canvas.classList.contains("is-sections")));
  veil.addEventListener("click", () => setOpen(false));
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !document.querySelector(".journey-modal.is-open")) setOpen(false);
  });
  window.addEventListener("resize", () => {
    if (!mobile.matches) setOpen(false);
    else layout();
  });
  layout();
})();
