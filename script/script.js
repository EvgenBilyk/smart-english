let dataValue = [];
let count_word = document.querySelector('#count_word');
let count_percent = document.querySelector('#count_percent');
let ukr = document.querySelector('#ukr_word');
let eng = document.querySelector('#eng_word');
ukr.textContent = "<-- LOAD -->";

window.onload = () => {
    let storage = localStorage.getItem('dataEng');

    if (storage !== null) {
        dataValue = JSON.parse(storage);
        count_word.textContent = `0/${dataValue.length}`;
        ukr.textContent = "<-- START -->";
        return
    } else {
        let idSheet = "12l0FC7BT_UeJ2-kvVL_6cqw4Sh0wgoha8fHFcoclAPQ";
        let nameList = "list_1";
        let linkApp = "https://script.google.com/macros/s/AKfycbxTmL3s4uBH-b77G34Tgf3ohjmQN7DW3tHUehSn50h7L_lDgI4xVck5tEHkTz-qZMhx9g/exec";

        let linkRequestTest = `${linkApp}?nameList=${nameList}&idSheet=${idSheet}`

        fetch(linkRequestTest)
            .then(data => {
                return data.text();
            })
            .then(data => {
                let arr = JSON.parse(data);
                dataValue = arr[0].values;
                localStorage.setItem('dataEng', JSON.stringify(dataValue))
                count_word.textContent = `0/${dataValue.length}`;
                ukr.textContent = "<-- START -->";
            });
    }
}

let randomData = [];
let set = {
    count: 0,
    random: false,
    length: dataValue.length,
    interval: 3,
    intervalSmall: 3,
    action: false,
}

var intervalBig;
var intervalSmall;

function render() {
    let interval = (set.interval + set.intervalSmall) * 1000;

    set.dataValue = dataValue;
    set.randomData = randomData;

    let arr = (set.random) ? randomData : dataValue;
    ukr.textContent = arr[set.count].ukr;
    let count = set.count;
    eng.textContent = "";
    count_word.textContent = `${count + 1}/${arr.length}`;
    count_percent.textContent = `${Math.round(((count + 1) / (arr.length)) * 100)} %`;

    intervalBig = setInterval(() => {

        let arr = (set.random) ? randomData : dataValue;
        if (set.action && (set.count <= (arr.length - 1))) {

            let count = set.count;
            eng.textContent = "";
            count_word.textContent = `${count + 1}/${arr.length}`;
            count_percent.textContent = `${Math.round(((count + 1) / (arr.length)) * 100)} %`;
            ukr.textContent = arr[count].ukr;

            intervalSmall = setTimeout(() => {
                eng.textContent = arr[count].eng;
            }, set.intervalSmall * 1000);
            set.count++;
        } else if (set.count > arr.length - 1) {
            eng.textContent = "<-- FINISH -->";
            ukr.textContent = "";

        } else {
            return
        }
    }, interval)
}
document.querySelector('#stop').onclick = () => {
    set.action = false;
    clearInterval(intervalBig);
    clearInterval(intervalSmall);
}
document.querySelector('#start').onclick = () => {
    if (set.action == false) {
        set.action = true;
        render();
    } else if (set.action == true && (set.count == dataValue.length)) {
        clearInterval(intervalBig);
        clearInterval(intervalSmall);
        set.count = 0;
        render();
    }
}

document.querySelector('#back').onclick = () => {
    if (set.count !== 0) {
        set.count--;
        clearInterval(intervalBig);
        clearInterval(intervalSmall);
        render();
    }
}

document.querySelector('#forward').onclick = () => {
    if (set.count <= dataValue.length - 1) {
        set.count++;
        clearInterval(intervalBig);
        clearInterval(intervalSmall);
        render();
    }
}

document.querySelector('#clear_data').onclick = () => {
    localStorage.removeItem('dataEng');
    location.reload();
}

document.querySelector("#second").onchange = function () {
    set.interval = +document.getElementById("second").value;
};

document.querySelector("#secondSmall").onchange = function () {
    set.intervalSmall = +document.getElementById("secondSmall").value;
};

function randomArr(arr) {
    let order = [];

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    for (let i = 0; arr.length > order.length; i++) {
        let newElem = getRandomIntInclusive(0, arr.length - 1);
        if (!order.includes(newElem)) {
            order.push(newElem);
        } else {
            i--;
        }
    }

    let newArr = [];
    order.map(elem => newArr.push(arr[elem]))
    return newArr;
}

document.querySelector('#random').onclick = function () {
    if (this.checked) {
        randomData = randomArr(dataValue);
        set.random = true;
    } else {
        set.random = false;
    }
}