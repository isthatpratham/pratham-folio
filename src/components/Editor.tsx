import React, { useEffect, useState } from 'react';
import { X, FilmStrip, GitBranch, Scissors, MagicWand, Target, ChartLineUp, Timer, Code, Play } from '@phosphor-icons/react';
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

gsap.registerPlugin(ScrollTrigger);

interface Client {
    id: number;
    name: string;
    logo: string;
}

const TRUSTED_CLIENTS: Client[] = [
    { id: 1, name: 'Maz Fashion', logo: logoMaz },
    { id: 2, name: 'VulnCon', logo: logoVulncon },
    { id: 3, name: 'FairExPay', logo: logoFairexpay },
    { id: 4, name: 'OneCore Global', logo: logoOnecore },
    { id: 5, name: 'YellowDude', logo: logoYellowdude },
    { id: 6, name: 'Sustainable Tea', logo: logoTea },
];

// PROJECTS moved to src/data/editorProjects.ts

const STAT_DATA = [
    { label: 'Views Generated', value: 100000, suffix: '+', description: 'Across all client channels' },
    { label: 'Retention Boost', value: 3, suffix: 'x', description: 'Average increase in watch time' },
    { label: 'Videos Delivered', value: 50, suffix: '+', description: 'High-quality cinematic edits' },
    { label: 'Happy Creators', value: 12, suffix: '+', description: 'Consistent long-term partnerships' },
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
            <div id="showreel" className="showreel-section w-full max-w-5xl mx-auto mt-24">
                <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-[0_0_50px_rgba(255,255,255,0.05)] group">
                    {!isPlaying ? (
                        <div
                            className="absolute inset-0 cursor-pointer group"
                            onClick={() => setIsPlaying(true)}
                        >
                            <img
                                src={showreelThumb}
                                alt="Showreel Thumbnail"
                                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl">
                                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)]">
                                        <Play weight="fill" size={32} className="ml-1" />
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-8 left-8 text-left">
                                <p className="text-white/40 text-sm font-medium tracking-[0.2em] uppercase mb-1">2024 Showreel</p>
                                <h3 className="text-2xl font-bold text-white tracking-tight">The Art of Storytelling</h3>
                            </div>
                        </div>
                    ) : (
                        <div className="absolute inset-0 bg-black">
                            <iframe
                                src="https://www.youtube.com/embed/-XAtV0sh9RM?autoplay=1&rel=0"
                                title="Showreel"
                                className="w-full h-full"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                            ></iframe>
                            <button
                                onClick={() => setIsPlaying(false)}
                                className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-md rounded-full text-white/70 hover:text-white hover:bg-black/80 transition-all z-20"
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
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer border border-white/5 bg-white/5 transition-all duration-500 hover:border-white/20 animate-in fade-in zoom-in-95"
                            onClick={() => {
                                if (project.type === 'youtube' || project.type === 'local') {
                                    setSelectedProject(project);
                                } else if (project.type === 'external' && project.externalUrl) {
                                    const optimizedUrl = optimizeExternalLink(project.externalUrl);
                                    window.open(optimizedUrl, '_blank', 'noopener,noreferrer');
                                }
                            }}
                        >
                            <img
                                src={project.thumbnail}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-white/40 text-[10px] font-bold tracking-[.3em] uppercase mb-2">{project.category}</p>
                                    <h3 className="text-xl font-bold text-white transition-colors">{project.title}</h3>
                                </div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
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
                        {[...TRUSTED_CLIENTS, ...TRUSTED_CLIENTS].map((client, index) => (
                            <div
                                key={`${client.id}-${index}`}
                                className="mx-6 md:mx-10 group flex flex-col items-center justify-center transition-all duration-500"
                            >
                                <div className="w-24 h-24 md:w-32 md:h-32 p-6 md:p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-white/10 group-hover:border-white/20 group-hover:brightness-125 shadow-xl">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="w-full h-full object-contain opacity-40 group-hover:opacity-100 transition-all filter grayscale group-hover:grayscale-0 brightness-110 contrast-110"
                                    />
                                </div>
                                <span className="mt-4 text-[10px] uppercase tracking-[0.2em] font-bold text-white/20 group-hover:text-white/60 transition-colors">
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
                            <video
                                src={selectedProject.videoSrc}
                                poster={selectedProject.thumbnail}
                                controls
                                muted
                                playsInline
                                preload="metadata"
                                className="w-full h-full object-contain bg-black"
                            ></video>
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
