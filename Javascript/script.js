const visitTo = (btn, target) => {
    btn.addEventListener('click', () => {
        location.href = target;
    });
};

const globalVisiter = (btnWeb) => {
    visitTo(btnWeb[0], 'project/JPCSIM/index.html');
    visitTo(btnWeb[1], 'project/Value_Input/src/html/index.html');
    visitTo(btnWeb[2], 'project/Cek_Khodam/html/index.html');
    visitTo(btnWeb[3], 'project/Digital_Clock/html/index.html');
    visitTo(btnWeb[4], 'project/Password_Generator/src/HTML/index.html');
    visitTo(btnWeb[5], 'project/DraggedWindow/src/HTML/index.html');
    visitTo(btnWeb[6], 'project/Login_Concept_Website/src/index.html');
};

// Main Code
document.addEventListener('DOMContentLoaded', () => {
    const btnGoWeb = [
        document.getElementById('btnWeb1'),
        document.getElementById('btnWeb2'),
        document.getElementById('btnWeb3'),
        document.getElementById('btnWeb4'),
        document.getElementById('btnWeb5'),
        document.getElementById('btnWeb6'),
        document.getElementById('btnWeb7')
    ];

    globalVisiter(btnGoWeb);
});