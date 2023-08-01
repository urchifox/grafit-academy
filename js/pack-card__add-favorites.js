const favButtons = document.querySelectorAll('.pack-card__add-favorites');

for (const favButton of favButtons) {
	favButton.onclick = function() {
		const favIconFilled = favButton.querySelector('.material-icons.favorite_checked');
		favIconFilled.classList.toggle('hidden');
	};
}
