'use strict';

import { Common } from './modules/Common.js';
import * as flsFunctions from './modules/functions.js';
import { Slider } from './Slider.js';

flsFunctions.isWebp();

window.webovioCommon = new Common();

new Slider('.slider');
