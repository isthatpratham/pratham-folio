import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette, Globe, Cpu, Database, Sparkle } from '@phosphor-icons/react';
import prathamImage from '../images/pratham.jpg';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo('.about-content',
      { opacity: 0, y: 60, filter: 'blur(10px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out' }
    )
    .fromTo('.about-image',
      { opacity: 0, x: -50, scale: 0.8 },
      { opacity: 1, x: 0, scale: 1, duration: 1, ease: 'power2.out' }, '-=0.8'
    )
    .fromTo('.terminal-line',
      { opacity: 0, x: -20 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.6, 
        ease: 'power2.out',
        stagger: 0.2 
      }, '-=0.5'
    );

    // Profile image hover effect
    const profileImage = document.querySelector('.profile-image');
    profileImage?.addEventListener('mouseenter', () => {
      gsap.to(profileImage, { 
        scale: 1.05, 
        rotateY: 5, 
        duration: 0.5, 
        ease: 'power2.out' 
      });
    });
    profileImage?.addEventListener('mouseleave', () => {
      gsap.to(profileImage, { 
        scale: 1, 
        rotateY: 0, 
        duration: 0.5, 
        ease: 'power2.out' 
      });
    });
  }, []);

  return (
    <section id="about" className="about-section py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="about-image flex justify-center lg:justify-start">
            <div className="relative">
              <div className="profile-image w-80 h-80 rounded-full bg-gradient-to-br from-white/10 to-gray-500/10 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden">
                <img 
                  src={prathamImage} 
                  alt="Pratham"
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/15 to-gray-500/15 blur-xl -z-10"></div>
            </div>
          </div>
          
          {/* Terminal Content */}
          <div className="about-content">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-spline-white to-spline-grey">Me</span>
            </h2>
            
            {/* Terminal Window */}
            <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 font-mono text-base">
              {/* Terminal Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-green-400 text-sm">prathamfrsure</div>
              </div>
              
              {/* Terminal Content - Scrollable */}
              <div className="space-y-6 max-h-96 overflow-y-auto pr-2" style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#4B5563 #1F2937'
              }}>
                {/* whoami command */}
                <div className="terminal-line">
                  <div className="text-green-400 text-lg font-medium">$ whoami</div>
                  <div className="text-gray-300 ml-4 mt-3 text-base leading-relaxed">
                    I'm Pratham Debnath, 22, a software developer and MCA student from Margherita, India.
                    I've been into computers for as long as I can remember, and now I'm diving deeper into web dev and AI to turn that curiosity into something real.
                  </div>
                </div>
                
                {/* ls skills command */}
                <div className="terminal-line">
                  <div className="text-green-400 text-lg font-medium">$ ls skills</div>
                  <div className="text-gray-300 ml-4 mt-3 text-base leading-relaxed">
                    freelance video editing, web/app development, adapting to new tech fast,
                    problem-solving, storytelling
                  </div>
                </div>
                
                {/* cat tech_specs.txt command */}
                <div className="terminal-line">
                  <div className="text-green-400 text-lg font-medium">$ cat tech_specs.txt</div>
                  <div className="text-gray-300 ml-4 mt-3 space-y-2 text-base leading-relaxed">
                    <div><span className="text-orange-400 font-medium">OS:</span> Windows (as usual)</div>
                    <div><span className="text-orange-400 font-medium">Editor:</span> VS Code or Helix (depends on my mood)</div>
                    <div><span className="text-orange-400 font-medium">Languages:</span> Python, JavaScript, PHP (adding more soon)</div>
                    <div><span className="text-orange-400 font-medium">Frameworks:</span> React, Next.js, Vite, Tailwind, Node.js, Django</div>
                    <div><span className="text-orange-400 font-medium">Animations:</span> GSAP, Anime.js</div>
                    <div><span className="text-orange-400 font-medium">Tools:</span> Git, MySQL, Docker, Nmap, Figma, Notion, OpenAI API, Supabase</div>
                  </div>
                </div>
                
                {/* cat contact.txt command */}
                <div className="terminal-line">
                  <div className="text-green-400 text-lg font-medium">$ cat contact.txt</div>
                  <div className="text-gray-300 ml-4 mt-3 space-y-2 text-base leading-relaxed">
                    <div><span className="text-orange-400 font-medium">Email:</span> premdebnath08@gmail.com</div>
                    <div><span className="text-orange-400 font-medium">GitHub:</span> github.com/prathamfrsure</div>
                    <div><span className="text-orange-400 font-medium">LinkedIn:</span> linkedin.com/in/pratham</div>
                    <div><span className="text-orange-400 font-medium">Twitter:</span> twitter.com/prathamfrsure</div>
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