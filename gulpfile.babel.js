import gulp from 'gulp';
import shell from 'gulp-shell';

class Build {
  init() {
    this._html();
    this._typescript();
    this._tests();
    this._watch();
    this._build();
    this._dist();
    this._dev();
    this._default();
  }

  _html() {
    gulp.task('html', () => {
      gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));
    });
  }

  _tests() {
    gulp.task('spec', ['typescript'], shell.task([
      'jasmine spec/*.spec.js'
    ]));
  }

  _typescript() {
    gulp.task('typescript', shell.task(['tsc']));
  }

  _build() {
    gulp.task('build', [
      'html',
      'typescript',
      'dist'
    ]);
  }

  _dist() {
    gulp.task('dist', () => {
      gulp.src('src/*.js')
        .pipe(gulp.dest('dist/'));
    });
  }

  _dev() {
    gulp.task('dev', [
      'html',
      'typescript',
      'spec',
      'watch'
    ]);
  }

  _default() {
    gulp.task('default', ['dev']);
  }

  _watch() {
    gulp.task('watch', () => {
      gulp.watch('src/**/*.html', ['html']);
      gulp.watch('**/*.ts', ['typescript']);
      gulp.watch(['spec/**/*.spec.ts', 'src/**/*.ts'], ['spec']);
    });
  }
}

const build = new Build();
build.init();
