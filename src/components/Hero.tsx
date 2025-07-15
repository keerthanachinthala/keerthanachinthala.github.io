import React from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#footer');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/Keerthana_Chinthala_Resume.pdf';
  link.download = 'Keerthana_Chinthala_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  };

  return (
    <section data-aos="fade-down" className="min-h-screen flex items-center justify-center  pt-20 relative overflow-hidden section-hero-body">
      {/* Soft background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-500 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-pink-500 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            {/* Anime sketch container */}
            <div className="relative w-48 h-48 mx-auto mb-6">
              {/* Soft glow background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-emerald-400/30 rounded-full blur-xl"></div>
              
              {/* Anime sketch image */}
              <div className="relative w-full h-full rounded-full shadow-2xl ring-4 ring-white/20 overflow-hidden">
                <img
                  src="/anime-sketch-profile.jpg"
                  alt="Alex Johnson - Anime Style Portrait"
                  className="w-full h-full object-cover transition-all duration-500 brightness-110 contrast-110"
                />
                
                {/* Soft overlay for better integration */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-emerald-400/10"></div>
              </div>
              
              {/* Floating elements around the portrait */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-emerald-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 -right-4 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/4 -left-3 w-5 h-5 bg-pink-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 typewriter">
            Hi, I'm <span className="text-blue-400">Keerthana Chinthala</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Computer Science Graduate Student passionate about 
            <span className="text-emerald-400 font-semibold"> Full-Stack Development</span> and 
            <span className="text-blue-400 font-semibold"> Machine Learning</span>
          </p>
          
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Currently pursuing my Master's in Computer Science at the University of Florida, 
            I'm driven by the power of AI and modern web technologies to build impactful solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Mail className="mr-2" size={20} />
              Get In Touch
            </button>
            
            <button onClick={handleDownload} className="inline-flex items-center px-8 py-4 border-2 border-gray-500 text-gray-300 font-semibold rounded-lg hover:border-blue-400 hover:text-blue-400 transform hover:scale-105 transition-all duration-200">
              <Download className="mr-2" size={20} />
              Download Resume
            </button>
          </div>
          
          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-500 hover:text-blue-400 transition-colors duration-200"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;