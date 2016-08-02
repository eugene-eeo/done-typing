var test = require('tape');
var simulant = require('simulant');
var done_typing = require('../done-typing');


function keydown(key) {
    return simulant('keydown', {key: key});
}

function keyup(key) {
    return simulant('keyup', {key: key});
}


test('callbacks receives event', function(t) {
    var input = document.createElement('input');
    var kd = keydown('t');
    var ku = keyup('t');

    t.plan(2);
    done_typing(input, {
        start: function(ev) {
            t.equal(ev, kd);
        },
        stop: function(ev) {
            t.equal(ev, ku);
        }
    });
    simulant.fire(input, kd);
    simulant.fire(input, ku);
});


test('correct execution order', function(t) {
    var input = document.createElement('input');
    var kd_1  = keydown('1');
    var kd_2  = keydown('2');
    var ku_1  = keyup('1');
    var ku_2  = keyup('2');

    t.plan(2);
    t.timeoutAfter(250);

    done_typing(input, {
        start: function(ev) {
            t.equal(ev, kd_1);
        },
        stop: function(ev) {
            t.equal(ev, ku_2);
        }
    });

    simulant.fire(input, kd_1);
    simulant.fire(input, ku_1);
    simulant.fire(input, keydown('3'));
    simulant.fire(input, keyup('3'));
    simulant.fire(input, kd_2);
    simulant.fire(input, ku_2);
});


test('unbind function', function(t) {
    var input = document.createElement('input');
    var called = false;
    var unbind = done_typing(input, {
        start: function(ev) {
            called = true;
        },
        stop: function(ev) {
            called = true;
        },
    });

    t.plan(1);
    unbind();
    simulant.fire(input, keydown('1'));
    simulant.fire(input, keyup('1'));
    t.equal(called, false);
    t.end();
});
