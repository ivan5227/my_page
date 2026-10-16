const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentSlideIndex = 0;

function updateSlide(newIndex) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[newIndex].classList.add('active');
}

prevBtn.addEventListener('click', function() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateSlide(currentSlideIndex);
});

nextBtn.addEventListener('click', function() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateSlide(currentSlideIndex);
});
