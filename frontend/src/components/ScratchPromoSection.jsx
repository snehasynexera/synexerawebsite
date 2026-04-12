import { useEffect, useRef, useState } from "react";

const PROMO_CODE = "SYNEXERA30";
const REVEAL_THRESHOLD = 42;
const SCRATCH_LINE_WIDTH = 52;
const SCRATCH_RADIUS = 27;
const CONFETTI_COLORS = [
  "#22d3ee",
  "#f59e0b",
  "#a78bfa",
  "#34d399",
  "#f43f5e",
  "#fde047",
  "#60a5fa",
  "#fb7185",
  "#22c55e",
  "#f97316",
  "#38bdf8",
  "#c084fc",
];
const CONFETTI_BURST = Array.from({ length: 120 }, (_, index) => {
  const angle = (index / 120) * Math.PI * 2;
  const spread = 120 + (index % 12) * 14;
  const x = Math.cos(angle) * spread;
  const y = Math.sin(angle) * spread * 0.85 + 155 + (index % 4) * 8;
  return {
    x,
    xm: x * 0.46,
    y,
    up: 110 + (index % 8) * 16,
    r: (index % 2 === 0 ? 1 : -1) * (110 + (index % 11) * 24),
    d: `${(index % 24) * 18}ms`,
    dur: `${1200 + (index % 7) * 120}ms`,
    c: CONFETTI_COLORS[index % CONFETTI_COLORS.length],
    s: 7 + (index % 5) * 2,
    circle: index % 6 === 0,
    streamer: index % 9 === 0,
  };
});

const CONFETTI_RAIN = Array.from({ length: 48 }, (_, index) => ({
  left: `${(index * 17) % 100}%`,
  d: `${(index % 14) * 95}ms`,
  dur: `${1700 + (index % 9) * 130}ms`,
  c: CONFETTI_COLORS[(index * 3) % CONFETTI_COLORS.length],
  s: 6 + (index % 4) * 2,
  sway: `${(index % 2 === 0 ? 1 : -1) * (18 + (index % 5) * 7)}px`,
  rot: `${(index % 2 === 0 ? 1 : -1) * (190 + (index % 7) * 35)}deg`,
  circle: index % 7 === 0,
}));

function drawScratchLayer(ctx, width, height) {
  ctx.clearRect(0, 0, width, height);

  const baseGradient = ctx.createLinearGradient(0, 0, width, height);
  baseGradient.addColorStop(0, "#d8defe");
  baseGradient.addColorStop(0.45, "#b2bdf6");
  baseGradient.addColorStop(1, "#97a8ee");
  ctx.fillStyle = baseGradient;
  ctx.fillRect(0, 0, width, height);

  ctx.globalAlpha = 0.22;
  ctx.fillStyle = "#6377d5";
  for (let index = 0; index < 420; index += 1) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const size = Math.random() * 2.8 + 0.7;
    ctx.fillRect(x, y, size, size);
  }

  ctx.globalAlpha = 0.12;
  ctx.fillStyle = "#5066c7";
  ctx.font = `800 ${Math.min(width * 0.11, 46)}px Syne`;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  for (let y = 60; y < height; y += 62) {
    ctx.fillText("SYNEXERA", 20, y);
  }

  ctx.globalAlpha = 0.35;
  ctx.strokeStyle = "#e5e9ff";
  ctx.lineWidth = 1.5;
  for (let y = 30; y < height; y += 24) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y - 20);
    ctx.stroke();
  }

  ctx.globalAlpha = 1;
}

export default function ScratchPromoSection() {
  const canvasRef = useRef(null);
  const drawingRef = useRef(false);
  const lastPointRef = useRef(null);
  const scratchChecksRef = useRef(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const redraw = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = Math.floor(rect.width);
      canvas.height = Math.floor(rect.height);
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      drawScratchLayer(ctx, canvas.width, canvas.height);
    };

    redraw();
    window.addEventListener("resize", redraw);
    return () => window.removeEventListener("resize", redraw);
  }, []);

  useEffect(() => {
    if (!isRevealed) return;
    drawingRef.current = false;
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 3200);
    return () => clearTimeout(timer);
  }, [isRevealed]);

  const getCanvasPoint = (event) => {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  const evaluateScratchProgress = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let transparentPixels = 0;
    let sampledPixels = 0;

    for (let i = 3; i < pixels.length; i += 32) {
      sampledPixels += 1;
      if (pixels[i] < 20) transparentPixels += 1;
    }

    const scratchedPercent = (transparentPixels / sampledPixels) * 100;
    if (scratchedPercent >= REVEAL_THRESHOLD) setIsRevealed(true);
  };

  const scratchAt = (x, y) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = SCRATCH_LINE_WIDTH;

    const previous = lastPointRef.current;
    if (previous) {
      ctx.beginPath();
      ctx.moveTo(previous.x, previous.y);
      ctx.lineTo(x, y);
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(x, y, SCRATCH_RADIUS, 0, Math.PI * 2);
    ctx.fill();

    lastPointRef.current = { x, y };
    scratchChecksRef.current += 1;

    if (scratchChecksRef.current % 11 === 0) {
      evaluateScratchProgress();
    }
  };

  const handlePointerDown = (event) => {
    if (isRevealed) return;
    const point = getCanvasPoint(event);
    if (!point) return;
    drawingRef.current = true;
    scratchAt(point.x, point.y);
  };

  const handlePointerMove = (event) => {
    if (!drawingRef.current || isRevealed) return;
    const point = getCanvasPoint(event);
    if (!point) return;
    scratchAt(point.x, point.y);
  };

  const stopScratching = () => {
    drawingRef.current = false;
    lastPointRef.current = null;
    if (!isRevealed) evaluateScratchProgress();
  };

  return (
    <section className="relative overflow-hidden bg-[#0f1116] py-24 md:pt-28 md:pb-36">
      <div className="scratch-grid-overlay" />

      <div className="absolute inset-0 pointer-events-none flex items-center">
        <div className="scratch-marquee">
          <span>SCRATCH SCRATCH SCRATCH SCRATCH</span>
          <span>SCRATCH SCRATCH SCRATCH SCRATCH</span>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 flex justify-center">
        <div className="scratch-card-wrap">
          {showConfetti && (
            <div className="scratch-confetti-layer" aria-hidden="true">
              <div className="scratch-win-flash" />
              <div className="scratch-win-badge">YOU WON!</div>

              {CONFETTI_BURST.map((piece, index) => (
                <span
                  key={`${piece.c}-${index}`}
                  className={`scratch-confetti-piece ${piece.circle ? "scratch-confetti-piece-circle" : ""} ${
                    piece.streamer ? "scratch-confetti-piece-streamer" : ""
                  }`}
                  style={{
                    "--x": `${piece.x}px`,
                    "--xm": `${piece.xm}px`,
                    "--y": `${piece.y}px`,
                    "--up": `${piece.up}px`,
                    "--r": `${piece.r}deg`,
                    "--d": piece.d,
                    "--dur": piece.dur,
                    "--c": piece.c,
                    "--s": `${piece.s}px`,
                  }}
                />
              ))}

              {CONFETTI_RAIN.map((piece, index) => (
                <span
                  key={`rain-${index}`}
                  className={`scratch-confetti-rain-piece ${
                    piece.circle ? "scratch-confetti-rain-piece-circle" : ""
                  }`}
                  style={{
                    "--left": piece.left,
                    "--d": piece.d,
                    "--dur": piece.dur,
                    "--c": piece.c,
                    "--s": `${piece.s}px`,
                    "--sway": piece.sway,
                    "--rot": piece.rot,
                  }}
                />
              ))}
            </div>
          )}

          <div className="scratch-card-shell">
            <div className="scratch-card-shadow-glow" />
            <div className="scratch-card-overlay-pattern" />
            <div className="scratch-card-edge-glow" />
            <div className="scratch-card-shine" />
            <div className="scratch-card-notch scratch-card-notch-left" />
            <div className="scratch-card-notch scratch-card-notch-right" />
            <div className="scratch-card-chip">LUCKY DROP</div>

            <div className="scratch-reveal-content">
              <p className="scratch-kicker">EXCLUSIVE OFFER</p>
              <h3 className="scratch-off-title">30% OFF</h3>
              <p className="scratch-code">{PROMO_CODE}</p>
              <p className="scratch-note">
                Redeem this with the Synexera team to unlock 30% off on your project or service plan.
              </p>
            </div>

            <canvas
              ref={canvasRef}
              className={`scratch-canvas ${isRevealed ? "scratch-canvas-revealed" : ""}`}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={stopScratching}
              onPointerLeave={stopScratching}
              onPointerCancel={stopScratching}
              aria-label="Scratch card to reveal promo code"
            />

            <p className="scratch-footer-text">SCRATCH & REVEAL</p>
          </div>
        </div>
      </div>
    </section>
  );
}
