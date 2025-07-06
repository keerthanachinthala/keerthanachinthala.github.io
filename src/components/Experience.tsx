import React from 'react';
import { MapPin, Calendar, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Graduate Student Assistant',
      organization: 'UF College of Veterinary Medicine',
      location: 'Gainesville, FL',
      period: 'February 2025 - Present',
      description: 'My work centers on exploring deep learning approaches in digital pathology. I began by using a CLAM-based weakly supervised learning pipeline to predict tumor presence from histopathology slides. As I delved deeper into morphological patterns, I explored spatial statistics, specifically Moran\'s I, to quantify tissue-level similarities and assess whether models could learn subtle patterns that are visually apparent to pathologists. Building on this, I transitioned to generative modeling, using diffusion models to synthesize high-resolution whole slide image (WSI) patches. The goal was to augment datasets, reduce reliance on expensive annotated samples, and accelerate training without compromising image quality.',
      achievements: [
        'Trained a CLAM-based model to classify tumor presence from slide-level labels',
        'Computed and analyzed Moran\'s I spatial autocorrelation scores to explore feature-level similarities',
        'Designed experiments to test model sensitivity to spatially driven features across data splits',
        'Implemented a diffusion model pipeline to generate synthetic pathology patches for data augmentation',
        'Evaluated generative output using manifold-based metrics and incorporated it into an end-to-end workflow',
      ],
      type: 'research'
    },
    {
      title: 'Research Apprentice',
      organization: 'TerraviewOS',
      location: 'Remote',
      period: 'August 2024 - December 2024',
      description: 'During this apprenticeship, I explored SAR (Synthetic Aperture Radar) and SAR imaging to support soil moisture estimation and agricultural insights. It gave me a deep dive into geospatial data processing and its applications.',
      achievements: [
        'Worked on preprocessing and interpreting SAR image data',
        'Evaluated model outputs for environmental insights and ground truth validation',
        'Learned to handle real-world scientific data in resource-constrained scenarios'
      ],
      type: 'Apprentice'
    },
    {
      title: 'Software Developement Engineer (IC2)',
      organization: 'Oracle',
      location: 'Hyderabad, India',
      period: 'July 2022 - December 2023',
      description: 'During my 1.5-year tenure at Oracle NetSuite, I was part of a fast-paced Agile team responsible for building and enhancing core business applications using full-stack technologies. My role spanned designing user interfaces, implementing backend logic, resolving customer-raised bugs, and contributing to performance optimizations. This experience significantly deepened my skills in scalable software engineering and taught me how to deliver robust features while balancing real-world business constraints. Additionally, I regularly investigated and addressed customer issues under tight deadlines, which sharpened my debugging and analytical abilities. These tasks often required understanding deeply intertwined business logic and collaborating across teams to trace data flows and dependencies.',
      achievements: [
        'Developed and maintained full-stack features using AngularJS, Flask, and Python',
        'Modernized legacy codebases, improving long-term maintainability and frontend responsiveness',
        'Led implementation of reusable UI components to standardize workflows and reduce redundancy',
        'Collaborated in Scrum rituals — daily stand-ups, sprint reviews, and retrospectives — improving team velocity and delivery consistency',
        'Resolved high-priority bugs, improving customer satisfaction metrics and reducing turnaround times',
        'Conducted performance profiling and implemented backend optimizations that improved response times for data-heavy views',
        'Gained a comprehensive understanding of enterprise-scale codebases and best practices in release cycles, testing, and deployment'
      ],
      type: 'Full Time'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'research':
        return <Award className="text-purple-400" size={20} />;
      case 'internship':
        return <MapPin className="text-blue-400" size={20} />;
      case 'teaching':
        return <Calendar className="text-emerald-400" size={20} />;
      default:
        return <MapPin className="text-gray-400" size={20} />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-[#0b0b0b] section-hero-body">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              My journey in gaining practical experience through research, Apprentenship, and Fulltime opportunities.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-emerald-400"></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-gray-800 border-4 border-blue-400 rounded-full z-10"></div>

                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className={`ml-12 md:ml-0 bg-gray-700/50 backdrop-blur-sm rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-600/30`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          {getIcon(experience.type)}
                          <span className="text-sm font-medium text-gray-400">{experience.period}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{experience.title}</h3>
                      <h4 className="text-lg font-semibold text-blue-400 mb-1">{experience.organization}</h4>
                      <p className="text-gray-400 text-sm mb-4 flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {experience.location}
                      </p>

                      <p className="text-gray-300 mb-4 leading-relaxed">{experience.description}</p>

                      <div>
                        <h5 className="font-semibold text-white mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-gray-300 text-sm flex items-start">
                              <span className="text-emerald-400 mr-2 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;