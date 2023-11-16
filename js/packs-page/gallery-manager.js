import { onListClick } from './pack-card-full.js';
import {render as renderPacks} from './gallery-rendering.js';
import {packsData, packDataExample} from './packs-data.js';

const root = document.querySelector('.packs-list');
const promoFilterCheckbox = document.querySelector('.filter-btn__checkbox[name="specialOffer"]');
const sortingParametrSelector = document.querySelector('.sort-options');
const sortingOrderSelector = document.querySelector('.sort-order-btn__checkbox');

const filtersRoot = document.querySelector('#filters');
const filtersButtons = filtersRoot.querySelectorAll('.filter-btn__checkbox:not([name="specialOffer"])');
const specialOfferButton = filtersRoot.querySelector('.filter-btn__checkbox[name="specialOffer"]');
const slider = document.getElementById('slider');
const minPriceInput = filtersRoot.querySelector('.filter-btn__price-input[name="min-interval"]');
const maxPriceInput = filtersRoot.querySelector('.filter-btn__price-input[name="max-interval"]');
const minPrice = 500;
const maxPrice = 900;

const originalData = Array.from(packsData);
let processedData;

const getProcessedData = () => processedData;

const renderGallery = () => renderPacks(getProcessedData(), onListClick);

const getSortedData = (data) => {
	const value = sortingParametrSelector.value;
	const ascending = sortingOrderSelector.checked;

	let sortedData;

	if (packDataExample[value] === 'string') {
		sortedData = (ascending) ?
			data.slice().sort((a, b) => a[1][value].localeCompare(b[1][value])) :
			data.slice().sort((a, b) => b[1][value].localeCompare(a[1][value]));
	}

	if (packDataExample[value] === 'number') {
		sortedData = (ascending) ?
			data.slice().sort((a, b) => a[1][value] - b[1][value]) :
			data.slice().sort((a, b) => b[1][value] - a[1][value]);
	}

	return sortedData;
};

const getReversedData = (data) => data.reverse();

const onSortingParametrChange = () => {
	processedData = getSortedData(processedData);
	root.innerHTML = '';
	renderGallery();
};

const onSortingOrderChange = () => {
	processedData = getReversedData(processedData);
	root.innerHTML = '';
	renderGallery();
};


const isAnyCategoryChecked = () => [...filtersButtons].some((button) => button.checked);

const getDataFilteredByCategory = (data) => {
	const checkedCategories = [...filtersButtons].filter((button) => button.checked);
	const categories = checkedCategories.map((checkedCategorie) => checkedCategorie.value);

	return data.filter(([, datum]) => categories.includes(datum.type) || categories.includes(datum.value));
};


const isPriceChanged = () => minPriceInput.value > minPrice || maxPriceInput.value < maxPrice;

const isPromoChecked = () => promoFilterCheckbox.checked;

const onPriceInputChange = () => slider.noUiSlider.set([minPriceInput.value, maxPriceInput.value]);


const onFiltersChange = () => {
	let filteredData = isAnyCategoryChecked() ? getDataFilteredByCategory(originalData) : originalData;
	filteredData = isPromoChecked() ? filteredData.filter(([,datum]) => datum.specialOffer === specialOfferButton.checked) : filteredData;
	filteredData = isPriceChanged() ? filteredData.filter(([, datum]) => datum.price >= minPriceInput.value && datum.price <= maxPriceInput.value) : filteredData;

	processedData = getSortedData(filteredData);
	root.innerHTML = '';
	renderGallery();
};


const init = () => {
	processedData = getSortedData(originalData);
	renderGallery();

	minPriceInput.addEventListener('change', onPriceInputChange);
	maxPriceInput.addEventListener('change', onPriceInputChange);
	filtersRoot.addEventListener('change', onFiltersChange);
	sortingParametrSelector.addEventListener('change', onSortingParametrChange);
	sortingOrderSelector.addEventListener('change', onSortingOrderChange);
};


export {init, renderGallery, getProcessedData};
