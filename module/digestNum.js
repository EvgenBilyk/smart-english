function digest(num) {
    const arrNum = ["число", "числа", "чисел"];
    let result = [];
    num = String(num);

    if (num >= 20) {
        num = +num.slice(num.length - 1, num.length);

    }
    else if (num < 20) {
        num = +num.slice(num.length - 2, num.length);

    }

    if (num <= 20) {
        if (1 < num < 5) result[0] = arrNum[1];
        if (num > 4) result = arrNum[2];
        if (num == 1) result = arrNum[0];
        if (num == 0) result = arrNum[2];
    } else {
        if (num == 0) result = arrNum[2];
        if (1 < num < 5) result = arrNum[1];
        if (num > 4) result = arrNum[2];
        if (num == 1) result = arrNum[0];

    }
    return result;

}

export default digest;