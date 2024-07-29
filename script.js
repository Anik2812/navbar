const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const searchInput = document.querySelector('.search-input');
const themeSwitch = document.getElementById('theme-switch');
const logo = document.querySelector('.logo svg');

// GSAP ScrollTrigger setup
gsap.registerPlugin(ScrollTrigger);

// Navbar shrink on scroll
gsap.to(navbar, {
    scrollTrigger: {
        start: 'top -100',
        end: '+=100',
        scrub: true
    },
    height: '60px',
    backgroundColor: 'rgba(44, 62, 80, 0.9)',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
});

// Toggle mobile menu
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
themeSwitch.addEventListener('change', () => {
    document.body.setAttribute('data-theme', themeSwitch.checked ? 'dark' : 'light');
    
    gsap.to('body', {
        backgroundColor: themeSwitch.checked ? '#1a1a1a' : '#fff',
        color: themeSwitch.checked ? '#ecf0f1' : '#333',
        duration: 0.3
    });
});

// Logo animation
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