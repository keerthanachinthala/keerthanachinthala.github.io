import React from 'react';
import { BookOpen, Heart, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden section-hero-body backdrop-blur-sm rounded-xl shadow-lg p-8">
      {/* Soft background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-emerald-500 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <h3 data-aos="fade-up" className="text-2xl font-semibold text-white mb-6 text-center">
              Passionate about Technology & Innovation
            </h3>
            
            <p data-aos="fade-up" className="text-gray-300 mb-6 leading-relaxed text-center">
              I’m a curious and persistent Computer Science graduate student whose journey began with a simple Python game where the goal was to guide a path from start to finish. 
              That early experience sparked my passion for programming and set me on a path of exploration. Since then, I have delved into many facets of technology, building strong skills in both software development and machine learning. 
              From developing full stack projects like a Travel Advisor to conducting research on music recommendation systems during my undergraduate studies, I have gained valuable insights across diverse domains. These experiences have shaped my unique perspective and technical expertise.
            </p>
            <p data-aos="fade-up" className="text-gray-300 mb-8 leading-relaxed text-center">
              My interest in cybersecurity has also grown through coursework and research focused on system vulnerabilities and defense mechanisms. 
              This broadens my understanding of building secure and reliable applications.
            </p>
            
            <p data-aos="fade-up" className="text-gray-300 mb-8 leading-relaxed text-center">
              I am optimistic and open minded, always ready to face challenges with persistence and a positive attitude. 
              I believe that learning is a lifelong journey, and I constantly seek new technologies and methodologies to improve myself. 
              I thrive in collaborative environments, valuing diverse perspectives and teamwork. 
              Above all, I am focused on creating meaningful impact through technology and innovation.

            </p>
            
            <div data-aos="fade-left" className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <BookOpen className="text-blue-400 mx-auto mb-3" size={32} />
                <h4 className="font-semibold text-white mb-2">Continuous Learner</h4>
                <p className="text-gray-400 text-sm">Always exploring new technologies and methodologies</p>
              </div>
              
              <div data-aos="fade-up" className="text-center p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <Heart className="text-emerald-400 mx-auto mb-3" size={32} />
                <h4 className="font-semibold text-white mb-2">Collaborative Spirit</h4>
                <p className="text-gray-400 text-sm">Thrives in team environments and values diverse perspectives</p>
              </div>
              
              <div data-aos="fade-right" className="text-center p-6 bg-gray-800/50 rounded-lg backdrop-blur-sm">
                <Target className="text-purple-400 mx-auto mb-3" size={32} />
                <h4 className="font-semibold text-white mb-2">Goal-Oriented</h4>
                <p className="text-gray-400 text-sm">Focused on creating meaningful impact through technology</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;