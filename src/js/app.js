'use strict';

import { Common } from './modules/Common.js';
import * as flsFunctions from './modules/functions.js';
import { Slider } from './Slider.js';
import { gsap } from 'gsap';
import { Loader } from './modules/Loader.js';

flsFunctions.isWebp();

window.webovioCommon = new Common();

new Loader(gsap);
new Slider('.slider');
