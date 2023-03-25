/** If you are on Windows comment string bellow and use { gulp-fonter } commented on line 3 */
import fonter from 'gulp-fonter-unx';
// import fonter from "gulp-fonter";
import ttf2woff2 from 'gulp-ttf2woff2';
import { FontStyleGenerator } from './modules/generateFontStyle.js';

export const copyFonts = () => {
	return app.gulp.src(`${app.path.src.fonts}*{.woff,.woff2}`)
		.pipe(app.gulp.dest(app.path.build.fonts));
};

export const otfToTtf = () => {
	return app.gulp.src(`${app.path.src.fonts}*.otf`)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'Fonts',
				message: 'Error: <%= error.message %>',
			}),
		))
		.pipe(fonter({
			subset: [66, 67, 68, 69, 70, 71],
			formats: ['ttf'],
		}))
		.pipe(app.gulp.dest(app.path.src.fonts));
};

export const convertTtfToWoff = () => {
	return app.gulp.src(`${app.path.src.fonts}*.ttf`)
		.pipe(app.plugins.plumber(
			app.plugins.notify.onError({
				title: 'Fonts',
				message: 'Error: <%= error.message %>',
			}),
		))
		.pipe(fonter({
			formats: ['woff'],
		}))
		.pipe(app.gulp.dest(app.path.src.fonts))
		.pipe(app.gulp.src(`${app.path.src.fonts}*.ttf`))
		.pipe(ttf2woff2())
		.pipe(app.gulp.dest(app.path.src.fonts));
};

export const fontsStyle = () => {
	try {
		new FontStyleGenerator({
			prefix: 'c',
			cssFontsFile: `${app.path.srcFolder}/scss/fonts.scss`,
			sourceFontsDir: app.path.src.fonts,
		});
	} catch (err) {
		throw new Error('Error: ' + err.message);
	}

	return app.gulp.src(app.path.srcFolder);
};