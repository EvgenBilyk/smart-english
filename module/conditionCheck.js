import randomGenerate from './randomGenerate.js';

function conditionCheck(data) {

    const min = +data['from'];
    const max = +data['to'];
    let count = +data['count'];
    const notDouble = data['notDouble'];

    let massage = '';

    if (min < 0 || max < 0) { massage = 'Введите значения диапазона больше нуля' };
    if (min > 999999999 || max > 999999999) { massage = 'Введите значения диапазона меньше 999 999 999' };
    if (min >= max) { massage = 'Минимальное значение диапазона должно быть меньше максимального' };
    if (count > 10000) { massage = 'Количество случайных чисел должно быть не более 10 000' };
    if ((max - min + 1) < count && notDouble) { massage = 'уберите условие "без повторов" или уменьшите количество случайных чисел' }
    if (count < 1) { massage = 'количество случайных чисел должно быть больше одного' }

    if (massage !== '') {
        alert(massage);
    } else {
        randomGenerate(data);
    }
}

export default conditionCheck;