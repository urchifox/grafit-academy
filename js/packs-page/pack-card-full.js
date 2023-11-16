const getTemplate = (data) =>
/*html*/'';

const render = (id) => {
    
}

const onListClick = (evt) => {
	const id = evt.target.closest('.pack-card').dataset.id;
	console.log(id);
};

export {onListClick};
