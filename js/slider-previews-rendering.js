const mainPicture = document.querySelector('.slider__main-img');
const mainPictureDescription = document.querySelector('.slider__desc');
const previewContainer = document.querySelector('.slider__previews');
const template = document.querySelector('#preview')
	.content
	.querySelector('.slider__preview-item');

const previewFragment = document.createDocumentFragment();

const renderPreviews = (data) => {
	let id = 0;

	data.forEach((datum) => {
		const preview = template.cloneNode(true);
		const button = preview.querySelector('.slider__preview-btn');
		button.dataset.id = id;
		button.dataset.link = datum.src;
		button.dataset.desc = datum.description;

		const image = preview.querySelector('.slider__preview-img');
		image.src = datum.src;
		image.alt = datum.description;

		datum.id = id;
		id++;

		previewFragment.append(preview);
	});

	previewFragment.querySelector('.slider__preview-item').classList.add('slider__preview-item_active');
	previewContainer.append(previewFragment);
};

const renderMainPicture = (info) => {
	mainPicture.src = info.src;
	mainPicture.dataset.id = info.id;
	mainPictureDescription.textContent = info.description;
};


export {renderMainPicture, renderPreviews};
