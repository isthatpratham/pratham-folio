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
      title: 'Sanvya Health',
      description: 'Healthcare infrastructure platform powering real hospital workflows including patient admission, IPD/OPD management, billing systems, and automated communication.',
      tech: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'Twilio API'],
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '',
      live: 'https://sanvyahealth.com/'
    },
    {
      id: 2,
      title: 'ArtGallery',
      description: 'A modern digital art gallery platform where users can explore curated artwork collections through a clean and immersive interface. Built as a full-stack project with smooth browsing and elegant UI.',
      tech: ['React', 'GSAP', 'Express', 'Supabase'],
      image: 'https://images.pexels.com/photos/20967/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/isthatpratham/artgallery.git',
      live: 'https://artgallery-murex-phi.vercel.app/'
    },
    {
      id: 3,
      title: 'TabNap',
      description: 'A lightweight Chrome extension that intelligently puts inactive browser tabs to sleep to reduce memory usage and improve browser performance by replacing them with a glass-style sleep screen.',
      tech: ['JavaScript', 'Chrome Extension API', 'CSS Glassmorphism'],
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: 'https://github.com/isthatpratham/tabnap.git',
      live: ''
    },
    {
      id: 4,
      title: 'Sanvya Technologies Official Website',
      description: 'The official website for Sanvya Technologies showcasing the company\'s healthcare software solutions and digital infrastructure services.',
      tech: ['Vite', 'React', 'Tailwind CSS', 'Framer Motion'],
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      github: '',
      live: 'https://sanvyatechnologies.com/'
    }
  ];

  return (
    <section id="projects" className="projects-section py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="projects-title text-4xl md:text-5xl font-light text-white text-center mb-16">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40 text-glow">Projects</span>
        </h2>

        {/* Balanced Grid for 4 Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 group transition-all duration-500 hover:shadow-[0_20px_60px_rgba(255,255,255,0.05)]"
            >
              <div className="relative overflow-hidden rounded-2xl mb-8 aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white/80 transition-colors tracking-tight">
                {project.title}
              </h3>

              <p className="text-white/50 text-base mb-8 leading-relaxed font-light">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2.5 mb-10">
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className="bg-white/5 text-white/60 px-4 py-1.5 rounded-full text-xs font-medium border border-white/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center space-x-8 pt-4 border-t border-white/5">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white font-semibold hover:text-white/70 transition-all transform hover:translate-x-1 duration-300 text-sm"
                  >
                    <span>Live Demo</span>
                    <ArrowUpRight size={18} weight="bold" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-white/40 hover:text-white transition-all transform hover:translate-x-1 duration-300 text-sm"
                  >
                    <GithubLogo size={20} />
                    <span>View Repository</span>
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