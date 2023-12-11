const divs = document.querySelectorAll('div')
const button = document.querySelector('button')

function logText(e){
    console.log(this.classList.value);
    //e.stopPropagation();//stop bubbling!
    //console.log(this);
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true //once is the same thing as div.removeEventListener('click', logText)
}));

button.addEventListener('click', ()=>{
    console.log('click')
}, {
    once:true
});