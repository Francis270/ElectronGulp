var gulp = require('gulp')
var sass = require('gulp-sass')
var concat = require('gulp-concat');

gulp.task('sass', function() {
	return gulp.src('Public/CSS/SASS/**.scss')
		.pipe(concat('Style.scss'))
		.pipe(sass())
		.pipe(gulp.dest('Public/CSS'))
})

gulp.task('watch', function() {
	gulp.watch('Public/CSS/SASS/**.scss', ['sass'])
})
