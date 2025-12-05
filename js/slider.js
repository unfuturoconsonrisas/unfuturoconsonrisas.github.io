const sliderTrack = document.getElementById('sliderTrack');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function moveSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = slides.length - 1;
    if (currentIndex >= slides.length) currentIndex = 0;
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Opcional: autoplay automático cada 4 segundos
setInterval(() => moveSlide(1), 4000);
