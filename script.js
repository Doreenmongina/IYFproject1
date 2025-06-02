document.addEventListener("DOMContentLoaded", function () {
    // Accordion functionality for FAQ
    document.querySelectorAll('.accordion-header').forEach(header => {
        header.addEventListener('click', function () {
            // Toggle active class
            this.classList.toggle('active');
            const content = this.nextElementSibling;

            // Toggle maxHeight 
            if (this.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
                // Change + to -
                this.innerHTML = this.innerHTML.replace('+', '−');
            } else {
                content.style.maxHeight = null;
                // Change - to +
                this.innerHTML = this.innerHTML.replace('−', '+');
            }
        });
    });

    // Hamburger menu functionality
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        // Prevent body scroll when menu is open
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
    });

    // Close menu when nav link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (
            navLinks.classList.contains('active') &&
            !hamburger.contains(e.target) &&
            !navLinks.contains(e.target)
        ) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Close menu on window resize if mobile menu is open and screen becomes larger
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

let currentIndex = 1; // Start with second card as active
const cards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');

function showTestimonials() {
    cards.forEach((card, index) => {
        card.classList.remove('active', 'secondary');
        card.style.display = 'none';
        
        if (index === currentIndex) {
            card.classList.add('active');
            card.style.display = 'block';
        } else if (index === currentIndex - 1 || index === currentIndex + 1) {
            card.classList.add('secondary');
            card.style.display = 'block';
        }
    });
}

function nextTestimonial() {
    currentIndex = (currentIndex + 1) % cards.length;
    showTestimonials();
}

function prevTestimonial() {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showTestimonials();
}

nextBtn.addEventListener('click', nextTestimonial);
prevBtn.addEventListener('click', prevTestimonial);

// Initialize
showTestimonials();
