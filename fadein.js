document.addEventListener("DOMContentLoaded", () => {
    const paragraph = document.querySelector('.fade-in');
    setTimeout(() => {
        paragraph.classList.add('visible');
    }, 1000); // 1000ms = 1 seconds delay
});
