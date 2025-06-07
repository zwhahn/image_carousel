var currentIndex = 0;

const carouselTrack = document.getElementById("carousel-track");

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

leftBtn.addEventListener("click", () => scroll('left'));
rightBtn.addEventListener("click", () => scroll('right'));
// carouselTrack.style.transform = 'translateX(-50vw)';

function scroll(direction) {
    console.log(`current index: ${currentIndex}`)
    if (direction === "right") {
        console.log("scrolled right");
        currentIndex++;
        if (currentIndex > 3) {
            currentIndex = 0;
        }
        carouselTrack.style.transform = `translateX(-${50 * currentIndex}vw)`;
        return;
    } if (direction === "left") {
        console.log("scrolled left");
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = 3;
        }
        carouselTrack.style.transform = `translateX(-${50 * (currentIndex)}vw)`;
        return;
    } else {
        console.log('transformation failed');
        return;
    }
};