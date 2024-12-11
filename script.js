document.addEventListener('DOMContentLoaded', function() {
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealOnScroll = () => {
        scrollRevealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.8) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
});
