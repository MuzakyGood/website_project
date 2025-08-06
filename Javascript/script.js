const visitTo = (btn, target) => {
    btn.addEventListener('click', () => {
        location.href = target;
    });
};

const globalVisiter = (btnWeb) => {
    visitTo(btnWeb[0], 'project/JPCSIM/index.html');
    visitTo(btnWeb[1], 'project/Value_Input/src/html/index.html');
    visitTo(btnWeb[2], 'project/Cek_Khodam/html/index.html');
    visitTo(btnWeb[3], 'project/Login_Concept_Website/src/index.html');
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