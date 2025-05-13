// Select DOM elements
const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.carousel-img');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Track current index
let currentIndex = 0;

// Function to update the carousel position
function updateCarousel() {
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Event listeners for navigation buttons
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length; // loop to first image
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length; // loop to last image
  updateCarousel();
});

// Optional: Auto-slide every 5 seconds
// setInterval(() => {
//   nextBtn.click();
// }, 5000);
