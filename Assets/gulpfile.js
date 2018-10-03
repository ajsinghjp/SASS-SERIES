var   gulp = require('gulp');

var   sass = require('gulp-sass');

/* Compile Sass files to styleshees*/
gulp.task('sass', function(){
    // do something
    return gulp.src('src/sass/*.scss')
           .pipe(sass())
           .pipe(gulp.dest('dist/css'));
});

//Watcher Funtion for automate all task RUN after watch every time
gulp.task('watch', function(){
   
    gulp.watch('src/sass/*.scss', ['sass']);
   
});

//default task Run only one time after type command:gulp 
gulp.task('default', ['sass']);