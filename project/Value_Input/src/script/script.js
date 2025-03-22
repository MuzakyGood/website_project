function ResultsData() {
    let myvalue = document.getElementById("SetValue").value;

    if (myvalue > 100 || myvalue < 0 || myvalue == null) {
        document.getElementById("SetResults").innerHTML = "(System) = Invalid Out Range 0 - 100 Value!";
    } else if (myvalue >= 80) {
        document.getElementById("SetResults").innerHTML = "You Successfull";
    } else if (myvalue >= 50 && myvalue < 80 ) {
        document.getElementById("SetResults").innerHTML = "Try Again";
    } else {
        document.getElementById("SetResults").innerHTML = "You Failed";
    }
}

function CleanData() {
    document.getElementById("SetResults").innerHTML = "Undefined";
}