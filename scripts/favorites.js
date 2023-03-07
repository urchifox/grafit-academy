let favButtons = document.querySelectorAll(".add-favorites");

for (let favButton of favButtons) {
    favButton.onclick = function() {
        let favIconFilled = favButton.querySelector(".material-icons.favorite_checked");
        favIconFilled.classList.toggle("hidden");
    }    
}