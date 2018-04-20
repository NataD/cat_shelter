// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var sourcemaps = require('gulp-sourcemaps');
// var autoprefixer = require('gulp-autoprefixer');
//
//
// gulp.task('scss', function() {
//     return gulp.src('sass/style.scss')
//         .pipe(sourcemaps.init())
//         .pipe(sass ({
//             errLogConsole: true,
//             outputStyle: 'nested',
//             sourceComments: false,
//         }).on("error", sass.logError))
// 		.pipe(autoprefixer({
// 				browsers:  [
// 					'last 3 chrome versions',
// 					'last 3 firefox versions',
// 					'last 3 opera versions',
// 					'last 3 safari versions',
// 					'last 3 ios versions',
// 					'android >= 4.0',
// 					'ie >= 10' 	// change to `last 3 ie versions` after IE12  release.
// 				]
// 			}))
// 		.pipe(sourcemaps.write())
// 		.pipe(gulp.dest('css'))
// })
//
//
// gulp.task('default', ['scss'], function() {
//     gulp.watch('sass/main.scss', ['scss'])
// });


var gulp = require('gulp'); //tells to use package gulp


function swallowError(error) {
    console.log(error);
    this.emit('end')
}

//konfiguracja SASS, moves scss file to the folder css and creates .css file
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
gulp.task('sass', function() {
    return gulp.src('sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'}))
        .on('error', swallowError)
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('css'))
});


//add watch to the task, will track all the changes made in folder scss, with files .scss
gulp.task('watch', function() {
    gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);