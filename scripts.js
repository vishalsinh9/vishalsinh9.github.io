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
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('application-form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent default form submission

        // Perform form validation
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const resume = document.getElementById('resume').value.trim();

        if (!name || !email || !resume) {
            alert('Please fill in all required fields.');
            return;
        }

        // If all fields are filled, proceed with form submission
        const formData = new FormData(this);
        // Send formData to server using fetch or AJAX
        console.log("Form submitted!", formData);

        // Optional: Clear form fields after submission
        form.reset();
    });
});
