'use strict';

export const ThemeMode = class {
	isDarkMode = false;
	darkClass = 'dark';

	constructor() {
		this.toggleButton = document.querySelector('.theme-mode');

		if (
			localStorage.theme === this.darkClass ||
			!('theme' in localStorage)
		) {
			this.darkMode();
		} else {
			this.lightMode();
		}

		this.toggleButton.addEventListener('click', this.toggleMode.bind(this));
	}

	lightMode() {
		this.isDarkMode = false;
		localStorage.theme = 'light';
		document.documentElement.classList.remove(this.darkClass);
		this.toggleButton.setAttribute('title', 'Apply dark mode');
	}

	darkMode() {
		this.isDarkMode = true;
		localStorage.theme = this.darkClass;
		document.documentElement.classList.add(this.darkClass);
		this.toggleButton.setAttribute('title', 'Apply light mode');
	}

	toggleMode(e) {
		e.preventDefault();

		if (this.isDarkMode) {
			this.lightMode();
			return;
		}

		this.darkMode();
	}
};
