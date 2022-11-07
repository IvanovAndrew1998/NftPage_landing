const track = document.querySelector('.carouselTrack');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carouselNextButton');
const prevButton = document.querySelector('.carouselPrevButton');
const cardWidth = 600;
let currentCard = 2;
const scaleDifference = 0.2;
const overlapMultiplier = 2;



function ChangeCurrent() {

    let zIndexCounter = 1;
    let counter = 0;
    
    slides.forEach(slide => {
        slide.style.left = 50 * (counter++ - currentCard);
        slide.style.transform = '';
        slide.style.filter = '';
        slide.style.zIndex = zIndexCounter++;
    });


    for (let i = 0; i < slides.length; i++) {
        const element = slides[i];
        element.style.left = element.style.left -(scaleDifference * cardWidth * (i - currentCard)) * overlapMultiplier + 'px';
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

function incPlus () {
    currentCard++;
    ChangeCurrent();

}
function incMinus () {
    currentCard--;
    ChangeCurrent();

}

nextButton.addEventListener('click', incPlus);
prevButton.addEventListener('click', incMinus)


// евент листенер на кнопку. Курент + или - 1. вызов цикла для обновления.
// Если карточек мало, то через If решить проблему с отсчетом элемента в массиве.
