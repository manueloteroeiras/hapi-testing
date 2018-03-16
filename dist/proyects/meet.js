'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sendInvitation = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _dispatchEmail = require('../dispatchEmail');

var _dispatchEmail2 = _interopRequireDefault(_dispatchEmail);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendInvitation = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(payload, config) {
        var meet, ics;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        meet = payload.meet, ics = payload.ics;

                        meet.participants.map(function (user) {
                            var template_content = [{ "name": "guestName", "content": 'Hola ' + user.name }, { "name": "guestEmail", "content": user.email }, { "name": "roomCode", "content": meet.code }, { "name": "roomTitle", "content": meet.title }, { "name": "roomDate", "content": (0, _moment2.default)(meet.date).format('dddd') + ' ' + (0, _moment2.default)(meet.date).format('DD/MM/YYYY') + ' ' + (0, _moment2.default)(meet.date).subtract(3, 'hour').format('hh:mm A') }, { "name": "ownerName", "content": meet.owner.name }, { "name": "ownerEmail", "content": meet.owner.email }];

                            var params = {
                                message: {
                                    to: [{ email: user.email, name: user.name }],
                                    from_email: 'no-reply@insideone.com.ar',
                                    from_name: 'Inside One',
                                    subject: 'Videollamada: ' + meet.title + ' ' + (0, _moment2.default)(meet.date).format('dddd').substring(0, 3).toUpperCase() + ' ' + (0, _moment2.default)(meet.date).format('DD/MM/YYYY') + ' ' + (0, _moment2.default)(meet.date).subtract(3, 'hour').format('hh:mm A'),
                                    "global_merge_vars": [{
                                        "name": "LINK",
                                        "content": 'https://meet.insideone.cloud/' + meet.code
                                    }, {
                                        "name": "participants",
                                        "content": meet.participants.filter(function (item) {
                                            return item.email != user.email;
                                        })
                                    }, {
                                        "name": "hasParticipants",
                                        "content": meet.participants.filter(function (item) {
                                            return item.email != user.email;
                                        }).length
                                    }],
                                    "attachments": [{
                                        "type": "text/calendar",
                                        "name": "meeting.ics",
                                        "content": ics
                                    }]

                                },
                                template_name: 'meeting-invite',
                                template_content: template_content
                            };

                            return (0, _dispatchEmail2.default)(params);
                        });

                    case 2:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function sendInvitation(_x, _x2) {
        return _ref.apply(this, arguments);
    };
}();

exports.sendInvitation = sendInvitation;