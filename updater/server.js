var http = require('http');
var spawn = require('child_process').spawn;

http.createServer(function(req, res) {
  if (req.method === 'POST' && req.url === '/update') {
    console.log('git pull');

    var git = spawn('git', ['pull', 'origin', 'master']);

    git.stdout.on('data', function (data) {
      console.log('stdout: ' + data);
    });

    git.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
    });

    git.on('exit', function (code) {
      console.log('child process exited with code ' + code);
    });
  }
  
  res.end();
}).listen(3000);

console.log('listening on http://localhost:3000');
