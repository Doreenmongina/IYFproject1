

// Simple accordion functionality
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        
        // Close all other accordion items and reset their symbols
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {
                item.style.maxHeight = null;
                item.previousElementSibling.querySelector(':after').textContent = '+';
            }
        });

        // Toggle the current accordion item
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            header.querySelector(':after').textContent = '+';
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            header.querySelector(':after').textContent = '-';
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // Select all accordion headers
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    // Loop through each header and attach click event
    accordionHeaders.forEach((header) => {
        header.addEventListener("click", () => {
            header.classList.toggle("active");
            const content = header.nextElementSibling;
            if (header.classList.contains("active")) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = 0;
            }
        });
    });
});

    // Accordion functionality for FAQ
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            
            if (this.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = 0;
            }
        });
    });

// Get hamburger and nav elements
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('nav-links');
        const navItems = document.querySelectorAll('.nav-links a');

        // Toggle mobile menu
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
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
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
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
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

