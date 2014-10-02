(function() {
  var define, require;

  define = function() {};
  require = function() {};

  define('foo', [], function() {
    var define = 'blah';
  });

  require('foo');
})();
