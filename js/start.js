let main = document.querySelector('main');

let progressBur = document.querySelector('.progress_bur');
let numberQuestion = document.querySelector('.number_question');
let question = document.querySelector('.question');
let helpText = document.querySelector('.help_text');

let mainContainer = document.querySelector('.main__container');
let mainButton1 = document.querySelector('.button1');
let button1H2 = document.querySelector('.button1 h2');
let mainButton2 = document.querySelector('.button2');
let p;
if (  localStorage.getItem('p') === null) {
    localStorage.setItem('p',  p = prompt('Привет! )))\nА как тебя зовут ?)', ''));
}

let cod = [123,456,789,1011,1213];
let arrStart = [
    `Что же, ${p}, я хочу сыграть c тобой в игру, и правила просты, именно в этой игре у тебя есть шанс получить подарок, если я разжег твой инетрес, жми "Ок"`,
    'Отлично, ты в игре, правила просты, найди первого ведущего, что даст в обмне на правильный ответ к загадке, код, это твой ключ на следующий вопрос!\n ИГРА НАЧАЛАСЬ!'
];
let arr = ['one','tow','three','four','five'];