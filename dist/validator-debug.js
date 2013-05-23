/*jshint expr:true*/
define("kjui/validator/1.0.0/validator-debug", [ "$-debug", "arale/validator/0.9.2/validator-debug", "arale/validator/0.9.2/core-debug", "arale/widget/1.0.3/widget-debug", "arale/base/1.0.1/base-debug", "arale/class/1.0.0/class-debug", "arale/events/1.0.0/events-debug" ], function(require, exports, module) {
    var $ = require("$-debug"), AraleValidator = require("arale/validator/0.9.2/validator-debug");
    var Validator = AraleValidator.extend({
        attrs: {
            explainClass: "form-explain",
            itemClass: "form-item",
            itemFocusClass: "form-item-focus",
            itemErrorClass: "form-item-error"
        }
    });
    module.exports = Validator;
});
