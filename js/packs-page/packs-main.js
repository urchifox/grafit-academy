import {init as initAuthorization} from '../universal/authorization.js';
import {init as initFavoutite} from '../universal/favoutire-buttons.js';
import {init as initSorting} from './gallery-manager.js';
import {init as initScrollButton} from '../universal/scroll-up.js';
import './price-slider.js';

initAuthorization();
initSorting();
initFavoutite();
initScrollButton();
