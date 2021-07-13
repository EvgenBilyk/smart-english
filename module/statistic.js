function statistic(arr) {
    const statNumberRandom = {};
    arr.forEach(elem => {
        if (statNumberRandom[elem]) {
            statNumberRandom[elem]++
        } else {
            statNumberRandom[elem] = 1;
        }
    })

    console.log(statNumberRandom);

    let count = 0;
    let maxNumber = {};
    let maxResult = '';
    for (let key in statNumberRandom) {
        if (count < statNumberRandom[key]) {
            count = statNumberRandom[key]
        }

    }
    console.log(`count ${count}`)

    if (count == 1) {
        maxResult = 'все числа повторились по одному разу'
    } else {

        for (let key in statNumberRandom) {
            if (statNumberRandom[key] == count && count !== 1) {
                maxNumber[key] = statNumberRandom[key]
            }
        }

        let number = "";
        for (let key in maxNumber) {
            number += ` ${key}`;
            maxResult = `числа с максимальными повторениями: ${number} повторений ${maxNumber[key]}`
        }
    }
    console.log(maxResult);
}

export default statistic;
