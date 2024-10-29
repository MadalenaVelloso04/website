// JavaScript to observe when carousel items are in view and apply 'in-view' class
document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('.carousel-item');

  // Create intersection observer to reveal items when in view
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
          } else {
              entry.target.classList.remove('in-view');
          }
      });
  });

  // Observe each item
  items.forEach(item => {
      observer.observe(item);
  });
});
