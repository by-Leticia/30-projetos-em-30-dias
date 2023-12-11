const allBar = document.querySelector('.speed')
const color = document.querySelector('.speed-bar')
const video = document.querySelector('.flex')

//let colorHeight = window.getComputedStyle(color, null).getPropertyValue('height')

function moveBar(e) {
    const y = e.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4;
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;
    color.style.height = height
    color.textContent = playbackRate.toFixed(2) + '×'
    video.playbackRate = playbackRate

}

allBar.addEventListener('mousemove', moveBar)