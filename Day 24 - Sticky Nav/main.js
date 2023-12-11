const nav = document.querySelector('#main')
let topOfNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav)

const triggers = document.querySelectorAll('.cool > li')
console.log(triggers)
const background = document.querySelector('.dropdownBackground')

function handleEnter() {
    this.classList.add('trigger-enter')
    setTimeout(() => {
        if (this.classList.contains('trigger-enter')) {
            this.classList.add('trigger-enter-active')
        }//have another way go see one day
    }, 150);
    background.classList.add('open')
// precisa ser adicionada uma validação (parametro e resposta do if)
    const dropdown = this.querySelector('.dropdown')
    const dropdownCoords = dropdown.getBoundingClientRect()
    const navCoords = nav.getBoundingClientRect()

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('width', `${coords.width}px`)
    background.style.setProperty('height', `${coords.height}px`)
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`)

    console.log(this)
}
function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active')
    background.classList.remove('open')
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))
