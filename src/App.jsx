import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components

import Hero from "./Pages/Hero.jsx";
import Services from "./Pages/Services.jsx";
import WhyChooseUs from "./Pages/WhyUs.jsx";
import AboutUs from "./Pages/About.jsx";

import Pricing from "./Pages/Pricing.jsx";
import Testimonials from "./Pages/Testimonials.jsx";
import PortfolioPage from "./Pages/Portfolio.jsx";
import ProcessSection from "./Pages/Process.jsx";
import Team from "./Pages/Team.jsx";
import AnalyticsSection from "./Pages/Analytics.jsx";
import VBizGroFAQ from "./Pages/Faq.jsx";
import ContactUsSection from "./Pages/CtaForm.jsx";
import ContactUs from "./Pages/Contact.jsx";
import PageNotFound from "./Pages/404.jsx";
import FilmstripReel from "./Components/ThreeDslider.jsx";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

function App() {
  const location = useLocation();

  useEffect(() => {
    // 1. BUTTERY SMOOTH SCROLL (Lenis Setup)
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Ultra smooth formula
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    // 2. SMART NAVIGATION (Hash & Page Change)
    if (location.hash) {
      lenis.scrollTo(location.hash, { offset: -80, duration: 2 });
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, [location.pathname, location.hash]);

  return (
    <div className="main-ecosystem bg-[#fdfcf9]">
      {/* Noise Texture Overlay (Premium Secret Sauce) */}
      <div className="fixed inset-0 z-[9999] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

     

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <main className="flex flex-col w-full">
                <Hero />
                {/* Wrap sections in a way that we can target them for scroll effects */}
                <div className="section-container relative z-10">
                  <WhyChooseUs />
                  <Services />
                  <ProcessSection />
                  <AboutUs />
                  <Pricing />
                  <Testimonials />
                  <div className="my-20"><FilmstripReel /></div>
                  <Team />
                  <AnalyticsSection />
                  <VBizGroFAQ />
                  <ContactUsSection />
                </div>
        
              </main>
            }
          />

          <Route path="/work" element={<PortfolioPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/process" element={<ProcessSection />} />
          <Route path="/faq" element={<VBizGroFAQ />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;