import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowDown, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import { gsap } from 'gsap';
import profileImg from '../images/pratham.jpg';
import editorProfileImg from '../images/prathamedit.jpg';
import { Play, Eye } from '@phosphor-icons/react';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const activeMode = location.pathname === '/edit' ? 'Editor' : 'Developer';
  const [isTransitioning, setIsTransitioning] = React.useState(true);

  useEffect(() => {
    // Preload persona images to prevent flickering during swap
    [profileImg, editorProfileImg].forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Initial entrance fade-in
    const entranceTimer = setTimeout(() => setIsTransitioning(false), 300);
    return () => clearTimeout(entranceTimer);
  }, [location.pathname]);

  useEffect(() => {
    // Hero animations after preloader
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo('.hero-content-main > *',
      { opacity: 0, y: 40, filter: 'blur(15px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, stagger: 0.15, ease: 'power4.out' }
    )
      .fromTo('.hero-badge-v2',
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(2)' }, '-=0.8'
      )
      .fromTo('.hero-profile-visual',
        { opacity: 0, scale: 0.8, filter: 'blur(20px)' },
        { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power3.out' }, '-=1'
      );
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const content = {
    Developer: {
      badge: "Available for specialized roles",
      role: "Full-Stack Web Developer & Self-Published Author",
      description: (
        <>
          I build <span className="text-white/70 italic">fast, scalable web systems</span> and craft <br className="hidden md:block" />
          <span className="text-white/70 italic">seamless digital experiences</span> that perform and scale.
        </>
      ),
      primaryBtn: {
        text: "Explore My Work",
        icon: <ArrowDown weight="bold" size={18} />,
        action: scrollToProjects
      },
      secondaryBtn: {
        text: "Contact Me",
        action: scrollToContact
      },
      image: profileImg,
      statusColor: "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"
    },
    Editor: {
      badge: "Available for freelance editing",
      role: "Video Editor & Self-Published Author",
      description: (
        <>
          I craft <span className="text-white/70 italic">cinematic visual experiences</span> that define brands, <br className="hidden md:block" />
          <span className="text-white/70 italic">capture attention,</span> and keep audiences watching.
        </>
      ),
      primaryBtn: {
        text: "Watch Showreel",
        icon: <Play weight="fill" size={18} />,
        action: () => document.getElementById('showreel')?.scrollIntoView({ behavior: 'smooth' })
      },
      secondaryBtn: {
        text: "View Work",
        icon: <Eye size={18} />,
        action: scrollToProjects
      },
      image: editorProfileImg,
      statusColor: "bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
    }
  }[activeMode];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-transparent py-20 lg:py-0"
    >
      {/* Subtle Background Atmosphere Shift */}
      <div className={`absolute inset-0 -z-10 transition-colors duration-[2000ms] ease-in-out ${activeMode === 'Developer' ? 'bg-[#030303]' : 'bg-[#050508]'}`}>
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-10 transition-all duration-[2000ms] ease-in-out blur-[150px] rounded-full ${activeMode === 'Developer' ? 'bg-white/5' : 'bg-indigo-500/10'}`}></div>
        <div className={`absolute -top-[20%] -right-[10%] w-[60%] h-[60%] opacity-5 transition-all duration-[2500ms] ease-in-out blur-[120px] rounded-full ${activeMode === 'Developer' ? 'bg-white/5' : 'bg-violet-600/10'}`}></div>
      </div>
      {/* Main Container */}
      <div className="relative z-10 container mx-auto px-6 sm:px-12 lg:px-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column: Content */}
          <div className={`max-w-3xl hero-content-main text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start transition-all duration-200 ease-in-out ${isTransitioning ? 'opacity-0 blur-sm translate-y-2' : 'opacity-100 blur-none translate-y-0'}`}>

            {/* Status Badge */}
            <div className="hero-badge-v2 inline-flex items-center space-x-3 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] font-semibold text-white/60">{content.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="text-white tracking-tighter leading-none mb-10">
              <span className="block text-2xl md:text-3xl lg:text-[2.5rem] font-medium text-white/50 mb-3 ml-1 tracking-widest uppercase">Hi, I'm</span>
              <span className="text-8xl md:text-9xl lg:text-[140px] font-black hero-name-gradient text-glow relative inline-block">
                Pratham
                <div className="absolute -inset-x-12 -inset-y-8 bg-white/5 blur-3xl rounded-full -z-10 opacity-40"></div>
              </span>
            </h1>

            {/* Mode Switcher - Positioned BELOW Name */}
            <div className="flex justify-center lg:justify-start mb-10">
              <div className="relative flex items-center p-1 rounded-full border border-white/10 bg-[#0A0A0A]/40 backdrop-blur-xl transition-all duration-500 hover:border-white/20 shadow-2xl">
                {/* Sliding Background Indicator */}
                <div
                  className="absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full bg-white/10 border border-white/15 shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all duration-300 ease-in-out"
                  style={{
                    transform: `translateX(${activeMode === 'Developer' ? '0' : '100%'})`,
                    left: '4px'
                  }}
                />
                {(['Developer', 'Editor'] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => {
                      if (activeMode === mode) return;
                      setIsTransitioning(true);
                      setTimeout(() => {
                        navigate(mode === 'Developer' ? '/' : '/edit');
                      }, 300);
                    }}
                    className={`relative z-10 px-8 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 ease-in-out ${activeMode === mode
                      ? 'text-white'
                      : 'text-white/35 hover:text-white/60'
                      }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Subheadline & Description */}
            <div className="space-y-6 mb-12">
              <h2 className="text-2xl md:text-3xl font-medium text-white/90 tracking-tight">
                {content.role}
              </h2>
              <p className="text-lg md:text-xl text-white/40 font-light max-w-xl leading-relaxed mx-auto lg:mx-0">
                {content.description}
              </p>
            </div>

            {/* Buttons Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-5 sm:space-y-0 sm:space-x-8 w-full sm:w-auto">
              <button
                onClick={content.primaryBtn.action}
                className="btn-premium group w-full sm:w-auto px-10 py-5 bg-white text-black rounded-full font-bold shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all hover:scale-105 active:scale-95"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>{content.primaryBtn.text}</span>
                  <span className="group-hover:translate-x-1 transition-transform">{content.primaryBtn.icon}</span>
                </span>
              </button>

              <button
                onClick={content.secondaryBtn.action}
                className="btn-premium w-full sm:w-auto px-10 py-5 bg-transparent text-white border border-white/10 rounded-full font-bold backdrop-blur-sm hover:bg-white/5 hover:border-white/30 transition-all hover:scale-105 active:scale-95"
              >
                <span className="flex items-center justify-center space-x-2">
                  {content.secondaryBtn.icon && <span>{content.secondaryBtn.icon}</span>}
                  <span>{content.secondaryBtn.text}</span>
                </span>
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-20 flex items-center justify-center lg:justify-start space-x-8 text-white/20">
              <div className="w-16 h-[1px] bg-white/5"></div>
              <a href="https://github.com/isthatpratham" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:-translate-y-1 duration-300"><GithubLogo size={24} /></a>
              <a href="https://www.linkedin.com/in/pratham-debnath-894471314/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:-translate-y-1 duration-300"><LinkedinLogo size={24} /></a>
              <a href="https://www.instagram.com/prathamfrsure/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all transform hover:-translate-y-1 duration-300"><InstagramLogo size={24} /></a>
            </div>
          </div>

          {/* Right Column: Profile Image Visual */}
          <div className={`hero-profile-visual order-1 lg:order-2 flex items-center justify-center relative transition-all duration-100 ease-in-out ${isTransitioning ? 'opacity-0 scale-95 blur-md' : 'opacity-100 scale-100 blur-none'}`}>
            <div className="relative animate-float-slow profile-glow">
              {/* Decorative Rings */}
              <div className="absolute inset-0 -m-4 border border-white/10 rounded-full animate-pulse-slow"></div>
              <div className="absolute inset-0 -m-8 border border-white/5 rounded-full animate-pulse-slow" style={{ animationDelay: '-2s' }}></div>
              <div className="absolute inset-0 -m-12 border border-white/[0.02] rounded-full animate-pulse-slow" style={{ animationDelay: '-4s' }}></div>

              {/* Radial Glow Blend */}
              <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full -z-10 opacity-30"></div>

              {/* Image Frame */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[450px] lg:h-[450px] p-2 rounded-full image-ring overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent z-10 pointer-events-none"></div>

                {/* Developer Image */}
                <img
                  src={profileImg}
                  alt="Pratham Developer Profile"
                  className={`absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full transition-all duration-300 ease-in-out group-hover:scale-110 ${activeMode === 'Developer' ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* Editor Image */}
                <img
                  src={editorProfileImg}
                  alt="Pratham Editor Profile"
                  className={`absolute inset-2 w-[calc(100%-16px)] h-[calc(100%-16px)] object-cover rounded-full transition-all duration-300 ease-in-out group-hover:scale-110 ${activeMode === 'Editor' ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>

              {/* Subtle Floating Badge/Accent */}
              <div className="absolute -bottom-2 -right-2 lg:-bottom-4 lg:-right-4 bg-[#0A0A0A] border border-white/10 p-3 rounded-full backdrop-blur-xl shadow-2xl animate-float" style={{ animationDelay: '-1s' }}>
                <div className="flex items-center justify-center">
                  <div className={`w-3 h-3 rounded-full ${content.statusColor}`}></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Indicators Refined */}
      <div className="absolute bottom-12 left-10 hidden xl:flex flex-col items-center space-y-6">
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-white/20 [writing-mode:vertical-lr] select-none">Scroll Down</span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-white/20 via-white/5 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;