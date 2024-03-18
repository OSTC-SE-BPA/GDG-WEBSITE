const switchMs = 5000;

let orderSlideshowDots;
let orderSlideshowImgs;
let activeSlide = 0;

window.onload = () => {
    orderSlideshowDots = document.getElementById("order-slideshow-dots").children;
    orderSlideshowImgs = document.getElementById("order-slideshow-imgs").children;

    const leftArrow = document.getElementById("order-slideshow-left-arrow");
    const rightArrow = document.getElementById("order-slideshow-right-arrow");

    let lastChange = new Date().getTime();

    leftArrow.addEventListener("click", (e) => {
        switchSlide(-1);

        lastChange = new Date().getTime();
    });

    rightArrow.addEventListener("click", (e) => {
        switchSlide();

        lastChange = new Date().getTime();
    });

    setInterval(() => {
        const currentTime = new Date().getTime();

        if (currentTime >= lastChange + switchMs) {
            switchSlide();

            lastChange = new Date().getTime();
        }
    }, 100);
}

const switchSlide = (direction = 1) => {
    const currentSlideshowImg = orderSlideshowImgs[activeSlide];
    const currentSlideshowDot = orderSlideshowDots[activeSlide];

    currentSlideshowImg.classList.remove("active-slideshow-img");
    currentSlideshowDot.classList.remove("active-slideshow-dot");

    activeSlide += 1 * direction;

    if (activeSlide > orderSlideshowImgs.length - 1) {
        activeSlide = 0;
    } else if (activeSlide < 0) {
        activeSlide = orderSlideshowImgs.length - 1;
    }

    const newSlideshowImg = orderSlideshowImgs[activeSlide];
    const newSlideshowDot = orderSlideshowDots[activeSlide];

    newSlideshowImg.classList.add("active-slideshow-img");
    newSlideshowDot.classList.add("active-slideshow-dot");
}