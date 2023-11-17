import { onFiltersChange } from './gallery-manager.js';
import { minPrice, maxPrice } from './pack-data-manager.js';

const slider = document.getElementById('slider');
const minPriceInput = document.querySelector('.filter-btn__price-input[name="min-interval"]');
const maxPriceInput = document.querySelector('.filter-btn__price-input[name="max-interval"]');

noUiSlider.create(slider, {
	start: [minPrice, maxPrice],
	connect: true,
	range: {
		'min': minPrice,
		'max': maxPrice
	},
	format: {
		to: (value) => value.toFixed(0),
		from: Number.parseFloat,
	},
});

slider.noUiSlider.on('update', () => {
	const [min, max] = slider.noUiSlider.get();
	minPriceInput.value = min;
	maxPriceInput.value = max;
	onFiltersChange();
});
