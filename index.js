// Nav scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Experience tabs
const tabButtons = document.querySelectorAll('.tab-button');
const jobs = document.querySelectorAll('.job');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        // Update active tab
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Show selected job
        jobs.forEach(job => {
            job.classList.remove('active');
            if (job.id === tabId) {
                job.classList.add('active');
            }
        });
    });
});

// Scroll animations
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

fadeElements.forEach(element => {
    observer.observe(element);
});

// Mouse following light effect
const cursorLight = document.getElementById('cursor-light');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateCursorLight() {
    // Smooth following effect
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;
    
    cursorLight.style.transform = `translate(${currentX}px, ${currentY}px)`;
    requestAnimationFrame(updateCursorLight);
}

updateCursorLight();

// Show light only when mouse moves
let timeout;

document.addEventListener('mousemove', () => {
    cursorLight.style.opacity = '0.8';
    clearTimeout(timeout);
    
    timeout = setTimeout(() => {
        cursorLight.style.opacity = '0';
    }, 5000);
});

// Hide cursor light on mobile
window.addEventListener('resize', () => {
    if (window.innerWidth <= 768) {
        cursorLight.style.display = 'none';
    } else {
        cursorLight.style.display = 'block';
    }
});

// Initial check for mobile
if (window.innerWidth <= 768) {
    cursorLight.style.display = 'none';
}
