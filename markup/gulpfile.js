var gulp = require('gulp'),
	browserSync = require('browser-sync').create(),
	// cleanCSS = require('gulp-clean-css'),
	// cmq = require('gulp-merge-media-queries'),
	mainBowerFiles = require('gulp-main-bower-files'),
	logger = require('gulp-logger'),
	flatten = require('gulp-flatten'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass');

gulp.task('serve', ['sass'], function () {

	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	gulp.watch("./scss/**/*.scss", ['sass']);
//	gulp.watch("./js/**/*.js", ['js:build']);
	gulp.watch("*.html", ['html']);

});

//gulp.task('mainfiles', ['js:build'], function () {
//	return gulp.src('./bower.json')
//		.pipe(mainBowerFiles())
//		.pipe(gulp.dest('./frontend/js'));
//});

gulp.task('sass', function () {
	return gulp.src("./scss/styles-test.scss")
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: [
				"last 2 version",
				"ie 10",
				"ios 6",
				"android 4"
			]
		}))
		// .pipe(cmq({log: true}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest("./css"))
		.pipe(browserSync.stream());
});

gulp.task('html', function () {
	return gulp.src("*./*.html")
		.pipe(browserSync.stream());
});

//gulp.task('js:build', function () {
//	return gulp.src("./js/**/*.js")
//		.pipe(flatten())
//		.pipe(logger({
//			before: 'js:buld started',
//			after: 'js:build finished'
//		}))
//		.pipe(gulp.dest("./public/js"))
//		.pipe(browserSync.stream());
//});


gulp.task('default', [ 'serve']);