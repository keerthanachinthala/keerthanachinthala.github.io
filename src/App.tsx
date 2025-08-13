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
import BlobBackground from "./components/BlobBackground";


const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      // mirror: true
    });
  }, []);

  // return (
  //   <div className="relative z-0">
  //     <BlobBackground />
  //     {/* Your existing portfolio content */}
  //   </div>
  // );

  return (
    <div className="min-h-screen">
      {/* <div className="fixed inset-0 z-8 pointer-events-none"> */}
        <BlobBackground />
      {/* </div> */}
      {/* <div className='relative z-20'> */}
      <Header />
      <main className='section-hero-body'>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Recommendations />
      </main>
      <Footer />
      {/* </div> */}
    </div>
  );
};

export default App;
