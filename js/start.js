let main = document.querySelector('main');

let progressBur = document.querySelector('.progress_bur');

let numberQuestion = document.querySelector('.number_question');
let circle = document.querySelector('.circle');
let circleH2 = document.querySelector('.circle h2');
let circle__sub = document.querySelector('.circle__sub');
let circle__subH3 = document.querySelector('.circle__sub h3');


let question = document.querySelector('.question');
let questionText = document.querySelector('.question p');

let helpText = document.querySelector('.help_text');
let helpTextP = document.querySelector('.help_text p');

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
    }
}
let arrStart = [
    `Что же, ${localStorage.getItem('p')}, я хочу сыграть c тобой в игру, и правила просты, именно в этой игре у тебя есть шанс получить подарок, если я разжег твой инетрес, жми "Ок"`,
    'Отлично, ты в игре, правила просты, найди первого ведущего, что даст в обмне на правильный ответ к загадке, код, это твой ключ на следующий вопрос!\n ИГРА НАЧАЛАСЬ!'
];
let cod = [123, 456, 789, 1011, 1213];
let arr = ['one', 'tow', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
let questionGame = [
    {
        taskNumber: 'one',
        password: 123,
        task: 'Как зовут организатора? ',
        helper: 'у него были длинные влолосы)',
    },
    {
        taskNumber: 'two',
        password: 456,
        task: 'Как зовут были длинные организатора? ',
        helper: 'у   были длинные влолосы)',
    },
    {
        taskNumber: 'three',
        password: 789,
        task: 'Как организатора? ',
        helper: 'у него были длинные  были длинные влолосы)',
    },
    {
        taskNumber: 'four',
        password: 1011,
        task: 'Как зовут организатора? зовут',
        helper: 'у были длинные него были длинные были длинные влолосы)',
    },
    {
        taskNumber: 'five',
        password: 1213,
        task: 'Как зовут ',
        helper: 'у него были зовут зовут длинные влолосы)',
    },
];