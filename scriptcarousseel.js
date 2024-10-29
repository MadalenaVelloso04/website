document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector('.scroll-container');
    let startX;

    // Touch support for mobile and touchpad
    scrollContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX; // Get the initial touch position
    });

    scrollContainer.addEventListener('touchmove', (e) => {
        const deltaX = startX - e.touches[0].clientX; // Calculate the distance moved
        // Only allow sliding if deltaX is significant
        if (Math.abs(deltaX) > 30) { // Adjust the threshold as needed
            e.preventDefault(); // Prevent the default touch action
            scrollContainer.scrollBy({
                left: deltaX, // Scroll based on touch movement
                behavior: 'smooth' // Smooth scrolling
            });
            startX = e.touches[0].clientX; // Update the starting position for the next move
        }
    });


})



