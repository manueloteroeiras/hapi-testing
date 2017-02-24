'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_axios2.default.post('http://localhost:8000/send-email', {
    to: 'manuel.otero@line64.com',
    subject: 'testing multiple users',
    text: 'Bienvenido a virtualeetow',
    name: 'Manuel Otero'
}).then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.log(error);
});