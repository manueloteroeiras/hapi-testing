'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _nodemailer = require('nodemailer');

var _nodemailer2 = _interopRequireDefault(_nodemailer);

var _welcome = require('../templates/welcome');

var _welcome2 = _interopRequireDefault(_welcome);

var _orderApproved = require('../templates/orderApproved');

var _orderApproved2 = _interopRequireDefault(_orderApproved);

var _orderCanceled = require('../templates/orderCanceled');

var _orderCanceled2 = _interopRequireDefault(_orderCanceled);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create reusable transporter object using the default SMTP transport
var sendEmail = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props, config) {
        var auth, transporter, mailOptions;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        auth = {
                            user: config.GMAIL_USER,
                            pass: config.GMAIL_PASS
                        };
                        transporter = _nodemailer2.default.createTransport({ service: 'gmail', auth: auth });
                        mailOptions = {
                            from: props.from ? props.from + ' <no-reply@foodcloud.com.ar>' : 'FoodCloud <no-reply@foodcloud.com.ar>',
                            to: props.to || '',
                            subject: props.subject, // Subject line
                            text: props.text,
                            html: props.type == 'welcome' ? (0, _welcome2.default)(props) : props.type == 'approved' ? (0, _orderApproved2.default)(props) : props.type == 'canceled' ? (0, _orderCanceled2.default)(props) : props.html // html body
                        };
                        _context.next = 5;
                        return transporter.sendMail(mailOptions);

                    case 5:
                        return _context.abrupt('return', _context.sent);

                    case 6:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function sendEmail(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

// templeates
exports.default = sendEmail;