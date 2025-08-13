import { BookOpen, Heart, Target, GraduationCap, Code, Shield, Cookie } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden section-hero-body backdrop-blur-sm shadow-lg p-8" style={{zIndex: 5}}>
      {/* Enhanced background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-32 h-32 bg-emerald-500 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-purple-500 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mb-4"></div>
            <p className="text-xl text-gray-400">The story behind the code</p>
          </div>
          
          {/* Row 1: Journey (large) + Stats + Values (stacked) */}
          <div className="grid grid-cols-12 gap-6 mb-6">
            <div className="col-span-12 lg:col-span-8 p-6 bg-gray-800/30 rounded-xl backdrop-blur-sm border-2 border-gray-600/50">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">🚀 My Journey</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed text-sm">
                <p>
                  <span className="text-emerald-400 font-semibold">Hey there! 👋</span> I'm Keerthana, and my journey began with a moment of <span className="text-blue-400">pure fascination</span> – watching a tiny digital character find its way through a maze I'd coded. That spark of "I just made something think" became an <span className="text-emerald-400">obsession with creating intelligence that matters</span>.
                </p>
                <p>
                  Fast-forward to today: I'm in my final semester at UF, <span className="text-purple-400">rewriting the playbook for medical AI</span> at the College of Veterinary Medicine. When traditional datasets weren't enough, I <span className="text-emerald-400">taught diffusion models to dream up realistic tumor patches</span>, expanding our training data beyond physical limitations. Now I'm chasing an even bigger question: <span className="text-blue-400">Can spatial relationships reveal what the human eye cannot see?</span> I'm using Moran's I statistics to hunt for hidden tumor patterns that could transform how we diagnose disease.
                </p>
                <p>
                  My path has been anything but linear. At Oracle NetSuite, I <span className="text-blue-400">turned user frustration into features that serve 1,000+ businesses daily</span>. In academia, I <span className="text-emerald-400">cracked the music recommendation cold-start problem</span>, boosting precision by 23.59% for songs nobody listens to. Each challenge taught me the same lesson: <span className="text-purple-400">the most powerful solutions come from asking better questions</span>.
                </p>
                <p>
                  I don't just write code – I <span className="text-emerald-400">architect possibilities</span>. Every algorithm I build, every model I train, every pattern I uncover is driven by one belief: <span className="text-blue-400">technology should amplify human potential, not replace it</span>.
                </p>
                <p className="text-center">
                  <span className="text-emerald-400 font-semibold">What problem should we solve next?</span> 🚀✨
                </p>
              </div>
            </div>

            {/* Right Column: Stats + Values */}
            <div className="col-span-12 lg:col-span-4 space-y-6">
              {/* Quick Stats */}
              <div className="p-6 bg-gray-800/30 rounded-xl backdrop-blur-sm border-2 border-gray-600/50">
                <h4 className="font-bold text-white mb-4">⚡ Quick Stats</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 p-3 rounded-lg border-2 border-emerald-500/40 text-center">
                    <div className="text-lg font-bold text-emerald-400">2+</div>
                    <div className="text-gray-300 text-xs">Years Experience</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 p-3 rounded-lg border-2 border-purple-500/40 text-center">
                    <div className="text-lg font-bold text-purple-400">∞</div>
                    <div className="text-gray-300 text-xs">Learning Mode</div>
                  </div>
                  {/* <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 p-3 rounded-lg border-2 border-blue-500/40 text-center">
                    <div className="text-lg font-bold text-blue-400">23.59%</div>
                    <div className="text-gray-300 text-xs">Research Impact</div>
                  </div> */}
                </div>
              </div>

              {/* Core Values */}
              <div className="p-6 bg-gray-800/30 rounded-xl backdrop-blur-sm border-2 border-gray-600/50">
                <h4 className="font-bold text-white mb-4 text-center">💫 Core Values</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-lg border border-blue-400/40 hover:border-blue-400 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                      <BookOpen className="text-white" size={14} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white text-xs">Continuous Learner</h5>
                      <p className="text-gray-400 text-xs">Always exploring</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 rounded-lg border border-emerald-400/40 hover:border-emerald-400 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center">
                      <Heart className="text-white" size={14} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white text-xs">Collaborative Spirit</h5>
                      <p className="text-gray-400 text-xs">Team player</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-lg border border-purple-400/40 hover:border-purple-400 transition-all duration-300">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Target className="text-white" size={14} />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white text-xs">Goal-Oriented</h5>
                      <p className="text-gray-400 text-xs">Impact-focused</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Fun Facts + Education */}
          <div className="grid grid-cols-12 gap-6 mb-6">
            <div className="col-span-12 lg:col-span-5 h-64 p-6 bg-gray-800/30 rounded-xl backdrop-blur-sm border-2 border-gray-600/50 overflow-hidden flex flex-col">
              <h4 className="font-bold text-white mb-4 flex-shrink-0">✨ Fun Facts</h4>
              <div className="flex-1 space-y-3">
                <div className="flex items-center space-x-3 p-2 bg-gray-700/30 rounded-lg border border-gray-500/30">
                  <Cookie className="text-amber-400" size={18} />
                  <span className="text-gray-300 text-sm">I debug best when powered by sugar 🎂</span>
                </div>
                <div className="flex items-center space-x-3 p-2 bg-gray-700/30 rounded-lg border border-gray-500/30">
                  <Code className="text-emerald-400" size={18} />
                  <span className="text-gray-300 text-sm">Always experimenting 🚀</span>
                </div>
                <div className="flex items-center space-x-3 p-2 bg-gray-700/30 rounded-lg border border-gray-500/30">
                  <Shield className="text-purple-400" size={18} />
                  <span className="text-gray-300 text-sm">Security-first mindset 🔐</span>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7 h-64 p-6 bg-gray-800/30 rounded-xl backdrop-blur-sm border-2 border-gray-600/50 overflow-hidden flex flex-col">
              <h4 className="font-bold text-emerald-400 mb-4 flex-shrink-0">🎓 Education</h4>
              <div className="flex-1 space-y-3 overflow-y-auto pr-2">
                <div className="flex items-center space-x-3 p-3 bg-gray-800/40 rounded-lg border-l-4 border-blue-400">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-white" size={14} />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h5 className="font-bold text-white text-sm">MS Computer Science</h5>
                    <p className="text-blue-400 text-xs">University of Florida • 2024-2025</p>
                    <p className="text-gray-400 text-xs">CGPA: 3.92 | AI/ML Research</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-gray-800/40 rounded-lg border-l-4 border-emerald-400">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="text-white" size={14} />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h5 className="font-bold text-white text-sm">BE Computer Science</h5>
                    <p className="text-emerald-400 text-xs">Vasavi College • 2018-2022</p>
                    <p className="text-gray-400 text-xs">CGPA: 9.18 | CS Fundamentals</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;