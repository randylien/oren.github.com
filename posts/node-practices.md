* Style Guide - http://nodeguide.com/style.html
* Avoid frameworks/abstractions (web, test, control flow) untill you feel a pain
* "use strict" at the top of every js file
* Process monitoring - I like Mon and Mongroup
* GET /health end-point
* Single entry point for dependencies and using Mocks during unit tests
* App should be able to run as a command line app - app = require('./app')
* Separate app initialization from app execution
* Use Callbacks when you want to know if something has finished
* Use Event Emitter when you want to notify someone multiple times or when you have many listeners
