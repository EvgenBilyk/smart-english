import renderNumber from "./renderNumber.js";


function renderGenerate(data) {
    const min = data['from'];
    const max = data['to'];
    let count = data['count'];
    const notDouble = data['notDouble'];
    const order = data['order'];
    let arr = [];

    if (notDouble) {  //получаем массив без дублей при поднятом флаге notDouble
        for (let i = 0; i < count; i++) {
            let item = getRandomIntInclusive(min, max);
            if (arr.includes(item)) {
                count++
            } else {
                arr.push(item)
            }
        }
    } else { //получаем массив с дублями 
        for (let i = 0; i < count; i++) {
            let item = getRandomIntInclusive(min, max);
            arr.push(item);
        }
    }

    if (order) {   //сортируем массив при поднятом флаге order
        arr.sort(function (a, b) {
            return a - b;
        });
    }


    renderNumber(arr, data);
}

/**
 * генерируем случайное чилос из указанного диапазона
 */

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}





export default renderGenerate;
