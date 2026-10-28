// Главная как своя система: в центре ядро — я (фигурка), разделы летают вокруг по орбитам.
// Чем дальше орбита, тем слабее связь с направлением: номер орбиты задаёт data-orbit у бабла (1 — ближняя).
// Орбиты — наклонённые эллипсы: задняя половина уходит за фигурку, передняя проходит перед ней.
// Движение — только на десктопе (>1120px); на мобильных остаётся раскрытие через кнопку «проекты».
(() => {
  const canvas = document.querySelector(".hero__canvas");
  const els = [...document.querySelectorAll(".hero__bubble")];
  if (!canvas || !els.length) return;

  // клик (или Enter) по баблу открывает планету раздела — на всех экранах
  els.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      if (typeof window.openSectionModal === "function") window.openSectionModal(el);
    });
    el.addEventListener("dragstart", (e) => e.preventDefault());
  });

  const desktop = window.matchMedia("(min-width: 1121px)");
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const headerBlocks = document.querySelectorAll(".topbar__group--intro, .topbar__right-frame .topbar__group");
  const footer = document.querySelector(".hero__footer");

  const RINGS = [0.44, 0.72, 1]; // доля от самой дальней орбиты
  const SPEED = [0.075, 0.048, 0.031]; // рад/с: ближние крутятся быстрее, как у настоящих планет
  const CORE_Y = 0.6; // центр системы по высоте экрана — на уровне фигурки
  const PAD_SIDE = 24;

  const NS = "http://www.w3.org/2000/svg";
  const makeLayer = (cls) => {
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("class", `system__rings ${cls}`);
    svg.setAttribute("aria-hidden", "true");
    return svg;
  };
  // орбиты рисуем двумя слоями: дальняя половина за фигуркой, ближняя — перед ней
  const backLayer = makeLayer("system__rings--back");
  const frontLayer = makeLayer("system__rings--front");

  let items = [];
  let geo = null;
  let raf = 0;
  let last = 0;
  let t = 0;
  let pace = 1; // 1 — летят, 0 — стоят (наведение на бабл)
  let hovered = 0;
  let visible = true;

  const measure = () => {
    const w = canvas.clientWidth;
    const h = Math.min(canvas.clientHeight, window.innerHeight);
    const top = canvas.getBoundingClientRect().top;
    let headerBottom = 0;
    headerBlocks.forEach((el) => {
      headerBottom = Math.max(headerBottom, el.getBoundingClientRect().bottom - top);
    });
    headerBottom = headerBottom ? headerBottom + 12 : 170;
    const footerTop = footer ? footer.getBoundingClientRect().top - top - 8 : h - 90;
    const cx = w / 2;
    const cy = h * CORE_Y;
    let maxW = 0;
    let maxH = 0;
    items.forEach((it) => {
      it.w = it.el.offsetWidth;
      it.h = it.el.offsetHeight;
      maxW = Math.max(maxW, it.w);
      maxH = Math.max(maxH, it.h);
    });
    const rx = cx - PAD_SIDE - maxW / 2;
    const ry = Math.max(80, Math.min(cy - headerBottom, footerTop - cy) - maxH / 2);
    geo = { w, h, cx, cy, rx, ry };
    drawRings();
  };

  const arc = (rx, ry, front) => {
    const { cx, cy } = geo;
    // верхняя половина эллипса — дальняя, нижняя — ближняя
    return `M ${cx - rx} ${cy} A ${rx} ${ry} 0 0 ${front ? 0 : 1} ${cx + rx} ${cy}`;
  };

  const drawRings = () => {
    const { w, h } = geo;
    [backLayer, frontLayer].forEach((svg, k) => {
      svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
      svg.innerHTML = RINGS.map((f) => `<path d="${arc(geo.rx * f, geo.ry * f, k === 1)}"/>`).join("");
    });
  };

  const setup = () => {
    const byRing = [[], [], []];
    els.forEach((el) => {
      const ring = Math.min(3, Math.max(1, Number(el.dataset.orbit) || 3)) - 1;
      byRing[ring].push(el);
    });
    items = [];
    byRing.forEach((list, ring) => {
      const offset = ring * 0.9 + 0.3;
      list.forEach((el, i) => {
        items.push({ el, ring, a0: offset + (i / list.length) * Math.PI * 2, k: 1, hover: false, w: 0, h: 0 });
      });
    });
    canvas.classList.add("is-system");
    canvas.prepend(backLayer);
    canvas.append(frontLayer);
    measure();
  };

  const render = () => {
    const { cx, cy, rx, ry } = geo;
    items.forEach((it) => {
      const f = RINGS[it.ring];
      const a = it.a0 + t * SPEED[it.ring];
      const depth = Math.sin(a); // 1 — ближе всего к нам, −1 — за фигуркой
      const x = cx + Math.cos(a) * rx * f;
      const y = cy + depth * ry * f;
      // перспектива: дальние меньше и чуть прозрачнее
      const near = (depth + 1) / 2;
      const s = (0.78 + near * 0.22) * it.k;
      it.el.style.transform = `translate3d(${x - it.w / 2}px, ${y - it.h / 2}px, 0) scale(${s})`;
      it.el.style.opacity = (0.72 + near * 0.28).toFixed(3);
      it.el.style.zIndex = it.hover ? 7 : depth > 0 ? 5 : 0;
    });
  };

  const tick = (now) => {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    raf = requestAnimationFrame(tick);
    // под открытым окном система не видна — не тратим на неё кадры
    if (document.querySelector(".journey-modal.is-open")) return;
    // при наведении система плавно замирает, чтобы по баблу было легко попасть
    pace += ((hovered ? 0 : 1) - pace) * Math.min(1, dt * 4);
    t += dt * pace;
    items.forEach((it) => {
      it.k += ((it.hover ? 1.09 : 1) - it.k) * Math.min(1, dt * 10);
    });
    render();
  };

  const start = () => {
    if (raf || !geo || !visible) return;
    last = performance.now();
    if (reduced.matches) {
      render();
      return;
    }
    raf = requestAnimationFrame(tick);
  };
  const stop = () => {
    cancelAnimationFrame(raf);
    raf = 0;
  };

  const teardown = () => {
    stop();
    canvas.classList.remove("is-system");
    backLayer.remove();
    frontLayer.remove();
    els.forEach((el) => {
      el.style.transform = "";
      el.style.opacity = "";
      el.style.zIndex = "";
    });
    geo = null;
  };

  const reset = () => {
    teardown();
    if (!desktop.matches) return;
    setup();
    start();
  };

  els.forEach((el) => {
    el.addEventListener("pointerenter", () => {
      const it = items.find((x) => x.el === el);
      if (!it || it.hover) return;
      it.hover = true;
      hovered++;
    });
    el.addEventListener("pointerleave", () => {
      const it = items.find((x) => x.el === el);
      if (!it || !it.hover) return;
      it.hover = false;
      hovered = Math.max(0, hovered - 1);
    });
  });

  desktop.addEventListener("change", reset);
  reduced.addEventListener("change", reset);
  window.addEventListener("resize", () => {
    if (geo) {
      measure();
      if (!raf) render();
    }
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => geo && measure());
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    visible ? start() : stop();
  }).observe(canvas);

  const boot = () => {
    if (desktop.matches) {
      setup();
      start();
    }
  };
  if (document.readyState === "complete") boot();
  else window.addEventListener("load", boot, { once: true });
})();
