import { packsData } from './packs-data.js';

const PREVIEWS_ADDRESS = 'img/refpacks/covers/';

const packDataExample = {
	packName: 'string',
	price: 'number',
	coverName: 'string',
	previewsName: 'array',
	specialOffer: 'boolean',
	popularityRate: 'number',
	type: 'string',
	tags: 'object',
};

const allPrices = [];
for (const [, datum] of packsData) {
	allPrices.push(datum.price);
}

const minPrice = Math.min.apply(null, allPrices);
const maxPrice = Math.max.apply(null, allPrices);

export {packDataExample, minPrice, maxPrice, PREVIEWS_ADDRESS};
