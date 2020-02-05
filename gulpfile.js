const { src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function server() {
	browserSync.init({
        server: "./",
        port: 8000
    });

    watch("assets/styles/**/*.scss", css);
    watch("*.html").on('change', browserSync.reload);
}

function css() {
	return src("assets/styles/**/*.scss")
		.pipe(sass().on('error', sass.logError))
		.pipe(dest('assets/styles'))
		.pipe(browserSync.stream());
}

exports.css = css;
exports.server = server;
exports.default = parallel(css, server);

