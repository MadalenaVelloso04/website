    // Card hover events for background overlay
    const cards = document.querySelectorAll('.card');
    const backgroundOverlay = document.querySelector('.background-overlay');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const backgroundImage = card.getAttribute('data-background');
            backgroundOverlay.style.backgroundImage = `url(${backgroundImage})`;
            backgroundOverlay.style.opacity = '1'; // Show the overlay
        });

        card.addEventListener('mouseleave', () => {
            backgroundOverlay.style.opacity = '0'; // Hide the overlay
        });
    });

