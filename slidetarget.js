document.addEventListener('DOMContentLoaded', () => {
    const target = document.getElementById('dynamic-text');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                target.classList.add('visible');
                observer.unobserve(target); // Optional: stop observing after the animation starts
            }
        });
    });

    observer.observe(target);
});
