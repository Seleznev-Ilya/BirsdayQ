function buttonIntro() {
    if (+localStorage.getItem('start') <= 1) {
        mainButton1.style.backgroundColor = 'orange';
        button1H2.innerText = 'Ok';
    } else if (+localStorage.getItem('start') === 2) {
        mainButton1.style.backgroundColor = 'limegreen';
        button1H2.innerText = 'Start';
    }
    if (+localStorage.getItem('counter1') >= 1) {
        button1H2.innerText = '';
        mainButton1.style.backgroundColor = 'transparent';
        mainButton2.style.backgroundColor = 'transparent';
    }
}

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
            }, 500);
            mainButton1.style.transition = '.5s';
            mainButton2.style.transition = '.5s';
            mainButton2.style.display = 'block';
        }, 1);
    } else if (+localStorage.getItem('counter1') === 1) {
        mainButton1.style.transition = '0';
        setTimeout(() => {
            mainButton1.style.opacity = '0';
            mainButton2.style.opacity = '0';
            setTimeout(() => {
                mainButton1.style.backgroundImage = "url(\"icons/icons8-галочка-48.png\")";
                mainButton1.style.transition = '.5s';
                mainButton1.style.opacity = '1';
                mainButton2.style.display = 'none';
            }, 500);
        }, 1);
    }
}

buttonAnimation();