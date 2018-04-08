const gulp = require('gulp');
const clean = require('gulp-clean');
const ts = require('gulp-typescript');
const livereload = require('gulp-livereload');
const nodemon = require("gulp-nodemon");

const tsProject = ts.createProject('tsconfig.json');

gulp.task('scripts', ['static'], () => {
    const tsResult = tsProject.src()
        .pipe(tsProject());

    return tsResult.js
        .pipe(gulp.dest('dist'));
});


gulp.task('static', ['clean'], () => {
    return gulp
        .src(['src/**/*.json'])
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
    return gulp
        .src('dist')
        .pipe(clean());
});

gulp.task('build', ['scripts']);

//Executa o build sempre que mudar qualquer arquivo json e ts
gulp.task('watch', ['build'], () => {
    return gulp.watch(['src/**/*.ts', 'src/**/*.json'], ['build']);
});

gulp.task('default', ['watch'], () => {
    // listen for changes
    livereload.listen();
    // configure nodemon
    nodemon({
        // the script to run the app
        script: 'dist/index.js',
        ext: 'js', 
        env: { 'NODE_ENV': 'development' }
    }).on('restart', function () {
        // when the app has restarted, run livereload.
        gulp.src('dist/index.js')
            .pipe(livereload());
    });
});