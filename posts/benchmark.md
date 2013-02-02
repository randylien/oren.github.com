![cat](http://2.bp.blogspot.com/_SKElCv5NTzM/S7FhgagFjGI/AAAAAAAAAD8/9r15ywR169c/s1600/chase.jpg)

How to bencmark your Node app or Javascript code?  
I like to keep it simple and use [Date.getTime](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Date/getTime)

    var start = new Date().getTime(); // 1359845872815

    setTimeout(function() {
      console.log('Time in milliseconds', new Date().getTime() - start);
    }, 1000);

    // Time in milliseconds 1018

