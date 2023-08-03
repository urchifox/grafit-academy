import {render as renderPacks} from './pack-gallery.js';
import {packsData} from './packs-data.js';
import {init as initFavoutite} from './favoutire-buttons.js';
import {init as initSorting} from './pack-sorting.js';

renderPacks(packsData);

initSorting();

initFavoutite();
