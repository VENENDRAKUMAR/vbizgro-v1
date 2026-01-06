import React, { useRef, useEffect } from 'react';

const CanvasWaveLayer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    // Set canvas dimensions
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    // Track mouse
    const handleMouseMove = e => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Lines data
    const lines = Array.from({ length: 40 }, (_, i) => ({
      y: i * 25,
      offset: Math.random() * 200,
      amplitude: 20 + Math.random() * 10,
      speed: 0.002 + Math.random() * 0.002,
    }));

    function animate(time) {
      // 1. Fill the background with white
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // We still clear the canvas area (effectively redrawing the white background)
      // ctx.clearRect(0, 0, canvas.width, canvas.height); // (Optional: can remove this line since fillRect achieves the same effect)

      ctx.lineWidth = 1.2;

      lines.forEach((line, idx) => {
        ctx.beginPath();
        // 2. Keep the blue lines (HSLA ensures they are blue and slightly transparent)
        ctx.strokeStyle = `hsla(${200 + idx * 2}, 80%, 60%, 0.25)`; 

        for (let x = 0; x < canvas.width; x += 15) {
          // Base sine wave
          const wave = Math.sin((x + line.offset + time * line.speed) / 40) * line.amplitude;

          // Mouse magnet effect
          const distX = Math.abs(x - mouseX);
          const magnet = Math.exp(-distX / 200) * ((mouseY / canvas.height) * 40);

          const y = line.y + wave + magnet;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      requestAnimationFrame(animate);
    }
    const animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
};

export default CanvasWaveLayer;