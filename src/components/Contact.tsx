import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, TwitterLogo } from '@phosphor-icons/react';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo('.contact-title',
      { opacity: 0, y: 50, filter: 'blur(5px)' },
      { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1, ease: 'power2.out' }
    )
      .fromTo('.social-icon',
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
          stagger: 0.1
        }, '-=0.3'
      );
  }, []);

  return (
    <section id="contact" className="contact-section py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="contact-title text-4xl md:text-5xl font-light text-white text-center mb-16">
          Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-spline-white to-spline-grey">Touch</span>
        </h2>

        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-12 max-w-2xl">
            <h3 className="text-2xl font-light text-white mb-6">Let's Connect</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, feel free to reach out through any of these platforms!
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <GithubLogo size={24} />, href: 'https://github.com/isthatpratham', label: 'GitHub' },
              { icon: <LinkedinLogo size={24} />, href: 'https://www.linkedin.com/in/pratham-debnath-894471314/', label: 'LinkedIn' },
              { icon: <TwitterLogo size={24} />, href: 'https://x.com/prathamfrsure', label: 'Twitter' },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                  </svg>
                ),
                href: 'https://leetcode.com/u/prathamfrsure/',
                label: 'LeetCode'
              }
            ].map(social => (
              <a
                key={social.label}
                href={social.href}
                className="social-icon bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-4 text-gray-400 hover:text-spline-light-grey hover:border-white/30 hover:bg-white/5 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;