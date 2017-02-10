  // npm install gulp gulp-uglify gulp-concat gulp-minify-css gulp-babel --save-dev
    var js  = [
    //'./js-source/vendor/jquery/*',         // Todos os arquivos do diretório Jquery
    './assets/js/custom.js',
    './assets/js/filter.js',
    './assets/js/filter-anuncios.js',
    //'./assets/js/script.js' 
]; 
    // Aqui nós carregamos o gulp e os plugins através da função `require` do nodejs
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var babel = require('gulp-babel'); 
     
gulp.task('js', function(){
   gulp.src(js)
   .pipe(concat('script.js'))
   .pipe(uglify())
   .pipe(gulp.dest('./dist/assets/js/'));
});

gulp.task('css', function(){
   gulp.src('./assets/css/styles.css')
   .pipe(concat('styles.css'))
   .pipe(minify())
   .pipe(gulp.dest('./dist/assets/css/'));
});

gulp.task('default',['js','css'],function(){
});



