## Client and Server tests looks the same with the Tape and Browserify

![tape](https://a248.e.akamai.net/camo.github.com/50dd49050de38c87a28ab6aa0b09bbe2d042cba1/687474703a2f2f737562737461636b2e6e65742f696d616765732f746170655f64726976652e706e67)

I like [tape](https://github.com/substack/tape), substack's module for testing both the client and the server.
I would like to demonstrate how to apply tape for client-side javascript.

If you want to jump into the code just run the [example website](https://github.com/oren/oren.github.com/tree/master/posts/tape/website).  
Install the dependencies with `npm install`, run `node watch-browserify` and open app.js, saveUser.js and test/test-saveUser.js.  
This is the directory structure of our sample website:  

    website
    ├── app.js                   // requiring saveUser.js in this file
    ├── app.min.js               // the output of browserify
    ├── index.html               // <script src="app.min.js"></script> 
    ├── package.json             // tape and browserify-watcher
    ├── saveUser.js              // CommonJS module
    ├── test
    │   └── test-saveUser.js     // tape test
    └── watch-browserify.js      // watching app.js and output app.min.js

First we need to use CommonJS in the browser. we'll do it by installing [browserify](https://github.com/substack/node-browserify) - `npm install browserify -g`. Read about it [here](https://github.com/oren/oren.github.com/blob/master/posts/browserify.md) if you have never heard about it.  
Second we need to install [tape](https://github.com/substack/tape) - `npm install tape`

Lets write a function for saving users. in the real app it might make an http call to our http endpoint that will take care of it. For now we'll just use setTimeout to mock that async call.
 
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

test('save user', function (t) {
  t.plan(1);  // you have to declare how many assertions are in your test

  saveUser({name: 'joe'}, function(result){
    t.equal(result, 200);  // using the === operator
  });
});
```

We run our test with `node test/*` and should see output similar to  this:

    # save user
    ok 1 should be equal

    1..1
    # tests 1
    # pass  1

Note - I didn't mention it but I use browserify-watcher to watch any changes in my js files and output app.min.js so i'll be able to use it in the html page - <script src="app.min.js"></script>. Look at [watch-browserify.js](https://github.com/oren/oren.github.com/blob/master/posts/tape/website/watch-browserify.js) to see how to use this module.
