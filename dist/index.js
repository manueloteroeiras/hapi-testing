'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

var _sendEmail = require('./utils/sendEmail');

var _sendEmail2 = _interopRequireDefault(_sendEmail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create a server with a host and port
var server = new _hapi2.default.Server();

server.connection({
    host: '0.0.0.0',
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

// Add the route
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

// Start the server
server.start(function (err) {
    if (err) throw err;
    console.log('Server running at:', server.info.uri);
});