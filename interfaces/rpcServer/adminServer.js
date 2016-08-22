var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);
var path = require('path');
var MVDM = require('../../../VDM/prototypes/mvdm');

function init() {
   app.use(function (req, res, next) {
      return next();
   });

   //default path goes to index.html
   app.get('/', function(req, res, next){
      res.sendFile(path.join(__dirname + '/static/index.html'));
   });

   MVDM.on('describe', function(mvdmData) {
      var resObj = {
         type: 'socketMessage',
         MVDM: 'DESCRIBE',
         data: {
            time: new Date(),
            type: 'DESCRIBE',
            userId: mvdmData.userId,
            facilityId: mvdmData.facilityId
         }
      };

      //send MVDM events to connected websocket clients
      expressWs.getWss('/').clients.forEach(function (client) {
         client.send(JSON.stringify(resObj));
      });
   });

   app.ws('/', function(ws, req) {

      //console.log("handle socket request");
   });

   app.listen(9001, function () {
      console.log('RPC Server Admin listening on port 9001!');
   });

   //static files
   app.use(express.static(__dirname + "/static")); //use static files in ROOT/public folder
   app.use(express.static(__dirname + "/node_modules")); //expose node_modules for bootstrap, jquery, underscore, etc.
}

module.exports.init = init;
