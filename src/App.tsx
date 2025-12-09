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

function App() {
  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <div className="App">
      <Preloader />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;