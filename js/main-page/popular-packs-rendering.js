import {render as renderPacks} from '../packs-page/gallery-rendering.js';
import {packsData} from '../packs-page/packs-data.js';

const POPULAR_PACKS_COUNT = 4;

const render = () => {
	const data = Array.from(packsData)
		.slice()
		.sort((a, b) => b[1].popularityRate - a[1].popularityRate)
		.slice(0, POPULAR_PACKS_COUNT);
	renderPacks(data);
};

export {render};
