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
    
    data.debugShowLog();
    console.log('Status = ', data.getMsg());
    console.log('isLogin = ', isAccountLogin);
    console.log('newUser:', navbar[0]);
    console.log('logout:', navbar[1]);
    console.log('btnLogout:', navbar[2]);

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