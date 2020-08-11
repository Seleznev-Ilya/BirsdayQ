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
    helpTextP.style.opacity = '0';
    setTimeout(() => {
        helpTextP.style.opacity = '1';
        helpTextP.innerText = questionGame[counter1.count - 1].helper;
    }, 600);
}

if (!counter.count) {
    taskHelper();
}

/*Start button */
function buttonIntro() {
    if (+localStorage.getItem('start') <= 1) {
        mainButton1.style.backgroundColor = 'orange';
        button1H2.innerText = 'Ok';
    } else if (+localStorage.getItem('start') === 2) {
        mainButton1.style.backgroundColor = 'limegreen';
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
if (+localStorage.getItem('counter1') >= questionGame.length ) {
    finishGame();
    buttonFinish();
}

function buttonFinish() {
    navigation.innerHTML = '';
}