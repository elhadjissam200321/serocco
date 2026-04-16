/* SEROCCO Main JavaScript */
import '../styles/main.css';
import { gsap, ScrollTrigger, lenis } from './gsap-setup.js';
import { initScrollAnimations, initHeroAnimations } from './scroll-animations.js';

// Custom Cursor
class CustomCursor {
  constructor() {
    this.cursor = document.querySelector('.cursor');
    this.cursorDot = document.querySelector('.cursor-dot');
    this.cursorCircle = document.querySelector('.cursor-circle');
    this.hoverElements = document.querySelectorAll('a, button, .btn, .service-card, .testimonial-card');
    
    this.mouseX = 0;
    this.mouseY = 0;
    this.cursorX = 0;
    this.cursorY = 0;
    
    this.init();
  }
  
  init() {
    if (!this.cursor) return;
    
    document.addEventListener('mousemove', (e) => this.onMouseMove(e));
    
    this.hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => this.onHoverEnter());
      el.addEventListener('mouseleave', () => this.onHoverLeave());
    });
    
    this.animate();
  }
  
  onMouseMove(e) {
    this.mouseX = e.clientX;
    this.mouseY = e.clientY;
  }
  
  onHoverEnter() {
    this.cursor.classList.add('hover');
  }
  
  onHoverLeave() {
    this.cursor.classList.remove('hover');
  }
  
  animate() {
    // Smooth cursor follow
    this.cursorX += (this.mouseX - this.cursorX) * 0.15;
    this.cursorY += (this.mouseY - this.cursorY) * 0.15;
    
    gsap.set(this.cursor, { x: this.cursorX, y: this.cursorY });
    gsap.set(this.cursorDot, { x: 0, y: 0 });
    gsap.set(this.cursorCircle, { x: 0, y: 0 });
    
    requestAnimationFrame(() => this.animate());
  }
}

// Magnetic Button Effect
function initMagneticButtons() {
  const magneticBtns = document.querySelectorAll('.magnetic-btn');
  
  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out'
      });
    });
    
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      });
    });
  });
}

// Loader Animation
function initLoader() {
  const loader = document.querySelector('.loader');
  if (!loader) return;
  
  gsap.to(loader, {
    opacity: 0,
    duration: 0.8,
    delay: 2,
    ease: 'power2.inOut',
    onComplete: () => {
      loader.classList.add('loaded');
      initHeroAnimations();
    }
  });
}

// Header Scroll Effect
function initHeaderScroll() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  ScrollTrigger.create({
    start: 'top -100',
    onUpdate: (self) => {
      if (self.direction === 1 && self.scroll() > 100) {
        header.classList.add('scrolled');
      } else if (self.scroll() < 100) {
        header.classList.remove('scrolled');
      }
    }
  });
}

// Mobile Menu
function initMobileMenu() {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link, .nav-link');
  
  if (!navToggle || !navMenu) return;
  
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    
    // Animate menu items
    if (mobileMenu.classList.contains('active')) {
      gsap.fromTo('.mobile-nav-list li',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, delay: 0.2, ease: 'expo.out' }
      );
    }
  });
  
  // Close menu on link click
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        lenis.scrollTo(target, { offset: -80 });
      }
    });
  });
}

// Page Transition
function initPageTransition() {
  const links = document.querySelectorAll('a[href$=".html"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      // Don't transition for same page links or external links
      if (link.hostname !== window.location.hostname) return;
      if (link.getAttribute('href') === window.location.pathname) return;
      
      e.preventDefault();
      
      const overlay = document.createElement('div');
      overlay.className = 'page-transition';
      document.body.appendChild(overlay);
      
      gsap.fromTo(overlay,
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          duration: 0.5,
          ease: 'expo.in',
          onComplete: () => {
            window.location.href = link.href;
          }
        }
      );
    });
  });
}

// Theme Toggle
function initThemeToggle() {
  const themeToggle = document.querySelector('.theme-toggle');
  if (!themeToggle) return;

  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// Initialize Everything
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initLoader();
  initHeaderScroll();
  initMobileMenu();
  initSmoothScroll();
  initMagneticButtons();
  initScrollAnimations();
  new CustomCursor();
  
  // Page transition on load (for back button)
  const pageTransition = document.querySelector('.page-transition');
  if (pageTransition) {
    gsap.fromTo(pageTransition,
      { scaleY: 1, transformOrigin: 'bottom' },
      { scaleY: 0, duration: 0.5, ease: 'expo.out', delay: 0.1 }
    );
  }
});

// Handle page visibility for animations
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    lenis.stop();
  } else {
    lenis.start();
  }
});
