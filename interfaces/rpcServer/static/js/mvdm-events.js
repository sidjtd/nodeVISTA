(function(exports) {
   function initWebSocketClient() {
      // Let's open a web socket
      var ws = new WebSocket("ws://localhost:9001");

      ws.onopen = function()
      {
         // Web Socket is connected, send data using send()
         console.log("WebSocket: MVDM Event Handler is connected...");
      };

      ws.onmessage = function (event)
      {
         displayMvdmEvent(event.data);
      };

      ws.onclose = function()
      {
         // websocket is closed.
         console.log("WebSocket: MVDM Event Handler connection is closed...");
      };
   }

   function displayMvdmEvent(eventStr) {
      var event = JSON.parse(eventStr);

      console.log("Received MVDM event: " + event.MVDM);

      var eventData = event.data;

      var tableRow = '<tr>';
      tableRow += '<td>'+ eventData.time + '</td>';
      tableRow += '<td>'+ eventData.type + '</td>';
      tableRow += '<td>'+ eventData.userId + '</td>';
      tableRow += '<td>'+ eventData.facilityId + '</td>';
      tableRow += '</tr>';

      $('#mvdm-event-table tbody').append(tableRow);
   }

   exports.initWebSocketClient = initWebSocketClient;
})(this.mvdmEvents = {});

