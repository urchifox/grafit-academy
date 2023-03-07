let buttonRight = document.querySelector(".arrow.right");
let buttonLeft = document.querySelector(".arrow.left");
let toogles = document.querySelectorAll("input.toggle");

buttonRight.onclick = function() {
    if (toogles[toogles.length-1].checked === true) {
        toogles[0].checked = true;
    } else {
        for (let i = 0; i < toogles.length; i++) {
            if (toogles[i].checked === true) {
                toogles[i+1].checked = true;
                break;
             } 
        }
    }
}

buttonLeft.onclick = function() {
    if (toogles[0].checked === true) {
        toogles[toogles.length-1].checked = true;
    } else {
        for (let i = 0; i < toogles.length; i++) {
            if (toogles[i].checked === true) {
                toogles[i-1].checked = true;
                break;
             } 
        }
    }
}

    