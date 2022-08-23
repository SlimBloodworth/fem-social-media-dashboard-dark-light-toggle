// initialize modules - imports all npm packages as modules
const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const browserSync = require('browser-sync');
const browsersync = require('browser-sync').create();

// use dart-sass for @use (sass compiler)- allows ability for @use and @ forward Sass rules
//sass.compiler = require('dart-sass');

//sass task - compile Sass in JavaScript files '.pipe' is a gulp function
function scssTask() {
    return src('app/scss/styles.scss', { sourcemaps: true }) //<- allows browser to tell you the original Sass file and where it came from. Makes it easier to debug
        .pipe(sass()) //uses gulp sass module
        .pipe(postcss([autoprefixer(), cssnano()])) //<- runs postcss plugins
        .pipe(dest('dist', { sourcemaps: '.' })); //<- sets destination for final compiled css file into dist folder and sets location to same folder "." - dist
}
// JS Task - runs file through babel to support older browsers
function jsTask() {
    return src('app/js/script.js', { sourcemaps: true })
        .pipe(babel({ presets: ['@babel/preset-env'] })) //<- just in case someone is using an outdated browser
        .pipe(terser()) //< - to minimize js file
        .pipe(dest('dist', { sourcemaps: '.' })); // <- sets destination of compiled file into dis folder and save sourcemap in same location '.'
}
// Browsersync - spins up a local server and syncs it to files and reloads loacl website when changes are made
function browserSyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: '.',
        },
        notify: {
            styles: {
                top: 'auto',
                bottom: 0,
            },
        },
    });
    cb();
}

function browserSyncReload(cb) {
    browsersync.reload();
    cb();
}
//Watch task - tells gulp to watch these files for changes and reload local website if changes are detected
function watchTask() {
    watch('*.html', browserSyncReload);
    watch(['app/scss/**/*.scss', 'app/**/*.js'], series(scssTask, jsTask, browserSyncReload));
}
// Default Gulp task - is what gulp will run when 'gulp' in typed in the command line
exports.default = series(scssTask, jsTask, browserSyncServe, watchTask);