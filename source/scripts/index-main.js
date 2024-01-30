import {init as initDisclaimer} from './disclaimer.js';
import {init as initAuthorization} from './authorization.js';
import {init as initCart} from './cart.js';
import {init as initSlider} from './slider.js';
import {render as renderPopularPacks} from './popular-packs-rendering.js';
import {init as initScrollButton} from './scroll-up.js';
import { ADRESS, studentsWorksInfo } from './students-pictures-data.js';

initDisclaimer();
initAuthorization();
initCart();
initSlider(document.body, studentsWorksInfo, ADRESS);
renderPopularPacks();
initScrollButton();
