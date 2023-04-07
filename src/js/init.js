'use strict';

if (!window.matchMedia('(max-width: 992px)').matches) {
	// load ScrollSmoother.min.js
	const ssScript = document.createElement('script');
	ssScript.src = './dist/js/libs/ScrollSmoother.min.js';
	ssScript.async = false;
	document.head.appendChild(ssScript);
}
// load app.min.js
const appScript = document.createElement('script');
appScript.src = './dist/js/app.min.js';
appScript.async = false;
document.head.appendChild(appScript);
