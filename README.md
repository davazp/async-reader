lector
======

[![Build Status](https://travis-ci.org/davazp/lector.svg?branch=master)](https://travis-ci.org/davazp/lector)
[![npm version](https://badge.fury.io/js/lector.svg)](https://badge.fury.io/js/lector)

*lector* is a library to deal with *readers*: computations with access
to some read-only context.

**This package is experimental and it is under active development. Expect backward-incompatible changes**.

## [Introduction to readers](./packages/lector/doc/tutorial.md)
## [Using lector with React and Redux](./packages/lector/doc/react-redux-integration.md)

## Overview

You define *readers* by chaining them with other readers

```javascript
import { ask, coroutine } from "lector";

const getVersion = ask.chain(context => context.version);

const f = coroutine(function*() {
  const version = yield getVersion;

  if (version === 1) {
    console.log("hello");
  } else {
    console.log("bye");
  }

  return version;
});
```

The `ask` reader is a built-in reader that just returns the whole
context. You can define a derived reader by calling `.chain`, which
will be called with the return value of the previous reader.

If you return another *Reader*, the resolved value of those will be
passed to the next reader.

Finally, you can provide the context to the function at the top of
your stack:

```javascript
f().run({version: 2})
```
