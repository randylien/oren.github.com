* Dependency Injection
* Callbacks
* Event emitter

Dependency Injection

    ping = require('./ping.js);
    mailer = require('./mailer.js');

    ping(['bar.com', 'foo.com'], mailer);

Using a callback

    ping = require('./ping.js);

    ping(['bar.com', 'foo.com'], function(data) {
      mailer('server is down', data); 
    };

Using an event emitter

    pinger = require('./pinger.js');

    pinger.init(['bar.com', 'foo.com']);

    pinger.on('ping', function(data) {
      mailer('server is down', data); 
    };
    pinger.on( 'ping', worker1.sendEmail(data) );
    pinger.on( 'ping', logger1.logStuff(data) );


