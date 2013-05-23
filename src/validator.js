/*jshint expr:true*/
define(function(require, exports, module) {
  var $ = require('$'),
    AraleValidator = require('arale-validator');

  var Validator = AraleValidator.extend({
    attrs: {
      explainClass: 'form-explain',
      itemClass: 'form-item',
      itemFocusClass: 'form-item-focus',
      itemErrorClass: 'form-item-error'
    }
  });

  module.exports = Validator;

});
