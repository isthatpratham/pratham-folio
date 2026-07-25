import React, { useState, useEffect } from 'react';
import { GithubLogo, InstagramLogo, LinkedinLogo, List, X, House, ArrowRight } from '@phosphor-icons/react';
import { gsap } from 'gsap';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo('.nav',
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: 'power2.out' }
    );
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      gsap.to('.mobile-menu', {
        x: 0,
        duration: 0.5,
        ease: 'power2.out'
      });
    } else {
      gsap.to('.mobile-menu', {
        x: '100%',
        duration: 0.5,
        ease: 'power2.in'
      });
    }
  };

  const centerItems = ['About', 'Journey', 'Projects'];
  const mobileItems = ['Home', 'About', 'Journey', 'Projects', 'Contact'];

  return (
    <>
      <nav className="nav fixed top-5 inset-x-0 z-40 flex justify-center px-4">
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-neutral-800/80 pl-2 pr-2 py-2 shadow-2xl backdrop-blur-xl">
          {/* Home icon */}
          <a
            href="#home"
            aria-label="Home"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition-colors duration-300 hover:bg-white/10"
          >
            <House size={18} weight="regular" />
          </a>

          {/* Desktop center links */}
          <div className="hidden md:flex items-center gap-1 px-1">
            {centerItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="rounded-full px-4 py-2 text-sm font-medium text-gray-300 transition-colors duration-300 hover:bg-white/5 hover:text-white"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 rounded-full border border-white/10 bg-black px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:bg-black/70"
          >
            Contact
            <ArrowRight size={16} weight="bold" />
          </a>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors duration-300 hover:bg-white/10 md:hidden"
          >
            <List size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="mobile-menu fixed top-0 right-0 w-full h-full bg-black/95 backdrop-blur-lg z-50 transform translate-x-full">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-6">
            <div className="text-2xl font-light text-white"></div>
            <button onClick={toggleMenu} className="text-white">
              <X size={24} />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center space-y-8">
            {mobileItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={toggleMenu}
                className="text-3xl text-gray-300 hover:text-white transition-colors font-light"
              >
                {item}
              </a>
            ))}

            <div className="flex space-x-6 mt-8">
              <a href="https://www.linkedin.com/in/pratham-debnath-894471314/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <LinkedinLogo size={24} />
              </a>
              <a href="https://github.com/isthatpratham" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <GithubLogo size={24} />
              </a>
              <a href="https://www.instagram.com/prathamfrsure/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <InstagramLogo size={24} />
              </a>
              <a href="https://leetcode.com/u/prathamfrsure/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
