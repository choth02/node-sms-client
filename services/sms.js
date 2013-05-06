var argv = require('optimist').argv,
    sys = require('util'),
    sms = require("sms"),
    _ = require('underscore')._,
    Backbone = require('backbone');

if (argv.pin) {
    sms.pin(argv.pin);
}

var Service = function () {

    this.options = null;
    this.messages = null;

    this.init = function () {
        sys.log("Service is here to do something..");
    };

    this.set = function (options) {
        this.init();
        this.options = options;
    };

    this.call = function (servicename, method, id, params) {
        return this[servicename](method, id, params);
    };

    this.dataSource = function (ds) {
        this.ds = ds;
    };

    this.sendSms = function (input, callback) {
        sms.send({
            to: input.to,          // Recipient Phone Number
            text: input.message    // Text to send
        }, function(err, result) {
            // error message in String and result information in JSON
            if (err) {
                console.log(err);
            }
            console.log(result);
        });
    };

    // service methods

    this.hello = function (method, id, params) {
        return {msg: 'Hi there!', method: method, id: id, params: params};
    };

};

exports.Service = Service;
