'use strict';

const Derequire = require('..');
const { expect } = require('chai');

const fs = require('fs');
const broccoli = require('broccoli');

let builder;

describe('broccoli-derequire', function() {
  afterEach(function() {
    if (builder) {
      builder.cleanup();
    }
  });

  it('has default patterns to replace require and define', async function() {
    let sourcePath = 'tests/fixtures/default-patterns';
    let tree = new Derequire(sourcePath);
    let expected = fs.readFileSync(sourcePath + '/output.js', { encoding: 'utf8' });

    builder = new broccoli.Builder(tree);
    await builder.build();
    let actual = fs.readFileSync(builder.outputPath + '/input.js', { encoding: 'utf8' });

    expect(actual).to.equal(expected);
  })

  it('can use a single pattern', async function() {
    let sourcePath = 'tests/fixtures/single-pattern';
    let tree = new Derequire(sourcePath, {
      pattern: { from: 'asdf', to: 'hjkl' }
    });
    let expected = fs.readFileSync(sourcePath + '/output.js', { encoding: 'utf8' });

    builder = new broccoli.Builder(tree);
    await builder.build();
    let actual = fs.readFileSync(builder.outputPath + '/input.js', { encoding: 'utf8' });

    expect(actual).to.equal(expected);
  })

  it('can use multiple patterns', async function() {
    let sourcePath = 'tests/fixtures/default-patterns';
    let tree = new Derequire(sourcePath, {
      files: ['matched-file.js'],
      patterns: [
        { from: 'require', to: 'eriuqer' },
        { from: 'define', to: 'enifed' }
      ]
    });
    let expected = fs.readFileSync(sourcePath + '/output.js', { encoding: 'utf8' });

    builder = new broccoli.Builder(tree);
    await builder.build();
    let actual = fs.readFileSync(builder.outputPath + '/input.js', { encoding: 'utf8' });

    expect(actual).to.equal(expected);
  })
});
