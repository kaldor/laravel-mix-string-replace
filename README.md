# Laravel Mix String Replace
[![Latest Version on NPM](https://img.shields.io/npm/v/laravel-mix-string-replace.svg?style=flat-square)](https://npmjs.com/package/laravel-mix-string-replace)
[![npm](https://img.shields.io/npm/dt/laravel-mix-string-replace.svg?style=flat-square)](https://www.npmjs.com/package/laravel-mix-string-replace)
[![Software License](https://img.shields.io/npm/l/laravel-mix-string-replace.svg?style=flat-square)](LICENSE)

This extension adds support for [string-replace-loader](https://github.com/Va1/string-replace-loader) to [Laravel Mix](https://github.com/JeffreyWay/laravel-mix).

## Installation

```
npm i -D laravel-mix-string-replace
```

## Usage

Require the extension inside your ``webpack.mix.js`` and add string replace configurations like this:

```javascript
const mix = require('laravel-mix');

require('laravel-mix-string-replace');

mix
  .sass('src/styles/_style.scss', 'style.css')

  // replace the text "GIT_VERSION" with text provided by the function getVersionTag
  .stringReplace({
    test: /_style\.scss$/,
    loader: 'string-replace-loader',
    options: {
      search: 'GIT_VERSION',
      replace: getVersionTag,
    }
  })
```

Note that this plugin is likely to change to clean up the interface before it reaches version 1.0.0.

For more information about string-replace-loader configurations please refer to their [documentation](https://github.com/Va1/string-replace-loader/blob/master/README.md).