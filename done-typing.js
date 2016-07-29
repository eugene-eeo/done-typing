function done_typing(elem, config) {
    var onStart = config.start || function() {};
    var onStop  = config.stop  || function() {};
    var delay   = config.delay || 200;

    var timeout = null;

    function down(ev) {
        if (timeout === null) {
            onStart(ev);
        }
        clearTimeout(timeout);
    }

    function up(ev) {
        timeout = setTimeout(function() {
            timeout = null;
            onStop(ev);
        }, delay);
    }

    elem.addEventListener('keydown', down);
    elem.addEventListener('keyup', up);
    return function() {
        elem.removeEventListener('keydown', down);
        elem.removeEventListener('keyup', up);
    };
};

if (typeof module !== 'undefined') {
    module.exports = done_typing;
}
