const storageKey = 'STORAGE_KEY';
const submitAction = document.getElementById('form-data-user');

const checkForUser = () => typeof (Storage) !== 'undefined';

const putUserList = (data) => {
    if (checkForUser()) {
        let userData = [];
        if (localStorage.getItem(storageKey) !== null) {
            userData = JSON.parse(localStorage.getItem(storageKey));
        }

        userData.unshift(data);
        if (userData.length > 5) userData.pop();

        localStorage.setItem(storageKey, JSON.stringify(userData));
    }
}

const getUserList = () => {
    if (checkForUser()) return JSON.parse(localStorage.getItem(storageKey)) || [];
    else return [];
}

const renderUserList = () => {
    const userData = getUserList();
    const userList = document.querySelector('#user-list-detail');

    userList.innerHTML = '';
    for (let user of userData) {
        let row = document.createElement('tr');
        row.innerHTML = '<td>' + user.nama + '</td>';
        row.innerHTML += '<td>' + user.umur + '</td>';
        row.innerHTML += '<td>' + user.domisili + '</td>';
        userList.appendChild(row);
    }
}

submitAction.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputNama = document.getElementById('nama').value;
    const inputUmur = document.getElementById('umur').value;
    const inputDomisili = document.getElementById('domisili').value;
    const newUserData = {
        nama: inputNama,
        umur: inputUmur,
        domisili: inputDomisili
    }

    putUserList(newUserData);
    renderUserList();
});

window.addEventListener('load', () => {
    if (checkForUser()) {
        if (localStorage.getItem(storageKey) !== null) renderUserList();
    } else window.alert('Your browser not support local storage!');
});