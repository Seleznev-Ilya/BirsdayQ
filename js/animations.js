/*Progress Bur*/
function progressBurGame() {
    progressBur.innerHTML = '';
    for (let i = 0; i < questionGame.length; i++) {
        let item = document.createElement('div');
        item.classList.add(`itemBur`);
        item.classList.add(`itemBur${i}`);
        item.style.width = `${document.documentElement.clientWidth / questionGame.length}px`;
        progressBur.append(item);
    }
    progressBurGameHeightLite();
}

if (!counter.count) {
    progressBurGame();
}

/*Progress Bur*/
function progressBurGameHeightLite() {
    for (let i = 0; i < questionGame.length; i++) {
        let burItem = document.querySelector(`.itemBur${i}`);
        burItem.style.background = ' radial-gradient(white, LightSalmon 40%)';
    }
    let burItem = document.querySelector(`.itemBur${localStorage.getItem('counter1') - 1}`);
    burItem.style.background = ' radial-gradient(white, Crimson 85%)';
}

/*Start/Game --- text*/
function textChanges() {
    questionText.style.opacity = '0';
    setTimeout(() => {
        /*start text game*/
        questionText.style.opacity = '1';
        questionText.innerText = `${arrStart[localStorage.getItem('start') - 1]}`;
    }, 600);
}

textChanges();
// if (!counter1.count) {
//     textChanges();
// }
/*task Number*/
function taskChanges() {
    circle.style.border = '';
    circleH2.style.opacity = '0';
    circle__subH3.style.opacity = '0';
    setTimeout(() => {
        circle.style.border = '2px white solid';
        circleH2.style.opacity = '1';
        circle__subH3.style.opacity = '1';
        circleH2.innerText = counter1.count;
        circle__subH3.innerText = `Задание (${questionGame[counter1.count - 1].taskNumber})`;
    }, 600);
}

if (!counter.count) {
    taskChanges();
}

/* Task */
function task() {
    questionText.style.opacity = '0';
    setTimeout(() => {
        questionText.style.opacity = '1';
        questionText.innerText = questionGame[counter1.count - 1].task;
    }, 600);
}

if (!counter.count) {
    task();
}

/* Task Helper */
function taskHelper() {
    lockerWrapper.style.filter = 'blur(4px)';
    helpText.style.opacity = '0';
    locker.style.opacity = '0';
    lockerP.style.opacity = '0';
    setTimeout(() => {
        helpText.style.opacity = '1';
        locker.style.opacity = '.2';
        lockerP.style.opacity = '.4';
        spanWrapper.innerHTML = '';
        let span = document.createElement('span');
        span.classList.add(`lockerSpan`);
        span.classList.add(`lockerSpan${counter1.count}`);
        spanWrapper.append(span);
        helpTextP.innerText = questionGame[counter1.count - 1].helper;

        if (localStorage.getItem(`time${+localStorage.getItem('counter1')}`) === null) {
            timerRelevant();
        } else if (localStorage.getItem(`time${+localStorage.getItem('counter1')}`) < 1) {
            lockerWrapper.style.filter = 'blur(0px)';
            let lockerSpan = document.querySelector(`.lockerSpan${+localStorage.getItem('counter1')}`);
            lockerSpan.style.left = 'calc(50% - 69px)';
            lockerSpan.innerHTML = 'Мжно смотреть';
        } else {
            timerRelevant();
        }

    }, 600);
}

if (!counter.count) {
    taskHelper();
}

/* TIMER for helper*/
function timerRelevant() {
    let dateStamp;
    // dateStamp = 62000;

    let timerId = setInterval(() => {
        if (localStorage.getItem(`time${+localStorage.getItem('counter1')}`) !== null) {
            dateStamp = +localStorage.getItem(`time${+localStorage.getItem('counter1')}`);
        } else {
            dateStamp = 6000;
        }
        dateStamp -= 1000;
        if (counter.count > 0) {
            localStorage.setItem(`time${+localStorage.getItem('counter1')}`, dateStamp);
        }
        let testSec, testMin;
        testSec = (dateStamp / 1000) % 60;
        testMin = Math.floor(dateStamp / 60000) % 60;
        if (testMin < 10) testMin = "0" + testMin;
        if (testSec < 10) testSec = "0" + testSec;
        let timer = `${testMin}:${testSec}`;
        let lockerSpan = document.querySelector(`.lockerSpan${+localStorage.getItem('counter1')}`);
        lockerSpan.innerText = timer;
        if (dateStamp < 1) {
            lockerWrapper.style.filter = 'blur(0px)';
            let lockerSpan = document.querySelector(`.lockerSpan${+localStorage.getItem('counter1')}`);
            lockerSpan.style.left = 'calc(50% - 69px)';
            lockerSpan.innerHTML = 'Мжно смотреть';
            clearInterval(timerId);
        }
    }, 1000);
}
if (counter1.count) {
    if (localStorage.getItem(`time${+localStorage.getItem('counter1')}`) !== null) {
        timerRelevant();
    } else if (localStorage.getItem(`time${+localStorage.getItem('counter1')}`) < 1) {
        lockerWrapper.style.filter = 'blur(0px)';
        // let lockerSpan = document.querySelector(`.lockerSpan${+localStorage.getItem('counter1')}`);
        // lockerSpan.style.left = 'calc(50% - 69px)';
        // lockerSpan.innerHTML = 'Мжно смотреть';
    }
}


// if (!counter.count) {
//     if (localStorage.getItem(`time${+localStorage.getItem('counter1')}`) !== null && +localStorage.getItem(`time${+localStorage.getItem('counter1')}`) !== 0) {
//         timerRelevant(+localStorage.getItem(`time${+localStorage.getItem('counter1')}`));
//     } else if (localStorage.getItem(`time${+localStorage.getItem('counter1')}`) !== null && +localStorage.getItem(`time${+localStorage.getItem('counter1')}`) === 0) {
//         lockerWrapper.style.filter = 'blur(0px)';
//         let lockerSpan = document.querySelector(`.lockerSpan${+localStorage.getItem('counter1')}`);
//         lockerSpan.style.left = 'calc(50% - 69px)';
//         lockerSpan.innerHTML = 'Мжно смотреть';
//     }
// }

/*Start button */
function buttonIntro() {
    if (+localStorage.getItem('start') <= 1) {
        mainButton1.style.backgroundColor = 'rgb(255,215,0, .6)';
        button1H2.innerText = 'Ok';
    } else if (+localStorage.getItem('start') === 2) {
        mainButton1.style.backgroundColor = 'rgba(3, 166, 120, .6)';
        mainButton1.style.width = '130px';
        button1H2.innerText = 'Start';
    }
    if (+localStorage.getItem('counter1') >= 1) {
        mainButton1.style.width = '62px';
        button1H2.innerText = '';
        mainButton1.style.backgroundColor = 'transparent';
        mainButton2.style.backgroundColor = 'transparent';
    }
}

/*tasks game Button animation*/
function buttonAnimation() {
    buttonIntro();
    if (+localStorage.getItem('counter1') > 1) {
        mainButton1.style.opacity = '0';
        mainButton2.style.opacity = '0';
        setTimeout(() => {
            setTimeout(() => {
                mainButton1.style.backgroundImage = "url(\"icons/icons8-галочка-48.png\")";
                mainButton1.style.opacity = '1';
                mainButton2.style.opacity = '1';
            }, 600);
            mainButton1.style.transition = '.6s';
            mainButton2.style.transition = '.6s';
            mainButton2.style.display = 'block';
        }, 1);
    } else if (+localStorage.getItem('counter1') === 1) {
        mainButton1.style.transition = '0';
        setTimeout(() => {
            mainButton1.style.opacity = '0';
            mainButton2.style.opacity = '0';
            setTimeout(() => {
                mainButton1.style.backgroundImage = "url(\"icons/icons8-галочка-48.png\")";
                mainButton1.style.transition = '.6s';
                mainButton1.style.opacity = '1';
                mainButton2.style.display = 'none';
            }, 600);
        }, 1);
    }
}

buttonAnimation();

/* FinishGame */
function finishGame() {
    mainContainer.innerHTML = '';
    let img = document.createElement('img');
    img.classList.add('winnerImg');
    img.src = 'icons/icons8-медаль-за-первое-место-64.png';
    mainContainer.append(img);
    let win = document.createElement('h1');
    win.classList.add('winner');
    win.innerText = `You Win, ${localStorage.getItem('p')}!`;
    mainContainer.append(win);
    buttonFinish();
}

if (+localStorage.getItem('counter1') >= questionGame.length) {
    finishGame();
    buttonFinish();
}

function buttonFinish() {
    navigation.innerHTML = '';
    let winnerImg = document.querySelector('.winnerImg');
    winnerImg.addEventListener('click', () => {
        localStorage.clear();
        location.reload();
    });
}


