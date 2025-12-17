document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.project-card, section h2');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add('active', 'reveal');
            } else {
                element.classList.add('reveal'); // Ensure class exists
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    // Trigger once on load
    revealOnScroll();

    // 2. Smooth Scroll para Links Internos (Polyfill simples para browsers antigos)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Navbar Background Change on Scroll
    const navbar = document.querySelector('nav div');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-surface-glass', 'shadow-lg');
            navbar.classList.remove('bg-transparent');
        } else {
            // Opcional: Se quiser transparente no topo absoluto
            // navbar.classList.remove('bg-surface-glass', 'shadow-lg');
        }
    });
});