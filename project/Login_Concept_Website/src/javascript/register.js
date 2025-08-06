import { BSQL } from "./BSQL/Database.js";

const data = new BSQL();

const dataHandle = (formInput, btnAction) => {
    data.sendData(formInput[0], formInput[1], btnAction[0], './login.html');
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

    dataHandle(getForm, btnAction);
});