# ⌨ done-typing

Browser-only JS library for efficiently detecting and running callbacks
when the user has just started typing, and when the user stops typing on
the keyboard. Useful for form validation and [fancy demos](https://eugene-eeo.github.io/done-typing).
Example usage:

```js
input.addEventListener('keyup', done_typing({
    before: function() { /* ... */ },
    after:  function() { /* ... */ },
    delay:  200,
}));
```

Install it just by dropping the `done-typing.js` file somewhere.
