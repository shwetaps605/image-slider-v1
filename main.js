const allImages = document.querySelectorAll('.slide');
const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');
const autoPlay = true;
const intervalTime = 4000;
let playInterval;

const nextImage = () => {
    const currentImage = document.querySelector('.current')
    currentImage.classList.remove('current')
    if(currentImage.nextElementSibling) {
        currentImage.nextElementSibling.classList.add('current')
    } else {
        allImages[0].classList.add('current')
    }
}

const prevImage = () => {
    const currentImage = document.querySelector('.current')
    currentImage.classList.remove('current')
    if(currentImage.previousElementSibling){
        currentImage.previousElementSibling.classList.add('current')
    } else {
        allImages[allImages.length-1].classList.add('current')
    }
}

nextButton.addEventListener('click', e => {
    nextImage()
    if(autoPlay) {
        clearInterval(playInterval)
        playInterval = setInterval(nextImage,intervalTime)
    }
})

prevButton.addEventListener('click', e => {
    prevImage()
    if(autoPlay) {
        clearInterval(playInterval)
        playInterval = setInterval(nextImage,intervalTime)
    }
})

if(autoPlay){
    playInterval = setInterval(nextImage,intervalTime)
}