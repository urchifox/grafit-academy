import {renderMainPicture, renderSlider} from './slider-previews-rendering.js';
let picturesAddress;
let picturesData;
let previousBtn;
let nextBtn;
let previewContainer;
let currentPreviewIndex = 0;

const changePicture = (targetIndex) => {
	const currentPreview = previewContainer.querySelector('.slider__preview-item_active');
	currentPreview.classList.remove('slider__preview-item_active');

	const pictureInfo = picturesData[targetIndex];
	renderMainPicture(pictureInfo, picturesAddress);

	previewContainer.children[targetIndex].classList.add('slider__preview-item_active');
	currentPreviewIndex = targetIndex;
};

const onSliderBtnClick = (evt) => {
	const button = evt.target.closest('.slider__arrow');

	if(!button) {
		return;
	}

	let targetIndex = (button.name === 'next') ?
		currentPreviewIndex + 1 :
		currentPreviewIndex - 1;

	if (targetIndex < 0) {
		targetIndex = picturesData.length - 1;
	}

	if (targetIndex > picturesData.length - 1) {
		targetIndex = 0;
	}

	changePicture(targetIndex);
};

const onPreviewClick = (evt) => {
	const button = evt.target.closest('.slider__preview-btn');

	if(!button) {
		return;
	}

	const targetIndex = Number(button.dataset.id);
	changePicture(targetIndex);
};

const init = (root, data, address) => {
	renderSlider(root, data, address);
	const container = root.querySelector('.slider-container');

	picturesData = data;
	picturesAddress = address;

	previewContainer = container.querySelector('.slider__previews');
	previousBtn = container.querySelector('.slider__arrow_left');
	nextBtn = container.querySelector('.slider__arrow_right');

	previewContainer.addEventListener('click', onPreviewClick);
	previousBtn.addEventListener('click', onSliderBtnClick);
	nextBtn.addEventListener('click', onSliderBtnClick);
};

export {init};
