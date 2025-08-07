import { BSQL } from "./BSQL/Database.js";

const data = new BSQL();

// Main code
document.addEventListener('DOMContentLoaded', () => {
    const nickname = [
        document.getElementById('usernameNav'),
        document.getElementById('usernameTitle')
    ];

    const savedNickname = sessionStorage.getItem('saveNickname');
    
    data.debugShowLog();
    console.log('Status = ', data.getMsg());

    if (savedNickname) {
        if (nickname[0]) nickname[0].innerHTML = savedNickname;
        if (nickname[1]) nickname[1].innerHTML = savedNickname;
    }
});