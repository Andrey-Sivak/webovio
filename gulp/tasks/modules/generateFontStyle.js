import fs from 'fs';

export const FontStyleGenerator = class {
	weights = [
		'thin',
		'extralight',
		'light',
		'medium',
		'semibold',
		'bold',
		'extrabold',
		'black',
	];
	currentFont = {
		name: '',
		fileName: '',
		fileNameArray: [],
		style: '',
		weight: '',
	};

	constructor(options = {}) {
		this.defaults = {
			prefix: '',
			cssFontsFile: `${app.path.srcFolder}/scss/fonts.scss`,
			sourceFontsDir: `${app.path.srcFolder}/fonts`,
		};
		this.options = { ...this.defaults, ...options };

		try {
			fs.readdir(this.options.sourceFontsDir, this.readdirHandler.bind(this));
			return true;
		} catch (err) {
			throw new Error('Error: ' + err.message);
		}
	}

	getFontFileNameArray(fontFileName) {
		return fontFileName.split('-').map(f => f.toLowerCase());
	}

	getFontStyle() {
		const isItalic = this.currentFont.fileNameArray.findIndex((f) => f === 'italic') > 0;
		return isItalic ? 'italic' : 'normal';
	}

	getFontWeight() {
		const fontWeightIndex = this.weights.findIndex(
			(w) => this.currentFont.fileNameArray.find(
				(f) => f === w,
			),
		);

		return fontWeightIndex < 0 ? 400 : (fontWeightIndex + 1) * 100;
	}

	cb() {
	}

	readdirHandler(err, fontsFiles) {
		if (!fontsFiles) {
			return;
		}

		if (fs.existsSync(this.options.cssFontsFile)) {
			console.log(
				'\x1b[33m%s\x1b[0m',
				`${this.options.cssFontsFile} file already exist. Remove it`,
			);
			return;
		}

		fs.writeFile(this.options.cssFontsFile, '', this.cb);
		fontsFiles.forEach(this.handleFonts, this);
	}

	handleFonts(font) {
		if (!this.isValidFileName(font)) {
			throw new Error('Empty {fontFileName} string');
		}

		const currentFileName = font.split('.')[0];

		if (currentFileName === this.currentFont.fileName) {
			return;
		}

		this.currentFont.fileName = currentFileName;

		this.setCurrentFont();

		fs.appendFile(this.options.cssFontsFile, this.getCssFontFaceString(), this.cb);
	}

	isValidFileName(fontFileName = '') {
		return fontFileName && typeof fontFileName === 'string' && fontFileName.trim();
	}

	getCssFontFaceString() {
		const prefix = this.options.prefix ? this.options.prefix + '_' : '';
		const fontFamily = prefix === '' ?
			this.currentFont.name[0].toUpperCase() + this.currentFont.name.slice(1) :
			prefix + this.currentFont.name;

		return (
			`@font-face {
    font-family: '${fontFamily}';
    src: local('${this.currentFont.name[0].toUpperCase() + this.currentFont.name.slice(1)}'),
         url('../fonts/${this.currentFont.fileName}.woff2') format('woff2'), 
         url('../fonts/${this.currentFont.fileName}.woff') format('woff');
    font-style: ${this.currentFont.style};
    font-weight: ${this.currentFont.weight};
    font-display: swap;
    font-stretch: normal;
}
`);
	}

	setCurrentFont() {
		this.currentFont.fileNameArray = this.getFontFileNameArray(this.currentFont.fileName);
		this.currentFont.name = this.currentFont.fileNameArray[0];
		this.currentFont.weight = this.getFontWeight();
		this.currentFont.style = this.getFontStyle();
	}
};