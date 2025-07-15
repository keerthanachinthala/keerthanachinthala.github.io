import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Recommendations from './components/Recommendations';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AOS from "aos";
import "aos/dist/aos.css";

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
      // mirror: true
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* <ParticlesBackground /> */}
      <Header />
      <main className='section-hero-body'>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Recommendations />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
