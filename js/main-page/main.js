import {init as initSlider} from './slider.js';
import {render as renderPopularPacks} from './popular-packs-rendering.js';
import {init as initFavoutite} from '../universal/favoutire-buttons.js';
import {init as initNotifyButtons} from './notify-buttons.js';

initSlider();
renderPopularPacks();
initFavoutite();
initNotifyButtons();
