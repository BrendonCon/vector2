import { task, src, dest, series, watch } from 'gulp';
import shell from 'gulp-shell';

class Build {
  constructor() {
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
    task('html', () => {
      src('src/**/*.html')
        .pipe(dest('dist'));
    });
  }

  _tests() {
    task('spec', series('typescript', () => {
      shell.task(['jasmine spec/*.spec.js']) 
    }));
  }

  _typescript() {
    task('typescript', shell.task(['tsc']));
  }

  _build() {
    task('build', series(
      'html',
      'typescript',
      'dist'
    ));
  }

  _dist() {
    task('dist', () => {
      src('src/lib/*.js')
        .pipe(dest('dist/lib/'));
    });
  }

  _dev() {
    task('dev', [
      'html',
      'typescript',
      'spec',
      'watch'
    ]);
  }

  _default() {
    task('default', ['dev']);
  }

  _watch() {
    task('watch', () => {
      watch('src/**/*.html', ['html']);
      watch('**/*.ts', ['typescript']);
      watch(['spec/**/*.spec.ts', 'src/**/*.ts'], ['spec']);
    });
  }
}

const build = new Build();