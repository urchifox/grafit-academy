import {render as renderPacks} from './pack-gallery.js';
import {packsData} from './packs-data.js';
import {init as initFavoutite} from '../universal/favoutire-buttons.js';
import {init as initSorting} from './pack-sorting.js';
import './price-slider.js';

renderPacks(packsData);

initSorting();

initFavoutite();
