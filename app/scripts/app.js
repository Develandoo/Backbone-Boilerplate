'use strict';

console.log('app.js loaded');

window.App = window.App || {};

App.version = '1425257653471';

require.config({
  baseUrl: 'scripts/',
  urlArgs: App.version
});

require(['collection/main.collection', 'model/main.model', 'view/main.view'], function(collection, model, view) {
  
  /**
   * use Handlebars like this: 
   * var html = FistWallet.templates.home({ some: data })  
   * $("body").html(html);
   */
       
});

