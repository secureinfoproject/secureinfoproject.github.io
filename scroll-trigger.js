
document.addEventListener('DOMContentLoaded', () => {
    const eventTarget = document.getElementById('eventTarget');
    const otherElement = document.getElementById('otherElement');

    function handleScroll() {
        const rect = eventTarget.getBoundingClientRect();
        const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);

        if (rect.top >= 0 && rect.bottom <= viewHeight) {
            otherElement.classList.add('dynamic-text');
        } else {
            otherElement.classList.remove('dynamic-text');
        }
    }

    window.addEventListener('scroll', handleScroll);
});
