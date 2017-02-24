'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _welcome = require('../templates/welcome');

var _welcome2 = _interopRequireDefault(_welcome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create reusable transporter object using the default SMTP transport


var sendEmail = function sendEmail(props, config) {
    var transporter = _nodemailer2.default.createTransport({
        service: 'gmail',
        auth: {
            user: config.GMAIL_USER,
            pass: config.GMAIL_PASS
        }
    });

    var mailOptions = {
        from: props.from || 'customservice@hapi.com',
        to: props.to || '',
        subject: props.subject, // Subject line
        text: props.text,
        html: (0, _welcome2.default)(props) // html body
    };

    transporter.sendMail(mailOptions, function (error, info) {
        return error ? 500 : 200;
    });
};

// templeates
exports.default = sendEmail;