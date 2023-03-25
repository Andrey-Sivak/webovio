export const server = (done) => {
	app.plugins.browsersync.init({
		server: {
			baseDir: './',
		},
		notify: false,
		port: 3080,
	});
};
