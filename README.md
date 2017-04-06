![Build Status](https://travis-ci.org/BrendonCon/es2015-jasmine-sandbox.svg?branch=master)
![devDependencies](https://david-dm.org/BrendonCon/es2015-jasmine-sandbox/dev-status.svg?style=flat})
![docs](https://readthedocs.org/projects/pip/badge/?version=update)

# Vector2 

## Description
A vector 2d class for simulations and games. This class is written in TypeScript and compiled out to a [UMD]() module wrapped for easy consumption. Inspired by [Unity]() and [Processings]() [Vector]() and [PVector]() classes respectively.

## Install
Clone this repo and run `npm i`. A postinstall script will build the files in the [src](src) and [dist](dist) folders. 

## Usage
This package is wrapped in a [UMD]() wrapper ready for consumption by most common module types. See below for implementations:

```JavaScript
// ES2015
import Vector2 from 'vector2';

// Node/CommonJS
const Vector2 = require('vector2');
```

Run `gulp dev` to run the file watchers. You can edit and change [vector2](src/lib/Vector2.ts) and have the watchers execute the typescript task. When you are done editing you will need to package this for distribution by running the `gulp dist` task. 

## Folder Structure
- [.vscode](.vscode): Visual Studio Code configs here
- [dist](dist): public distribution and consumption folder
  - [lib](dist/lib): Vector2 lib UMD module files here
- [spec](spec): unit tests here
- [src](src): source code here
  - [lib](src/lib): Vector2 lib source files here

## Node Dependencies
As per usual you can find the dependencies in the [package.json](package.json). They are listed below for ease of use:
- [gulp](): build system magic
- [gulp-shell](): execute command line statements in gulp
- [typescript](): TypeScript compiler
- [typings](): TypeScript type definition system
- [jasmine-es6](): Jasmine for unit tests in ES6
- [@types/jasmine](): type definition for Jasmine
- [babel](): for compiling JavaScript

## Gulp Tasks
The build system makes of use of gulp on node. You can find all the build tasks in the [gulpfile](gulp.babel.js). Below find a listing of the tasks available from the command line:
- `gulp default`: runs the `gulp dev` task
- `gulp html`: moves [HTML](src) files from the [src](src) to te [dist](dist) folder
- `gulp spec`: executes Jasmine and runs the [unit tests](spec)
- `gulp typescript`: compiles [TypeScript](src/lib) into [JavaScript](dist/lib)
- `gulp dev`: runs `gulp html`, `gulp typescript`, `gulp spec` and `gulp watch`
- `gulp build`: moves [HTML](src) files, builds [TypeScript](src/lib) and creates [dist](dist/lib) lib
- `gulp dist`: moves transpiled file to the [dist](dist) folder
- `gulp watch`: runs watches for [HTML](src), [TypeScript](src/lib) and [Specs](spec)

## Visual Studio Code users
I have included my [settings.json](.vscode/settings.json) file in the [.vscode](.vscode) folder. Feel free to add, remove and change the settings to best suit your coding environment.

## MIT License

Copyright (c) 2017 Brendon Conradie

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.