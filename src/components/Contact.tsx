import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PaperPlaneTilt, GithubLogo, LinkedinLogo, TwitterLogo } from '@phosphor-icons/react';
import emailjs from '@emailjs/browser';
import { emailjsConfig } from '../config/emailjs';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    // Initialize EmailJS with config
    emailjs.init(emailjsConfig.publicKey);

    // DEBUG: Current EmailJS Configuration
    console.log('=== EmailJS Configuration ===');
    console.log('Service ID:', emailjsConfig.serviceId);
    console.log('Template ID:', emailjsConfig.templateId);
    console.log('Public Key:', emailjsConfig.publicKey);
    console.log('===========================');

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
    .fromTo('.contact-form',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, ease: 'power2.out' }, '-=0.5'
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

    // Submit button hover
    const submitBtn = document.querySelector('.submit-btn');
    submitBtn?.addEventListener('mouseenter', () => {
      gsap.to(submitBtn, { scale: 1.05, duration: 0.3 });
    });
    submitBtn?.addEventListener('mouseleave', () => {
      gsap.to(submitBtn, { scale: 1, duration: 0.3 });
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLoading) return;
    
    setIsLoading(true);
    setSubmitStatus('idle');
    setErrorMessage(''); // Clear previous errors
    
    // Bounce animation on submit
    gsap.to('.submit-btn', {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: 'power2.inOut'
    });

    try {
      // Create template parameters mapping form data to EmailJS template variables
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message
      };

      console.log('Sending email with params:', templateParams);
      console.log('Service ID:', emailjsConfig.serviceId);
      console.log('Template ID:', emailjsConfig.templateId);
      console.log('Public Key:', emailjsConfig.publicKey);

      let result;
      
      try {
        // Try the direct send method first
        result = await emailjs.send(
          emailjsConfig.serviceId,
          emailjsConfig.templateId,
          templateParams,
          emailjsConfig.publicKey
        );
      } catch (sendError) {
        console.log('Direct send failed, trying sendForm method...');
        
        // Fallback to sendForm method
        if (formRef.current) {
          // Temporarily update form field names to match template
          const nameInput = formRef.current.querySelector('input[name="name"]') as HTMLInputElement;
          const emailInput = formRef.current.querySelector('input[name="email"]') as HTMLInputElement;
          
          if (nameInput) nameInput.name = 'user_name';
          if (emailInput) emailInput.name = 'user_email';
          
          result = await emailjs.sendForm(
            emailjsConfig.serviceId,
            emailjsConfig.templateId,
            formRef.current,
            emailjsConfig.publicKey
          );
          
          // Restore original field names
          if (nameInput) nameInput.name = 'name';
          if (emailInput) emailInput.name = 'email';
        } else {
          throw sendError;
        }
      }

      console.log('EmailJS result:', result);

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Success animation
        gsap.to('.submit-btn', {
          backgroundColor: '#10B981',
          duration: 0.3,
          onComplete: () => {
            setTimeout(() => {
              gsap.to('.submit-btn', {
                backgroundColor: '',
                duration: 0.3
              });
            }, 2000);
          }
        });
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
      
      // Get more specific error information
      let errorMsg = 'Failed to send message. Please try again later.';
      
      if (error instanceof Error) {
        errorMsg = error.message;
      } else if (typeof error === 'object' && error !== null) {
        const errorObj = error as any;
        if (errorObj.status === 400 && errorObj.text?.includes('template ID not found')) {
          errorMsg = 'Email template configuration error. Please contact the administrator.';
        } else if (errorObj.status === 400 && errorObj.text?.includes('service ID')) {
          errorMsg = 'Email service configuration error. Please contact the administrator.';
        } else if (errorObj.text) {
          errorMsg = errorObj.text;
        } else {
          errorMsg = JSON.stringify(error);
        }
      }
      setErrorMessage(errorMsg);
      
      // Error animation
      gsap.to('.submit-btn', {
        backgroundColor: '#EF4444',
        duration: 0.3,
        onComplete: () => {
          setTimeout(() => {
            gsap.to('.submit-btn', {
              backgroundColor: '',
              duration: 0.3
            });
          }, 2000);
        }
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section py-32 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="contact-title text-4xl md:text-5xl font-light text-white text-center mb-16">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-spline-white to-spline-grey">Touch</span>
            </h2>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-spline-light-grey focus:ring-1 focus:ring-spline-light-grey transition-all duration-300"
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-spline-light-grey focus:ring-1 focus:ring-spline-light-grey transition-all duration-300"
              />
            </div>
            
            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-spline-light-grey focus:ring-1 focus:ring-spline-light-grey transition-all duration-300 resize-none"
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="submit-btn w-full bg-gradient-to-r from-spline-white to-spline-dark-grey text-white py-4 rounded-xl font-medium hover:shadow-2xl hover:shadow-white/10 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Sending...</span>
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <span>Message Sent!</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </>
              ) : submitStatus === 'error' ? (
                <>
                  <span>{errorMessage || 'Failed to Send'}</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <PaperPlaneTilt size={20} />
                </>
              )}
            </button>
            
            {submitStatus === 'success' && (
              <div className="text-green-400 text-center text-sm">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="text-red-400 text-center text-sm">
                Sorry! There was an error sending your message. Please try again.
              </div>
            )}
          </form>
          
          {/* Contact Info & Social */}
          <div className="flex flex-col justify-center">
            <div className="mb-12">
              <h3 className="text-2xl font-light text-white mb-6">Get In Touch</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            
            <div className="flex space-x-6">
              {[
                { icon: <GithubLogo size={24} />, href: 'https://github.com/isthatpratham', label: 'GitHub' },
                { icon: <LinkedinLogo size={24} />, href: 'https://www.linkedin.com/in/pratham-debnath-894471314/', label: 'LinkedIn' },
                { icon: <TwitterLogo size={24} />, href: 'https://x.com/prathamfrsure', label: 'Twitter' },
                { 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
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
      </div>
    </section>
  );
};

export default Contact;