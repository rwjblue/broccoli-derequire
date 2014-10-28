# broccoli-derequire

[![Build Status](https://travis-ci.org/rwjblue/broccoli-derequire.svg?branch=master)](https://travis-ci.org/rwjblue/broccoli-derequire)

## Summary

Uses [derequire](https://github.com/calvinmetcalf/derequire) to replace all occurances of a given token with another (`require` with `_dereq_` by default).

## Installation

```bash
npm install --save-dev broccoli-derequire
```

## Usage

### Files

```javascript
var derequire = require('broccoli-derequire');
```

## Documentation

### `derequire(inputTree, options)`

---

`options.patterns` *{Array}*

A list of objects with `from` and `to` properties.

---

`options.pattern` *{Object}*

A single pattern with `from` and `to` properties.

## ZOMG!!! TESTS?!?!!?

I know, right?

Running the tests:

```javascript
npm install
npm test
```

## License

This project is distributed under the MIT license.
