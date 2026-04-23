function zoom(el) {
    if (el.classList.contains('is-fullscreen')) {
        el.style.transform = '';
        el.classList.remove('is-fullscreen');
        return;
    }
    const activeImage = document.querySelector('.is-fullscreen');
    if (activeImage) {
        return;
    }

    const rect = el.getBoundingClientRect();
    
    const screenCenterX = window.innerWidth / 4;
    const screenCenterY = window.innerHeight / 2;

    const elementCenterX = rect.left + rect.width / 2;
    const elementCenterY = rect.top + rect.height / 2;

    const xMove = screenCenterX - elementCenterX;
    const yMove = screenCenterY - elementCenterY;

    el.style.transform = `translate(${xMove}px, ${yMove}px) scale(3)`;
    el.classList.add('is-fullscreen');
}