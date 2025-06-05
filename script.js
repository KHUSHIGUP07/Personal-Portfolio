// Scroll animation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.large-section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.85;

        if (sectionTop < triggerPoint) {
            section.style.transform = 'translateY(0)';
            section.style.opacity = '1';
        }
    });
});
