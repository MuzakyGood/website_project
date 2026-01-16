const visitTo = (btn, target) => {
    btn.addEventListener('click', () => {
        location.href = target;
    });
};

const globalMyProjectVisiter = (btnWeb) => {
    visitTo(btnWeb[0], 'project/JPCSIM/index.html');
    visitTo(btnWeb[1], 'project/Value_Input/src/html/index.html');
    visitTo(btnWeb[2], 'project/Cek_Khodam/html/index.html');
    visitTo(btnWeb[3], 'project/Digital_Clock/html/index.html');
    visitTo(btnWeb[4], 'project/Password_Generator/src/HTML/index.html');
    visitTo(btnWeb[5], 'project/DraggedWindow/src/HTML/index.html');
    visitTo(btnWeb[6], 'project/Login_Concept_Website/src/index.html');
};

const visiterDicodingHTML = (btnHTML) => {
    visitTo(btnHTML[0], 'Dicoding_Frontend/A.HTML/01.Create_Element/index.html');
    visitTo(btnHTML[1], 'Dicoding_Frontend/A.HTML/02.Create_Attribute/index.html');
    visitTo(btnHTML[2], 'Dicoding_Frontend/A.HTML/03.Create_List/index.html');
    visitTo(btnHTML[3], 'Dicoding_Frontend/A.HTML/04.Create_Image/index.html');
    visitTo(btnHTML[4], 'Dicoding_Frontend/A.HTML/05.Formating_Text/index.html');
    visitTo(btnHTML[5], 'Dicoding_Frontend/A.HTML/06.Semantic_HTML/index.html');
    visitTo(btnHTML[6], 'Dicoding_Frontend/A.HTML/07.Generic_Element/index.html');
    visitTo(btnHTML[7], 'Dicoding_Frontend/A.HTML/08.Create_Table/index.html');
    visitTo(btnHTML[8], 'Dicoding_Frontend/A.HTML/09.Create_Input/index.html');
    visitTo(btnHTML[9], 'Dicoding_Frontend/A.HTML/10.Special_Character/index.html');
};

const visiterDicodingCSS = (btnCSS) => {
    visitTo(btnCSS[0], 'Dicoding_Frontend/B.CSS/01.Using_CSS/index.html');
    visitTo(btnCSS[1], 'Dicoding_Frontend/B.CSS/02.All_Selector/index.html');
    visitTo(btnCSS[2], 'Dicoding_Frontend/B.CSS/03.Combinator_Selector/index.html');
    visitTo(btnCSS[3], 'Dicoding_Frontend/B.CSS/04.Pseudo_Selector/index.html');
    visitTo(btnCSS[4], 'Dicoding_Frontend/B.CSS/05.Text_Styling/index.html');
    visitTo(btnCSS[5], 'Dicoding_Frontend/B.CSS/06.Color_Styling/index.html');
    visitTo(btnCSS[6], 'Dicoding_Frontend/B.CSS/07.Box_Styling/index.html');
    visitTo(btnCSS[7], 'Dicoding_Frontend/B.CSS/08.Position_CSS/index.html');
    visitTo(btnCSS[8], 'Dicoding_Frontend/B.CSS/09.Flexbox_Responsive/index.html');
}

const visiterDicodingProject = (btnProject) => {
    visitTo(btnProject[0], 'Dicoding_Frontend/D.Project/01.bandung_website/index.html');
    visitTo(btnProject[1], 'Dicoding_Frontend/D.Project/02.landing_page_dicoding/index.html');
    visitTo(btnProject[2], 'Dicoding_Frontend/D.Project/03.profil_developer/index.html');
}

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

    const btnDicodingHTML = [
        document.getElementById('btnDicodingLearn1'),
        document.getElementById('btnDicodingLearn2'),
        document.getElementById('btnDicodingLearn3'),
        document.getElementById('btnDicodingLearn4'),
        document.getElementById('btnDicodingLearn5'),
        document.getElementById('btnDicodingLearn6'),
        document.getElementById('btnDicodingLearn7'),
        document.getElementById('btnDicodingLearn8'),
        document.getElementById('btnDicodingLearn9'),
        document.getElementById('btnDicodingLearn10')
    ];

    const btnDicodingCSS = [
        document.getElementById('btnDicodingLearnCSS_1'),
        document.getElementById('btnDicodingLearnCSS_2'),
        document.getElementById('btnDicodingLearnCSS_3'),
        document.getElementById('btnDicodingLearnCSS_4'),
        document.getElementById('btnDicodingLearnCSS_5'),
        document.getElementById('btnDicodingLearnCSS_6'),
        document.getElementById('btnDicodingLearnCSS_7'),
        document.getElementById('btnDicodingLearnCSS_8'),
        document.getElementById('btnDicodingLearnCSS_9'),
        document.getElementById('btnDicodingLearnCSS_10')
    ];

    const btnDicodingProject = [
        document.getElementById('btnDicodingProject1'),
        document.getElementById('btnDicodingProject2'),
        document.getElementById('btnDicodingProject3')
    ];

    globalMyProjectVisiter(btnGoWeb);
    visiterDicodingHTML(btnDicodingHTML)
    visiterDicodingCSS(btnDicodingCSS);
    visiterDicodingProject(btnDicodingProject);
});