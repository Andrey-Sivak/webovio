'use strict';

import { gsap } from 'gsap';

export const TopArticleAnimations = class {
	start = window.screen.height - 150;
	end = window.screen.height * 0.1;

	constructor(options) {
		this.defaults = {
			container: '.top-article',
			items: {
				right: '.top-article-header',
				left: '.top-article-quote',
			},
		};
		this.selectors = { ...this.defaults, ...options };
		this.scrollTrigger = {
			scrollTrigger: {
				trigger: this.selectors.container,
				start: `-=${this.start}`,
				end: `-=${this.end}`,
			},
		};

		if (isMobile) {
			this.animateContainer();
			return;
		}

		Object.keys(this.selectors.items).forEach(this.animateItems, this);
	}

	animateContainer() {
		gsap.fromTo(
			this.selectors.container,
			{
				opacity: 0,
				y: 200,
			},
			{
				opacity: 1,
				y: 0,
				...this.scrollTrigger,
			},
		);
	}

	animateItems(item) {
		const multiplier = item === 'right' ? -1 : 1;
		const startX = 250 * multiplier;
		const from = {
			opacity: 0,
			y: 200,
			x: startX,
		};
		const to = {
			opacity: 1,
			y: 0,
			x: 0,
			...this.scrollTrigger,
		};

		gsap.fromTo(this.selectors.items[item], from, to);
	}
};
