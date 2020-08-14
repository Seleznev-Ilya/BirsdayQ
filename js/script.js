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

function switchGame1() {
    if (localStorage.getItem('counter1') < questionGame.length) {
        if (+localStorage.getItem('start') === 2 && +localStorage.getItem('counter1') === 0) {
            soundClick();
        }
        if (localStorage.getItem('start') < 2) {
            localStorage.setItem('start', counter.up());
            /*Animation*/

            textChanges();
        } else if (+localStorage.getItem('start') > 1) {

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
