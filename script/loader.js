const player = new Audio;
const host = location.origin;
let danceBeanOn = false;
let shakeSectionOn = false;
player.addEventListener('ended', () => {
    danceBeanOn = false;
    shakeSectionOn = false;
    lockAnimation = false;
    console.log('ACABOU JESSICA?');
});

//Instânciando a API de audio
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

//Relaciona uma fonte de audio para API.
let source = audioCtx.createMediaElementSource(player);

//Crinado o analizador
let analyser = audioCtx.createAnalyser();

//Direcionando fluxo fonte para Analyser
source.connect(analyser);

//Direcionando fluxo Analyser para saída
analyser.connect(audioCtx.destination);

//configuração de fluxo Analyser
analyser.fftSize = 1024;
var bufferLength = analyser.frequencyBinCount;
var dataArray = new Uint8Array(bufferLength);


function danceBean() {
    let bean = document.querySelectorAll('figure');

    for (let i = 0; i < bean.length; i++) {
        setTimeout(function () {
            analyser.getByteTimeDomainData(dataArray);

            /* console.log('rodando ' + i); */
            bean[i].style.animationDuration = `${dataArray[i] / 128.0 * 2}s`;

            /* console.log(dataArray[i] / 129.0); */
            if (danceBeanOn) { danceBean() } else {
                for (let i = 0; i < bean.length; i++) {
                    bean[i].style.animationDuration = `0s`;
                }
            }
        }, dataArray[i] / 128.0 * 1000);
    }


}

function danceSection() {
    let h = document.querySelectorAll('section');
    document.querySelector('body').style.backgroundImage = "url('image/o-o/mother.jpg')";
    for (let i of h) {
        i.style.animationDuration = '.2s';
    }

    setInterval(function () {
        if (!shakeSectionOn) {
            document.querySelector('body').style.backgroundImage = '';
            for (let i of h) {
                i.style.animationDuration = '0s';
            }
            clearInterval(this);
        }
    }, 1000);
}



const phar = [
    'NÃO ME CLIQUE!',
    'Ok. Cafezinho a essas horas pode faz mal.',
    'Press hold "ALT" and type: G',
    'Eu avisei!',
    'Acho que double-click faz algo. Mas não aqui.',
    'Leia o pop up',
    'ALT + COMANDO executa funções secretas. Com o tempo eles aparecerão<br> ex: ALT + HARRY',
    'Determinados clicks, certos efeitos.',
    'Não devo coxinha a Ieda',
    'Se o site rodar sem para YOU LOSER!',
    'Enjoy',
    'Now I will be undefined till the end'
];
let lcx = false;
document.addEventListener('DOMContentLoaded', () => {
    const cx = document.querySelector('.chicoxavier');
    const oi = document.querySelector('.output');

    let cxi = -1;
    let cxil = true;
    cx.addEventListener('click', () => {
        if (!lcx) {
            lcx = true;
            cxi++;
            oi.innerHTML = (`${phar[cxi]}`);
            (cxi == 5) ? alertMsg('TURORIAL', 'Mensagens ocultas aparecem aqui!') : null;
            setTimeout(function () {
                lcx = false
            }, 2000);
            (cxi > phar.length)? cxil = false: null;
        } else if (cxil == true) {
            oi.innerHTML += (`<br> KEEP CALM AND READ THE MESSAGES!!!`);
        }
    });


});

function toasty(title) {
    if (unlocked.length > 0) {
        let time = 1;
        player.crossOrigin = 'anonymous';
        player.src = host + '/data/toasty.mp3';
        document.querySelector('.combo').style.animation = `toasty ${2}s`;
        let index = randomInt(0, unlocked.length);
        alertMsg(title, unlocked[index]);
        unlocked.splice(index, 1);
        player.play();
        setTimeout(() => {
            document.querySelector('.combo').style.animation = '';
        }, time * 1500);
    }
}


function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    val = Math.floor(Math.random() * (max - min)) + min;
    return val;
}

let unlocked = [
    'Run: HARRY',
    'Run: DEV',
    'Run: KNUCKLES',
    'Run: 180DEG',
    'Quantos easter egg você consegue achar?',
    'Run: IGOTGUN'
]
/* Analisador de KeyDown */
const eKP = {
    G: function () {
        shakeSection('/data/gemidao.mp3');
    },
    HARRY: function () {
        playMusic('/data/harry-intro.mp3');
    },
    EH: function () {
        let s = document.querySelectorAll('section')[0];
        let bkpImg = s.style.backgroundImage;
        s.style.backgroundImage = `url('/image/o-o/fds.jpg')`;
        setTimeout(() => {
            s.style.backgroundImage = `${bkpImg}`;
        }, 5000);
    },
    DEV: function () {
        access('https://github.com/wesleyBU');
    },
    HESOYAM: function () {
        playMusic('/data/gtasa.mp3');
        document.querySelector('h2').style.fontFamily = 'pricedown bl';
        document.querySelector('h1').style.fontFamily = 'pricedown bl';
        setTimeout(function () {
            document.querySelector('h2').style.fontFamily = 'pt serif';
            document.querySelector('h1').style.fontFamily = 'pt serif';
        }, 18000);
    },
    '180DEG': function () {
        document.querySelector('body').style.transform = 'rotate(180deg)';
    },
    '90DEG': function () {
        document.querySelector('body').style.transform = 'rotate(90deg)'
    },
    '0DEG': function () {
        document.querySelector('body').style.transform = 'rotate(0deg)';
    },
    '360DEG': function () {
        document.querySelector('body').style.transform = 'rotate(360deg)';
        document.querySelector('body').style.transitionDuration = '0s';
        setTimeout(() => {
            document.querySelector('body').style.transform = 'rotate(0deg)';
            document.querySelector('body').style.transitionDuration = '';
        }, 1200);
    },
    KNUCKLES: function () {
        axios.get('/data/file.dat')
            .then(function (response) {
                const blob = new Blob([response.data], {
                    type: 'text/plain',
                });
                const url = window.URL.createObjectURL(blob);
                let l = document.createElement('a');
                let i = document.createElement('li');
                l.setAttribute('href', url);
                /*                 l.setAttribute('target','_blank'); */
                l.classList.add('link-nav-top');
                l.innerText = 'EASTER EGG';
                i.appendChild(l);
                document.querySelector('.navbar').appendChild(i);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
    COMANDO: function () {
        alertMsg('TUTORIAL', '"ALT + COMANDO" executa funções secretas')
    },
    IGOTAGUN: function () {
        playMusic('/data/gtasa.mp3');
        document.querySelector('h2').style.fontFamily = 'pricedown bl';
        document.querySelector('h1').style.fontFamily = 'pricedown bl';
        let bkph1 = document.querySelector('h1').innerHTML;
        let bkph2 = document.querySelector('h2').innerHTML;
        document.querySelector('h1').innerHTML = "RESPECT +";
        document.querySelector('h2').innerHTML = "RESPECT +";
        setTimeout(function () {
            document.querySelector('h2').style.fontFamily = 'pt serif';
            document.querySelector('h1').style.fontFamily = 'pt serif';
            document.querySelector('h1').innerHTML = bkph1;
            document.querySelector('h2').innerHTML = bkph2;
        }, 18000);
    }
}

let codeKey;
let key = '';
let keyArray = []
let cmdKey = '';
let maxCombo = 20;
document.addEventListener('keydown', function (event) {
    event.preventDefault();

    codeKey = event.keyCode;
    key = String.fromCharCode(codeKey);
    keyArray.push(key);
    if (event.altKey && event.keyCode != 18) {
        cmdKey = cmdKey + key;
        eKP[cmdKey]();
    } else {
        cmdKey = '';
        eKP[key] ? eKP[key]() : null;
        key = '';
    }
    if (keyArray.length >= maxCombo) {
        toasty('Do you know?');
        keyArray = [];
        maxCombo = randomInt(10, 15);
    }
    /* console.log(event); */
});