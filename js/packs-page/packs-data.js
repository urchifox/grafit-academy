import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

const PREVIEWS_ADRESS = 'img/refpacks/covers/';

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

const packsData = new Map();

packsData.set(nanoid(), {
	packName: '590+ Swamp Forest Vegetation Reference Pictures',
	price: 500,
	coverName: 'refpack-14-1.jpg',
	previewsName: ['refpack-14-2.jpg', 'refpack-14-3.jpg'],
	specialOffer: false,
	popularityRate: 2,
	type: 'environment',
	tags: {
		nature: true,
		city: false,
	},
});

packsData.set(nanoid(), {
	packName: 'Epic Rainforest',
	price: 500,
	coverName: 'refpack-2-1.jpg',
	previewsName: ['refpack-2-2.jpg', 'refpack-2-3.jpg'],
	specialOffer: false,
	popularityRate: 10,
	type: 'environment',
	tags: {
		nature: true,
		city: false,
	},
});

packsData.set(nanoid(), {
	packName: '510+ Space Cowboy',
	price: 800,
	coverName: 'refpack-3-1.jpg',
	previewsName: ['refpack-3-2.jpg'],
	specialOffer: false,
	popularityRate: 9,
	type: 'person',
	tags: {
		nudity: false,
		inUnderwear: false,
		inOutfit: true,
	},
});

packsData.set(nanoid(), {
	packName: 'Castle',
	price: 900,
	coverName: 'refpack-4-1.jpg',
	previewsName: ['refpack-4-2.jpg', 'refpack-4-2.jpg'],
	specialOffer: true,
	popularityRate: 9,
	type: 'environment',
	tags: {
		nature: false,
		city: true,
	},
});

packsData.set(nanoid(), {
	packName: '130+ Period Drama Reference Pictures',
	price: 500,
	coverName: 'refpack-5-1.jpg',
	previewsName: ['refpack-5-2.jpg', 'refpack-5-3.jpg', 'refpack-5-4.jpg'],
	specialOffer: false,
	popularityRate: 9,
	type: 'person',
	tags: {
		nudity: false,
		inUnderwear: false,
		inOutfit: true,
	},
});

packsData.set(nanoid(), {
	packName: '700+ Panaji Reference Pictures',
	price: 900,
	coverName: 'refpack-6-1.jpg',
	previewsName: ['refpack-6-2.jpg', 'refpack-6-3.jpg', 'refpack-6-4.jpg', 'refpack-6-5.jpg'],
	specialOffer: false,
	popularityRate: 8,
	type: 'environment',
	tags: {
		nature: false,
		city: true,
	},
});

packsData.set(nanoid(), {
	packName: '690 Dramatic Male Poses Reference Pictures',
	price: 900,
	coverName: 'refpack-7-1.jpg',
	previewsName: ['refpack-7-2.jpg', 'refpack-7-3.jpg'],
	specialOffer: false,
	popularityRate: 7,
	type: 'person',
	tags: {
		nudity: false,
		inUnderwear: false,
		inOutfit: true,
	},
});

packsData.set(nanoid(), {
	packName: '730+ Epic Cliffs Reference Pictures',
	price: 700,
	coverName: 'refpack-8-1.jpg',
	previewsName: ['refpack-8-2.jpg', 'refpack-8-3.jpg', 'refpack-8-4.jpg', 'refpack-8-5.jpg', 'refpack-8-6.jpg'],
	specialOffer: true,
	popularityRate: 7,
	type: 'environment',
	tags: {
		nature: true,
		city: false,
	},
});

packsData.set(nanoid(), {
	packName: '1200+ Samurai Reference Pictures',
	price: 500,
	coverName: 'refpack-9-1.jpg',
	previewsName: ['refpack-9-2.jpg', 'refpack-9-3.jpg', 'refpack-9-4.jpg', 'refpack-9-5.jpg'],
	specialOffer: true,
	popularityRate: 5,
	type: 'person',
	tags: {
		nudity: false,
		inUnderwear: false,
		inOutfit: true,
	},
});

packsData.set(nanoid(), {
	packName: '790+Architecture Elements Reference Pictures',
	price: 900,
	coverName: 'refpack-10-1.jpg',
	previewsName: ['refpack-10-2.jpg', 'refpack-10-3.jpg', 'refpack-10-4.jpg', 'refpack-10-5.jpg'],
	specialOffer: false,
	popularityRate: 5,
	type: 'environment',
	tags: {
		nature: false,
		city: true,
	},
});

packsData.set(nanoid(), {
	packName: '320+ Swedish Soldier Reference Pictures',
	price: 900,
	coverName: 'refpack-11-1.jpg',
	previewsName: ['refpack-11-2.jpg', 'refpack-11-3.jpg', 'refpack-11-4.jpg', 'refpack-11-5.jpg', 'refpack-11-6.jpg'],
	specialOffer: false,
	popularityRate: 5,
	type: 'person',
	tags: {
		nudity: false,
		inUnderwear: false,
		inOutfit: true,
	},
});

packsData.set(nanoid(), {
	packName: '900+ European Cities Reference Pictures',
	price: 500,
	coverName: 'refpack-12-1.jpg',
	previewsName: ['refpack-12-2.jpg', 'refpack-12-3.jpg'],
	specialOffer: true,
	popularityRate: 3,
	type: 'environment',
	tags: {
		nature: false,
		city: true,
	},
});


packsData.set(nanoid(), {
	packName: 'Male 2 Couple 1',
	price: 900,
	coverName: 'refpack-1-1.jpg',
	previewsName: ['refpack-1-2.jpg', 'refpack-1-3.jpg', 'refpack-1-4.jpg', 'refpack-1-5.jpg', 'refpack-1-6.jpg',],
	specialOffer: false,
	popularityRate: 10,
	type: 'person',
	tags: {
		nudity: false,
		inUnderwear: true,
		inOutfit: false,
	},
});

packsData.set(nanoid(), {
	packName: '840+ Motorcycle Reference Pictures',
	price: 800,
	coverName: 'refpack-13-1.jpg',
	previewsName: ['refpack-13-2.jpg', 'refpack-13-3.jpg', 'refpack-13-4.jpg', 'refpack-13-5.jpg', 'refpack-13-6.jpg'],
	specialOffer: false,
	popularityRate: 3,
	type: 'person',
	tags: {
		nudity: false,
		inUnderwear: false,
		inOutfit: true,
	},
});

packsData.set(nanoid(), {
	packName: '730+ Forest Historical Village Reference Pictures',
	price: 500,
	coverName: 'refpack-15-1.jpg',
	previewsName: ['refpack-15-2.jpg', 'refpack-15-3.jpg', 'refpack-15-4.jpg', 'refpack-15-5.jpg', 'refpack-15-6.jpg'],
	specialOffer: true,
	popularityRate: 1,
	type: 'person',
	tags: {
		nudity: false,
		inUnderwear: false,
		inOutfit: true,
	},
});

export {packsData, PREVIEWS_ADRESS, packDataExample};
