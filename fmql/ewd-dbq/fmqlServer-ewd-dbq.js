var express = require('express');
var bodyParser = require('body-parser');
var qoper8 = require('ewd-qoper8');
var app = express();
app.use(bodyParser.json());

var q = new qoper8.masterProcess();

app.get('/fmqlEP', function (req, res) {
    var request = {
        hello: 'world',
        query: {
            fmql: req.query.fmql // 'DESCRIBE 2-1'
        }
    };
  q.handleMessage(request, function(response) {
    res.send(response);
  });
});

q.on('started', function() {
  this.worker.module = 'fmqlWorker-ewdq';
  app.listen(9000);
});

q.start();