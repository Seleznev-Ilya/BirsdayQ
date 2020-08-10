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
let a;

counter1.count = localStorage.getItem('counter1');
mainButton1.addEventListener('click', switchGame);

function switchGame() {
    a = +prompt('cod',);
    if (cod[counter1.count - 1] === a) {
        f();
    } else {
        counter1.count = localStorage.getItem('counter1');
        mainContainer.innerText = `Задание (${arr[counter1.count - 1]})`;
    }
}

function f() {
    localStorage.setItem('counter1', counter1.up());
    mainContainer.innerText = `Задание (${arr[counter1.count - 1]})`;
}

if (!counter1.count) {
    console.log('heheh', counter1.count);
    f();
} else {
    mainContainer.innerText = `Задание (${arr[counter1.count - 1]})`;
}
mainButton2.addEventListener('click', () => {
    localStorage.setItem('counter1', counter1.down());
});

