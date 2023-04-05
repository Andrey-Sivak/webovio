'use strict';

export const Loader = class {
	loaderSelectors = {
		item: '.loader-item',
		logo: '.loader-logo',
		root: '.loader',
	};
	constructor(gsap = {}) {
		if (!Object.keys(gsap).length || !gsap.hasOwnProperty('timeline')) {
			return;
		}

		this.timelineLoader = gsap.timeline();

		this.init();
	}

	init() {
		const item = this.loaderSelectors.item;
		const logo = this.loaderSelectors.logo;
		const root = this.loaderSelectors.root;

		this.timelineLoader
			.set(item, { yPercent: -100 })
			.set(logo, { opacity: 0 })
			.to(item, {
				yPercent: 0,
				duration: 0.25,
				stagger: 0.25,
			})
			.to(item, {
				yPercent: 100,
				duration: 0.25,
				stagger: 0.25,
			})
			.to(logo, {
				opacity: 1,
				duration: 1,
				scale: 2,
			})
			.set(item, {
				yPercent: -100,
			})
			.to(logo, {
				opacity: 0,
				duration: 1,
				scale: 0.8,
			})
			.to(
				root,
				{
					yPercent: -100,
					duration: 1,
				},
				'-=0.2',
			);
	}
};
