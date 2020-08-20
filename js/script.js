function Counter() {
    this.count = 0;
    this.up = function () {
        return ++this.count;
    };
    this.down = function () {
        return --this.count;
    };
}

let counter = new Counter();
let counter1 = new Counter();
let reload = new Counter();

function switchGame1() {
    if (localStorage.getItem('counter1') < questionGame.length) {
        if (localStorage.getItem('start') < 2) {
            localStorage.setItem('start', counter.up());
            /*Animation*/
            textChanges();
        } else if (+localStorage.getItem('start') > 1) {
            if (+localStorage.getItem('start') === 2 && +localStorage.getItem('counter1') === 0) {
                let time = new Date().getTime();
                localStorage.setItem('audio start', time);
                let audio = new Audio(); // Создаём новый элемент Audio
                // audio.currentTime =  60; // стартируем на тридцатой минуте
                audio.src = 'audio/start.mp3'; // Указываем путь к звуку "клика"
                audio.autoplay = true; // Автоматически запускаем
            }

            let a;
            counter1.count = localStorage.getItem('counter1');
            if (!counter1.count) {
                fCount();
            } else {
                a = +prompt(`Ключ (код) дял перехода на ->\nЗадание: (${+counter1.count + 1})`,);
                if (questionGame[+counter1.count - 1].password === a) {
                    fCount();
                } else {
                    counter1.count = localStorage.getItem('counter1');
                    /*Animation*/
                    taskChanges();
                    task();
                    taskHelper();
                }
            }

            function fCount() {
                localStorage.setItem('counter1', counter1.up());

                /*Animation*/
                taskChanges();
                task();
                taskHelper();
                progressBurGame();
            }
        }
        /*Animation*/
        buttonAnimation();
    } else {
        let a = +prompt(`Ключ (код) дял перехода на ->\nФиниш: (${+counter1.count + 1})`,);
        if (questionGame[+counter1.count - 1].password === a) {
            finishGame();
        }
    }
}

function startAudio() {
    if (+localStorage.getItem('start') === 2 && +localStorage.getItem('counter1') > 0) {
        if (+localStorage.getItem('audio start reload') <= 0) {
            localStorage.setItem('audio start reload', reload.up());
            location.reload();
        }
        setTimeout(() => {
            // if (+localStorage.getItem('start') === 2 && +localStorage.getItem('counter1') > 0) {
            let audio1 = new Audio(); // Создаём новый элемент Audio
            audio1.currentTime = ((new Date().getTime() - localStorage.getItem('audio start'))) / 1000; // стартируем на тридцатой минуте
            audio1.src = 'audio/start.mp3'; // Указываем путь к звуку "клика"
            audio1.autoplay = true; // Автоматически запускаем
            // }
            localStorage.setItem('audio start reload', reload.down());

        }, 0);
    }
}

startAudio();

mainButton1.addEventListener('click', switchGame1);
mainButton2.addEventListener('click', () => {
    if (counter1.count > 1) {
        localStorage.setItem('counter1', counter1.down());
        /*Animation*/

        taskChanges();
        task();
        taskHelper();
        progressBurGame();
        buttonAnimation();
    }
});
if (!counter.count) {
    switchGame1();
} else {
    /*Animation*/
    taskChanges();
    task();
    taskHelper();
}
