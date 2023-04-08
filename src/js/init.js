'use strict';

import { ThemeMode } from './modules/ThemeMode.js';

new ThemeMode();

if (!window.matchMedia('(max-width: 992px)').matches) {
	appendScriptToBody('./dist/js/libs/ScrollSmoother.min.js');
}
appendScriptToBody('./dist/js/app.min.js');

function appendScriptToBody(src = '') {
	if (!src.trim()) {
		return;
	}
	const script = document.createElement('script');
	script.src = src;
	script.async = false;
	document.body.appendChild(script);
}
