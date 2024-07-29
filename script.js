// GSAP ScrollTrigger setup
gsap.registerPlugin(ScrollTrigger);

// Navbar shrink on scroll
gsap.to('.navbar', {
    scrollTrigger: {
        start: 'top -100',
        end: '+=100',
        scrub: true
    },
    height: '60px',
    backgroundColor: 'rgba(44, 62, 80, 0.9)',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
});

// Particle.js setup for hero section
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.5, random: false },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
        modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
    },
    retina_detect: true
});

// Toggle mobile menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    if (hamburger.classList.contains('active')) {
        gsap.to(hamburger.querySelectorAll('span'), {
            backgroundColor: '#3498db',
            stagger: 0.1
        });
        gsap.to(navLinks, {
            height: 'auto',
            opacity: 1,
            duration: 0.3
        });
    } else {
        gsap.to(hamburger.querySelectorAll('span'), {
            backgroundColor: '#ecf0f1',
            stagger: 0.1
        });
        gsap.to(navLinks, {
            height: 0,
            opacity: 0,
            duration: 0.3
        });
    }
});

// Animate search input
const searchInput = document.querySelector('.search-input');

searchInput.addEventListener('focus', () => {
    gsap.to(searchInput, {
        width: '250px',
        duration: 0.3,
        ease: 'power2.out'
    });
});

searchInput.addEventListener('blur', () => {
    gsap.to(searchInput, {
        width: '200px',
        duration: 0.3,
        ease: 'power2.out'
    });
});

// Theme toggle
const themeSwitch = document.getElementById('theme-switch');

themeSwitch.addEventListener('change', () => {
    document.body.setAttribute('data-theme', themeSwitch.checked ? 'dark' : 'light');
    
    gsap.to('body', {
        backgroundColor: themeSwitch.checked ? '#1a1a1a' : '#fff',
        color: themeSwitch.checked ? '#ecf0f1' : '#333',
        duration: 0.3
    });
});

// Logo animation
const logo = document.querySelector('.logo svg');

logo.addEventListener('mouseenter', () => {
    gsap.to(logo, {
        rotation: 360,
        duration: 0.5,
        ease: 'power2.out'
    });
});

logo.addEventListener('mouseleave', () => {
    gsap.to(logo, {
        rotation: 0,
        duration: 0.5,
        ease: 'power2.out'
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate elements on scroll
const animatedElements = document.querySelectorAll('.animated-text, .service-card, .portfolio-item');

animatedElements.forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'power2.out'
    });
});

// Parallax effect for hero section
gsap.to('.hero', {
    scrollTrigger: {
        scrub: true
    },
    y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
    ease: 'none'
});

// Portfolio item hover effect
document.querySelectorAll('.portfolio-item').forEach(item => {
    const overlay = item.querySelector('.portfolio-overlay');
    
    item.addEventListener('mouseenter', () => {
        gsap.to(overlay, {
            opacity: 1,
            duration: 0.3
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(overlay, {
            opacity: 0,
            duration: 0.3
        });
    });
});

// Form submission animation
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    gsap.to(form, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        onComplete: () => {
            form.reset();
            gsap.to(form, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: 0.5
            });
        }
    });
});

// Animated counter for stats
const stats = document.querySelectorAll('.stat-number');

stats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    
    gsap.to(stat, {
        innerHTML: target,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: stat,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        },
        onUpdate: () => stat.innerHTML = Math.floor(parseFloat(stat.innerHTML))
    });
});

// Testimonial slider
const testimonials = document.querySelectorAll('.testimonial-slide');
let currentTestimonial = 0;

function showTestimonial(index) {
    gsap.to(testimonials[currentTestimonial], { opacity: 0, display: 'none', duration: 0.5 });
    gsap.to(testimonials[index], { opacity: 1, display: 'block', duration: 0.5 });
    currentTestimonial = index;
}

function nextTestimonial() {
    let next = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(next);
}

setInterval(nextTestimonial, 5000);

// Portfolio filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                gsap.to(item, { opacity: 1, scale: 1, duration: 0.3 });
            } else {
                gsap.to(item, { opacity: 0.3, scale: 0.8, duration: 0.3 });
            }
        });
    });
});

// Floating navigation button
const floatingNavBtn = document.querySelector('.floating-nav-btn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        gsap.to(floatingNavBtn, { opacity: 1, scale: 1, duration: 0.3 });
    } else {
        gsap.to(floatingNavBtn, { opacity: 0, scale: 0.8, duration: 0.3 });
    }
});

floatingNavBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Scroll progress indicator
const scrollProgress = document.querySelector('.scroll-progress');

window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    gsap.to(scrollProgress, { width: `${scrollPercentage}%`, duration: 0.1 });
});

// Animated background color change on scroll
gsap.to('body', {
    backgroundColor: '#2c3e50',
    scrollTrigger: {
        trigger: '.services',
        start: 'top center',
        end: 'bottom center',
        scrub: true
    }
});

// Parallax effect for service cards
gsap.utils.toArray('.service-card').forEach(card => {
    gsap.to(card, {
        y: -50,
        scrollTrigger: {
            trigger: card,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
});

// Text reveal animation for section titles
gsap.utils.toArray('.section-title').forEach(title => {
    gsap.from(title, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
            trigger: title,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
});

// Stagger animation for nav links
gsap.from('.nav-link', {
    opacity: 0,
    y: -20,
    stagger: 0.1,
    duration: 0.5,
    ease: 'power2.out',
    delay: 0.5
});

// Page loading animation
window.addEventListener('load', () => {
    gsap.to('body', { opacity: 1, duration: 0.5 });
    gsap.from('.hero-content', { opacity: 0, y: 50, duration: 1, delay: 0.5 });
});

// Initialize AOS (Animate on Scroll) library
AOS.init({
    duration: 1000,
    once: true
});