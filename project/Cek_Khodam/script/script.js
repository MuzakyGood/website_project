import { RandomNumber } from "./mathformula/setmath.js";
import anomali_khodam from "./database/datakhodam.js";"./database/datakhodam.js";

let getinputress = document.getElementById("btn_khodam");
let getinputclear = document.getElementById("btn2_khodam");

document.getElementById("total_khodam").innerText = "Total Khodam Database: " + anomali_khodam.length + " Card";

getinputress.onclick= function(){
    let getusername = document.getElementById("username");

    if (getusername.value) {
        let number = RandomNumber(0, (anomali_khodam.length - 1));
        let khodam = anomali_khodam[number];
        let resultskhodam = `🃏 khodam ${getusername.value} adalah ${khodam}. 🃏`;
    
        document.getElementById("setinfo_results").innerHTML = "🔽 Pickup Card Khodam 🔽";
        document.getElementById("results_khodam").innerHTML = resultskhodam;
    } else {
        document.getElementById("results_khodam").innerHTML = "Nama Wajib di isi";

    }
}

getinputclear.onclick = function() {
    let getusername = document.getElementById("username");

    document.getElementById("results_khodam").innerHTML = null;
    document.getElementById("setinfo_results").innerHTML = null;
}