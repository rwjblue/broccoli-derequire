function() {
  var define, require;

  define('foo', [], function() {
    var define = 'blah';
  });

  require('foo');
}()
