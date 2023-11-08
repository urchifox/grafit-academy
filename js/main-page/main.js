import {init as initDisclaimer} from './disclaimer.js';
import {init as initSlider} from './slider.js';
import {render as renderPopularPacks} from './popular-packs-rendering.js';
import {init as initFavoutite} from '../universal/favoutire-buttons.js';
import {init as initScrollButton} from '../universal/scroll-up.js';

initDisclaimer();
initSlider();
renderPopularPacks();
initFavoutite();
initScrollButton();
