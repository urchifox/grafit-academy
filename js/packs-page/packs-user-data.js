const packsUserData = {
	favorites: JSON.parse(localStorage.getItem('favorites')) || [],
	inCart: JSON.parse(localStorage.getItem('inCart')) || [],
	bought: JSON.parse(localStorage.getItem('bought')) || [],
};

export {packsUserData};
