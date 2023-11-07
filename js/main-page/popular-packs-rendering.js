import {popularPacksData} from './popular-packs-data.js';

const root = document.querySelector('.packs-list');
const template = document.querySelector('#popular-pack')
	.content
	.querySelector('.pack-card');
const fragment = document.createDocumentFragment();

const render = () => {
	popularPacksData.forEach(({packName, coverSrc, price}) => {
		const card = template.cloneNode(true);
		card.querySelector('.pack-card__name-link').textContent = packName;
		card.querySelector('.pack-card__cover').src = coverSrc;
		card.querySelector('.pack-card__price').textContent = `${price}`;
		fragment.append(card);
	});

	root.append(fragment);
};

export {render};
