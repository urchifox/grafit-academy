import { onListClick } from './pack-card-full.js';
import {render as renderPacks} from './gallery-rendering.js';
import {packsData} from './packs-data.js';
import { maxPrice, minPrice, packDataExample } from './pack-data-manager.js';

const galleryList = document.querySelector('.packs-list');
const filtersRoot = document.querySelector('#filters');

const sortingParameterSelector = document.querySelector('.sort-options');
const sortingOrderSelector = document.querySelector('.sort-order-btn__checkbox');

const typeCheckboxes = filtersRoot.querySelectorAll('.filter-btn__checkbox[name="type"]');
const tagsCheckboxes = filtersRoot.querySelectorAll('.filter-btn__checkbox[name="tag"]');
const specialOfferCheckbox = filtersRoot.querySelector('.filter-btn__checkbox[name="specialOffer"]');
const priceSlider = filtersRoot.querySelector('#slider');
const minPriceInput = filtersRoot.querySelector('.filter-btn__price-input[name="min-interval"]');
const maxPriceInput = filtersRoot.querySelector('.filter-btn__price-input[name="max-interval"]');

const originalData = Array.from(packsData);
let processedData;

const rerenderGallery = (callback, data) => {
	processedData = callback(data);
	galleryList.innerHTML = '';
	renderPacks(processedData, onListClick);
};

const getSortedData = (data) => {
	const value = sortingParameterSelector.value;
	const ascending = sortingOrderSelector.checked;

	if (packDataExample[value] === 'string') {
		return (ascending) ?
			data.slice().sort((a, b) => a[1][value].localeCompare(b[1][value])) :
			data.slice().sort((a, b) => b[1][value].localeCompare(a[1][value]));
	}

	return (ascending) ?
		data.slice().sort((a, b) => a[1][value] - b[1][value]) :
		data.slice().sort((a, b) => b[1][value] - a[1][value]);
};

const getReversedData = (data) => data.reverse();

const onSortingParameterChange = () => {
	rerenderGallery(getSortedData, processedData);
};

const onSortingOrderChange = () => {
	rerenderGallery(getReversedData, processedData);
};

const getFilteredData = (data, conditions) => data.filter(([,datum]) => conditions.every((condition) => condition(datum)));

const onFiltersChange = () => {
	const filtrationConditions = [];

	const checkedTypes = [...typeCheckboxes].reduce((accumulator, checkbox) =>
		checkbox.checked ? [...accumulator, checkbox.value] : [...accumulator]
	, []);
	const checkedTags = [...tagsCheckboxes].reduce((accumulator, checkbox) =>
		checkbox.checked ? [...accumulator, checkbox.value] : [...accumulator]
	, []);

	if (checkedTypes.length > 0 || checkedTags.length > 0) {
		filtrationConditions.push((datum) =>
			checkedTypes.includes(datum.type) ||
			Object.keys(datum.tags).some((tag) => checkedTags.includes(tag) && datum.tags[tag] === true)
		);
	}

	if (specialOfferCheckbox.checked) {
		filtrationConditions.push((datum) => datum.specialOffer === true);
	}

	if (minPriceInput.value > minPrice) {
		filtrationConditions.push((datum) => datum.price >= minPriceInput.value);
	}

	if (maxPriceInput.value < maxPrice) {
		filtrationConditions.push((datum) => datum.price <= maxPriceInput.value);
	}

	const filteredData = filtrationConditions.length > 0 ?
		getFilteredData(originalData, filtrationConditions) :
		originalData;

	rerenderGallery(getSortedData, filteredData);
};

const onPriceInputChange = () => priceSlider.noUiSlider.set([minPriceInput.value, maxPriceInput.value]);

const init = () => {
	processedData = getSortedData(originalData);
	renderPacks(processedData, onListClick);

	minPriceInput.addEventListener('change', onPriceInputChange);
	maxPriceInput.addEventListener('change', onPriceInputChange);
	filtersRoot.addEventListener('change', onFiltersChange);
	sortingParameterSelector.addEventListener('change', onSortingParameterChange);
	sortingOrderSelector.addEventListener('change', onSortingOrderChange);
};

export {init, onFiltersChange};
