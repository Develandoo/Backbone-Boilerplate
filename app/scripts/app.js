'use strict';

console.log('app.js loaded');

requirejs.config({
  baseUrl: 'scripts/'
});

require(['collection/main.collection', 'model/main.model', 'view/main.view'], function(collection, model, view) {
  
  
       
});