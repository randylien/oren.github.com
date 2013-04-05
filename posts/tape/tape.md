## Tape - test your client and the server with the same tool

![tape](https://a248.e.akamai.net/camo.github.com/50dd49050de38c87a28ab6aa0b09bbe2d042cba1/687474703a2f2f737562737461636b2e6e65742f696d616765732f746170655f64726976652e706e67)

I like substack's module, tape for testing both the client and the server.
I would like to demonstrate how to apply tape for client-side javascript.

First we need to use CommonJS in the browser. we'll do it by installing [browserify](https://github.com/substack/node-browserify).  
Read about it [here](https://github.com/oren/oren.github.com/blob/master/posts/browserify.md) if you have never heard about it.

Second we need to install [tape](https://github.com/substack/tape). 

Lets write a function for saving users. in the real app it might make an http call to our http endpoint that will take care of it. for now we'll just use setTimeout to mock that async call.  
saveUser.js:

```js
module.exports = function(user, cb) {
  // save user in our DB. in the real scenario this will be an async call to an http endpoint
  setTimeout(function() {
    cb && cb(200);
  });
};
```

And here is our tape test file, test/test-saveUser.js:

```js
var test = require('tape');

var saveUser = require('../saveUser.js');

test('timing test', function (t) {
    t.plan(1);

    saveUser({name: 'joe'}, function(result){
      t.equal(result, 200);
    });
});
```

We run our test with `node test/*' and should see output similar to  this:

    # save user
    ok 1 should be equal

    1..1
    # tests 1
    # pass  1
