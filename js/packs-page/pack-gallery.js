import {PREVIEWS_ADRESS} from './packs-data.js';

const root = document.querySelector('.packs-list');
const template = document.querySelector('#pack-card')
	.content
	.querySelector('.pack-card');

const fragment = document.createDocumentFragment();


const render = (data) => {
	data.forEach(({packName, price, coverName, previewsName}, index) => {
		const card = template.cloneNode(true);
		card.dataset.id = index;
		card.querySelector('.pack-card__name-link').textContent = packName;
		card.querySelector('.pack-card__price').textContent = `${price} руб.`;
		const preview = card.querySelector('.pack-card__cover');
		preview.src = `${PREVIEWS_ADRESS}${coverName}`;
		const previewsRoot = card.querySelector('.pack-card__img-link');

		previewsName.forEach((name) => {
			const newPreview = preview.cloneNode(true);
			newPreview.src = `${PREVIEWS_ADRESS}${name}`;
			previewsRoot.append(newPreview);
		});

		fragment.append(card);
	});

	root.append(fragment);
};


export {render};
