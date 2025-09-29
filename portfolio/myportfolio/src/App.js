import React from 'react';
import ContactSection from './sections/Contact';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/About';
import ProjectSection from './sections/Projects';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16"> {/* ajuste selon la hauteur de ta navbar */}
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <ScrollToTop />

    </>
  );
}
