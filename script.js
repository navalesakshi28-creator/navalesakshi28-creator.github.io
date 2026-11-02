// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-link');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }

    // Scroll Spy for Navbar Active State
    const sections = document.querySelectorAll('section, header');
    window.addEventListener('scroll', () => {
        let current = '';
        const scrollPosition = window.pageYOffset + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// Contact Form Handler
function handleContactSubmit(event) {
    event.preventDefault();
    const feedback = document.getElementById('form-feedback');
    const name = document.getElementById('name').value.trim();

    if (feedback) {
        feedback.textContent = `Thank you, ${name}! Your message has been received. I will get back to you shortly.`;
        feedback.className = 'form-feedback success';
        document.getElementById('contact-form').reset();
    }
}
