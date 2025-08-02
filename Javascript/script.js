const visitTo = (btn, target) => {
    btn.addEventListener('click', () => {
        location.href = target;
    });
};

const globalVisiter = (btnWeb) => {
    visitTo(btnWeb[0], '/Project/JPCSIM/index.html');
    visitTo(btnWeb[1], '/Project/Value_Input/src/html/index.html');
    visitTo(btnWeb[2], '/Project/Cek_Khodam/html/index.html');
    visitTo(btnWeb[3], '#');
};

// Main Code
document.addEventListener('DOMContentLoaded', () => {
    const btnGoWeb = [
        document.getElementById('btnWeb1'),
        document.getElementById('btnWeb2'),
        document.getElementById('btnWeb3'),
        document.getElementById('btnWeb4')
    ];

    globalVisiter(btnGoWeb);
});