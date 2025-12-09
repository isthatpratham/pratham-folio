import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, GithubLogo } from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.projects-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo('.projects-title',
      { opacity: 0, y: 50, filter: 'blur(5px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power2.out' }
    )
    .fromTo('.project-card',
      { opacity: 0, y: 60, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.8, 
        ease: 'power2.out',
        stagger: 0.2 
      }, '-=0.5'
    );

    // Card hover effects
    document.querySelectorAll('.project-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { 
          y: -10, 
          scale: 1.02,
          boxShadow: '0 25px 50px rgba(255, 255, 255, 0.08)',
          duration: 0.3 
        });
      });
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { 
          y: 0, 
          scale: 1,
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
          duration: 0.3 
        });
      });
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Event Management System',
      description: 'A comprehensive platform for managing events, registrations, and attendee tracking.',
      tech: ['html', 'css', 'javascript', 'php', 'mysql'],
      image: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/isthatpratham/event_ms',
      live: 'https://github.com/isthatpratham/event_ms'
    },
    {
      id: 2,
      title: 'Chess Game with AI',
      description: 'Interactive chess game with AI opponent using minimax algorithm and alpha-beta pruning.',
      tech: ['JavaScript', 'python', 'AI Algorithms'],
      image: 'https://images.pexels.com/photos/260024/pexels-photo-260024.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/isthatpratham/chess_game_ai',
      live: 'https://github.com/isthatpratham/chess_game_ai'
    },
    {
      id: 3,
      title: 'AiirVik Official Page',
      description: 'Official website for AiirVik, showcasing creative digital solutions and services.',
      tech: ['React', 'GSAP', 'Tailwind CSS', 'Vite'],
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/isthatpratham/aiirvik-creative-canvas',
      live: 'https://isthatpratham.github.io/aiirvik-creative-canvas/'
    },
    {
      id: 4,
      title: 'Sanvya Health',
      description: 'Official website for Sanvya Health, providing healthcare solutions and services.',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'API Integration'],
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '',
      live: 'https://sanvyahealth.com/'
    }
  ];

  return (
    <section id="projects" className="projects-section py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="projects-title text-4xl md:text-5xl font-light text-white text-center mb-16">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-spline-white to-spline-grey">Projects</span>
        </h2>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`project-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 group cursor-pointer transition-all duration-300 ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <h3 className="text-xl font-medium text-white mb-3 group-hover:text-spline-light-grey transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map(tech => (
                  <span 
                    key={tech}
                    className="bg-white/5 text-spline-light-grey px-3 py-1 rounded-full text-xs border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white hover:text-spline-light-grey transition-colors text-sm"
                  >
                    <span>View Project</span>
                    <ArrowUpRight size={16} />
                  </a>
                )}
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <GithubLogo size={16} />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;