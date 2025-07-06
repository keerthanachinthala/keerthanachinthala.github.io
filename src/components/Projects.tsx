import React, { useState, useEffect } from 'react';
import { ExternalLink, Github, Brain, ShoppingCart, BarChart3, ChevronLeft, ChevronRight, Sprout, FileText, MapPin } from 'lucide-react';



const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  const projects = [
    {
      title: 'User-Centric Music Recommendation System',
      description: 'A machine learning research project focused on improving recommendation quality for underrepresented (long-tail) songs using adaptive clustering',
      image: '/paper.png',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Numpy', 'Matplotlib', 'Emeditor', 'UnSupervised learning'],
      features: [
        'Tackled the long-tail problem in music recommendation by introducing a user-centric clustering strategy based on KNN and Weighted KNN, enhancing personalization and diversity',
        'Achieved a 23.59% increase in tail precision, enabling more accurate recommendations for niche and lesser-known tracks',
        'Preprocessed and refined a dataset of 100,000+ songs from Last.fm, ensuring clean, high-quality inputs for modeling',
        'Conducted thorough experimentation and evaluation, culminating in a peer-reviewed conference publication that contributes to the advancement of personalized recommender systems'
      ],
      icon: <BarChart3 className="text-blue-400" size={24} />,
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      title: 'Travel Adviser Web Application',
      description: 'A dynamic travel planning platform that delivers location-based recommendations and enables users to explore destinations, interact with fellow travelers, and share experiences.',
      image: '/travel_advisor.png',
      technologies: ['PHP', 'MySQL', 'Bootstrap', 'CSS', 'HTML', 'JavaScript', 'GoogleMap APIs'],
      features: [
        'Integrated Google Maps APIs to provide real-time, location-aware suggestions for restaurants, attractions, and travel services.',
        'Built a responsive and user-friendly interface using HTML, CSS, JavaScript, and Bootstrap to ensure accessibility across devices.',
        'Developed a PHP and MySQL-based backend, including a custom-built forum where users could post reviews, ask questions, and engage with other travelers.',
        'Utilized XAMPP for local server testing and database management, ensuring smooth development and deployment processes.'
      ],
      icon: <MapPin className="text-white" size={20} />,
      githubUrl: 'https://github.com/keerthanachinthala/miniproject',
      liveUrl: '#'
    },
    {
      title: 'Soil Moisture Estimation Using Synthetic Aperture Radar (SAR) Imaging',
      description: 'A research-driven exploration into leveraging Sentinel-1 SAR satellite data to estimate soil moisture for agricultural monitoring.',
      image: '/SNAP.png',
      technologies: ['Python', 'Pandas', 'Numpy', 'GDAL', 'Rasterio', 'Matplotlib'],
      features: [
      'Collected and processed Sentinel-1 SAR data using Python-based geospatial libraries (GDAL, Rasterio).',
      'Applied machine learning models (Random Forest, Regression) to predict soil moisture from SAR backscatter data.',
      'Conducted comparative evaluation against ground-truth measurements to validate model performance.'
      ],
      icon: <Sprout className="text-green-500" size={20} />,
      githubUrl: 'https://github.com/keerthanachinthala/WiCSE_SAR_project',
      liveUrl: '#'
    },

  ];

  // Responsive items per view - always 2 on desktop, 1 on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, projects.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden section-hero-body">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here are some of the projects I've worked on during my studies and personal time. 
              Each project represents a learning opportunity and showcases different aspects of my skills.
            </p>
          </div>
          {/* Carousel Container */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ 
                  transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                  width: `${(projects.length / itemsPerView) * 100}%`
                }}
              >
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-4"
                    style={{ width: `${100 / projects.length}%` }}
                  >
                    <div className="bg-gray-700/50 backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col justify-between hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-600/30">
  
                      {/* Top Section: Content */}
                      <div className="space-y-4">
                        {/* Project Image */}
                        <div className="relative mb-6 overflow-hidden rounded-lg">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        </div>

                        {/* Title & Icon */}
                        <div className="flex items-center space-x-3">
                          {project.icon}
                          <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {project.description}
                        </p>

                        {/* Key Features */}
                        <div>
                          <h4 className="font-semibold text-white mb-2 text-sm">Key Features:</h4>
                          <ul className="space-y-1">
                            {project.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="text-gray-300 text-xs flex items-start">
                                <span className="text-blue-400 mr-2 text-sm">•</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-2 py-1 bg-gray-600/50 text-gray-300 text-xs rounded-full border border-gray-500/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Section: Buttons */}
                      <div className="flex space-x-2 pt-4">
                        {index === 0 ? (
                          <a
                            href='https://link.springer.com/chapter/10.1007/978-981-99-3250-4_66'
                            className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-gray-600 text-white text-sm rounded-lg hover:bg-gray-500 transition-colors duration-200"
                          >
                            <FileText className="text-white mr-1" size={14} />
                            Paper
                          </a>
                        ) : (
                          <a
                            href={project.githubUrl}
                            className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-500 transition-colors duration-200"
                          >
                            <Github className="mr-1" size={14} />
                            Code
                          </a>
                        )}

                        {/* If needed, re-enable Demo button */}
                        {/* <a
                          href={project.liveUrl}
                          className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                          <ExternalLink className="mr-1" size={14} />
                          Demo
                        </a> */}
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700/80 hover:bg-gray-600/80 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 z-10 backdrop-blur-sm"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className={`${currentIndex === 0 ? 'text-gray-500' : 'text-white'}`} size={24} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700/80 hover:bg-gray-600/80 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 z-10 backdrop-blur-sm"
              disabled={currentIndex >= maxIndex}
            >
              <ChevronRight className={`${currentIndex >= maxIndex ? 'text-gray-500' : 'text-white'}`} size={24} />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: maxIndex + 1 }).map((_, index) => (
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

export default Projects;