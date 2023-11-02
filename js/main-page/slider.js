import {studentsWorksInfo} from './students-pictures-data.js';
import {renderMainPicture, renderPreviews} from './slider-previews-rendering.js';

const previousBtn = document.querySelector('.arrow-left');
const nextBtn = document.querySelector('.arrow-right');
const previewContainer = document.querySelector('.slider__previews');
let currentPreviewIndex = 0;


const changeMainPicture = (info) => {
	const requestedPreviewIndex = info.id;
	const requestedPreview = previewContainer.children[requestedPreviewIndex];
	const currentPreview = previewContainer.children[currentPreviewIndex];
	requestedPreview.classList.add('slider__preview-item_active');
	currentPreview.classList.remove('slider__preview-item_active');
	currentPreviewIndex = requestedPreviewIndex;

	renderMainPicture(info);
};

const onSliderBtnClick = (evt) => {
	let requestedPictureIndex = (evt.target.name === 'next') ?
		currentPreviewIndex + 1 :
		currentPreviewIndex - 1;

	if (requestedPictureIndex < 0) {
		requestedPictureIndex = studentsWorksInfo.length - 1;
	}

	if (requestedPictureIndex > studentsWorksInfo.length - 1) {
		requestedPictureIndex = 0;
	}

	const requestedPictureInfo = studentsWorksInfo[requestedPictureIndex];
	changeMainPicture(requestedPictureInfo);
};

const onPreviewClick = (evt) => {
	const preview = evt.target.closest('.slider__preview-btn');
	if(!preview) {
		return;
	}
	const pictureInfo = studentsWorksInfo[preview.dataset.id];
	changeMainPicture(pictureInfo);
};

const init = () => {
	renderPreviews(studentsWorksInfo);
	renderMainPicture(studentsWorksInfo[0]);

	previewContainer.addEventListener('click', onPreviewClick);
	previousBtn.addEventListener('click', onSliderBtnClick);
	nextBtn.addEventListener('click', onSliderBtnClick);
};

export {init};
