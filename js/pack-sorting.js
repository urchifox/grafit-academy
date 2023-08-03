import {render as renderPacks} from './pack-gallery.js';
import {packsData, packDataExample} from './packs-data.js';

const root = document.querySelector('.packs-list');
const valueSelector = document.querySelector('.sort-options');
const ascendingSelector = document.querySelector('.sort-order-btn__checkbox');

const filtersRoot = document.querySelector('.filters');
const filtersButtons = filtersRoot.querySelectorAll('.filter-btn__checkbox:not([name="specialOffer"])');
const specialOfferButton = filtersRoot.querySelector('.filter-btn__checkbox[name="specialOffer"]');
let shownData = packsData;

const sort = (value, ascending) => {
	let sortedData;
	if (packDataExample[value] === 'string') {
		sortedData = (ascending) ?
			shownData.slice().sort((a, b) => a[value].localeCompare(b[value])) :
			shownData.slice().sort((a, b) => b[value].localeCompare(a[value]));
	}

	if (packDataExample[value] === 'number') {
		sortedData = (ascending) ?
			shownData.slice().sort((a, b) => a[value] - b[value]) :
			shownData.slice().sort((a, b) => b[value] - a[value]);
	}

	if (sortedData) {
		root.innerHTML = '';
		renderPacks(sortedData);
	}

	shownData = sortedData;
};

const isAnyFilterChecked = () => [...filtersButtons].some((button) => button.checked);

const getFilteredData = () => {
	let filteredData = [];

	const checkedFilters = [...filtersButtons].filter((button) => button.checked);

	checkedFilters.forEach((button) => {
		if (button.name === 'type') {
			const suitableData = packsData.filter((datum) => datum.type === button.value);
			filteredData = filteredData.concat(suitableData);
		}
		if (button.name === 'tag') {
			const suitableData = packsData.filter((datum) => datum.tags[button.value] === true);
			filteredData = filteredData.concat(suitableData);
		}
	});

	return filteredData;
};

const filter = () => {
	shownData = (isAnyFilterChecked()) ? getFilteredData() : packsData;
	if(specialOfferButton.checked) {
		shownData = shownData.filter((datum) => datum.specialOffer === true);
	}
	if (shownData) {
		root.innerHTML = '';
		sort(valueSelector.value, ascendingSelector.checked);
	}
};

const onFiltersChange = filter;
const onSortingButtonChange = () => sort(valueSelector.value, ascendingSelector.checked);

const init = () => {
	filtersRoot.addEventListener('change', onFiltersChange);
	valueSelector.addEventListener('change', onSortingButtonChange);
	ascendingSelector.addEventListener('change', onSortingButtonChange);
};

export {init};
