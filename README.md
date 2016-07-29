# done-typing

Browser-only JS library for efficiently detecting and running
callbacks when the user has just started typing, and when the
user stops typing on the keyboard. Useful for form validation
and [fancy demos](https://eugene-eeo.github.io/done-typing).
Example usage:

```js
var unbind = done_typing(input, {
    start: function() { /* ... */ },
    stop:  function() { /* ... */ },
    delay: 200,
}));

// after the love is gone
unbind();
```

Install it just by dropping the `done-typing.js` file somewhere.
