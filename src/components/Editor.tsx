import React, { useEffect, useState } from 'react';
import { X, FilmStrip, GitBranch, Scissors, MagicWand, Target, ChartLineUp, Timer, Code, Play, Star, Quotes, ArrowUpRight } from '@phosphor-icons/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { editorProjects, EditorProject } from '../data/editorProjects';
import { optimizeExternalLink } from '../utils/videoUtils';

import showreelThumb from '../images/showreel_thumb.png';
import logoMaz from '../images/maz-fashion.jpg';
import logoVulncon from '../images/vulcnon.jpg';
import logoFairexpay from '../images/fairexpay.jpg';
import logoOnecore from '../images/onecore-global.jpg';
import logoYellowdude from '../images/yellowdude.jpg';
import logoTea from '../images/sustainable_tea_with_shreaya.jpg';
import logoNiagara from '../images/niagara-water.jpg';

gsap.registerPlugin(ScrollTrigger);

interface Client {
    id: number;
    name: string;
    logo: string;
}

const TRUSTED_CLIENTS: Client[] = [
    { id: 1, name: 'Max Fashion', logo: logoMaz },
    { id: 2, name: 'VulnCon', logo: logoVulncon },
    { id: 3, name: 'FairExPay', logo: logoFairexpay },
    { id: 4, name: 'OneCore Global', logo: logoOnecore },
    { id: 5, name: 'YellowDude', logo: logoYellowdude },
    { id: 6, name: 'Sustainable Tea', logo: logoTea },
    { id: 7, name: 'Niagara Water', logo: logoNiagara },
];

// PROJECTS moved to src/data/editorProjects.ts

const SHOWREEL_DATA = {
    id: "showreel",
    title: "Showreel 2026 – The Art of Storytelling",
    category: "Showreel",
    videoSrc: "https://res.cloudinary.com/dtntvn6lo/video/upload/v1785102936/JulyShowreelPratham_cyumpn.mp4",
    thumbnail: "https://res.cloudinary.com/dtntvn6lo/video/upload/so_25/v1785102936/JulyShowreelPratham_cyumpn.jpg",
    type: "local",
    status: "ready"
};

const STAT_DATA = [
    { label: 'Views Generated', value: 22, suffix: 'M+', description: 'Across all client channels' },
    { label: 'Retention Boost', value: 8, suffix: 'x', description: 'Average increase in watch time' },
    { label: 'Videos Delivered', value: 70, suffix: '+', description: 'High-quality cinematic edits' },
    { label: 'Happy Creators', value: 16, suffix: '+', description: 'Consistent long-term partnerships' },
];

interface Testimonial {
    id: number;
    name: string;
    role: string;
    link?: string;
    rating: number;
    text: string[];
}

const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: 'Abhimanyu Karmakar',
        role: 'Fellow Video Editor',
        rating: 5,
        text: [
            "Collaborating with Pratham on post-production workflows has been an absolute pleasure. His intuitive sense for narrative pacing, seamless scene transitions, and sound design elevates every project we work on together.",
            "What strikes me most as a fellow editor is his technical command over complex timelines and color grading under tight production schedules. He approaches every edit with creative vision and incredible attention to detail.",
            "He is easily one of the most reliable and gifted editors I've partnered with, consistently setting a benchmark for cinematic storycrafting."
        ]
    },
    {
        id: 2,
        name: 'Devadeep Chakravarty',
        role: 'Polaroid Bear Studios',
        link: 'https://www.polaroidbearstudios.com',
        rating: 5,
        text: [
            "Pratham has been one of those people we at PBS know we can always count on. His sincerity, dedication, and commitment show in every project we have worked on together. What truly stands out is his ability to find solutions when things get challenging and his remarkable commitment to deadlines.",
            "Whether it’s a complex project or an incredibly tight turnaround, Pratham has consistently stepped up and delivered. His reliability, problem-solving mindset, and genuine ownership of his work have made him an invaluable part of our journey at PBS.",
            "We’re genuinely grateful to have someone like Pratham on our team and look forward to creating many more great projects together."
        ]
    },
    {
        id: 3,
        name: 'Bishesh Kasera',
        role: 'CEO, Sanvya Health',
        link: 'https://www.sanvyahealth.com',
        rating: 5,
        text: [
            "Pratham played a vital role in building Sanvya Health's visual brand identity. He transformed our complex medical workflows and healthcare features into crisp, highly engaging video presentations that resonated deeply with our audience.",
            "His ability to grasp enterprise product requirements quickly and translate them into polished visual assets saved our team countless hours. The speed of execution and quality of polish exceeded our expectations at every stage.",
            "If you are looking for an editor who brings genuine strategic value, speed, and creative excellence to your brand, Pratham is the partner you need."
        ]
    }
];

const PROCESS_STEPS = [
    { title: 'Raw Footage Review', description: 'Analyzing every frame to find the best moments.', icon: <FilmStrip size={32} /> },
    { title: 'Story & Structure', description: 'Crafting a compelling narrative and flow.', icon: <GitBranch size={32} /> },
    { title: 'Editing & Transitions', description: 'Precision cutting with seamless transitions.', icon: <Scissors size={32} /> },
    { title: 'Final Polish & Delivery', description: 'Color grading, sound design, and 4K export.', icon: <MagicWand size={32} /> },
];

const WHY_CHOOSE_ME = [
    { title: 'Story-Driven Editing', description: "Focusing on the 'why' behind every cut to keep viewers engaged.", icon: <Target size={28} /> },
    { title: 'High Retention Focus', description: 'Strategic pacing designed to maximize watch time and performance.', icon: <ChartLineUp size={28} /> },
    { title: 'Fast Turnaround', description: 'Efficient workflow to meet tight deadlines without compromising quality.', icon: <Timer size={28} /> },
    { title: 'Technical Edge', description: 'Combining deep platform knowledge with creative visual storytelling.', icon: <Code size={28} /> },
];

const Editor: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [selectedProject, setSelectedProject] = useState<EditorProject | null>(null);
    const [activeFilter, setActiveFilter] = useState<'All' | 'Explainers' | 'Shorts' | 'Client Work'>('All');
    const [isLoaded, setIsLoaded] = useState(false);

    const filteredProjects = activeFilter === 'All'
        ? editorProjects
        : editorProjects.filter(p => p.category === activeFilter);

    useEffect(() => {
        // Scroll animations for sections
        gsap.fromTo('.showreel-section',
            { opacity: 0, y: 50 },
            {
                opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.showreel-section',
                    start: 'top 85%',
                }
            }
        );

        gsap.fromTo('.projects-section',
            { opacity: 0, y: 50 },
            {
                opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.projects-section',
                    start: 'top 85%',
                }
            }
        );

        gsap.fromTo('.trusted-section',
            { opacity: 0, y: 50 },
            {
                opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.trusted-section',
                    start: 'top 85%',
                }
            }
        );

        gsap.fromTo('.results-section',
            { opacity: 0, y: 50 },
            {
                opacity: 1, y: 0, duration: 1.2, ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.results-section',
                    start: 'top 85%',
                }
            }
        );

        // Count-up animation
        const stats = document.querySelectorAll('.stat-value');
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target') || '0');
            const counter = { value: 0 };

            gsap.to(counter, {
                value: target,
                duration: 2,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.results-section',
                    start: 'top 80%',
                },
                onUpdate: () => {
                    stat.textContent = Math.floor(counter.value).toLocaleString() + (stat.getAttribute('data-suffix') || '');
                }
            });
        });

        gsap.fromTo('.testimonial-card',
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.testimonials-section',
                    start: 'top 80%',
                }
            }
        );

        gsap.fromTo('.process-step',
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.process-section',
                    start: 'top 80%',
                }
            }
        );

        gsap.fromTo('.strength-card',
            { opacity: 0, y: 30 },
            {
                opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.why-choose-section',
                    start: 'top 80%',
                }
            }
        );
    }, []);

    return (
        <div className="editor-container">
            {/* Showreel Section */}
            <div id="showreel" className="showreel-section w-full max-w-5xl lg:max-w-[1330px] mx-auto mt-24 px-4 sm:px-6 lg:px-8 relative group">
                {/* Blinking Glow Backdrop behind Showreel */}
                <div className="absolute -inset-4 sm:-inset-6 lg:-inset-8 rounded-3xl bg-gradient-to-r from-indigo-500/40 via-violet-500/30 to-purple-500/40 blur-3xl opacity-80 transition-all duration-1000 animate-toggle-glow pointer-events-none" />

                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_0_60px_rgba(99,102,241,0.15)] group">
                    {!isPlaying ? (
                        <div
                            className="absolute inset-0 cursor-pointer group"
                            onClick={() => setIsPlaying(true)}
                        >
                            <img
                                src={SHOWREEL_DATA.thumbnail}
                                alt="Showreel Thumbnail"
                                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl">
                                    <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                                        <Play weight="fill" size={36} className="ml-1" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12 text-left">
                                <p className="text-white/50 text-sm lg:text-base font-medium tracking-[0.2em] uppercase mb-1 lg:mb-2">2026 Showreel</p>
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">The Art of Storytelling</h3>
                            </div>
                        </div>
                    ) : (
                        <div className="absolute inset-0 bg-black">
                            <video
                                src={SHOWREEL_DATA.videoSrc}
                                controls
                                controlsList="nodownload"
                                onContextMenu={(e) => e.preventDefault()}
                                autoPlay
                                playsInline
                                preload="auto"
                                onEnded={() => setIsPlaying(false)}
                                className="w-full h-full object-contain"
                            />
                            <button
                                onClick={() => setIsPlaying(false)}
                                className="absolute top-4 right-4 p-3 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full text-white/70 hover:text-white border border-white/10 transition-all z-20 shadow-lg"
                            >
                                <X size={24} />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Selected Work Section */}
            <div id="projects" className="projects-section w-full max-w-7xl mx-auto mt-48 mb-40 text-left px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 px-2 space-y-8 md:space-y-0">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">Selected Work</h2>
                        <p className="text-white/40 text-lg">A collection of cinematic narratives and visual experiments.</p>
                    </div>
                    <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-md">
                        {['All', 'Explainers', 'Shorts', 'Client Work'].map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter as any)}
                                className={`px-5 py-2 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 ${activeFilter === filter
                                    ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.2)] scale-105'
                                    : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-white/5 transition-all duration-500 hover:border-white/20 animate-in fade-in zoom-in-95"
                            onClick={() => {
                                console.log("VIDEO PATH:", project.videoSrc);
                                if (project.type === 'local') setIsLoaded(false);
                                if (project.type === 'youtube' || project.type === 'local') {
                                    setSelectedProject(project);
                                } else if (project.type === 'external' && project.externalUrl) {
                                    const optimizedUrl = optimizeExternalLink(project.externalUrl);
                                    window.open(optimizedUrl, '_blank', 'noopener,noreferrer');
                                }
                            }}
                        >
                            {project.type === 'local' && project.videoSrc ? (
                                <video
                                    src={project.videoSrc}
                                    preload="metadata"
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                                    onLoadedMetadata={(e) => {
                                        e.currentTarget.currentTime = 0.1;
                                    }}
                                />
                            ) : (
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                                />
                            )}
                            <div className={`absolute inset-0 flex flex-col justify-end p-6 md:p-8 ${project.type === 'local'
                                ? 'bg-gradient-to-t from-black/80 via-transparent to-transparent'
                                : 'bg-gradient-to-t from-black/90 via-black/20 to-transparent'
                                }`}>
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {project.type === 'local' ? (
                                        <p className="text-white/50 text-sm font-medium tracking-wider">#{index + 1}</p>
                                    ) : project.type === 'youtube' ? (
                                        <>
                                            <p className="text-white/40 text-[10px] font-bold tracking-[.3em] uppercase mb-2">{project.category}</p>
                                            {/* Mobile View: Channel Name Only */}
                                            <h3 className="md:hidden text-base sm:text-lg font-bold text-white transition-colors">{project.channelName || 'YouTube'}</h3>
                                            {/* Desktop View: Full YouTube Video Title */}
                                            <h3 className="hidden md:block text-xl font-bold text-white transition-colors">{project.title}</h3>
                                        </>
                                    ) : (
                                        <>
                                            <p className="text-white/40 text-[10px] font-bold tracking-[.3em] uppercase mb-2">{project.category}</p>
                                            <h3 className="text-xl font-bold text-white transition-colors">{project.title}</h3>
                                        </>
                                    )}
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className={`w-16 h-16 rounded-full flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500 ${project.type === 'local'
                                        ? 'bg-white/20 backdrop-blur-md border border-white/30 text-white'
                                        : 'bg-white/10 backdrop-blur-xl border border-white/20 text-white'
                                        }`}>
                                        <Play weight="fill" size={24} className="text-white" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Trusted By Section */}
            <div className="trusted-section w-full mt-32 mb-40 text-center overflow-hidden">
                <div className="mb-16 px-6 text-center flex flex-col items-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4 text-glow">Trusted By</h2>
                    <p className="text-white/40 text-lg">Creators and brands who trust my editing</p>
                </div>
                <div className="w-full overflow-hidden relative">
                    <div className="flex animate-marquee-infinite py-4">
                        {[...TRUSTED_CLIENTS, ...TRUSTED_CLIENTS, ...TRUSTED_CLIENTS, ...TRUSTED_CLIENTS].map((client, index) => (
                            <div
                                key={`${client.id}-${index}`}
                                className="mx-6 md:mx-10 group flex flex-col items-center justify-center transition-all duration-500"
                            >
                                <div className="w-24 h-24 md:w-32 md:h-32 p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/20 shadow-xl">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="w-full h-full object-contain opacity-100 transition-all filter-none"
                                    />
                                </div>
                                <span className="mt-4 text-[10px] uppercase tracking-[0.2em] font-bold text-white/40 group-hover:text-white/80 transition-colors">
                                    {client.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Results Section */}
            <div className="results-section w-full max-w-7xl mx-auto mt-32 mb-40 text-center px-6">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 text-glow">Results That Matter</h2>
                    <p className="text-white/40 text-lg">Measurable impact delivered through purposeful editing</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {STAT_DATA.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-white/25 transition-all duration-500 flex flex-col items-center justify-center overflow-hidden"
                        >
                            <span
                                className="stat-value text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter"
                                data-target={stat.value}
                                data-suffix={stat.suffix}
                            >
                                0{stat.suffix}
                            </span>
                            <h3 className="text-sm font-bold text-white/50 uppercase tracking-widest mb-2">{stat.label}</h3>
                            <p className="text-white/25 text-xs font-medium text-center">{stat.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* What Clients Say Section */}
            <div className="testimonials-section w-full max-w-7xl mx-auto mt-32 mb-40 text-left px-6">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 text-glow">What Clients Say</h2>
                    <p className="text-white/40 text-lg max-w-2xl mx-auto text-center">Endorsements from creators, directors, and leaders I've collaborated with.</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch lg:[perspective:1200px] py-6">
                    {TESTIMONIALS.map((testimonial, index) => {
                        const isCenter = index === 1;
                        const isLeft = index === 0;

                        return (
                            <div
                                key={testimonial.id}
                                className={`testimonial-card group relative p-8 rounded-3xl backdrop-blur-xl transition-all duration-700 flex flex-col justify-between ${
                                    isCenter
                                        ? 'lg:scale-105 lg:-translate-y-4 z-20 border border-white/20 bg-gradient-to-b from-white/10 via-white/[0.06] to-white/5 opacity-100 shadow-[0_25px_60px_rgba(255,255,255,0.12)] hover:lg:scale-108 hover:shadow-[0_30px_70px_rgba(255,255,255,0.18)]'
                                        : isLeft
                                        ? 'lg:scale-95 lg:origin-right lg:[transform:rotateY(6deg)] hover:lg:[transform:rotateY(0deg)_scale(1.02)] opacity-85 hover:opacity-100 border border-white/10 bg-white/5 shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_45px_rgba(255,255,255,0.06)]'
                                        : 'lg:scale-95 lg:origin-left lg:[transform:rotateY(-6deg)] hover:lg:[transform:rotateY(0deg)_scale(1.02)] opacity-85 hover:opacity-100 border border-white/10 bg-white/5 shadow-[0_15px_35px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_45px_rgba(255,255,255,0.06)]'
                                }`}
                            >
                                {isCenter && (
                                    <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-white/20 via-white/30 to-white/20 blur-xl opacity-30 group-hover:opacity-60 transition-opacity pointer-events-none -z-10" />
                                )}

                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center space-x-1">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} size={18} weight="fill" className="text-amber-400" />
                                            ))}
                                        </div>
                                        {isCenter ? (
                                            <span className="text-[10px] uppercase font-extrabold tracking-[0.25em] text-white/90 bg-white/10 px-3 py-1 rounded-full border border-white/20 shadow-sm">
                                                Featured
                                            </span>
                                        ) : (
                                            <Quotes size={30} weight="fill" className="text-white/15 group-hover:text-white/35 transition-colors" />
                                        )}
                                    </div>
                                    <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed font-light mb-8">
                                        {testimonial.text.map((paragraph, idx) => (
                                            <p key={idx}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                                <div className="pt-6 border-t border-white/10 flex items-center justify-between mt-auto">
                                    <div>
                                        <h4 className="text-base font-bold text-white group-hover:text-white transition-colors">{testimonial.name}</h4>
                                        <p className="text-xs text-white/40 font-medium">{testimonial.role}</p>
                                    </div>
                                    {testimonial.link && (
                                        <a
                                            href={testimonial.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center space-x-1 text-xs text-white/60 hover:text-white bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10 transition-all"
                                        >
                                            <span>Website</span>
                                            <ArrowUpRight size={14} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Process Section */}
            <div className="process-section w-full max-w-7xl mx-auto mt-32 mb-40 text-center px-6">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">My Editing Process</h2>
                    <p className="text-white/40 text-lg">A systematic approach to cinematic excellence</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    <div className="hidden md:block absolute top-[60px] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                    {PROCESS_STEPS.map((step, index) => (
                        <div key={index} className="process-step mx-8 group flex flex-col items-center space-y-4 relative z-10 transition-all active:scale-95">
                            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md transition-all duration-500 group-hover:scale-105 group-hover:border-white/20 group-hover:bg-white/10 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                <div className="text-white/40 group-hover:text-white transition-colors">
                                    {step.icon}
                                </div>
                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[10px] font-bold text-white/40 backdrop-blur-xl group-hover:text-white group-hover:border-white/40 transition-all">
                                    0{index + 1}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 transition-colors">{step.title}</h3>
                            <p className="text-white/35 text-sm leading-relaxed max-w-[200px] group-hover:text-white/60 transition-colors">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Why Choose Me Section */}
            <div className="why-choose-section w-full max-w-7xl mx-auto mt-32 mb-40 text-left px-6">
                <div className="mb-20 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 text-glow">Why Choose Me</h2>
                    <p className="text-white/40 text-lg max-w-2xl mx-auto text-center">Bringing a unique blend of narrative intuition and technical precision to every project.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {WHY_CHOOSE_ME.map((strength, index) => (
                        <div
                            key={index}
                            className="strength-card group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 mb-6 group-hover:scale-110 group-hover:bg-white/10 group-hover:text-white transition-all duration-500">
                                {strength.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-white transition-colors">{strength.title}</h3>
                            <p className="text-white/35 text-sm leading-relaxed">{strength.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 animate-in fade-in duration-300">
                    <div
                        className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
                        onClick={() => setSelectedProject(null)}
                    ></div>
                    <div className="relative w-full max-w-6xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/10 bg-black z-10 animate-in zoom-in-95 duration-500">
                        {selectedProject?.type === 'youtube' ? (
                            <iframe
                                src={`https://www.youtube.com/embed/${selectedProject.videoId}?autoplay=1&rel=0`}
                                title={selectedProject?.title || 'Video Player'}
                                className="w-full h-full"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                        ) : selectedProject?.type === 'local' ? (
                            <>
                                {!isLoaded && (
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="w-10 h-10 rounded-full border-2 border-white/20 border-t-white animate-spin"></div>
                                    </div>
                                )}
                                <video
                                    src={selectedProject.videoSrc}
                                    controls
                                    controlsList="nodownload"
                                    onContextMenu={(e) => e.preventDefault()}
                                    autoPlay
                                    playsInline
                                    preload="auto"
                                    className={`w-full h-full object-contain rounded-xl transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                                    onLoadedData={(e) => {
                                        e.currentTarget.currentTime = 0.1;
                                        setIsLoaded(true);
                                    }}
                                />
                            </>
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        ) : (selectedProject as any)?.type === 'showreel' && (selectedProject as any)?.status === 'coming-soon' ? (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-black/80 backdrop-blur-2xl relative">
                                <div className="z-20 flex flex-col items-center p-8 animate-in fade-in zoom-in-95 duration-500">
                                    <div className="w-20 h-20 mb-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-xl shadow-[0_0_30px_rgba(255,255,255,0.05)] relative group">
                                        <div className="absolute inset-0 rounded-full animate-ping bg-white/5 duration-1000"></div>
                                        <Play weight="fill" size={32} className="text-white/50 animate-pulse" />
                                    </div>
                                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Showreel Coming Soon</h3>
                                    <p className="text-white/50 text-lg md:text-xl max-w-md text-center mb-2">
                                        I'm currently crafting something worth watching.
                                    </p>
                                    <p className="text-white/30 text-sm md:text-base max-w-sm text-center mb-10">
                                        Until then, explore my work below.
                                    </p>
                                    <button 
                                        onClick={() => setSelectedProject(null)}
                                        className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/20 rounded-full text-white text-sm font-bold tracking-widest uppercase transition-all duration-300"
                                    >
                                        View Projects
                                    </button>
                                </div>
                            </div>
                        ) : null}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-6 right-6 p-4 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full text-white border border-white/10 transition-all z-20"
                        >
                            <X size={24} />
                        </button>
                    </div>
                </div>
            )}

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-33.33%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                    display: flex;
                    width: max-content;
                }
            ` }} />
        </div>
    );
};

export default Editor;
