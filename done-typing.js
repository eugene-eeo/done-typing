function done_typing(config) {
  var before  = config.before || function() {};
  var after   = config.after  || function() {};
  var delay   = config.delay  || 200;
  var timeout = null;

  return function() {
    var ctx  = this;
    var args = arguments;

    if (timeout === null) {
      before.apply(ctx, args);
    }

    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      after.apply(ctx, args);
    }, delay);
  };
};

if (typeof module !== 'undefined') {
  module.exports = done_typing;
}
