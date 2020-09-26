(function (window) {
    'use strict';
    var PAYMENT_SELECTOR = '[data-payment-info="form"]';
    var App = window.App;

    var DataStore = App.DataStore;
    var PaymentHandler = App.PaymentHandler;
    console.log(PaymentHandler)
    var modal = document.getElementById("ex1");

    var paymentHandler = new PaymentHandler(PAYMENT_SELECTOR);
    paymentHandler.addSubmitHandler(function (data) {
        modal.style.display = "block";
        var text = document.getElementById("pop_text");
        text.innerHTML = "Thank you for your payment, " + data["title"] + " " + data["username"];
    });

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    var span = document.getElementsByClassName("close")[0];

    span.onclick = function () {
        modal.style.display = "none";
    }
})(window);