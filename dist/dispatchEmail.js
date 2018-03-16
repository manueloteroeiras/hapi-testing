'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mandrill = require('mandrill-api/mandrill');

var mandrill_client = new mandrill.Mandrill(_config2.default.MANDRIL_API);

var dispatchEmail = function dispatchEmail(payload) {
    return new _promise2.default(function (resolve, reject) {
        mandrill_client.messages.sendTemplate(payload, function (result) {
            return resolve(result);
        }, function (e) {
            return reject(e);
        });
    });
};

exports.default = dispatchEmail;