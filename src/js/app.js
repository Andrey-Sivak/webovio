'use strict';

import * as flsFunctions from './modules/functions.js';
import { Slider } from './Slider.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { Loader } from './modules/Loader.js';
import { PortfolioAnimations } from './modules/PortfolioAnimations.js';
import { TopArticleAnimations } from './modules/TopArticleAnimations.js';
import { CaseCardsAnimations } from './modules/CaseCardsAnimations.js';

window.isMobile = window.matchMedia('(max-width: 992px)').matches;
window.gsap = gsap;

const gsapPlugins = [ScrollTrigger];
if (!isMobile) {
	gsapPlugins.push(ScrollSmoother);
}
gsap.registerPlugin(...gsapPlugins);

flsFunctions.isWebp();

new Loader();

if (!isMobile) {
	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.2,
		effects: true,
	});
}

new Slider('.slider');
new PortfolioAnimations();
new TopArticleAnimations();
new CaseCardsAnimations();
