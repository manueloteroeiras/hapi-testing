'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _sendEmail = require('./utils/sendEmail');

var _sendEmail2 = _interopRequireDefault(_sendEmail);

var _meet = require('./proyects/meet');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var server = new _hapi2.default.Server();

server.connection({
    host: '0.0.0.0',
    // host: 'localhost',
    port: process.env.PORT || 8000,
    routes: {
        cors: true
    }
});

// Add the route
server.route({
    method: 'GET',
    path: '/',
    handler: function handler(request, reply) {
        return reply("Working!");
    }
});

server.route({
    method: 'POST',
    path: '/send-email',
    handler: function handler(request, reply) {
        (0, _sendEmail2.default)(request.payload, _config2.default).then(function (data) {
            return reply({ message: "Send Success", data: data });
        }).catch(function (error) {
            return reply('Error to sent!');
        });
    }
});

server.route({
    method: 'POST',
    path: '/payment/success',
    handler: function handler(request, reply) {
        (0, _sendEmail2.default)(request.payload, _config2.default).then(function (data) {
            return reply({ message: "Send Success", data: data });
        }).catch(function (error) {
            return reply('Error to sent!');
        });
    }
});

server.route({
    method: 'POST',
    path: '/payment/cancel',
    handler: function handler(request, reply) {
        (0, _sendEmail2.default)(request.payload, _config2.default).then(function (data) {
            return reply({ message: "Send Success", data: data });
        }).catch(function (error) {
            return reply('Error to sent!');
        });
    }
});

// Meet
server.route({
    method: 'POST',
    path: '/meet/invitation',
    handler: function handler(request, reply) {
        (0, _meet.sendInvitation)(request.payload, _config2.default).then(function (data) {
            return reply({ message: "Send Success", data: data });
        }).catch(function (error) {
            return reply('Error to sent!');
        });
    }
});

server.start(function (err) {
    if (err) throw err;
    console.log('Server running at:', server.info.uri);
});