import {init as initDisclaimer} from '../universal/disclaimer.js';
import {init as initAuthorization} from '../universal/authorization.js';
import {init as initSlider} from './slider.js';
import {render as renderPopularPacks} from './popular-packs-rendering.js';
import {init as initScrollButton} from '../universal/scroll-up.js';
import { ADRESS, studentsWorksInfo } from './students-pictures-data.js';

initDisclaimer();
initAuthorization();
initSlider(studentsWorksInfo, ADRESS);
renderPopularPacks();
initScrollButton();
