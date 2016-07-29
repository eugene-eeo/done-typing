var test = require('tape');
var done_typing = require('../done-typing');


test('arguments to config.before', function(t) {
  t.plan(2);

  var given = [];
  var bound = {};
  var fn = done_typing({
    before: function(arg) {
      t.equal(arg,  given);
      t.equal(this, bound);
    }
  });

  fn.call(bound, given);
});

test('arguments to config.after', function(t) {
  t.plan(2);

  var given = [];
  var bound = {};
  var fn = done_typing({
    after: function(arg) {
      t.equal(arg,  given);
      t.equal(this, bound);
    },
    delay: 0,
  });

  fn.call(bound, given);
});

test('correct execution order', function(t) {
  t.plan(2);

  var arg1 = {};
  var arg2 = {};

  var fn = done_typing({
    before: function(arg) {
      t.equal(arg, arg1);
    },
    after: function(arg) {
      t.equal(arg, arg2);
    },
    delay: 10,
  });

  fn(arg1);
  fn(arg2);
});
