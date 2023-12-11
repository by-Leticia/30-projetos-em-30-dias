const video = document.querySelector('.player');
const OnCamera = document.querySelector('.fa-camera');
const canvas = document.querySelector('.photo');
const screenshotsContainer = document.querySelector('#screenshotsContainer');
const screenshot = document.querySelector('.fa-image')
const stop = document.querySelector('.stop');
const audio = document.querySelector('.snap');
const ctx = canvas.getContext('2d')
var strip = document.querySelector('.strip')
var picture = document.querySelectorAll('.picture')
var slide = document.querySelector('.c-carousel__slide')

function cameraAcess() {
    if (!"mediaDevices" in navigator || !"getUserMedia" in navigator.mediaDevices) {
        alert("Infelizmente seu navegador não suporta essa funcionalidade, 😞😔🙁☹️")
    }
    navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
        video.srcObject = stream;
        video.play()
    }).catch(err => {
        alert("Não foi possivel acessar a sua câmera!")
    })
    OnCamera.addEventListener('click', () => {
        const width = video.videoWidth;
        const height = video.videoHeight;
        canvas.width = width;
        canvas.height = height;

        return setInterval(() => {
            ctx.drawImage(video, 0, 0, width, height);
        }, 16)
    })
}
cameraAcess()

function tirandoFoto() {
    screenshot.addEventListener('click', function () {
        audio.play();
        const img = document.createElement('img')
        img.src = canvas.toDataURL('img/png')
        //img.innerHTML = `<img src="${data}" class="img"/>`;
        screenshotsContainer.prepend(img)
        img.classList.add('picture')
        //img.style.backgroundImage()
        slide.insertBefore(img, slide.lastChild)
    })
}
tirandoFoto()

var prev = document.querySelector('.gallery__prev');
var next = document.querySelector('.gallery__next');
var hope = document.getElementsByTagName('img')
/*function carousel() {

    // o stream dele é o meu strip
    // o items dele é o meu picture
    next.addEventListener('click', function () {
        console.log("opa")
        strip.insertBefore(hope[hope.length - 1], hope[0]);
    });

    prev.addEventListener('click', function () {
        console.log("epa")
        strip.appendChild(hope[0]);
    })
}
carousel();*/

var $simpleCarousel = document.querySelector(".js-carousel--simple")

new Glider($simpleCarousel, {
    slidesToShow: 2,
    slidesToScroll: 2,
    draggable: true,
    dots: ".js-carousel--simple-dots",
    arrows: {
        prev: ".js-carousel--simple-prev",
        next: ".js-carousel--simple-next",
    },
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            },
        },
    ],
});





