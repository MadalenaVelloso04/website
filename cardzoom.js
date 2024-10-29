   // Get all carousel items
   const carouselItems = document.querySelectorAll('.carousel-item');
   const modal = document.getElementById('modal');
   const enlargedImage = document.getElementById('enlargedImage');
   const modalCarousel = document.getElementById('modal-carousel');

   // Function to open modal and display the enlarged image
   function openModal(imageSrc) {
       enlargedImage.src = imageSrc;
       modal.classList.add('active');
   }

   // Close the modal if clicking outside the image
   modal.addEventListener('click', (e) => {
       if (e.target === modal) {
           modal.classList.remove('active');
       }
   });

   // Function to populate the nested modal carousel
   function populateModalCarousel(projectId) {
       // Clear previous carousel items
       modalCarousel.innerHTML = '';

       // Get all items of the clicked project carousel
       const currentCarouselItems = document.querySelectorAll(`#${projectId} .carousel-item`);

       // Create a small modal card for each item
       currentCarouselItems.forEach((item) => {
           const imageSrc = item.querySelector('img').src;
           
           // Create a small modal card
           const modalCard = document.createElement('div');
           modalCard.classList.add('modal-card');
           modalCard.style.backgroundImage = `url(${imageSrc})`;
           
           // Add click event to replace enlarged image
           modalCard.addEventListener('click', () => {
               enlargedImage.src = imageSrc;
           });

           modalCarousel.appendChild(modalCard);
       });
   }

   // Add click event to each carousel item
   carouselItems.forEach(item => {
       const imageSrc = item.querySelector('img').src;
       const projectId = item.closest('section').id;

       // Open the modal on click
       item.addEventListener('click', () => {
           openModal(imageSrc);
           populateModalCarousel(projectId);
       });
   });