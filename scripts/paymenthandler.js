(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;


    function PaymentHandler(selector) {

        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    PaymentHandler.prototype.addSubmitHandler = function (fn) {
        console.log('Setting submit handler for payment');
        this.$formElement.on('submit', function (event) {
            event.preventDefault();

            var data = $(this).serializeArray(); {};
            $(this).serializeArray().forEach(function (item) {
                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value);
            });
            console.log(data);
            fn(data);
            this.reset();
            this.elements[0].focus();
        });
    };

    App.PaymentHandler = PaymentHandler;
    window.App = App;

})(window);