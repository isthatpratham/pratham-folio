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
    );

    // Animate timeline items based on their side
    const items = gsap.utils.toArray('.timeline-item');
    items.forEach((item: any, index) => {
      const isLeft = index % 2 === 0;
      gsap.fromTo(item,
        {
          opacity: 0,
          x: isLeft ? -50 : 50,
          filter: 'blur(10px)'
        },
        {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Animate the vertical line expansion
    gsap.fromTo('.timeline-line',
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 2,
        ease: 'none',
        scrollTrigger: {
          trigger: '.journey-items-container',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: true
        }
      }
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
      description: 'Began pursuing Master of Computer Applications at SRMIST to deepen my expertise in advanced computing concepts and specialize in emerging technologies.',
      location: 'Chennai, India - SRMIST',
      highlights: [
        'Advanced computer science concepts',
        'Specialization in cybersecurity',
        'Research and development methodologies'
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
    <section id="journey" className="journey-section py-32 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="journey-title text-4xl md:text-5xl font-light text-white mb-24 text-center">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-spline-white to-spline-grey">Journey</span>
        </h2>

        <div className="relative max-w-5xl mx-auto journey-items-container">
          {/* Timeline Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/0 via-white/20 to-white/0 transform md:-translate-x-1/2 z-0">
            <div className="timeline-line absolute inset-0 bg-gradient-to-b from-spline-cyan/50 via-white to-spline-cyan/50 origin-top shadow-[0_0_15px_rgba(255,255,255,0.2)]"></div>
          </div>

          {/* Timeline items */}
          <div className="space-y-24 md:space-y-32">
            {timelineItems.map((item, index) => (
              <div key={index} className="timeline-item relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 h-auto">
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 top-0 md:top-8 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white z-20 shadow-[0_0_15px_rgba(255,255,255,0.8)] border-4 border-[#050505]"></div>

                {/* Content Box */}
                <div className={`col-span-1 md:w-[90%] pl-12 md:pl-0 ${index % 2 === 0 ? 'md:justify-self-start md:pr-16 text-left' : 'md:col-start-2 md:justify-self-end md:pl-16 text-left'}`}>
                  <div className="p-8 bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 group shadow-2xl relative">

                    {/* Date/Location Header */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 text-[10px] uppercase tracking-widest font-bold">
                        {item.date}
                      </span>
                      <span className="text-white/30 text-xs font-medium flex items-center">
                        <span className="w-1 h-1 bg-white/20 rounded-full mr-2"></span>
                        {item.location}
                      </span>
                    </div>

                    <h3 className="text-2xl text-white font-medium mb-4 group-hover:text-spline-cyan transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-white/50 font-light text-base leading-relaxed mb-8">
                      {item.description}
                    </p>

                    {/* Highlights with refined styling */}
                    <div className="grid grid-cols-1 gap-4">
                      {item.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-spline-cyan rounded-full mt-2 mr-4 flex-shrink-0 animate-pulse"></div>
                          <span className="text-white/40 text-sm leading-relaxed decoration-white/10">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Decorative Corner Glow */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/[0.02] blur-3xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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