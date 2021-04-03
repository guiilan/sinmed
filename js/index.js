let time=2000,
    curreintImageIndex = 0
    images = document
                .querySelectorAll('#slider img')
    max = images.length;


function nextImage() {
    images[curreintImageIndex].classList.remove("selected");
    curreintImageIndex++;

    if(curreintImageIndex >= max)
        curreintImageIndex = 0

    images[curreintImageIndex].classList.add("selected")
}   

function start(){
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener('load', start)