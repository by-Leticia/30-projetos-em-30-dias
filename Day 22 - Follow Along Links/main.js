const a = document.querySelectorAll('a')

function vocemeodeia(){
    this.id = 'objective'
    
}
function vocemeama(){
    this.id = ''
}

a.forEach(a => a.addEventListener('mouseover', vocemeodeia))
a.forEach(a => a.addEventListener('mouseleave', vocemeama))

