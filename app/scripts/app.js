'use strict';

console.log('app.js loaded');

var App = App || {};

App.version = '{ VERSION }';

require.config({
  baseUrl: 'scripts/',
  urlArgs: App.version
  
});

define(['routes/router'], function(collection, model, view) {
  
  /**
   * use Handlebars like this: 
   * var html = FistWallet.templates.home({ some: data })  
   * $("body").html(html);
   */
       
});

