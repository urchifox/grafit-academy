import { createElement } from '../utils.js';

const getPreviewsTemplate = (data, picturesAddress) => data.map(({src, description}, index) => /*html*/`
	<li class="slider__preview-item">
		<button class="slider__preview-btn" data-id="${index}" data-link="" data-desc="">
			<img class="slider__preview-img" width="100px" height="100px" src="${picturesAddress + src}" alt="${description}">
		</button>
	</li>
`).join('');

const getTemplate = (data, picturesAddress) => /*html*/`
	<section class="slider">
		<figure class="slider__main-illustration">
			<img class="slider__main-img" src="" alt="">
			<figcaption class="slider__desc"></figcaption>
			<button name="previous" aria-label="Предыдущее изображение" class="arrow slider__arrow slider__arrow_left  material-icons-round" >
				<span aria-hidden="true">chevron_left</span>
			</button>
			<button name="next" aria-label="Следующее изображение" class="arrow slider__arrow slider__arrow_right material-icons-round" >
				<span aria-hidden="true">navigate_next</span>
			</button>
		</figure>
		<ul class="slider__previews">
			${getPreviewsTemplate(data, picturesAddress)}
		</ul>
	</section>
`;

const renderMainPicture = (root, datum, picturesAddress) => {
	const container = root.querySelector('.slider-container');
	const mainPicture = container.querySelector('.slider__main-img');
	const mainPictureDescription = container.querySelector('.slider__desc');

	mainPicture.src = picturesAddress + datum.src;
	mainPictureDescription.textContent = datum.description;
};

const renderSlider = (root, data, picturesAddress) => {
	const container = root.querySelector('.slider-container');
	const slider = createElement(getTemplate(data, picturesAddress));
	container.append(slider);
	slider.querySelector('.slider__preview-item').classList.add('slider__preview-item_active');
	renderMainPicture(root, data[0], picturesAddress);
};

export {renderSlider, renderMainPicture};
