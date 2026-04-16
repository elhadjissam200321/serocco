/* SEROCCO Scroll Animations */
import { gsap, ScrollTrigger } from './gsap-setup.js';

export function initScrollAnimations() {
  // Reveal animations for elements with .reveal-up class
  const revealElements = document.querySelectorAll('.reveal-up');
  
  revealElements.forEach((el) => {
    const delay = el.dataset.delay || 0;
    
    gsap.fromTo(el, 
      {
        opacity: 0,
        y: 60
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: parseFloat(delay),
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // Text reveal animation
  const revealTexts = document.querySelectorAll('.reveal-text');
  
  revealTexts.forEach((el) => {
    gsap.fromTo(el,
      {
        opacity: 0,
        y: 40
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  });

  // Parallax effect for hero image
  const heroImage = document.querySelector('.hero-image');
  if (heroImage) {
    gsap.to(heroImage, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }

  // Counter animation
  const statNumbers = document.querySelectorAll('.stat-number');
  
  statNumbers.forEach((counter) => {
    const target = parseInt(counter.dataset.count);
    
    ScrollTrigger.create({
      trigger: counter,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(counter, {
          innerHTML: target,
          duration: 2,
          ease: 'power2.out',
          snap: { innerHTML: 1 },
          onUpdate: function() {
            counter.innerHTML = Math.ceil(this.targets()[0].innerHTML);
          }
        });
      },
      once: true
    });
  });

  // Service cards stagger animation
  const serviceCards = document.querySelectorAll('.service-card');
  
  if (serviceCards.length > 0) {
    gsap.fromTo(serviceCards,
      {
        opacity: 0,
        y: 80
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.services-grid',
          start: 'top 80%',
        }
      }
    );
  }

  // Testimonial cards stagger animation
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  
  if (testimonialCards.length > 0) {
    gsap.fromTo(testimonialCards,
      {
        opacity: 0,
        y: 60
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'expo.out',
        scrollTrigger: {
          trigger: '.testimonials-slider',
          start: 'top 80%',
        }
      }
    );
  }

  // Flamingo floating animation
  const flamingoIcon = document.querySelector('.flamingo-icon');
  if (flamingoIcon) {
    gsap.to(flamingoIcon, {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }

  // Partners fade in
  const partnersGrid = document.querySelector('.partners-grid');
  if (partnersGrid) {
    gsap.fromTo(partnersGrid.children,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: partnersGrid,
          start: 'top 85%',
        }
      }
    );
  }
}

// Hero text animation
export function initHeroAnimations() {
  const heroTitle = document.querySelector('.hero-title');
  const heroTagline = document.querySelector('.hero-tagline');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroCta = document.querySelector('.hero-cta');
  
  const tl = gsap.timeline({ delay: 0.5 });
  
  if (heroTagline) {
    tl.fromTo(heroTagline,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }
    );
  }
  
  if (heroTitle) {
    const titleLines = heroTitle.querySelectorAll('.title-line');
    tl.fromTo(titleLines,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'expo.out' },
      '-=0.4'
    );
  }
  
  if (heroSubtitle) {
    tl.fromTo(heroSubtitle,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' },
      '-=0.4'
    );
  }
  
  if (heroCta) {
    tl.fromTo(heroCta.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'expo.out' },
      '-=0.2'
    );
  }
}
