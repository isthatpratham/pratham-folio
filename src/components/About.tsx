import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code,
  Terminal,
  LinkedinLogo,
  GithubLogo,
  Cpu,
  Globe,
  Database,
  ShieldCheck,
  Buildings,
  Wrench,
  Sparkle,
  Cloud
} from '@phosphor-icons/react';

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

    tl.fromTo('.about-intro',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    )
      .fromTo('.terminal-container',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }, '-=0.4'
      )
      .fromTo('.building-section',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, '-=0.6'
      )
      .fromTo('.tech-category',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: 'power2.out' }, '-=0.4'
      );
  }, []);

  const techStack = [
    {
      category: 'Languages',
      icon: <Code size={24} className="text-white/40" />,
      items: ['C++', 'JavaScript', 'TypeScript', 'Java', 'Python', 'PHP']
    },
    {
      category: 'Backend',
      icon: <Terminal size={24} className="text-white/40" />,
      items: ['Node.js', 'NestJS', 'Express', 'Django']
    },
    {
      category: 'Frontend',
      icon: <Globe size={24} className="text-white/40" />,
      items: ['React', 'Next.js', 'Redux', 'HTML', 'CSS', 'Tailwind']
    },
    {
      category: 'Databases',
      icon: <Database size={24} className="text-white/40" />,
      items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'Redis']
    },
    {
      category: 'Infrastructure',
      icon: <Cloud size={24} className="text-white/40" />,
      items: ['AWS', 'Google Cloud', 'Cloudflare', 'Docker']
    },
    {
      category: 'Security & Auth',
      icon: <ShieldCheck size={24} className="text-white/40" />,
      items: ['Clerk']
    },
    {
      category: 'Tools',
      icon: <Wrench size={24} className="text-white/40" />,
      items: ['Git', 'Prisma', 'Postman', 'Razorpay', 'Stripe', 'Nginx']
    },
    {
      category: 'AI & Observability',
      icon: <Sparkle size={24} className="text-white/40" />,
      items: ['Claude', 'LangChain', 'Sentry', 'Grafana']
    }
  ];

  return (
    <section id="about" className="about-section py-32 bg-transparent relative overflow-hidden">
      {/* Background atmosphere is global in App.tsx */}

      <div className="max-w-7xl mx-auto px-6 sm:px-12">

        {/* Intro Header */}
        <div className="about-intro mb-20 text-center mx-auto max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6">
            About <span className="hero-name-gradient">Me!</span>
          </h2>
          <h3 className="text-xl md:text-2xl text-white/70 font-medium mb-8">
            Full-Stack Developer at <a href="https://sanvyahealth.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition-all">Sanvya</a> <span className="text-white/20 mx-2">|</span> MCA @ <a href="https://maps.app.goo.gl/2ybd8AECoAHujwsY7" target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition-all">SRMIST</a>
          </h3>

        </div>

        <div className="grid lg:grid-cols-5 gap-12">

          {/* Left Side: Bio & Terminal */}
          <div className="lg:col-span-2 space-y-12">

            {/* Terminal Bio Block */}
            <div className="terminal-container p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-transparent">
              <div className="bg-[#0A0A0A] rounded-2xl p-6 font-mono text-sm leading-relaxed border border-white/5 shadow-2xl">
                <div className="flex space-x-2 mb-6 opacity-40">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>

                <div className="space-y-4">
                  <p className="text-white/40"># whoami</p>
                  <ul className="space-y-3 text-white/80">
                    <li className="flex items-start">
                      <span className="text-white/30 mr-3">❯</span>
                      Full-Stack Developer at Sanvya
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/30 mr-3">❯</span>
                      MCA Student SRMIST, Chennai
                    </li>
                    <li className="flex items-start">
                      <span className="text-white/30 mr-3">❯</span>
                      BCA Graduate from DHSK College, Dibrugarh, Assam
                    </li>
                    <li className="flex items-start text-white/50 italic">
                      "Building scalable backend systems and high-performance apps"
                    </li>
                  </ul>

                  <div className="pt-4 mt-4 border-t border-white/5 space-y-4">
                    <p className="text-white/40"># connect</p>
                    <div className="flex flex-wrap gap-4">
                      <a href="https://github.com/isthatpratham" target="_blank" className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors">
                        <GithubLogo size={20} />
                        <span>GitHub</span>
                      </a>
                      <a href="https://www.linkedin.com/in/pratham-debnath-894471314/" target="_blank" className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors">
                        <LinkedinLogo size={20} />
                        <span>LinkedIn</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote at the bottom of left side on desktop, but we'll place it at the absolute bottom later */}
          </div>

          {/* Right Side: Building & Tech */}
          <div className="lg:col-span-3 space-y-16">

            {/* What I'm Currently Building */}
            <div className="building-section">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Buildings size={24} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white">What I'm Currently Building</h4>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 backdrop-blur-sm">
                <div className="mb-6">
                  <h5 className="text-xl font-semibold text-white mb-2"><a href="https://sanvyahealth.com/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-all">Sanvya</a> – Healthcare Infrastructure Platform</h5>
                  <p className="text-white/40 text-sm">Working on enterprise-grade hospital management systems.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    'Patient Admission & Discharge',
                    'IPD / OPD Management',
                    'Billing & Payment Gateways',
                    'Hospital Workflow Automation',
                    'WhatsApp Communication',
                    'Lab & Radiology Integrations'
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-3 text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                      <span className="text-sm font-light">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technologies Grid */}
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  <Cpu size={24} className="text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white">Technologies I Use</h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {techStack.map((category) => (
                  <div key={category.category} className="tech-category p-6 bg-white/[0.02] border border-white/5 rounded-2xl hover:bg-white/[0.04] transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-white/90">{category.category}</span>
                      {category.icon}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map(item => (
                        <span key={item} className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-white/40 border border-white/5">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Closing Quote */}
        <div className="mt-32 text-center border-t border-white/5 pt-12">
          <p className="text-white text-sm font-bold italic tracking-wide">
            “The more time you spend in tech, the more urge you have to buy a farm and never touch a computer again.”
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;