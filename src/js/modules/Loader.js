'use strict';

export const Loader = class {
	selectors = {
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

	calculateLogoScale() {
		const isMobile = window.matchMedia('(max-width: 650px)').matches;

		return isMobile ? 1.3 : 2;
	}

	init() {
		const item = this.selectors.item;
		const logo = this.selectors.logo;
		const root = this.selectors.root;

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
				scale: this.calculateLogoScale(),
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
					duration: 0.5,
				},
				'-=0.2',
			);
	}
};
