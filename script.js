const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const searchInput = document.querySelector('.search-input');
const themeSwitch = document.getElementById('theme-switch');
const logo = document.querySelector('.logo svg');

// Shrink navbar on scroll with GSAP
gsap.to(navbar, {
    scrollTrigger: {
        start: 'top -100',
        end: '+=100',
        scrub: true
    },
    height: '60px',
    padding: '0.5rem',
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

// Nav link hover animation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(link, {
            y: -3,
            duration: 0.2,
            ease: 'power2.out'
        });
    });

    link.addEventListener('mouseleave', () => {
        gsap.to(link, {
            y: 0,
            duration: 0.2,
            ease: 'power2.out'
        });
    });
});

// Parallax effect for content
gsap.to('.content', {
    y: 100,
    opacity: 0,
    scrollTrigger: {
        trigger: '.content',
        start: 'top center',
        end: 'bottom center',
        scrub: true
    }
});