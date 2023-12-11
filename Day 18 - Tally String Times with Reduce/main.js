// jeito dele: const nodesTime = Array.from(document.querySelectorAll("[data-time"));

const nodesTime = [...document.querySelectorAll("[data-time")];
const segundos = nodesTime
    .map(node => node.dataset.time)
    .map(codeTime =>{
        const [mins, secs] = codeTime.split(':').map(parseFloat);
        return (mins * 60) + secs
        console.log(mins, secs)
    })
    .reduce((total, anotherSegundos) => total + anotherSegundos);

    let segundosEsquerda = segundos;
    const horas = Math.floor(segundosEsquerda/3600)
    segundosEsquerda = segundosEsquerda % 3600

    const minutos = Math.floor(segundosEsquerda /60)
    segundosEsquerda = segundosEsquerda % 60

    console.log(horas, minutos, segundosEsquerda)