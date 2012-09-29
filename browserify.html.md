---
date: 2012-09-27
title: Browserify
authorLink: 'https://github.com/oren'
authorName: 'oren'
authorImage: 'https://secure.gravatar.com/avatar/ea28a1533185f15e9364a8db6f9c0bae?s=140&d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png'
layout: post
---

How do you organize your client side js code?
The node.js guys decided to use the CommonJS approach - each function in it's own file
and you simply require the file you want to use:

saveUser.js

```js
module.exports = function(userId) {
  // save user in DB
  console.log('user' + userId + ' saved in DB');
};
```
   
server.js

```js
var foo = require('./saveUser.js');
foo(1);
```

ok. that's great, but how is that relevant to client-side js?
I am glad you asked. I use a tool called [browserify](https://github.com/substack/node-browserify) that let me use CommonJS in the browser!
let's jump right in and show you how to use it.

browserify is a node.js package so just like any other node package, you got to have [node.js](http://nodejs.org) on your machine and you should use npm to install it

    npm install browserify -g

adding -g tells node to install this packages globaly - it will available anywhere and not only in the current directory.

    browserify server.js

    browserify server.js -o bundle.js

    browserify server.js -o bundle.js -w

