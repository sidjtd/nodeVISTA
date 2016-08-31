/*global define*/
define([
   'jquery',
   'underscore',
   'backbone',
   'handlebars',
   'eventsView',
   'mvdmEvents/eventCollection',
   'management/managementModel',
   'text!mvdmEvents/mvdmEvents.hbs',
   'text!mvdmEvents/eventModal.hbs',
   'backgrid',
   'backgridCustomCells',
   'backgridSelectFilter',
   'backgridMomentCell'
], function ($, _, Backbone, Handlebars, EventsParentView, EventCollection, ManagementModel, EventsTemplate, EventModalTemplate) {
   'use strict';

   var MVDMEventsView = EventsParentView.extend({

      initialize: function () {

         this.management = new ManagementModel();

         this.listenTo(this.management, 'change', this.render);

         this.management.fetch();

         var selectOptions = ['create', 'list', 'describe', 'update', 'remove', 'unremove', 'delete'];

         MVDMEventsView.__super__.initialize.apply(this, [{
            webSocketRoute: 'mvdmEvents',
            eventCollection: EventCollection,
            template: EventsTemplate,
            eventModalTemplate: EventModalTemplate,
            selectField: 'type',
            selectOptions: _.union([{label: "All", value: null}],
               _.map(selectOptions, function(val) { return {label:val.toUpperCase(), value:val};})),
            columns: [{
               name: 'timestamp',
               label: 'Date',
               editable: false,
               cell: Backgrid.Extension.MomentCell.extend({
                  displayFormat: "MMM Do YYYY @ h:mm:ss a"
               })
            }, {
               name: 'domain',
               label: 'Domain',
               editable: false,
               cell: 'String'
            }, {
               name: 'type',
               label: 'Type',
               editable: false,
               cell: 'String',
               formatter: _.extend({}, Backgrid.CellFormatter.prototype, {
                  fromRaw: function (rawValue, model) {
                     return rawValue.toUpperCase()
                  }
               })
            }, {
               name: 'user',
               label: 'User',
               editable: false,
               cell: 'String',
               formatter: _.extend({}, Backgrid.CellFormatter.prototype, {
                  fromRaw: function (rawValue, model) {
                     return rawValue.name + ' (' + rawValue.id + ')'
                  }
               })
            }, {
               name: 'facility',
               label: 'Facility',
               editable: false,
               cell: 'String',
               formatter: _.extend({}, Backgrid.CellFormatter.prototype, {
                  fromRaw: function (rawValue, model) {
                     return rawValue.name + ' (' + rawValue.id + ' / ' + rawValue.stationNumber + ')'
                  }
               })
            }]
         }]);
      },
      render: function () {
         //call parent render
         MVDMEventsView.__super__.render.apply(this, [{
               management:this.management.toJSON()
            }]);
      }
   });

   return MVDMEventsView;
});