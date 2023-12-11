/*const texto = document.querySelector('textarea')
const select = document.querySelector('select') 
const speak = document.querySelector('#speak')
const voices = window.speechSynthesis?.getVoices()
const languages = voices?.find((voice) => /select/.test(voice.lang))

const utterance = new SpeechSynthesisUtterance()

utterance.text = texto.value
utterance.lang  = 'pt-BR'
utterance.voice = languages
utterance.rate = 0.8

function acao(){
   speechSynthesis.speak(utterance)
}
speak.addEventListener('click', acao )*/

const msg = new SpeechSynthesisUtterance();
let voices = [];
const select = document.querySelector('[name="voice"]');
const que = document.querySelectorAll('[type="range"], [name="text"]');
const speak = document.querySelector('#speak');
const stop = document.querySelector('#stop');
msg.text = document.querySelector('[name="text"]').value;

function populateVoices(){
    voices = this.getVoices();
    select.innerHTML = voices
        //.filter(voice => voice.lang.includes('en')) para filtrar as vozes por um idioma especifico
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join();
}
function setVoices(){
   msg.voice = voices.find(voice => voice.name === this.value)
   toggle()
}
function toggle(startOver = true){
    speechSynthesis.cancel()
    if(startOver){
        speechSynthesis.speak(msg)
    }
}
function setOption(){
    console.log(this.name, this.value);
    msg[this.name] = this.value;
    toggle();
}
speechSynthesis.addEventListener('voiceschanged', populateVoices)
select.addEventListener('change', setVoices)
que.forEach(option => option.addEventListener('change', setOption));    
speak.addEventListener('click', toggle);
stop.addEventListener('click', ()=>toggle(false))
