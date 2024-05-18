// JavaScript for basic functionality on Vishalsinh website

document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example: Toggle mobile menu
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('nav ul');
    menuBtn.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    // Example: Form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        // Process form data here, like sending it to a server via AJAX
        console.log("Form submitted!", formData);
    });
});
