
document.addEventListener("DOMContentLoaded", function() {
    const card6 = document.getElementById("card-6");
    const card6Video = document.getElementById("card-6-video");

    card6.addEventListener("mouseenter", () => {
        card6Video.play(); // Play video when mouse enters
        card6Video.style.display = "block"; // Show video
        document.body.classList.add("video-hover"); // Optional: add class to body for other effects
    });

    card6.addEventListener("mouseleave", () => {
        card6Video.pause(); // Pause video when mouse leaves
        card6Video.style.display = "none"; // Hide video
        document.body.classList.remove("video-hover"); // Optional: remove class from body
    });
});
