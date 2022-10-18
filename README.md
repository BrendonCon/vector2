![Build Status](https://travis-ci.org/BrendonCon/vector2.svg?branch=master)
![devDependencies](https://david-dm.org/BrendonCon/vector2/dev-status.svg?style=flat})
![docs](https://readthedocs.org/projects/pip/badge/?version=latest)

# Vector2 

## Description
A [Vector](https://www.google.co.za/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=what+is+a+vector) 2D class for simulations and games. This class is written in [TypeScript](https://www.typescriptlang.org/) and compiled out to a [UMD]() module wrapped for easy consumption. Inspired by [Unity](https://unity3d.com/) and [Processings](https://processing.org/) [Vector](https://docs.unity3d.com/ScriptReference/Vector2.html) and [PVector](https://processing.org/reference/PVector.html) classes respectively.

## Install
Clone this repo and run `npm i`. A [postinstall](https://docs.npmjs.com/misc/scripts) script will build the files in the [src](src) and [dist](dist) folders. 

## Usage
This package is wrapped in a [UMD](https://github.com/umdjs/umd) wrapper ready for consumption by most common module types. See below for implementations:

```JavaScript
// ES2015
import Vector2 from 'vector2';

// CommonJS
const Vector2 = require('vector2');
```

Run `gulp dev` to run the file watchers. You can edit and change [Vector2](src/lib/Vector2.ts) and have the watchers execute the typescript task. When you are done editing you will need to package this for distribution by running the `gulp dist` task. 

When using the [Vector2](src/lib/Vector2.ts) class, you will have the following methods and properties exposed for use:

| Vector2 |
|:-------------|
| x: *number*     |
| y: *number*     |
| constructor(x: number, y: number) |
| set(x: number, y: number): *void* |
| limit(maxX: number, maxY: number): *void* |
| add(v: Vector2): *void* |
| sub(v: Vector2): *void* |
| mult(scalar: number): *void* |
| div(divisor: number): *void* |
| cross(v: Vector2): *number* |
| dot(v: Vector2): *number* |
| dist(v: Vector2): *number* |
| getAngle(): *number* |
| setAngle(angle: number): *number* |
| mag(): *number* |
| magSq(): *number* |
| normalize(): *void* |
| random(): *void* |
| copy(): *Vector2* |
| toArray(): *number[]* |
| toString(): *string* |
| isEqual(v: Vector2): *boolean* |
| zero(): *void* |
| abs(): *void* |
| negate(): *void* |
| lerp(): *void* |
| left(): *void* |
| right(): *void* |
| down(): *void* |
| up(): *void* |
| zero(): *void* |
| min(): *Vector2* |
| max(): *Vector2* |

## Folder Structure
- [.vscode](.vscode): Visual Studio Code configs here
- [dist](dist): public distribution and consumption folder
  - [lib](dist/lib): Vector2 lib UMD module files here
- [spec](spec): unit tests here
- [src](src): source code here
  - [lib](src/lib): Vector2 lib source files here

## Node Dependencies
As per usual you can find the dependencies in the [package.json](package.json). They are listed below for ease of use:
- [gulp](https://www.npmjs.com/package/gulp): build system magic
- [gulp-shell](https://www.npmjs.com/package/gulp-shell): execute command line statements in gulp
- [typescript](https://www.typescriptlang.org/): TypeScript compiler
- [typings](https://www.npmjs.com/package/typings): TypeScript type definition system
- [jasmine-es6](https://www.npmjs.com/package/jasmine-es6): Jasmine for unit tests in ES6
- [@types/jasmine](https://www.npmjs.com/package/@types/jasmine): type definition for Jasmine
- [babel](https://babeljs.io/): for compiling JavaScript

## Gulp Tasks
The build system makes of use of gulp on node. You can find all the build tasks in the [gulpfile](gulpfile.babel.js). Below find a listing of the tasks available from the command line:
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