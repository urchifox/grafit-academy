import {init as initDisclaimer} from '../universal/disclaimer.js';
import {init as initAuthorization} from '../universal/authorization.js';
import {init as initCart} from '../universal/cart.js';
import {init as initSlider} from './slider.js';
import {render as renderPopularPacks} from './popular-packs-rendering.js';
import {init as initScrollButton} from '../universal/scroll-up.js';
import { ADRESS, studentsWorksInfo } from './students-pictures-data.js';

initDisclaimer();
initAuthorization();
initCart();
initSlider(document.body, studentsWorksInfo, ADRESS);
renderPopularPacks();
initScrollButton();
