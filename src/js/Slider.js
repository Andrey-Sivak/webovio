'use strict';

import Swiper, { Autoplay } from 'swiper';

export const Slider = class {
	wrapClass = 'swiper-wrapper';
	itemClass = 'swiper-slide';
	constructor(sliderSelector) {
		if (window.matchMedia('(min-width: 1024px)').matches) {
			return;
		}

		this.sliderSelector = sliderSelector;

		this.wrapSlider();
		this.init();
	}

	wrapSlider() {
		const sliderWrap = document.querySelector(
			`${this.sliderSelector} > div`,
		);

		const slides = [...sliderWrap.children];

		sliderWrap.classList.add(this.wrapClass);
		slides.forEach(this.setItemClass, this);
	}

	setItemClass(item) {
		item.classList.add(this.itemClass);
	}

	init() {
		new Swiper(this.sliderSelector, {
			modules: [Autoplay],
			loop: true,
			noSwiping: true,
			speed: 5000,
			autoplay: {
				delay: 0,
			},
			// slidesPerGroup: 1,
			slidesPerView: 2,
			// slidesPerView: 'auto',
			spaceBetween: 20,
			breakpoints: {
				480: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 4,
				},
			},
		});
	}
};
