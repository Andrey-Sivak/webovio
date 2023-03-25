import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import newer from 'gulp-newer';
import ifPlagin from 'gulp-if';
import browsersync from 'browser-sync';

export const plugins = {
	plumber,
	notify,
	newer,
	browsersync,
	if: ifPlagin,
};
