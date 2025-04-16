import { RandomNumber } from "./mathformula/setmath.js";
import DataAnomali from './database/dataobject.json' with {type: "json"};

let getinputress = document.getElementById("btn_khodam");
let getinputclear = document.getElementById("btn2_khodam");

const ResultsCard = document.getElementById("Results_card");
// let status_results = 0;

const SetTheme = document.getElementById("ThemeMusic");
const PlayButton = document.getElementById("PlayButton");
const AudioEffect = document.getElementById("AudioEffect");
const ErrorContainer = document.getElementById("All_Error");

window.addEventListener('load', () => {
    SetTheme.play().catch(error => {
        ErrorContainer.innerHTML = "";
        PlayButton.style.display = "block";
    });
});

PlayButton.addEventListener('click', () => {
    SetTheme.play().then(() => {
        PlayButton.style.display = "none"; 
        AudioEffect.style.display = "block"; 
        AudioEffect.classList.add('all_audioplay');
    }).catch(error => {
        ErrorContainer.innerHTML = "Failed Load audio: " + error;
    });
});


document.getElementById("total_khodam").innerText = "Total Khodam Database: " + DataAnomali.ListKhodam.length + " Card";

getinputress.onclick = function () {
    let getusername = document.getElementById("username");

    if (getusername.value) {
        let number = RandomNumber(0, (DataAnomali.ListKhodam.length - 1));
        let khodam = DataAnomali.ListKhodam[number].Anomali;
        let resultskhodam = `🃏 khodam ${getusername.value} adalah ${khodam}. 🃏`;

        document.getElementById("setinfo_results").innerHTML = "🔽 Pickup Card Khodam 🔽";
        document.getElementById("results_khodam").innerHTML = resultskhodam;

        ResultsCard.style.display = "block";
    } else {
        document.getElementById("results_khodam").innerHTML = "Nama Wajib di isi";
    }
};

getinputclear.onclick = function () {
    document.getElementById("results_khodam").innerHTML = null;
    document.getElementById("setinfo_results").innerHTML = null;

    // Ini kuncinya juga:
    ResultsCard.style.display = "none";
};
