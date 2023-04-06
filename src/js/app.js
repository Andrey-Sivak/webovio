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
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

flsFunctions.isWebp();

new Loader();

ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content',
	smooth: 1.2,
	effects: true,
});

if (isMobile) {
	[...document.querySelectorAll('[data-speed=".9"]')].forEach((item) => {
		item.dataset.speed = '.95';
	});

	[...document.querySelectorAll('[data-speed="1.1"]')].forEach((item) => {
		item.dataset.speed = '1.05';
	});
}

new Slider('.slider');
new PortfolioAnimations();
new TopArticleAnimations();
new CaseCardsAnimations();
