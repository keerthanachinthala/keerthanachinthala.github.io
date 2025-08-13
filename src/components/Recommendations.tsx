import { Quote } from 'lucide-react';

const Recommendations = () => {
  const recommendations = [
    {
      name: 'Ayushi Gupta',
      title: 'Software Development Manager',
      organization: 'Oracle',
      image: 'https://pbs.twimg.com/profile_images/1533830901800615936/FMaKZbh-_400x400.png',
      text: "It was a privilege to lead Keerthana at Oracle NetSuite. She quickly demonstrated an impressive ability to learn and adapt, taking on backend development, API optimization, and key project responsibilities with confidence. Keerthana is committed to continuous growth, consistently embracing feedback to enhance her technical and problem-solving skills. As a team player, she takes full ownership of her work, supports her colleagues, and approaches challenges with a solutions-driven mindset. It was a pleasure working with her and witnessing her growth.",
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

  return (
    <section id="recommendations" className="py-20 section-hero-body relative bg-gray-900" style={{zIndex:5}}>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Recommendations</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here's what colleagues, professors, and students have to say about working with me.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recommendations.map((rec, index) => (
              <div 
                key={index} 
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-5 relative overflow-hidden border border-gray-700/30 hover:shadow-2xl transition-all duration-300 h-[320px] flex flex-col"
              >
                <Quote className="absolute top-4 right-4 text-blue-400/20" size={24} />
                
                <div className="flex items-center gap-3 mb-3 flex-shrink-0">
                  <img
                    src={rec.image}
                    alt={rec.name}
                    className="w-10 h-10 rounded-full shadow-lg ring-2 ring-gray-600/50"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{rec.name}</h4>
                    <p className="text-blue-400 font-semibold text-xs">{rec.title}</p>
                    <p className="text-gray-400 text-xs">{rec.organization}</p>
                  </div>
                </div>

                <div className="flex-1 mb-3">
                  <p className="text-gray-300 text-xs leading-relaxed italic line-clamp-[10]">
                    "{rec.text}"
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-700/30 flex-shrink-0">
                  <p className="text-xs text-gray-500">{rec.relationship}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;