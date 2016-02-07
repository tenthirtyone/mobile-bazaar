var gulp      = require('gulp'),
  concat      = require('gulp-concat'),
  del         = require('del'),
  htmlreplace = require('gulp-html-replace'),
  jshint      = require('gulp-jshint'),
  open        = require('gulp-open'),
  os          = require('os'),
  rename      = require('gulp-rename'),
  scss        = require('gulp-sass'),
  uglify      = require('gulp-uglify');

var buildDir = '/var/www/html/';

var browser = os.platform() === 'linux' ? 'google-chrome' : (
os.platform() === 'darwin' ? 'google chrome' : (
os.platform() === 'win32' ? 'chrome' : 'firefox'));   

var htmlReplaceStrings = {
        'css': 'styles/styles.css',
        'scripts': 'scripts/scripts.js',
        'vendors': 'scripts/vendors.js'
    };

var vendorFiles = [
  'bower_components/angular/angular.js',
  'bower_components/angular-ui-router/release/angular-ui-router.js'
];

gulp.task('browse', function(){
  gulp.src('localhost')
    .pipe(open({app: browser}));
});

gulp.task('clean', function(){
  return del(buildDir, {force: true});
});

gulp.task('default', ['move', 'scss', 'scripts', 'views', 'vendor'], function(){
  gulp.src('dist/index.html')
    .pipe(open({app:browser}));
})

gulp.task('lint', function() {
  return gulp.src('app/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('move', ['clean'], function() {
 return gulp.src('app/index.html')
  .pipe(htmlreplace(htmlReplaceStrings))
  .pipe(gulp.dest(buildDir));
});

gulp.task('scss', ['clean'], function() {
  gulp.src('app/**/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('app/styles/'))
  
  gulp.src('app/**/*.css')
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(buildDir + 'styles/'))
})

gulp.task('scripts', ['clean'], function(){
  return gulp.src([
    'app/**/*.module.js',
    'app/**/*.js' 
  ])
    .pipe(concat('scripts.js'))
    //.pipe(uglify())
    .pipe(gulp.dest(buildDir + 'scripts/'));
})

gulp.task('views', ['clean'], function(){
  return gulp.src('app/**/*.html')
    .pipe(rename({dirname: ''}))
    .pipe(gulp.dest(buildDir + 'views'));		
    
})

gulp.task('vendor', ['clean'], function(){
  return gulp.src(vendorFiles)
      .pipe(concat('vendors.js'))
      //.pipe(uglify())
      .pipe(gulp.dest(buildDir + 'scripts/'));
})

