import React, { useRef, useEffect } from 'react';

const CanvasWaveLayer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    const lines = Array.from({ length: 12 }, (_, i) => ({
      y: (canvas.height / 12) * i,
      phase: Math.random() * Math.PI * 2,
      amplitude: 40 + Math.random() * 60,
      speed: 0.0005 + Math.random() * 0.001,
    }));

    function animate(time) {
      // 1. BASE COLOR: Creamy/Silk White
      ctx.fillStyle = '#f8f7f2'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. LUXURY RADIAL GLOW (Subtle "Light" following mouse)
      const glow = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 800);
      glow.addColorStop(0, 'rgba(255, 255, 255, 0.4)');
      glow.addColorStop(1, 'rgba(248, 247, 242, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 3. NOISE TEXTURE (The "Premium" Secret)
      // Hum har frame pe halka random noise render karenge
      for (let i = 0; i < 5000; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.fillStyle = 'rgba(0,0,0,0.015)'; // Super subtle grain
        ctx.fillRect(x, y, 1, 1);
      }

      // 4. THE WAVES (Organic & Fluid)
      lines.forEach((line, idx) => {
        ctx.beginPath();
        ctx.lineWidth = 0.8;
        
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
        gradient.addColorStop(0, 'rgba(0,0,0,0)');
        gradient.addColorStop(0.5, `rgba(0,0,0,${0.03 + (idx * 0.005)})`);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.strokeStyle = gradient;

        for (let x = 0; x <= canvas.width; x += 10) {
          const move = time * line.speed;
          const noise = Math.sin(x * 0.002 + move + line.phase) * line.amplitude;
          const finalY = line.y + noise;

          if (x === 0) ctx.moveTo(x, finalY);
          else ctx.bezierCurveTo(x - 5, finalY, x - 5, finalY, x, finalY); // Curvy lines
        }
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(animate);
    }

    animate(0);
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 z-0 pointer-events-none"
      />
      {/* 5. CSS VIGNETTE OVERLAY */}
      <div className="fixed inset-0 z-[1] pointer-events-none shadow-[inset_0_0_15vw_rgba(0,0,0,0.03)]" />
    </>
  );
};

export default CanvasWaveLayer;