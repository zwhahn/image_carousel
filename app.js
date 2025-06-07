var currentIndex = 0;

const carouselTrack = document.getElementById("carousel-track");

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

leftBtn.addEventListener("click", () => scroll('left'));
rightBtn.addEventListener("click", () => scroll('right'));
// carouselTrack.style.transform = 'translateX(-50vw)';
highlightDot()

function scroll(direction) {
    console.log(`current index: ${currentIndex}`)
    if (direction === "right") {
        console.log("scrolled right");
        currentIndex++;
        if (currentIndex > 3) {
            currentIndex = 0;
        }
        carouselTrack.style.transform = `translateX(-${50 * currentIndex}vw)`;
    } if (direction === "left") {
        console.log("scrolled left");
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = 3;
        }
        carouselTrack.style.transform = `translateX(-${50 * (currentIndex)}vw)`;
    } 
    highlightDot()
};

function highlightDot() {
    const carouselDots = document.querySelector('.carousel-dots');
    const dots = carouselDots.children;

    for (let i = 0; i < dots.length; i++) {
        dots[i].style.backgroundColor = "lightgray"
    }

    const selector = `:nth-child(${currentIndex+1})`;
    
    const selectedDot = carouselDots.querySelector(selector);
    selectedDot.style.backgroundColor = "black"
}