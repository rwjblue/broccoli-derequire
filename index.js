var Filter = require('broccoli-filter');
var derequire = require('derequire');

function Derequire (inputTree, options) {
  if (!(this instanceof Derequire)) return new Derequire(inputTree, options);

  Filter.call(this, inputTree, options); // this._super()

  options = options || {};

  this.inputTree   = inputTree;
  this.files       = options.files || [];
  this.description = options.description;

  if (options.patterns) {
    this.patterns = options.patterns;
  } else if (options.pattern) {
    this.patterns = [options.pattern];
  } else {
    this.patterns = [
      { from: 'require', to: 'eriuqer' },
      { from: 'define', to: 'enifed' }
    ];
  }
};
Derequire.prototype = Object.create(Filter.prototype);
Derequire.prototype.constructor = Derequire;

Derequire.prototype.extensions = ['js'];
Derequire.prototype.targetExtension = 'js';

Derequire.prototype.processString = function (str) {
    return derequire(str, this.patterns);
};

module.exports = Derequire;
