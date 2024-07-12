let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    
    slides.forEach((slide) => slide.style.display = 'none');
    dots.forEach((dot) => dot.classList.remove('active'));
    
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');
}

const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => currentSlide(index + 1));
});

setInterval(() => {
    changeSlide(1);
}, 2000);

//////////////////////// Swipe Function ////////////////////////

let touchstartX = 0;
let touchendX = 0;

const banner = document.querySelector('.banner');

banner.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

banner.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    if (touchendX < touchstartX) {
        changeSlide(1);
    }
    if (touchendX > touchstartX) {
        changeSlide(-1);
    }
}
