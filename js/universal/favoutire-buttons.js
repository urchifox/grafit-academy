const toogleFavouriteBtn = (favouriteButton) => {
	const favIconFilled = favouriteButton.querySelector('.material-icons.favorite_checked');
	favIconFilled.classList.toggle('hidden');
};

const init = () => {
	const favButtons = document.querySelectorAll('.pack-card__add-favorites');
	for (const favButton of favButtons) {
		const onFavoutiteBtn = () => toogleFavouriteBtn(favButton);
		favButton.addEventListener('click', onFavoutiteBtn);
	}
};

export {init};
