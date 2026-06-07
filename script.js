document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.animate-me');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            card.animate([
                { transform: `perspective(1000px) rotateX(${-y * 0.05}deg) rotateY(${x * 0.05}deg) scale(1.02)` }
            ], { duration: 100, fill: 'forwards' });
        });

        card.addEventListener('mouseleave', () => {
            card.animate([
                { transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)' }
            ], { duration: 500, fill: 'forwards', easing: 'ease-out' });
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'd' || e.key.toLowerCase() === 'в') {
            document.body.classList.toggle('dark-mode');
        }
        
        if (e.key === 'ArrowRight') {
            const next = document.body.getAttribute('data-next');
            if (next) window.location.href = next;
        }
        
        if (e.key === 'ArrowLeft') {
            const prev = document.body.getAttribute('data-prev');
            if (prev) window.location.href = prev;
        }

        const heroTitle = document.querySelector('.animate-title');
        if (heroTitle && e.key === 'Enter') {
            heroTitle.animate([
                { transform: 'scale(1)', filter: 'blur(0px)' },
                { transform: 'scale(1.1)', filter: 'blur(2px)', offset: 0.5 },
                { transform: 'scale(1)', filter: 'blur(0px)' }
            ], { duration: 400, easing: 'ease-in-out' });
        }
    });
});