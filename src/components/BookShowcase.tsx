import React, { useEffect } from 'react';
import { BookOpen } from '@phosphor-icons/react';
import bookCover from '../images/where-she-still-exists.jpg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const BookShowcase: React.FC = () => {
    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.book-showcase-container',
                start: 'top 80%',
            }
        });

        tl.fromTo('.book-showcase-content',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
        )
        .fromTo('.book-text-reveal',
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
            "-=0.6"
        );
    }, []);

    return (
        <div className="book-showcase-container w-full max-w-7xl mx-auto my-32 px-6">
            <div className="book-showcase-content w-full rounded-[2.5rem] bg-white/5 border border-white/10 p-8 md:p-16 relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-white/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                    <div className="relative group mx-auto max-w-sm lg:max-w-md w-full perspective-1000">
                        <div className="absolute inset-0 bg-white/30 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                        <img 
                            src={bookCover} 
                            alt="Where She Still Exists Book Cover" 
                            className="w-full h-auto rounded-lg shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>

                    <div className="flex flex-col space-y-6">
                        <div>
                            <div className="book-text-reveal inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/70 text-xs font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
                                <BookOpen size={16} weight="fill" />
                                <span>Self-Published Author</span>
                            </div>
                            <h2 className="book-text-reveal text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                                Where She Still Exists
                            </h2>
                            <h3 className="book-text-reveal text-xl md:text-2xl text-white/70 font-medium mb-6">
                                A story that lingers even after the last page.
                            </h3>
                            <p className="book-text-reveal text-white/40 text-lg leading-relaxed">
                                A deeply personal exploration of love, memory, and the spaces people leave behind. Written to be felt, not just read.
                            </p>
                        </div>

                        <div className="book-text-reveal flex flex-wrap gap-4 pt-4">
                            <a href="https://amzn.in/d/04CdaUcU" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[200px] text-center px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                Buy on Amazon (IN)
                            </a>
                            <a href="https://www.amazon.co.uk/dp/B0G6YKK2V8" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px] text-center px-6 py-4 bg-white/10 text-white border border-white/20 font-medium rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-md">
                                Amazon UK
                            </a>
                            <a href="https://www.amazon.com/dp/B0G6YKK2V8" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px] text-center px-6 py-4 bg-white/10 text-white border border-white/20 font-medium rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-md">
                                Amazon US
                            </a>
                            <a href="https://dl.flipkart.com/s/ZuPul!uuuN" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px] text-center px-6 py-4 bg-white/10 text-white border border-white/20 font-medium rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-md">
                                Flipkart
                            </a>
                            <a href="https://notionpress.com/in/read/where-she-still-exists" target="_blank" rel="noopener noreferrer" className="flex-1 min-w-[140px] text-center px-6 py-4 bg-white/10 text-white border border-white/20 font-medium rounded-full hover:bg-white/20 transition-all duration-300 backdrop-blur-md">
                                NotionPress
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookShowcase;
