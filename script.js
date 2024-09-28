document.addEventListener('DOMContentLoaded', (event) => {
    // Animate elements on page load
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // Hamburger menu functionality
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
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

    // Book a call button functionality
    const bookCallBtn = document.getElementById('book-call-btn');
    if (bookCallBtn) {
        bookCallBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // Replace with actual booking logic or link to booking system
            alert('Booking functionality will be implemented here.');
        });
    }
});

function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in, .slide-in');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = (elementTop < window.innerHeight) && (elementBottom >= 0);
        if (isVisible) {
            element.classList.add('active');
        }
    });
}
