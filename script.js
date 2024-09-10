document.querySelectorAll('.lightbox').forEach(image => {
    image.addEventListener('click', e => {
        e.preventDefault();
        const src = image.getAttribute('href');
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox-overlay';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${src}" alt="">
            </div>
        `;
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});

// Scroll fluide pour les ancres
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

    // Observer pour déclencher l'animation d'apparition
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    // Applique l'animation aux éléments que l'on souhaite faire apparaître
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
    