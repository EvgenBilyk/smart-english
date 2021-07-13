import statistic from './module/statistic.js';
import conditionCheck from './module/conditionCheck.js';




const btnResult = document.getElementById('btnResult');

function sendArray() {
    conditionCheck({
        'from': document.getElementById('fromNumber').value,
        'to': document.getElementById('toNumber').value,
        'count': document.getElementById('countNumber').value,
        'notDouble': document.getElementById('notDoubleNumber').checked,
        'order': document.getElementById('orderNumber').checked,
        'delimiter': document.getElementById('delimiterNumber').value,
    });
}

btnResult.onclick = sendArray;




