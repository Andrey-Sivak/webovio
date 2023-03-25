import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { server } from './gulp/tasks/server.js';
import { images } from './gulp/tasks/images.js';
import { svgSprive } from './gulp/tasks/svgSprite.js';
import { jsLibs } from './gulp/tasks/jsLibs.js';
import {copyFonts, otfToTtf, convertTtfToWoff, fontsStyle} from './gulp/tasks/fonts.js';
import {html} from "./gulp/tasks/html.js";

global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugins: plugins,
};

function watcher() {
	gulp.watch(path.watch.files, copy);
	gulp.watch(path.watch.jsLibs, jsLibs);
	gulp.watch(path.watch.html, scss);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.js, scss);
	gulp.watch(path.watch.images, images);
}

export { svgSprive };

const generateFonts = gulp.series(otfToTtf, convertTtfToWoff, fontsStyle);

const mainTasks = gulp.parallel(copy, copyFonts, jsLibs, scss, js, images);

const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);

export { dev };
export { build };

gulp.task('default', dev);
gulp.task('make:fonts', generateFonts);
