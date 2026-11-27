/**
 * Lightweight constellation canvas for the hero: slowly drifting nodes and
 * connection lines. Pauses when offscreen and respects reduced motion.
 */
export function initHeroCanvas(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = { x: 0, y: 0 };
  let width = 0;
  let height = 0;
  let nodes = [];
  let frameId = null;
  let visible = true;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.max(18, Math.min(64, Math.round(width / 24)));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.16,
      vy: (Math.random() - 0.5) * 0.16,
      r: Math.random() * 1.5 + 0.7,
      gold: Math.random() > 0.72,
      phase: Math.random() * Math.PI * 2,
    }));
  }

  function draw(time = 0) {
    ctx.clearRect(0, 0, width, height);
    const linkDistance = Math.min(150, width * 0.16);

    for (let i = 0; i < nodes.length; i += 1) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j += 1) {
        const b = nodes[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const distance = Math.hypot(dx, dy);
        if (distance < linkDistance) {
          const alpha = (1 - distance / linkDistance) * 0.26;
          ctx.strokeStyle = `rgba(213, 175, 99, ${alpha.toFixed(3)})`;
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    for (const node of nodes) {
      const twinkle = reduceMotion.matches ? 1 : 0.65 + Math.sin(time / 1600 + node.phase) * 0.35;
      ctx.beginPath();
      ctx.fillStyle = node.gold
        ? `rgba(213, 175, 99, ${(0.75 * twinkle).toFixed(3)})`
        : `rgba(180, 232, 208, ${(0.55 * twinkle).toFixed(3)})`;
      ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function step(time) {
    if (!visible) return;
    for (const node of nodes) {
      node.x += node.vx + pointer.x * 0.05;
      node.y += node.vy + pointer.y * 0.05;
      if (node.x < -20) node.x = width + 20;
      if (node.x > width + 20) node.x = -20;
      if (node.y < -20) node.y = height + 20;
      if (node.y > height + 20) node.y = -20;
    }
    pointer.x *= 0.94;
    pointer.y *= 0.94;
    draw(time);
    frameId = requestAnimationFrame(step);
  }

  function start() {
    if (frameId !== null) return;
    if (reduceMotion.matches) {
      draw();
      return;
    }
    frameId = requestAnimationFrame(step);
  }

  function stop() {
    if (frameId !== null) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }
  }

  resize();
  start();

  const resizeObserver = new ResizeObserver(() => {
    resize();
    if (reduceMotion.matches) draw();
  });
  resizeObserver.observe(canvas);

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        visible = entries[0]?.isIntersecting ?? true;
        if (visible) start();
        else stop();
      },
      { threshold: 0.02 },
    );
    observer.observe(canvas);
  }

  const onMotionChange = () => {
    stop();
    start();
    if (reduceMotion.matches) draw();
  };
  reduceMotion.addEventListener('change', onMotionChange);

  window.addEventListener(
    'pointermove',
    (event) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.bottom < 0) return;
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 0.6;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 0.6;
    },
    { passive: true },
  );
}
