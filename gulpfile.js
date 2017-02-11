//$ npm install gulp-sass --save-dev
var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// Live-reloading 
var browserSync = require('browser-sync').create();
//Concatenates 
var useref = require('gulp-useref');
//Minifica 
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var babel = require('gulp-babel'); 
//Otimiza Imgs 
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache'); 


//Otimiza IMG da pasta IMAGENS
gulp.task('imagenstemplate', function(){
  return gulp.src('./app/assets/imagens/template/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
    interlaced: true
  })))
  .pipe(gulp.dest('./dist/app/assets/imagens/template/'))
}); 

gulp.task('imagensjqueryui', function(){
  return gulp.src('./app/assets/imagens/jquery-ui/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
    interlaced: true
  })))
  .pipe(gulp.dest('./dist/app/assets/imagens/jquery-ui/'))
}); 

gulp.task('imagensanuncios', function(){
  return gulp.src('./app/assets/imagens/anuncios/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
    interlaced: true
  })))
  .pipe(gulp.dest('./dist/app/assets/imagens/anuncios/'))
}); 

// Otimiza todas as pastas do IMG
gulp.task('otimizeimg', ['imagensanuncios', 'imagensjqueryui','imagenstemplate']);
//Fim Otimização de IMG

gulp.task('images', function(){
  return gulp.src('./app/assets/imagens/*.+(png|jpg|jpeg|gif|svg)')
  // Caching images that ran through imagemin
  .pipe(cache(imagemin({
    interlaced: true
  })))
  .pipe(gulp.dest('./dist/app/assets/imagens/'))
}); 

//Gulp sass
gulp.task('sass', function() {
  return gulp.src('./app/assets/scss/**/*.scss') // Gets all files ending with .scss in app/scss
  .pipe(sass())
    .pipe(gulp.dest( './app/assets/css/'))//Atauliza o Dev  
    .pipe(browserSync.reload({
      stream: true
    }))
  });

//Otimização Arquivos CSS OU JS
gulp.task('useref', function(){
  return gulp.src('./app/*.html')
  .pipe(gulpIf('*.js', babel({
    presets: ['es2015']
  }))) 
  .pipe(useref()) 
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('./dist/app'))
  });

//Rodar no navegador  
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

// Gulp watch   
gulp.task('watch', ['browserSync', 'sass','useref'], function (){
  // Recarega navegador quando o arquivo HMTL, CSS, SCSS ou JS sofrem alterações.
  gulp.watch('./app/assets/scss/**/*.scss', ['sass']); 
  gulp.watch('./app/*.html', browserSync.reload); 
  gulp.watch('./app/assets/css/*.css', browserSync.reload); 
  gulp.watch('./app/assets/js/*.js', browserSync.reload); 
});

//Tarefa padrão 
gulp.task('default',['watch']);

