import {init as initDisclaimer} from './disclaimer.js';
import {init as initAuthorization} from './authorization.js';
import {init as initCart} from './cart.js';
import {init as initSorting} from './gallery-manager.js';
import {init as initScrollButton} from './scroll-up.js';
import {init as initSlider} from './slider.js';
import {render as renderPopularPacks} from './popular-packs-rendering.js';
import { ADRESS, studentsWorksInfo } from './students-pictures-data.js';
import './price-slider.js';

initDisclaimer();
initAuthorization();
initCart();
initSorting();
initScrollButton();
initSlider(document.body, studentsWorksInfo, ADRESS);
renderPopularPacks();
