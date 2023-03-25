'use strict';

export const Common = class {
	constructor() {
		this.device = this.checkWidth();
	}

	checkWidth() {
		const mobileWidth = 767;
		const tabletWidth = 1024;
		const largeWidth = 1200;
		const windowWidth = document.documentElement.clientWidth;

		if (mobileWidth > windowWidth) {
			return 'mobile';
		}

		if (tabletWidth > windowWidth) {
			return 'tablet';
		}

		if (tabletWidth > largeWidth) {
			return 'tablet';
		}

		return 'desktop';
	}
};
