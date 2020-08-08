const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
// const auto = false;
const auto = true;
const intervalTime = 5000;
let slideInterval;

const nextSlide = () => {
    //the current element
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check for next side
    if (current.nextElementSibling) {
        //add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        //else add the current to the current element
        //in an array the first elent is zero
        slides[0].classList.add('current');

    }

    setTimeout(() => current.classList.remove('current'));
}


const prevSlide = () => {
    //the current element
    const current = document.querySelector('.current');
    //remove current class
    current.classList.remove('current');
    //check for previous side
    if (current.previousElementSibling) {
        //add current to previous sibling
        current.previousElementSibling.classList.add('current');
    } else {
        //else add the current to the current element
        //in an array the first elent is zero
        //add current to last
        //slides.length will get total sibling and minus 1 to get the last element of the array
        slides[slides.length - 1].classList.add('current');

    }

    setTimeout(() => current.classList.remove('current'));
}




//our event

next.addEventListener('click', e => {
    nextSlide();
    //clear the setinterval
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }

});

prev.addEventListener('click', e => {
    prevSlide();
    //clear the setinterval 
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});


if (auto) {
 