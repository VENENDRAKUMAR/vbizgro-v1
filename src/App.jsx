import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// GSAP
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Components
import FloatingNavbar from "./Pages/Sidebar.jsx"; // Iska naam aapne Sidebar rakha hai ya Navbar, verify kar lena
import Hero from "./Pages/Hero.jsx";
import Services from "./Pages/Services.jsx";
import WhyChooseUs from "./Pages/WhyUs.jsx";
import AboutUs from "./Pages/About.jsx";
import Footer from "./Pages/Footer.jsx";
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

// Register GSAP Plugin
gsap.registerPlugin(ScrollToPlugin);

function App() {
  const location = useLocation();

  useEffect(() => {
    // 1. Agar URL mein hash hai (e.g., /#services)
    if (location.hash) {
      const target = location.hash;
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: target, autoKill: true, offsetY: 80 }, 
        ease: "power3.out",
      });
    } 
    // 2. Agar sirf route change hua hai (e.g., /work) toh top pe jao
    else {
      gsap.to(window, {
        duration: 0.8,
        scrollTo: { y: 0, autoKill: true },
        ease: "power3.out",
      });
    }
  }, [location.pathname, location.hash]); // Dono ko monitor karega

  return (
    <>
      {/* Navbar fixed rahega har page pe */}
      <FloatingNavbar />

      <Routes>
        {/* Main Homepage */}
        <Route
          path="/"
          element={
            <>
              <section id="hero"><Hero /></section>
              <section id="why-us"><WhyChooseUs /></section>
              <section id="services"><Services /></section>
              <section id="process"><ProcessSection /></section>
              <section id="about"><AboutUs /></section>
              <section id="pricing"><Pricing /></section>
              <section id="testimonials"><Testimonials /></section>
              <FilmstripReel />
              <section id="team"><Team /></section>
              <AnalyticsSection />
              <section id="faq"><VBizGroFAQ /></section>
              <section id="contact-form"><ContactUsSection /></section>
              <Footer />
            </>
          }
        />

        {/* Individual Pages */}
        <Route path="/work" element={<PortfolioPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/process" element={<ProcessSection />} />
        <Route path="/faq" element={<VBizGroFAQ />} />

        {/* 404 Page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;