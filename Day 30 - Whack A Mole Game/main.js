const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreBoard = document.querySelector('.score');
let time = document.querySelector('#segundos')
let lastHole;
let timeUp = false;
let score = 0;
var contador = 10

function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

//math.round é só para dar um número mais arredondado, vulgo bonito.    

function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    //eu entendi como essa function funciona mas preciso da uma olhada nessa const idx
    const hole = holes[idx];
    if (hole === lastHole) {
        console.log('duplicate hole')
        return randomHole(holes)
    }
    lastHole = hole;
    return hole
}

function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up')
        if (!timeUp) peep();
    }, time);
}

// só quando o timeout começar que deve chamar o peep e não ao contrario (talvez um if ternario resolva?????)
// mete console log no peep e no start time 
//thamis acha que estamamos chamando o start time em uma hora diferente do setTimeout

function startGame() {
    scoreBoard.textContent = 0;
    timeUp = false
    score = 0
    peep()
    setTimeout(() => timeUp = true, 10000);
}

function whack(e) {
    if (!e.isTrusted) return; //cheater!
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
}

function startTimer(duration, mostrador) {
    var timer = duration, minutes, seconds;
    set = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        mostrador.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }

        minutes + ':' + seconds == '00' + ':' + '00' && clearInterval(set)

    }, 990);
}

function equal() {
    setTimeout(()=>{
        startGame()
    },1200)
}

moles.forEach(mole => mole.addEventListener('click', whack));
