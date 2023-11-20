import { createElement } from '../utils.js';

const getSliderTemplate = () => /*html*/`
	<section class="slider">
		<figcaption class="slider__main-illustration">
			<img class="slider__main-img" src="" alt="">
			<figcaption class="slider__desc"></figcaption>
			<button name="previous" aria-label="Предыдущее изображение" class="arrow slider__arrow slider__arrow_left  material-icons-round" >
				<span aria-hidden="true">chevron_left</span>
			</button>
			<button name="next" aria-label="Следующее изображение" class="arrow slider__arrow slider__arrow_right material-icons-round" >
				<span aria-hidden="true">navigate_next</span>
			</button>
		</figcaption>
		<ul class="slider__previews">
		</ul>
	</section>
`;

const getPreviewsTemplate = (index, picturesAddress, {src, description}) => /*html*/`
	<li class="slider__preview-item">
		<button class="slider__preview-btn" data-id="${index}" data-link="" data-desc="" >
			<img class="slider__preview-img" width="100px" height="100px" src="${picturesAddress + src}" alt="${description}">
		</button>
	</li>
`;

const renderPreviews = (data, picturesAddress) => {
	const previewContainer = document.querySelector('.slider__previews');
	const previewFragment = document.createDocumentFragment();
	data.forEach((datum, index) => {
		const preview = createElement(getPreviewsTemplate(index, picturesAddress, datum));
		previewFragment.append(preview);
	});

	previewFragment.querySelector('.slider__preview-item').classList.add('slider__preview-item_active');
	previewContainer.append(previewFragment);
};

const renderMainPicture = (datum, picturesAddress) => {
	const mainPicture = document.querySelector('.slider__main-img');
	const mainPictureDescription = document.querySelector('.slider__desc');

	mainPicture.src = picturesAddress + datum.src;
	mainPictureDescription.textContent = datum.description;
};

const renderSlider = (data, picturesAddress) => {
	const root = document.querySelector('.slider-container');
	const slider = createElement(getSliderTemplate());
	root.append(slider);
	renderPreviews(data, picturesAddress);
	renderMainPicture(data[0], picturesAddress);
};

export {renderSlider, renderMainPicture};
