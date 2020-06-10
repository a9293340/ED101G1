//全域安裝gulp-cligulp3.9.1      npm i gulp-cli -g  
//專案安專  npm i gulp@3.9.1 (node版本使用11.1)
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var fileinclude = require('gulp-file-include');
//browserSync的功能
var browserSync = require('browser-sync').create();
//browserSync 修正後重整功能
var reload = browserSync.reload;
var imagemin = require('gulp-imagemin');

// mac安裝有問題請使用
// sudo npm install --save-dev  --unsafe-perm node-sass
// 安裝node-sass 之後使用sudo npm install --save-dev gulp-sass安裝gulp-sass

// sass 轉譯
gulp.task('sass', function () {
    return gulp.src('./dev/sass/*.scss')//來源
      .pipe(sass().on('error', sass.logError)) //sass轉譯
      .pipe(gulp.dest('./dest/css')); //目的地
    });

// 搬圖檔(有放圖檔請放在dev的imgage內，新增圖檔時記得新增後於終端機輸入 gulp moveImg 指令)
// html之圖檔連結請使用./dest/image/路徑 不要使用開發路徑的圖檔)
gulp.task('moveImg',function(){
    //src 來源 
    return gulp.src('./dev/images/*/*')
    //pipe 透過管道 dest 目的地
    .pipe(gulp.dest('dest/images'))
})

// html 樣板
gulp.task('fileinclude', function () {
    gulp.src(['./dev/*.html'])
    .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
    }))
    .pipe(gulp.dest('./dest'));
});

// 壓圖
gulp.task('minimage',function(){
    gulp.src('./dev/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dest/images'))
    })

gulp.task('default',function(){
    gulp.watch('./dev/sass/*.scss',['sass']).on('change',reload);
    gulp.watch(['./dev/*.html','./dev/**/*.html'],['fileinclude']).on('change',reload);
})