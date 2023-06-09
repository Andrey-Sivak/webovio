'use strict';

export const PortfolioAnimations = class {
	start = window.screen.height - 50;
	end = window.screen.height * (isMobile ? 0.1 : 0.3);

	constructor(options = {}) {
		this.defaults = {
			item: '.article',
			elemToAnimate: '.article-content',
		};
		this.selectors = { ...this.defaults, ...options };
		this.items = [...document.querySelectorAll(this.selectors.item)];

		if (!isMobile) {
			this.items.forEach(this.animateItem, this);
			return;
		}

		this.items.forEach(this.animateItemMob, this);
	}

	animateItem(item, idx) {
		const multiplier = idx % 2 === 0 ? 1 : -1;
		const startX = 50 * multiplier;

		gsap.fromTo(
			item.querySelector(this.selectors.elemToAnimate),
			{
				opacity: 0,
				x: startX,
			},
			{
				opacity: 1,
				x: 0,
				scrollTrigger: {
					trigger: item,
					start: `-=${this.start}`,
					end: `-=${this.end}`,
					scrub: true,
				},
			},
		);
	}

	animateItemMob(item) {
		gsap.fromTo(
			item.querySelector(this.selectors.elemToAnimate),
			{
				opacity: 0,
			},
			{
				opacity: 1,
				x: 0,
				scrollTrigger: {
					trigger: item,
					start: `-=${this.start}`,
					end: `-=${this.end}`,
					scrub: true,
				},
			},
		);
	}
};
