var currentIndex = 0;

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

leftBtn.addEventListener("click", () => scroll('left'));
rightBtn.addEventListener("click", () => scroll('right'));

//highlight dot on creation
highlightDot()

function scroll(direction) {
    console.log(`current index: ${currentIndex}`)
    if (direction === "right") {
        console.log("scrolled right");
        currentIndex++;
        if (currentIndex > 3) {
            currentIndex = 0;
        }
    } if (direction === "left") {
        console.log("scrolled left");
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = 3;
        }
        
    } 
    translateCarouselTrack();
    highlightDot();
};

function translateCarouselTrack() {
    const carouselTrack = document.getElementById("carousel-track");
    carouselTrack.style.transform = `translateX(-${50 * currentIndex}vw)`;
}

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

const dots = document.querySelectorAll(".dot");

dots.forEach(dot => {
    dot.addEventListener("click", () => {
        currentIndex = parseInt(dot.dataset.index);
        translateCarouselTrack();
        highlightDot();
    });
});

setInterval(() => scroll("right"), 5000);