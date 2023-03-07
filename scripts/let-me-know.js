let letMeKnowButtons = document.querySelectorAll(".let-me-know");

for (let letMeKnowButton of letMeKnowButtons) {
    letMeKnowButton.onclick = function() {
        let iconNotChecked = letMeKnowButton.querySelector(".not-checked");
        let iconChecked = letMeKnowButton.querySelector(".checked");
        iconNotChecked.classList.toggle("hidden");
        iconChecked.classList.toggle("hidden");
    }
}