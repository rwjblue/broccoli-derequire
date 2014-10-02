'use strict';

var derequire = require('..');
var expect = require('expect.js');

var fs = require('fs');
var broccoli = require('broccoli');

var builder;

describe('broccoli-derequire', function(){
  afterEach(function() {
    if (builder) {
      builder.cleanup();
    }
  });

  it('has default patterns to replace require and define', function(){
    var sourcePath = 'tests/fixtures/default-patterns';
    var tree = derequire(sourcePath);
    var expected = fs.readFileSync(sourcePath + '/output.js',  { encoding: 'utf8' });

    builder = new broccoli.Builder(tree);
    return builder.build().then(function(results) {
      var dir = results.directory
      var actual = fs.readFileSync(dir + '/input.js', { encoding: 'utf8'});

      expect(actual).to.equal(expected);
    });
  })

  it('can use a single pattern', function(){
    var sourcePath = 'tests/fixtures/single-pattern';
    var tree = derequire(sourcePath, {
      pattern: { from: 'asdf', to: 'hjkl' }
    });
    var expected = fs.readFileSync(sourcePath + '/output.js',  { encoding: 'utf8' });

    builder = new broccoli.Builder(tree);
    return builder.build().then(function(results) {
      var dir = results.directory
      var actual = fs.readFileSync(dir + '/input.js', { encoding: 'utf8'});

      expect(actual).to.equal(expected);
    });
  })

  it('can use multiple patterns', function(){
    var sourcePath = 'tests/fixtures/default-patterns';
    var tree = derequire(sourcePath, {
      files: [ 'matched-file.js' ],
      patterns: [
        { from: 'require', to: 'eriuqer' },
        { from: 'define', to: 'enifed' }
      ]
    });
    var expected = fs.readFileSync(sourcePath + '/output.js',  { encoding: 'utf8' });

    builder = new broccoli.Builder(tree);
    return builder.build().then(function(results) {
      var dir = results.directory;
      var actual = fs.readFileSync(dir + '/input.js', { encoding: 'utf8'});

      expect(actual).to.equal(expected);
    });
  })
});
