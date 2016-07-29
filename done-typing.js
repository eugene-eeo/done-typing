function done_typing(elem, config) {
    var before  = config.before || function() {};
    var after   = config.after  || function() {};
    var delay   = config.delay  || 200;

    var timeout = null;

    function down(ev) {
        if (timeout === null) {
            before(ev);
        }
        clearTimeout(timeout);
    }

    function up(ev) {
        timeout = setTimeout(function() {
            timeout = null;
            after(ev);
        }, delay);
    }

    elem.addEventListener('keydown', down);
    elem.addEventListener('keyup', up);
    return function() {
        elem.removeEventListener('keydown', down);
        elem.removeEventListener('keyup', up);
    };
};
