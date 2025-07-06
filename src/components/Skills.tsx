import React from 'react';
import { Code, Database, Brain, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-blue-400" size={24} />,
      skills: [
        { name: 'Python', logo: 'https://cdn.simpleicons.org/python/3776AB' },
        { name: 'JavaScript', logo: 'https://cdn.simpleicons.org/javascript/F7DF1E' },
        { name: 'TypeScript', logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
        { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain.svg' },
        { name: 'C++', logo: 'https://cdn.simpleicons.org/cplusplus/00599C' },
        { name: 'C', logo: 'https://cdn.simpleicons.org/c/005A9C' },
        { name: 'PHP', logo: 'https://cdn.simpleicons.org/php/777BB4' },
        { name: 'SQL', logo: 'https://cdn.simpleicons.org/typescript/3178C6' },
        // { name: 'Java', logo: 'https://cdn.simpleicons.org/java/007396' },
        // { name: 'C++', logo: 'https://cdn.simpleicons.org/cplusplus/00599C' },
      ]
    },
    {
      title: 'Web Development',
      icon: <Palette className="text-emerald-400" size={24} />,
      skills: [
        { name: 'Flask', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
        { name: 'AngularJS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg' },
        { name: 'Bootstrap', logo: 'https://cdn.simpleicons.org/bootstrap/7952B3' },
        // { name: 'CSS', logo: 'https://cdn.simpleicons.org/css/1572B6' },
        // { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
        { name: 'React', logo: 'https://cdn.simpleicons.org/react/61DAFB' },
        { name: 'Node.js', logo: 'https://cdn.simpleicons.org/nodedotjs/339933' },
        { name: 'HTML5', logo: 'https://cdn.simpleicons.org/html5/E34F26' },
        { name: 'CSS', logo: 'https://cdn.simpleicons.org/css/1572B6' },
        { name: 'Tailwind CSS', logo: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
        // { name: 'Express', logo: 'https://cdn.simpleicons.org/express/000000' },
      ]
    },
    {
      title: 'Data & ML',
      icon: <Brain className="text-purple-400" size={24} />,
      skills: [
        { name: 'Pandas', logo: 'https://cdn.simpleicons.org/pandas/150458' },
        { name: 'NumPy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-plain.svg' },
        { name: 'Scikit-learn', logo: 'https://cdn.simpleicons.org/scikitlearn/F7931E' },
        { name: 'TensorFlow', logo: 'https://cdn.simpleicons.org/tensorflow/FF6F00' },
        { name: 'Matplotlib', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg' },
      ]
    },
    {
      title: 'Tools & Databases',
      icon: <Database className="text-orange-400" size={24} />,
      skills: [
        { name: 'Git', logo: 'https://cdn.simpleicons.org/git/F05032' },
        { name: 'GitHub', logo: 'https://cdn.simpleicons.org/github/181717' },
        { name: 'MySQL', logo: 'https://cdn.simpleicons.org/mysql/4479A1' },
        { name: 'SQLAlchemy', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg' },
        { name: 'Docker', logo: 'https://cdn.simpleicons.org/docker/2496ED' },
        { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
        { name: 'Jira', logo: 'https://cdn.simpleicons.org/jira/0052CC' },
        { name: 'Confluence', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 section-hero-body">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Here are the technologies and tools I've been learning and working with 
              during my studies and personal projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-700/30"
              >
                <div className="flex items-center mb-6">
                  {/* {category.icon} */}
                  <h3 className="text-xl font-semibold text-white ml-3">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3 mt-4">
  {category.skills.map((skill, skillIndex) => (
    <div
      key={skillIndex}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-800/40 border border-emerald-400 text-sm text-gray-200"
    >
      <img
        src={skill.logo}
        alt={skill.name}
        className="w-5 h-5 object-contain"
        loading="lazy"
      />
      <span>{skill.name}</span>
    </div>
  ))}
</div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;