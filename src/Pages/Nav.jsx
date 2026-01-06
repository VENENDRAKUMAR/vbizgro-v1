import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";

const FloatingNavbar = () => {
  const navRef = useRef(null);
  const linkRefs = useRef([]);
  const overlayLinkRefs = useRef([]);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Work", to: "/work" },
    { label: "Services", to: "/services" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
  ];

  // initial entrance animation
  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -28, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", delay: 0.08 }
    );

    gsap.fromTo(
      linkRefs.current,
      { y: 6, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out", stagger: 0.06, delay: 0.18 }
    );
  }, []);

  // overlay animation
  useEffect(() => {
    const overlayLinks = overlayLinkRefs.current;
    let tl;

    if (isOpen) {
      tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        overlayLinks,
        { y: 28, opacity: 0, rotateX: -6 },
        { y: 0, opacity: 1, rotateX: 0, duration: 0.5, stagger: 0.07 }
      );
    } else {
      tl = gsap.timeline({ defaults: { ease: "power3.in" } });
      tl.to(overlayLinks, { y: 18, opacity: 0, duration: 0.22, stagger: 0.04 });
    }

    return () => tl && tl.kill();
  }, [isOpen]);

  // 🔥 auto-close overlay + scroll reset on route change
  useEffect(() => {
    setIsOpen(false);
    gsap.to(window, { scrollTo: 0, duration: 0.6 });
  }, [location.pathname]);

  const toggleMenu = (e) => {
    if (e && e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;
    setIsOpen((s) => !s);
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 rounded-full px-5 py-2 flex items-center gap-4"
        aria-label="Primary"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,230,238,0.9) 15%, rgba(226,252,231,0.9) 50%, rgba(219,234,254,0.9) 100%)",
          boxShadow: "0 8px 30px rgba(15,23,42,0.09)",
          backdropFilter: "blur(6px)",
        }}
      >
        {/* Logo → Home */}
        <Link
          to="/"
          className="flex items-center gap-3 font-medium text-[#0f172a] hover:text-indigo-600 transition-colors"
        >
          <img src="/logo.png" alt="VBIZGRO Logo" className="w-24 h-10 object-cover rounded" />
          <span className="hidden md:inline text-sm font-medium tracking-tight">Vbizgro</span>
        </Link>

        {/* Inline nav links */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.slice(0, 3).map(({ label, to }, i) => (
            <Link
              key={label}
              to={to}
              ref={(el) => (linkRefs.current[i] = el)}
              className="relative px-2 py-1 text-sm font-medium text-[#0f172a] hover:text-indigo-600 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Menu Button */}
        <button
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="site-overlay"
          className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-300"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Overlay controlled by React state */}
      <div
        id="site-overlay"
        className={`fixed inset-0 z-40 items-center justify-center ${
          isOpen ? "flex" : "hidden"
        }`}
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(250,251,255,0.95) 60%, rgba(239,246,255,0.95) 100%)",
          backdropFilter: "blur(6px)",
        }}
      >
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          {navLinks.map(({ label, to }, i) => (
            <Link
              key={label}
              ref={(el) => (overlayLinkRefs.current[i] = el)}
              to={to}
              className="relative px-2 py-1 text-2xl md:text-4xl font-medium text-[#0f172a] hover:text-indigo-600 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default FloatingNavbar;
