done_typing = function done_typing(config) {
  var before = config.before || function() {};
  var after  = config.after  || function() {};
  var delay  = config.delay  || 200;

  var stopped = true;
  var timeout = null;

  return function() {
    var ctx  = this;
    var args = arguments;

    stopped = false;
    if (timeout === null) {
      before.apply(ctx, args);
    }

    clearTimeout(timeout);
    timeout = setTimeout(function() {
      stopped = true;
      timeout = null;
      after.apply(ctx, args);
    }, delay);
  }
};
