const Filter = require('broccoli-filter');
const derequire = require('derequire');

class Derequire extends Filter {

  constructor(inputTree, options = {}) {
    super(inputTree, options);

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
  }

  processString(str) {
    return derequire(str, this.patterns);
  }
}

Derequire.prototype.extensions = ['js'];
Derequire.prototype.targetExtension = 'js';

module.exports = Derequire;
