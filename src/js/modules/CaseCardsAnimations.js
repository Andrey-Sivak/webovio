'use strict';

import { gsap } from 'gsap';

export const CaseCardsAnimations = class {
	start = window.screen.height - 150;
	end = window.screen.height * 0.1;

	constructor(options) {
		this.defaults = {
			card: '.case-card',
			container: '.case-cards',
		};
		this.selectors = { ...this.defaults, ...options };
		const cards = [...document.querySelectorAll(this.selectors.card)];

		if (!isMobile) {
			cards.forEach(this.animateCard, this);
		}
	}

	animateCard(card) {
		gsap.set(card, {
			opacity: 0,
			yPercent: 300,
		});

		const to = {
			yPercent: 0,
			opacity: 1,
			stagger: 0.2,
			scrollTrigger: {
				trigger: this.selectors.container,
				start: `-=${this.start}`,
				end: `-=${this.end}`,
			},
		};

		if (!isMobile) {
			to.stagger = 0.2;
		}

		gsap.to(this.selectors.card, to);
	}
};
