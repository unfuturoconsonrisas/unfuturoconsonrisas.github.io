// hero.js
document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll(".bg-slide");
    let index = 0;

    function nextSlide() {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    // Cambia cada 4 segundos (4000 ms)
    setInterval(nextSlide, 4000);

});
