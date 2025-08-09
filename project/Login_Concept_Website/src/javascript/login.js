import { BSQL } from "./BSQL/Database.js";

const data = new BSQL();

const dataHandle = (formInput, btnAction, warnMsg, path) => {
    btnAction[0].addEventListener('click', () => {
        if (data.verifyData(formInput[0], formInput[1])) {
            sessionStorage.setItem('statusLogin', 'true');
            sessionStorage.setItem('saveNickname', formInput[0].value);

            data.sendMsg('Login Success!');
            location.href = path;
        } else {
            formInput[0].value = '';
            formInput[1].value = '';

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
        document.getElementById('btnLogin')
    ];

    const warnMsg = document.getElementById('warnMsg');

    dataHandle(getForm, btnAction, warnMsg, '../index.html');
});