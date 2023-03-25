import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`;
const srcFolder = `./src`;

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		// html: `${buildFolder}/`,
		files: `${buildFolder}/files/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		jsLibs: `${buildFolder}/js/libs/`,
	},
	src: {
		js: `${srcFolder}/js`,
		scss: `${srcFolder}/scss/style.scss`,
		tmpScss: `${srcFolder}/scss/tmp-calculator-css.scss`,
		html: `./*.html`,
		files: `${srcFolder}/files/**/*.*`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
		svg: `${srcFolder}/img/**/*.svg`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
		jsLibs: `${srcFolder}/js/libs/*.js`,
		fonts: `${srcFolder}/fonts/`,
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `./*.html`,
		files: `${srcFolder}/files/**/*.*`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
		jsLibs: `${srcFolder}/js/libs/*.js`,
	},
	clean: buildFolder,
	buildFolder,
	srcFolder,
	rootFolder,
};
