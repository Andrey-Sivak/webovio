'use strict';

import { Common } from './modules/Common.js';
import * as flsFunctions from './modules/functions.js';
import { Slider } from './Slider.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { Loader } from './modules/Loader.js';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

flsFunctions.isWebp();

window.webovioCommon = new Common();

new Loader(gsap);
new Slider('.slider');

gsap.to('.hero-section-top-note', {
	scrollTrigger: {
		trigger: '.hero-section',
		start: 'top top',
		scrub: true,
	},
	yPercent: -500,
});

gsap.to('.hero-section-heading', {
	scrollTrigger: {
		trigger: '.hero-section',
		start: 'top top',
		scrub: true,
	},
	yPercent: -50,
});

gsap.to('.hero-section-text', {
	scrollTrigger: {
		trigger: '.hero-section',
		start: 'top top',
		scrub: true,
	},
	yPercent: -200,
});

gsap.to('.hero-section-link', {
	scrollTrigger: {
		trigger: '.hero-section',
		start: 'top top',
		scrub: true,
	},
	yPercent: -350,
});
