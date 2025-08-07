import { BSQL } from "./BSQL/Database.js";

const data = new BSQL();

const dataHandle = (formInput, btnAction, path) => {
    btnAction[0].addEventListener('click', () => {
        if (data.verifyData(formInput[0], formInput[1])) {
            sessionStorage.setItem('saveNickname', formInput[0].value);

            data.sendMsg('Login Success!');
            location.href = path;
        } else {
            formInput[0].value = '';
            formInput[1].value = '';

            console.log('Status = Login Failed!');
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

    dataHandle(getForm, btnAction, '../index.html');
});