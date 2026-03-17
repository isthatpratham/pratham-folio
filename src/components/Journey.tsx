import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Journey: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.journey-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo('.journey-title',
      { opacity: 0, y: 50, filter: 'blur(5px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power2.out' }
    )
    .fromTo('.timeline-item',
      { opacity: 0, x: -30, filter: 'blur(3px)' },
      { 
        opacity: 1, 
        x: 0, 
        filter: 'blur(0px)', 
        duration: 0.8, 
        stagger: 0.15,
        ease: 'power2.out' 
      }, 
      '-=0.5'
    );
  }, []);

  const timelineItems = [
    {
      date: '2022',
      title: 'Started Freelancing',
      description: 'Began my journey into the digital world through video editing. This was my first step into freelancing, where I learned to work with clients, manage projects, and deliver quality content on time.',
      location: 'Remote',
      highlights: [
        'Video editing and post-production',
        'Client communication and project management',
        'Time management and deadline adherence'
      ]
    },
    {
      date: 'Aug 2022',
      title: 'Started BCA',
      description: 'Enrolled in Bachelor of Computer Applications to build a strong foundation in computer science. This marked the beginning of my formal education in technology and programming.',
      location: 'Dibrugarh, Assam',
      highlights: [
        'Computer science fundamentals',
        'Programming basics and logic building',
        'Database management and web technologies'
      ]
    },
    {
      date: 'June 2025',
      title: 'Graduated BCA',
      description: 'Successfully completed my Bachelor of Computer Applications degree. This milestone equipped me with comprehensive knowledge of software development, databases, and modern web technologies.',
      location: 'Dibrugarh, Assam',
      highlights: [
        'Full-stack development skills',
        'Software engineering principles',
        'Database design and management'
      ]
    },
    {
      date: 'July 2025',
      title: 'Started MCA',
      description: 'Began pursuing Master of Computer Applications at SRM University to deepen my expertise in advanced computing concepts and specialize in emerging technologies.',
      location: 'Chennai, India - SRM University',
      highlights: [
        'Advanced computer science concepts',
        'Specialization in cybersecurity',
        'Research and development methodologies'
      ]
    },
    {
      date: 'July 2025',
      title: 'Co-founded AiirVik',
      description: 'Partnered with Prashanjeet to create AiirVik, a comprehensive digital solutions company. This venture combines our expertise in software development and AI to deliver innovative solutions.',
      location: 'Remote',
      highlights: [
        'Business development and strategy',
        'AI integration and implementation',
        'Team leadership and project coordination'
      ]
    },
    {
      date: 'July 2025',
      title: 'Senior Developer at Sanvya Health',
      description: 'Joined Sanvya Health Private Limited as a Senior Developer, taking on challenging healthcare technology projects. This role allows me to apply my technical skills while contributing to meaningful healthcare solutions.',
      location: 'Gujarat, India',
      highlights: [
        'Healthcare technology development',
        'Senior-level software architecture',
        'Team mentoring and code review'
      ]
    }
  ];

  return (
    <section id="journey" className="journey-section py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="journey-title text-4xl md:text-5xl font-light text-white mb-16 text-center">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-spline-white to-spline-grey">Journey</span>
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-white/30 to-white/10 rounded-full"></div>
          
          {/* Timeline items */}
          <div className="space-y-16">
            {timelineItems.map((item, index) => (
              <div key={index} className="timeline-item relative">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/3 w-4 h-4 rounded-full bg-white/70 shadow-glow z-10"></div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 ml-8 md:ml-0' : 'md:pl-12 ml-8 md:ml-auto'}`}>
                  <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-gray-400 text-sm font-medium">{item.date}</div>
                      <div className="text-gray-500 text-sm">{item.location}</div>
                    </div>
                    <h3 className="text-xl text-white font-medium mb-3">{item.title}</h3>
                    <p className="text-gray-300 font-light text-base leading-relaxed mb-4">{item.description}</p>
                    
                    {/* Highlights */}
                    <div className="space-y-2">
                      {item.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-spline-cyan rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300 text-sm leading-relaxed">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;