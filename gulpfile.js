const   gulp         = require('gulp'),
		browserSync  = require('browser-sync'),
		concat       = require('gulp-concat'),
		uglify       = require('gulp-uglify-es').default,
		autoprefixer = require('gulp-autoprefixer'),
		rsync        = require('gulp-rsync'),
		newer        = require('gulp-newer'),
		rename       = require('gulp-rename'),
		responsive   = require('gulp-responsive'),
		del          = require('del');

// Local Server
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: './'
		},
		notify: false,
	})
});
function bsReload(done) { browserSync.reload(); done(); };

gulp.task('styles', cb => {
	const sourcemaps = require('gulp-sourcemaps')
	const sass 		 = require('gulp-sass')
	const gcmq 		 = require('gulp-group-css-media-queries')
	const csso 		 = require('gulp-csso')

	return gulp.src([
		'resources/sass/main-styles.sass',
	])

	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(autoprefixer({
		grid: true,
		overrideBrowserslist: ['last 10 versions']
	}))
	.pipe(gcmq()) // group media quares
	.pipe(csso()) // compressed css files
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('css/'))
	.pipe(browserSync.stream())
	cb()
});

const browserify = ({ scripts, srcPath, dstPath }) => {
  	const sourcemaps 	= require('gulp-sourcemaps')
  	const browserify 	= require('browserify')
  	const babelify 		= require('babelify')
  	const source 		= require('vinyl-source-stream')
  	const buffer 		= require('vinyl-buffer')
  	const rename 		= require('gulp-rename')
  	const log 			= require('fancy-log')
  	const uglify 		= require('gulp-uglify')

 	scripts.forEach(fileName => {
    	const path = srcPath + fileName

	    const st = browserify({
	      	entries: path,
	      	debug: true,
	      	transform: [babelify.configure({
		        presets: [
		          	'@babel/env',
		          	'@babel/react'
		        ],
		        plugins: [
		          	'@babel/plugin-proposal-class-properties',
		          	'@babel/plugin-proposal-private-methods',
		          	'transform-react-jsx'
		        ]
	      	})]
	    }).bundle()
	    	.pipe(source(path))
	    	.pipe(buffer())
	    	.pipe(sourcemaps.init({ loadMaps: true }))

	    st
	    	.pipe(rename({ dirname: '' }))
	    	.on('error', log.error)
	    	.pipe(sourcemaps.write('.'))
	    	.pipe(gulp.dest(dstPath))
  	})
}

gulp.task('scripts', cb => {
  	browserify({
    	scripts: [
      		'app.js',
    	],
    	srcPath: 'resources/js/',
    	dstPath: `js/`
  	})
  	cb()
})

gulp.task('code', cb => {
	return gulp.src('./*.html')
	.pipe(browserSync.reload({ stream: true }))
	cb()
});

gulp.task('watch', function() {
	gulp.watch(['resources/sass/**/*.sass', 'resources/sass/**/*.scss'], gulp.parallel('styles'));
	gulp.watch(['resources/js/**/*.js', 'resources/js/**/*.jsx'], gulp.parallel('scripts'));
	gulp.watch(['./*.html', 'resources/js/**/*.js', 'resources/sass/**/*.sass', 'resources/sass/**/*.scss'], gulp.parallel('code'));
});

gulp.task('default', gulp.parallel('styles', 'scripts', 'browser-sync', 'watch'));
