import {init as initDisclaimer} from '../universal/disclaimer.js';
import {init as initAuthorization} from '../universal/authorization.js';
import {init as initSorting} from './gallery-manager.js';
import {init as initScrollButton} from '../universal/scroll-up.js';
import './price-slider.js';

initDisclaimer();
initAuthorization();
initSorting();
initScrollButton();
