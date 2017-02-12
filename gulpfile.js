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
//Deleta arquivos
var del = require('del');
//Definição de processos 
var runSequence = require('run-sequence');


//Otimiza IMG da pasta IMAGENS
gulp.task('images', function(){
  return gulp.src('./app/assets/imagens/**/*.+(png|jpg|jpeg|gif|svg)')
  // Cache de imagens que foram executadas através de imagemin
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
  // Minifica  arquivos js e ECMAScript 
  .pipe(gulpIf('*.js', babel({
    presets: ['es2015']
  }))) 
  .pipe(useref()) 
  // Minifica  arquivos css
  .pipe(gulpIf('*.css', cssnano({
    discardComments: {removeAll: true}
  })))
  .pipe(gulp.dest('./dist/app'))
  });

//Copiar fonts
gulp.task('fonts', function() {
  return gulp.src('./app/assets/fonts/*')
 .pipe(gulp.dest('./dist/app/assets/fonts/'))
})

//Deleta arquivos
gulp.task('clean:dist', function() {
  return del.sync('./dist');
})

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

//Gerar buil do projeto
gulp.task('build', function (callback) {
  runSequence('clean:dist', 'sass',
    ['images', 'fonts', 'useref'],
    callback
  )
})

//Tarefa padrão 
gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
})