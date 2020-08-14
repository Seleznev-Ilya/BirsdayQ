let documentWidth = document.documentElement.clientWidth, time;
window.onresize = function () {
    if (time)
        clearTimeout(time);
    time = setTimeout(function () {
        if (documentWidth !== document.documentElement.clientWidth) {
            location.reload();
        }
    }, 123);
};
function soundClick() {
    let audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'audio/start.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}
soundClick();
let progressBur = document.querySelector('.progress_bur');

let numberQuestion = document.querySelector('.number_question');
let circle = document.querySelector('.circle');
let circleH2 = document.querySelector('.circle h2');
let circle__sub = document.querySelector('.circle__sub');
let circle__subH3 = document.querySelector('.circle__sub h3');

let question = document.querySelector('.question');
let questionText = document.querySelector('.question p');

let helpText = document.querySelector('.help_text');
let locker = document.querySelector('.locker');
let lockerP = document.querySelector('.lockerP');
let lockerWrapper = document.querySelector('.locker__wrapper');
let helpTextP = document.querySelector('.help_text .locker__wrapper p');
let spanWrapper = document.querySelector('.spanWrapper');

let navigation = document.querySelector('.navigation');
let mainContainer = document.querySelector('.main__container');
let mainButton1 = document.querySelector('.button1');
let button1H2 = document.querySelector('.button1 h2');
let mainButton2 = document.querySelector('.button2');

let p;
if (localStorage.getItem('p') === null || localStorage.getItem('p') === 'человек') {
    localStorage.setItem('p', p = prompt('Хмм... )))\nИ как тебя зовут ?)', ''));
    if (+p === 0){
        p = 'человек';
        localStorage.setItem('p', p);
    } else {
        let a = p.slice(0, 1).toUpperCase();
        let b = p.slice(1).toLowerCase();
        p = a + b;
    }
    localStorage.setItem('p', p);
}
let arrStart = [
    `Что же, ${localStorage.getItem('p')}, я хочу сыграть c тобой в игру, и правила просты, именно в этой игре у тебя есть шанс получить подарок, если я разжег твой инетрес, жми "Ок"`,
    'Отлично, ты в игре, правила просты, найди первого ведущего, что даст в обмне на правильный ответ к загадке, код, это твой ключ на следующий вопрос!\n ИГРА НАЧАЛАСЬ!'
];
