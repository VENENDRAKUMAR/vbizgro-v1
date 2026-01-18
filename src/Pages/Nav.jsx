import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Instagram, Linkedin, Twitter, Globe } from "lucide-react";

const FloatingNavbar = () => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Our Work", to: "/work" },
    { label: "Expertise", to: "/services" },
    { label: "The Agency", to: "/about" },
    { label: "Pricing", to: "/pricing" },
    { label: "Contact", to: "/contact" },
  ];

  // Browser-safe scroll handling
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 40;
      setScrolled(isScrolled);
      
      if (isScrolled) {
        gsap.to(navRef.current, {
          width: "92%",
          maxWidth: "1100px",
          top: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(16px)",
          padding: "10px 32px",
          borderRadius: "100px",
          border: "1px solid rgba(0,0,0,0.08)",
          boxShadow: "0 15px 35px rgba(0,0,0,0.05)",
          duration: 0.4,
          ease: "power2.out"
        });
      } else {
        gsap.to(navRef.current, {
          width: "100%",
          maxWidth: "100%",
          top: "0px",
          backgroundColor: "transparent",
          backdropFilter: "blur(0px)",
          padding: "24px 64px",
          borderRadius: "0px",
          border: "1px solid transparent",
          boxShadow: "none",
          duration: 0.4,
          ease: "power2.out"
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-1/2 -translate-x-1/2 z-[1000] flex items-center justify-between transition-all"
        style={{ padding: "24px 64px", width: "100%" }}
      >
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3 group flex-1">
          <div className="relative w-10 h-10 overflow-hidden rounded-full bg-black flex items-center justify-center p-2 shadow-sm transition-transform duration-700 group-hover:rotate-[360deg]">
             <img 
               src="/logo.png" 
               alt="VB" 
               className="w-full h-full object-contain invert"
             />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black uppercase tracking-[0.2em] leading-none text-black">Vbizgro</span>
            <span className="text-[8px] font-bold text-indigo-600 uppercase tracking-widest mt-1">Intelligence</span>
          </div>
        </Link>

        {/* MENU TOGGLE */}
        <div className="flex items-center justify-end flex-1">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="z-[1100] w-12 h-12 flex flex-col items-center justify-center gap-1.5 bg-black rounded-full transition-transform active:scale-90 shadow-lg"
          >
            <motion.div 
              animate={isOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1.5px] bg-white" 
            />
            <motion.div 
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-3 h-[1.5px] bg-white ml-auto mr-3.5" 
            />
            <motion.div 
              animate={isOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1.5px] bg-white" 
            />
          </button>
        </div>
      </nav>

      {/* FULL SCREEN MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.85, 0, 0.15, 1] }}
            className="fixed inset-0 z-[999] bg-white flex flex-col items-center justify-center px-6 overflow-hidden"
          >
            {/* Minimal Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />
            
            <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* CENTERED LINKS */}
              <div className="flex flex-col items-center lg:items-start gap-2 md:gap-4">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 + i * 0.08, duration: 0.6 }}
                  >
                    <Link
                      to={link.to}
                      className={`text-5xl md:text-8xl font-black uppercase tracking-tighter transition-all duration-500 flex items-center gap-4 group ${location.pathname === link.to ? 'text-indigo-600' : 'text-black hover:text-indigo-600'}`}
                    >
                      <span className="hidden md:block text-xs font-bold text-slate-300 group-hover:text-indigo-600">0{i+1}</span>
                      <span className="group-hover:translate-x-4 transition-transform italic">{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* SIDEBAR INFO */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="hidden lg:flex flex-col gap-10 border-l border-slate-100 pl-16"
              >
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-600 mb-4">New Business</p>
                  <a href="mailto:sales@vbizgro.com" className="text-3xl font-bold text-black hover:text-indigo-600 transition-colors">sales@vbizgro.com</a>
                </div>
                
                <div className="space-y-4">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Follow Us</p>
                  <div className="flex gap-6">
                    <a href="#" className="p-3 rounded-full bg-slate-50 hover:bg-black hover:text-white transition-all"><Instagram size={18} /></a>
                    <a href="#" className="p-3 rounded-full bg-slate-50 hover:bg-black hover:text-white transition-all"><Linkedin size={18} /></a>
                    <a href="#" className="p-3 rounded-full bg-slate-50 hover:bg-black hover:text-white transition-all"><Twitter size={18} /></a>
                  </div>
                </div>

                <Link 
                  to="/contact" 
                  className="w-fit flex items-center gap-4 px-10 py-5 bg-black text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-indigo-600 transition-all group shadow-xl shadow-indigo-100"
                >
                  Book a Discovery Call <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Bottom Tagline */}
            <div className="absolute bottom-10 w-full text-center">
               <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-300 select-none">Vbizgro Strategy Hub • International Presence</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNavbar;