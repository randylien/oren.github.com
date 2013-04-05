var test = require('tape');

var saveUser = require('../saveUser.js');

test('save user', function (t) {
    t.plan(1);

    saveUser({name: 'joe'}, function(result){
      t.equal(result, 200);
    });
});
