import { BSQL } from "./BSQL/Database.js";

const data = new BSQL();

// Main code
document.addEventListener('DOMContentLoaded', () => {
    const navbar = [
        document.getElementsByClassName('newUser')[0],
        document.getElementsByClassName('logout')[0],
        document.getElementById('accessLogout')
    ];

    const nickname = [
        document.getElementById('usernameNav'),
        document.getElementById('usernameTitle')
    ];

    const savedNickname = sessionStorage.getItem('saveNickname');
    let isAccountLogin = sessionStorage.getItem('statusLogin'); 

    if (isAccountLogin === null) sessionStorage.setItem('saveNickname', 'Guest');

    navbar[2].addEventListener('click', () => {
        sessionStorage.setItem('statusLogin', 'false');
        sessionStorage.setItem('saveNickname', 'Guest');

        navbar[0].style.display = 'inline';
        navbar[1].style.display = 'none';
        location.reload();
    });

    if (isAccountLogin === 'true') {
        navbar[0].style.display = 'none';
        navbar[1].style.display = 'inline';
    } else {
        navbar[0].style.display = 'inline';
        navbar[1].style.display = 'none';
    }

    if (savedNickname) {
        if (nickname[0]) nickname[0].innerHTML = savedNickname;
        if (nickname[1]) nickname[1].innerHTML = savedNickname;
    }
});