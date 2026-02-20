// ===========================
// Typing Animation
// ===========================
const typingText = document.querySelector('.typing-text');
const phrases = [
    'AI & Deep Learning Engineer 🧠',
    'Full Stack Developer 🚀',
    'Flutter App Developer 📱',
    'Building Real-World Projects 🔥'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentPhrase.length) {
        // Pause at the end
        typingSpeed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500;
    }
    
    setTimeout(typeText, typingSpeed);
}

// Start typing animation
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeText, 1000);
});

// ===========================
// Mobile Navigation Toggle
// ===========================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===========================
// Smooth Scrolling
// ===========================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Scroll to Top Button
// ===========================
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// Active Navigation on Scroll
// ===========================
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===========================
// Intersection Observer for Animations
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll(
        '.skill-category, .project-card, .contact-item, .stat-card, .highlight-item'
    );
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

// ===========================
// Add CSS for fade-in animation dynamically
// ===========================
const style = document.createElement('style');
style.textContent = `
    .skill-category,
    .project-card,
    .contact-item,
    .stat-card,
    .highlight-item {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ===========================
// Project Cards Hover Effect
// ===========================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        this.style.setProperty('--mouse-x', `${x}px`);
        this.style.setProperty('--mouse-y', `${y}px`);
    });
});

// ===========================
// Parallax Effect on Hero
// ===========================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - scrolled / 700;
    }
});

// ===========================
// Copy Email on Click
// ===========================
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

emailLinks.forEach(link => {
    link.addEventListener('click', async (e) => {
        const email = link.href.replace('mailto:', '');
        
        try {
            // Use modern Clipboard API
            await navigator.clipboard.writeText(email);
            
            // Show tooltip or notification
            const originalText = link.textContent;
            link.textContent = 'Email copied!';
            setTimeout(() => {
                link.textContent = originalText;
            }, 2000);
        } catch (err) {
            console.error('Failed to copy email:', err);
            
            // Fallback for browsers that don't support Clipboard API
            try {
                const tempInput = document.createElement('input');
                tempInput.value = email;
                document.body.appendChild(tempInput);
                tempInput.select();
                document.execCommand('copy');
                document.body.removeChild(tempInput);
                
                const originalText = link.textContent;
                link.textContent = 'Email copied!';
                setTimeout(() => {
                    link.textContent = originalText;
                }, 2000);
            } catch (fallbackErr) {
                console.error('Fallback copy also failed:', fallbackErr);
            }
        }
    });
});

// ===========================
// Tech Badge Interactions
// ===========================
const techBadges = document.querySelectorAll('.tech-badge');

techBadges.forEach(badge => {
    badge.addEventListener('click', () => {
        badge.style.transform = 'scale(1.2)';
        setTimeout(() => {
            badge.style.transform = 'scale(1)';
        }, 300);
    });
});

// ===========================
// Console Easter Egg
// ===========================
console.log('%c🚀 Hey there, Developer!', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%c👋 Welcome to my portfolio!', 'color: #764ba2; font-size: 16px;');
console.log('%cIf you\'re checking out the console, we should probably talk! 💬', 'color: #FF6B6B; font-size: 14px;');
console.log('%cReach out: harshil26@example.com', 'color: #667eea; font-size: 14px;');
console.log('%c\nTech Stack:', 'color: #667eea; font-size: 14px; font-weight: bold;');
console.log('- AI/ML: PyTorch, TensorFlow');
console.log('- Mobile: Flutter, Dart');
console.log('- Full Stack: Next.js, NestJS, TypeScript');
console.log('- Database: PostgreSQL, MongoDB, Prisma');

// ===========================
// GitHub Stats Error Handling
// ===========================
const statsImages = document.querySelectorAll('.stats-grid img, .streak-stats img');

statsImages.forEach(img => {
    img.addEventListener('error', function() {
        this.style.display = 'none';
        const errorMsg = document.createElement('p');
        errorMsg.textContent = 'Unable to load GitHub stats';
        errorMsg.style.color = 'var(--text-secondary)';
        errorMsg.style.textAlign = 'center';
        this.parentElement.appendChild(errorMsg);
    });
});

// ===========================
// Preloader (Optional)
// ===========================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===========================
// Performance: Lazy Loading for Images
// ===========================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
}
