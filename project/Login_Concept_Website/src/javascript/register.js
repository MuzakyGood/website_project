import { BSQL } from "./BSQL/Database.js";

const data = new BSQL();

const dataHandle = (formInput, btnAction, warnMsg) => {
    btnAction[0].addEventListener('click', () => {
        if (formInput[0].value != '' && formInput[1].value != '') {
        data.sendData(formInput[0], formInput[1], './login.html');
        } else {
            warnMsg.style.display = 'inline';
            setTimeout(() => {
                warnMsg.style.display = 'none';
            }, 3000);
        }
    });
};

// Main code
document.addEventListener('DOMContentLoaded', () => {
    const getForm = [
        document.getElementById('regName'),
        document.getElementById('regPass')
    ];
    
    const btnAction = [
        document.getElementById('btnRegis')
    ];

    const warnMsg = document.getElementById('warnMsg');

    dataHandle(getForm, btnAction, warnMsg);
});