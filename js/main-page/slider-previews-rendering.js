import { createElement } from '../utils.js';

const getTemplate = (index, picturesAddress, {src, description}) => /*html*/`
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
		const preview = createElement(getTemplate(index, picturesAddress, datum));
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
	renderPreviews(data, picturesAddress);
	renderMainPicture(data[0], picturesAddress);
};

export {renderSlider, renderMainPicture};
