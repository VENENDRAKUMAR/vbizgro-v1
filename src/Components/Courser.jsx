import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const labelRef = useRef(null);

  useEffect(() => {
    // Do not show on touch devices
    if (typeof window === "undefined") return;
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      dotRef.current.style.display = "none";
      ringRef.current.style.display = "none";
      labelRef.current.style.display = "none";
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;

    // initial states
    gsap.set([dot, ring, label], { xPercent: -50, yPercent: -50 });
    gsap.set(label, { opacity: 0, scale: 0.85, transformOrigin: "center" });

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    // fast dot
    const dotTL = gsap.to({}, { duration: 0.016, repeat: -1, onRepeat: () => {
      gsap.set(dot, { x: mouseX, y: mouseY });
    }});

    // smooth ring follower
    const ringObj = { x: mouseX, y: mouseY };
    gsap.to(ringObj, {
      x: mouseX,
      y: mouseY,
      ease: "power3",
      duration: 0.6,
      repeat: -1,
      onRepeat: () => {
        gsap.to(ring, { x: ringObj.x, y: ringObj.y, ease: "power3.out", duration: 0.6 });
      },
    });

    function onMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // ensure ring target jumps to new values for GSAP setter
      ringObj.x = mouseX;
      ringObj.y = mouseY;
    }

    function enterInteractive(target) {
      const labelText = target?.dataset?.cursorLabel || "";
      const variant = target?.classList?.contains("cursor-zoom") ? "zoom" : "link";

      if (variant === "zoom") {
        gsap.to(ring, { scale: 1.6, opacity: 0.12, duration: 0.28, ease: "power2.out" });
        gsap.to(dot, { scale: 0.9, opacity: 0.95, duration: 0.28, ease: "power2.out" });
      } else {
        gsap.to(ring, { scale: 1.25, opacity: 0.12, duration: 0.28, ease: "power2.out" });
        gsap.to(dot, { scale: 0.85, opacity: 0.95, duration: 0.28, ease: "power2.out" });
      }

      if (labelText) {
        label.textContent = labelText;
        gsap.to(label, { opacity: 1, scale: 1, duration: 0.25, ease: "power2.out" });
      }
    }

    function leaveInteractive() {
      gsap.to(ring, { scale: 1, opacity: 0.08, duration: 0.35, ease: "power3.out" });
      gsap.to(dot, { scale: 1, opacity: 1, duration: 0.35, ease: "power3.out" });
      gsap.to(label, { opacity: 0, scale: 0.85, duration: 0.2, ease: "power2.out" });
    }

    function hideCursor() {
      gsap.to([dot, ring, label], { opacity: 0, duration: 0.3, ease: "power2.out" });
    }

    function showCursor() {
      gsap.to([dot, ring], { opacity: 1, duration: 0.3, ease: "power2.out" });
    }

    // Event listeners
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseenter", showCursor);
    window.addEventListener("mouseleave", hideCursor);

    // Delegate hover handling for interactive elements
    const interactiveSelector = ".cursor-link, a, button, .cursor-zoom, [data-cursor-label]";
    function onPointerOver(e) {
      const t = e.target.closest(interactiveSelector);
      if (t) enterInteractive(t);
    }
    function onPointerOut(e) {
      const t = e.target.closest(interactiveSelector);
      if (t) leaveInteractive();
    }

    document.addEventListener("mouseover", onPointerOver);
    document.addEventListener("mouseout", onPointerOut);

    // Clean up
    return () => {
      dotTL.kill();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseenter", showCursor);
      window.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseover", onPointerOver);
      document.removeEventListener("mouseout", onPointerOut);
    };
  }, []);

  return (
    <>
      {/* Ring / follower */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          width: 80,
          height: 80,
          left: "50%",
          top: "50%",
          borderRadius: "50%",
          background: "radial-gradient(circle at center, rgba(99,102,241,0.12) 0%, rgba(99,102,241,0.06) 20%, rgba(99,102,241,0.00) 45%)",
          transform: "translate(-50%, -50%)",
          mixBlendMode: "normal",
          opacity: 0.08,
          transition: "transform 120ms linear",
        }}
      />

      {/* Precise dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9999] hidden md:block"
        style={{
          width: 10,
          height: 10,
          left: "50%",
          top: "50%",
          borderRadius: "50%",
          background: "#111827",
          boxShadow: "0 4px 18px rgba(17,24,39,0.18)",
          transform: "translate(-50%, -50%)",
          opacity: 1,
        }}
      />

      {/* Label */}
      <div
        ref={labelRef}
        className="fixed pointer-events-none z-[9999] hidden md:flex items-center justify-center text-[13px] font-medium px-3 py-1 rounded-full text-white"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -150%)",
          background: "linear-gradient(90deg,#7c3aed,#06b6d4)",
          boxShadow: "0 8px 32px rgba(124,58,237,0.12)",
          opacity: 0,
          whiteSpace: "nowrap",
        }}
      />
    </>
  );
}
