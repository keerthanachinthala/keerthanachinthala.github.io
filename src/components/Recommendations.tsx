import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Recommendations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const recommendations = [
    {
      name: 'Ayushi Gupta',
      title: 'Software Development Manager',
      organization: 'Oracle',
      image: 'https://pbs.twimg.com/profile_images/1533830901800615936/FMaKZbh-_400x400.png',
      text: "It was a privilege to lead Keerthana at Oracle NetSuite. She quickly demonstrated an impressive ability to learn and adapt, taking on backend development, API optimization, and key project responsibilities with confidence. Keerthana is committed to continuous growth, consistently embracing feedback to enhance her technical and problem-solving skills. \nAs a team player, she takes full ownership of her work, supports her colleagues, and approaches challenges with a solutions-driven mindset. It was a pleasure working with her and witnessing her growth.",
      relationship: 'Team Lead'
    },
    {
      name: 'Andy Edmonds',
      title: 'Head of Innovation',
      organization: 'TerraviewOS',
      image: 'https://storage.googleapis.com/b2match-as-1/DYwi4uto9aYemNGAwNfmVNLG',
      text: "I highly recommend Keerthana. During our time working together, she impressed me with their ability to quickly learn and apply complex concepts, even in unfamiliar domains like Synthethic Aperture Radar (SAR) imaging. She demonstrated significant persistence in overcoming technical challenges, particularly when navigating difficulties within the codebase. Her structured approach to data analysis and model refinement was invaluable, and she collaborated effectively with their teammate to troubleshoot issues and advance the project. She consistently iterated on solutions and adapted methodologies to meet research goals, showcasing both flexibility and dedication. She would be a strong asset to any team.",
      relationship: 'Apprenticeship Mentor'
    }
  ];

  const nextRecommendation = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % recommendations.length);
  };

  const prevRecommendation = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? recommendations.length - 1 : prevIndex - 1
    );
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(nextRecommendation, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="recommendations" className="py-20 section-hero-body">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Recommendations</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here's what colleagues, professors, and students have to say about working with me.
            </p>
          </div>

          <div className="relative">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden border border-gray-700/30">
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 text-blue-400/20" size={48} />
              
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={recommendations[currentIndex].image}
                    alt={recommendations[currentIndex].name}
                    className="w-24 h-24 rounded-full shadow-lg ring-4 ring-gray-600/50"
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                    "{recommendations[currentIndex].text}"
                  </p>
                  
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {recommendations[currentIndex].name}
                    </h4>
                    <p className="text-blue-400 font-semibold">
                      {recommendations[currentIndex].title}
                    </p>
                    <p className="text-gray-400">
                      {recommendations[currentIndex].organization}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {recommendations[currentIndex].relationship}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={prevRecommendation}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700/80 hover:bg-gray-600/80 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm"
            >
              <ChevronLeft className="text-white" size={24} />
            </button>
            
            <button
              onClick={nextRecommendation}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700/80 hover:bg-gray-600/80 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm"
            >
              <ChevronRight className="text-white" size={24} />
            </button>

            {/* Dots indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {recommendations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentIndex 
                      ? 'bg-blue-400 scale-125' 
                      : 'bg-gray-500 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;