document.addEventListener('DOMContentLoaded', (event) => {
    // Animate logo
    document.querySelector('.logo').classList.add('fade-in');

    // Animate sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.classList.add('fade-in-up');
        section.style.animationDelay = `${index * 0.2}s`;
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('fade-in-up');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial check
});

// Placeholder function for booking a call
function bookCall() {
    // Replace this with actual booking logic when available
    alert('Booking feature coming soon!');
}

// Add event listener to the "Book a Call" button
document.addEventListener('DOMContentLoaded', (event) => {
    const bookButtons = document.querySelectorAll('.btn');
    bookButtons.forEach(button => {
        button.addEventListener('click', bookCall);
    });
});
