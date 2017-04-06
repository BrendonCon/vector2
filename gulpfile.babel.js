
import gulp from 'gulp';
import shell from 'gulp-shell';

class Build {
  constructor() {
    this.html();
    this.typescript();
    this.tests();
    this.watch();
    this.build();
    this.dist();
    this.dev();
    this.default();
  }

  html() {
    gulp.task('html', () => {
      gulp.src('src/**/*.html')
        .pipe(gulp.dest('dist'));
    });
  }

  tests() {
    gulp.task('spec', shell.task([
      'jasmine spec/*.spec.ts'
    ]));
  }

  typescript() {
    gulp.task('typescript', shell.task([
      'tsc'
    ]));
  }

  build() {
    gulp.task('build', [
      'html',
      'typescript',
      'dist'
    ]);
  }

  dist() {
    gulp.task('dist', () => {
      gulp.src('src/lib/*.js')
        .pipe(gulp.dest('dist/lib/'));
    });
  }

  dev() {
    gulp.task('dev', [
      'html',
      'typescript',
      'spec',
      'watch'
    ]);
  }

  default() {
    gulp.task('default', [
      'dev'
    ]);
  }

  watch() {
    gulp.task('watch', () => {
      gulp.watch('src/**/*.html', ['html']);
      gulp.watch('**/*.ts', ['typescript']);
      gulp.watch('spec/**/*.spec.ts', ['spec']);
    });
  }
}

const build = new Build();