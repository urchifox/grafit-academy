import {init as initDisclaimer} from '../universal/disclaimer.js';
import {init as initAuthorization} from '../universal/authorization.js';
import {init as initSlider} from './slider.js';
import {render as renderPopularPacks} from './popular-packs-rendering.js';
import {init as initFavoutite} from '../universal/favoutire-buttons.js';
import {init as initScrollButton} from '../universal/scroll-up.js';

initDisclaimer();
initAuthorization();
initSlider();
renderPopularPacks();
initFavoutite();
initScrollButton();
