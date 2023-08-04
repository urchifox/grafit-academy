import {render as renderPacks} from './pack-gallery.js';
import {packsData, packDataExample} from './packs-data.js';

const root = document.querySelector('.packs-list');
const valueSelector = document.querySelector('.sort-options');
const ascendingSelector = document.querySelector('.sort-order-btn__checkbox');

const filtersRoot = document.querySelector('.filters');
const filtersButtons = filtersRoot.querySelectorAll('.filter-btn__checkbox:not([name="specialOffer"])');
const specialOfferButton = filtersRoot.querySelector('.filter-btn__checkbox[name="specialOffer"]');
const slider = document.getElementById('slider');
const minPriceInput = filtersRoot.querySelector('.filter-btn__price-input[name="min-interval"]');
const maxPriceInput = filtersRoot.querySelector('.filter-btn__price-input[name="max-interval"]');

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
	const checkedFilters = [...filtersButtons].filter((button) => button.checked);
	let filteredData = [];

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

	const uniqueFilteredData = new Set(filteredData);
	return [...uniqueFilteredData];
};

const filter = () => {
	shownData = (isAnyFilterChecked()) ? getFilteredData() : packsData;
	if(specialOfferButton.checked) {
		shownData = shownData.filter((datum) => datum.specialOffer === true);
	}
	shownData = shownData.filter((data) => data.price >= minPriceInput.value);
	shownData = shownData.filter((data) => data.price <= maxPriceInput.value);
	if (shownData) {
		root.innerHTML = '';
		sort(valueSelector.value, ascendingSelector.checked);
	}
};

const onFiltersChange = filter;
const onSortingButtonChange = () => sort(valueSelector.value, ascendingSelector.checked);
const onPriceInputChange = () => slider.noUiSlider.set([minPriceInput.value, maxPriceInput.value]);

const init = () => {
	minPriceInput.addEventListener('change', onPriceInputChange);
	maxPriceInput.addEventListener('change', onPriceInputChange);
	filtersRoot.addEventListener('change', onFiltersChange);
	valueSelector.addEventListener('change', onSortingButtonChange);
	ascendingSelector.addEventListener('change', onSortingButtonChange);
};

export {init, filter};
