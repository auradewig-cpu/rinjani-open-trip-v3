import { useEffect, useRef, useState } from 'react';

const TOTAL_FRAMES = 193;

function padIndex(i: number) {
  return String(i + 1).padStart(4, '0');
}

export function ScrollScrub() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const rafRef = useRef(0);
  const frameDrawnRef = useRef(false);
  const scrollableRef = useRef(0);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    let count = 0;
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/frames/hero-sequence-${padIndex(i)}.webp`;
      img.onload = img.onerror = () => {
        count++;
        setLoadProgress(count / TOTAL_FRAMES);
        if (count === TOTAL_FRAMES) setLoaded(true);
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, []);

  useEffect(() => {
    function update() {
      scrollableRef.current =
        document.documentElement.scrollHeight - window.innerHeight;
    }
    update();
    window.addEventListener('resize', update);
    window.addEventListener('orientationchange', update);
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('orientationchange', update);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let currentFrame = 0;

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      canvas!.width = window.innerWidth * dpr;
      canvas!.height = window.innerHeight * dpr;
    }
    resize();
    window.addEventListener('resize', resize);

    function render() {
      const scrollable = scrollableRef.current;
      const p = scrollable > 0
        ? Math.max(0, Math.min(1, window.scrollY / scrollable))
        : 0;
      const targetFrame = Math.round(p * (TOTAL_FRAMES - 1));
      currentFrame += (targetFrame - currentFrame) * 0.1;
      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(currentFrame))
      );

      const img = imagesRef.current[frameIndex];
      if (img?.complete && img.naturalWidth > 0) {
        const w = window.innerWidth;
        const h = window.innerHeight;
        const dpr = window.devicePixelRatio || 1;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.drawImage(img, 0, 0, w, h);

        if (!frameDrawnRef.current) {
          frameDrawnRef.current = true;
          if (imgRef.current) imgRef.current.style.opacity = '0';
        }
      }
      rafRef.current = requestAnimationFrame(render);
    }
    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div style={{ height: 0, position: 'relative' }}>
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%', height: '100%',
          display: 'block',
          zIndex: 0,
        }}
      />
      <img
        ref={imgRef}
        src="/frames/hero-sequence-0001.webp"
        alt=""
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%', height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          pointerEvents: 'none',
          transition: 'opacity 0.3s ease',
        }}
      />
      <div
        style={{
          position: 'fixed',
          top: 0, left: 0,
          width: '100%', height: '100%',
          background: '#0a0a0a',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 12,
          opacity: loaded ? 0 : 1,
          pointerEvents: loaded ? 'none' : 'auto',
          transition: 'opacity 0.5s ease',
        }}
      >
        <div style={{
          width: 200, height: 4,
          background: 'rgba(255,255,255,0.1)',
          borderRadius: 2, overflow: 'hidden',
        }}>
          <div style={{
            width: `${Math.round(loadProgress * 100)}%`,
            height: '100%',
            background: '#22c55e',
            transition: 'width 100ms linear',
          }} />
        </div>
        <span style={{
          color: 'rgba(255,255,255,0.5)',
          fontSize: 12,
          fontFamily: 'monospace',
        }}>
          {Math.round(loadProgress * 100)}%
        </span>
      </div>
    </div>
  );
}
