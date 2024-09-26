document.addEventListener('DOMContentLoaded', (event) => {
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger);

    // Logo animation
    gsap.from('.logo', {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power3.out'
    });

    // Hero section animation
    gsap.from('#hero h1, #hero p, #hero .btn', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Animate sections on scroll
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Service items animation
    gsap.from('.service-item', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '#services',
            start: 'top 60%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });

    // Featured list animation
    gsap.from('.featured-list span', {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '#featured-on',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
        }
    });
});

// GHL Calendar Integration (placeholder)
function openGHLCalendar() {
    // This function will be updated with the actual GHL calendar link
    alert("The GHL calendar link will be integrated here.");
    // When the link is available, replace the alert with:
    // window.open('YOUR_GHL_CALENDAR_LINK', '_blank');
}

// Add event listener to the "Book a Call" button
document.querySelector('#book-call .btn').addEventListener('click', openGHLCalendar);
