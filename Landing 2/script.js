const track = document.querySelector('.carouselTrack');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carouselNextButton');
const prevButton = document.querySelector('.carouselPrevButton');
let cardWidth = document.querySelector('.carouselCard').offsetWidth;
let currentCard = 2;
const scaleDifference = 0.2;
const overlapMultiplier = 2;
const carouselTrack = document.querySelector('.carouselTrack');
incCount = 0;
const hamburger = document.querySelector(".hamburgerImage");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const screenWidth = document.body.clientWidth;
const header = document.querySelector("header");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");
})
hamburgerMenu.addEventListener("click", () => {
    hamburger.classList.remove("active");
    hamburgerMenu.classList.remove("active");
});

header.style.width = screenWidth + 'px';

function ChangeCurrent() {

    let zIndexCounter = 1;
    let counter = 0;
    
    slides.forEach(slide => {
        slide.style.left = 50 * (counter++ - currentCard) + 'px';
        slide.style.transform = '';
        slide.style.filter = '';
        slide.style.zIndex = zIndexCounter++;
    });


    for (let i = 0; i < slides.length; i++) {
        const element = slides[i];
        const leftCoef = (scaleDifference * cardWidth) * overlapMultiplier;
        const leftComp = 2.1;
        element.style.left = Number(element.style.left.slice(0,-2))  - leftCoef*(i - currentCard) - leftCoef*incCount*leftComp + 'px';
        carouselTrack.style.left = (scaleDifference * cardWidth * (i - currentCard)) * overlapMultiplier + 'px';
        if (i != currentCard) {
            element.style.transform = 'scale(0.8)';
            element.style.zIndex = -Math.abs(currentCard - i);
        }

        if (Math.abs(i - currentCard) > 1) {

            element.style.filter = 'blur(7.5px)'
        }
    }
    console.log(currentCard);
}
ChangeCurrent();

function inc () {
    if (currentCard < slides.length - 1) {
        currentCard++;
        incCount++;
        ChangeCurrent();
    }
}
function Deinc () {
    if (currentCard > 0) {
        currentCard--;
        incCount--;
        ChangeCurrent();
    }
}



nextButton.addEventListener('click', inc);
prevButton.addEventListener('click', Deinc)

header.style.width = screenWidth + 'px';

// евент листенер на кнопку. Курент + или - 1. вызов цикла для обновления.
// Если карточек мало, то через If решить проблему с отсчетом элемента в массиве.
