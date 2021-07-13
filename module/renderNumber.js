import digest from "./digestNum.js";


function renderNumber(data, cond) {
    let length


    let outBlock = document.querySelector('.out');
    let out = '';
    if (data.length <= 10) {
        length = data.length;
    } else {
        length = 10;
    }

    /**
    * small report
    */

    for (let i = 0; i < length; i++) {
        if (i == length - 1) {
            out += `${data[i]}`
        } else {
            out += `${data[i]}, `
        }
    };
    if (data.length > 10) {
        out += '...';
    }
    outBlock.innerHTML = out;


    /**
     * full report
     */

    let fullBlock = document.querySelector('.contein-item');
    let itemBlock = '';
    data.forEach((element, index) => {
        itemBlock += `<div class="col-lg-3 block-item">
        <span class="index-arr">${index}</span> <span class="item-arr fs-2">${element}</span>
    </div>`;
    });

    fullBlock.innerHTML = itemBlock;

    /**
    * conditions
    */
    let order = (cond['order']) ? 'с сортировкой результатов' : 'без сортировки результатов';
    let double = (cond['notDouble']) ? 'без повторов' : 'с возможными повторами';



    let conditions = `${cond['count']}  ${digest(cond['count'])} в диапазоне от ${cond['from']} до ${cond['to']}, ${order}, ${double}`;

    document.querySelector('.table-condition').innerHTML = `<tr>
            <td>Условия</td>
            <td>${conditions}</td>
        </tr>
        <tr>
            <td>дата</td>
            <td>${dateTime()}</td>
        </tr>`

    document.querySelector('.result-random').classList.remove('hide');

}

function dateTime() {
    let now = moment();
    return now.format('DD.MM.YYYY h:mm:ss')
}


export default renderNumber;