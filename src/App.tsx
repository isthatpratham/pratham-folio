import React, { useEffect } from 'react';
import { initAnimations } from './utils/animations';
import Preloader from './components/Preloader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { gsap } from 'gsap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EditorPage from './pages/EditorPage';

function App() {
  const appRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    initAnimations();

    // Subtle parallax and spotlight movement (Global)
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPct = (clientX / window.innerWidth) * 100;
      const yPct = (clientY / window.innerHeight) * 100;

      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 30;

      if (appRef.current) {
        appRef.current.style.setProperty('--mouse-x', `${xPct}%`);
        appRef.current.style.setProperty('--mouse-y', `${yPct}%`);
      }

      gsap.to('.hero-glow-v2', { x: xPos, y: yPos, duration: 2.5, ease: 'power2.out' });
      gsap.to('.particles-container', { x: xPos * 0.5, y: yPos * 0.5, duration: 3, ease: 'power2.out' });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <BrowserRouter>
      <div ref={appRef} className="App relative bg-[#050505] spotlight overflow-x-hidden">
        <Preloader />

        {/* Global Background Atmosphere */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Large Diffused Glow */}
          <div className="hero-glow-v2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] bg-white/[0.03] rounded-full blur-[150px] animate-bg-pulse"></div>

          {/* Slow Shifting Gradient Light */}
          <div className="absolute inset-0 opacity-20 animate-gradient-shift bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>

          {/* Global Particle System */}
          <div className="particles-container absolute inset-0">
            {[...Array(25)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  width: `${Math.random() * 3 + 1}px`,
                  height: `${Math.random() * 3 + 1}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDuration: `${Math.random() * 10 + 15}s`,
                  animationDelay: `${Math.random() * -20}s`,
                  opacity: Math.random() * 0.3 + 0.1
                }}
              />
            ))}
          </div>

          {/* Cinematic Grain Overlay */}
          <div className="grain-overlay opacity-[0.06]"></div>
        </div>

        <Navigation />
        <main className="relative z-10 font-inter">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
                <Journey />
                <Projects />
                <Contact />
                <Footer />
              </>
            } />
            <Route path="/edit" element={<EditorPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;