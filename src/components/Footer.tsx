import React from 'react';
import { Heart, ArrowUp, Cookie, MapPin, Phone, Mail, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      href: 'https://github.com/keerthanachinthala',
      color: 'hover:text-white'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/keerthana-chinthala-kc/',
      color: 'hover:text-blue-400'
    }
  ];


  const contactInfo = [
    {
      icon: <Mail className="text-blue-400\" size={24} />,
      label: 'Email',
      value: 'chinthala.k@ufl.edu',
      href: 'mailto:chinthala.k@ufl.edu'
    },
    {
      icon: <Phone className="text-emerald-400" size={24} />,
      label: 'Phone',
      value: '+1 (352) 665-8705',
      href: 'tel:+13526658705'
    },
    {
      icon: <MapPin className="text-purple-400\" size={24} />,
      label: 'Location',
      value: 'Gainesville, FL',
      href: '#'
    }
  ];

  return (
    <footer id='footer' className="bg-gray-900 text-white py-12 relative section-hero-body">
      {/* <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-2">
                <span className="text-blue-400">Keerthana</span> Chinthala
              </h3>
              <p className="text-gray-400">
                Graduate Student • Developer • Researcher
              </p>
            </div>

            <div className="flex justify-center items-center space-x-2 text-gray-400 mb-8">
              <span>Made with</span>
              <Heart className="text-red-400" size={16} fill="currentColor" />
              <span>and lots of sugar</span>
              <Cookie size={24} className="text-yellow-500" />

            </div>

            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Keerthana Chinthala. All rights reserved. 
                This portfolio showcases my journey as a graduate student and aspiring developer.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className='p-8'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-12">
        {/* Left Column – Centered Keerthana Info */}
        <div className="flex flex-col justify-center items-center text-center space-y-4">
          <div>
            <h3 className="text-2xl font-bold">
              <span className="text-blue-400">Keerthana</span> Chinthala
            </h3>
            <p className="text-gray-400">
              Graduate Student • Developer • Researcher
            </p>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="text-red-400" size={16} fill="currentColor" />
            <span>and lots of sugar</span>
            <Cookie size={20} className="text-yellow-500" />
          </div>
        </div>

        {/* Right Column – Get In Touch + Follow Me */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Get In Touch Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Get In Touch</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition duration-200 group"
                >
                  <div className="flex-shrink-0">{info.icon}</div>
                  <div>
                    {/* <p className="text-sm text-gray-400 uppercase font-medium">
                      {info.label}
                    </p> */}
                    <p className="text-white font-semibold group-hover:text-blue-400">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Follow Me Section */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800/50 rounded-lg text-gray-400 ${social.color} transition-colors duration-200 hover:bg-gray-700/50`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Keerthana Chinthala. All rights reserved. 
                This portfolio showcases my journey as a graduate student and aspiring developer.
              </p>
            </div>


      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;