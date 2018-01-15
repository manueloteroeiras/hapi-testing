'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_moment2.default.lang('es');

var invite = function invite(props) {
  var _props$payload = props.payload,
      code = _props$payload.code,
      name = _props$payload.name,
      username = _props$payload.username,
      owner = _props$payload.owner,
      participants = _props$payload.participants,
      date = _props$payload.date;

  return '\n    <!doctype html>\n    <html>\n      <head>\n        <meta name="viewport" content="width=device-width" />\n        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />\n        <title>Meeting Invite</title>\n        <style>\n          body{\n            margin:0;\n            background-color: #F4F4F4;\n            font-family: Arial, Helvetica, sans-serif;\n            font-size:14px;\n            line-height:21px;\n            font-weight:400;\n            color: #5C6F7B;\n          }\n          .contenttable {\n            min-width: 640px !important;\n            background-color: #FFF;\n            border: solid 1px #D6E2EA;\n            border-radius: 3px;\n            margin: 30px auto;\n          }\n          .margin{\n            padding: 30px 30px 0px 30px;\n          }\n          .right{\n            text-align: right;\n            padding-right:30px;\n          }\n          .subtitle{\n            font-weight:200;\n            color: #8D9AA3;\n            font-size: 11px;\n            display: block;\n          }\n          .number{\n            font-size: 24px;\n            letter-spacing: -0.25px;\n            font-weight: 600;\n            color: #8D9AA3;\n          }\n          .data{\n            background-color: #D2E3EF;\n            padding: 20px 30px;\n            border-radius: 3px;\n            min-width: 100%;\n          }\n          .btn{\n            background-color: #F15C22;\n            color: #FFF;\n            font-weight: 600;\n            font-size: 14px;\n            text-decoration: none;\n            padding: 15px 30px;\n            border-radius:3px;\n            border-bottom: solid 1px #FF7540;\n          }\n          .meetingTitle{\n            font-size: 16px;\n            font-weight: 600;\n          }\n          .link{\n            padding: 10px 0px 10px 30px;\n            font-size: 11px;\n            line-height: 16.5px;\n          }\n          .link a{\n            color: #00B5CC;\n            text-decoration: none;\n          }\n          .participants{\n            padding: 15px 0px 0px 30px;\n          }\n          .separator{\n            padding-top: 30px;\n            border-bottom: solid 1px #D6E2EA;\n          }\n          .phone{\n            padding-top:30px;\n            text-align: center;\n            font-size:13px;\n          }\n          .stores {\n            padding-top: 15px;\n            font-size:13px;\n            text-align: center;\n          }\n          .labels {\n            text-align: center;\n            padding:15px 0;\n          }\n          @media only screen and (max-device-width: 480px) {\n              .contenttable {\n                max-width: 100% !important;\n                background-color: #FFF;\n                margin: 0px auto;\n                border: 0px;\n              }\n              .margin{\n                padding: 30px 20px 0px 20px;\n              }\n              .right{\n                padding-right:20px;\n              }\n              .btn{\n                width:100%;\n              }          \n              .link, .participants{\n                padding-left: 20px;\n              }\n            }\n          </style>\n      </head>\n      <body>\n          <table align="center" border="0" cellpadding="0" cellspacing="0" class="contenttable">\n           <!-- logo -->\n            <tr>\n              <td style="border-bottom: 1px solid #D6E2EA; text-align:center; width:100%">\n                <img src="https://s3-sa-east-1.amazonaws.com/insideone/insideone.png" height="45px" style="padding:15px 0 10px 0" title="Inside One">\n              </td>\n            </tr>\n            <!-- title -->\n            <tr>\n              <td>\n    \n                <table style="width:100%">\n                  <tr>\n                    <td class="margin">\n                      <span><strong>Hola ' + username + ',</strong><br />' + owner + ' te ha invitado a una video llamada</span>\n                    </td>\n                    <td class="right" style="padding-top:30px">\n                      <span class="subtitle">CODIGO</span>\n                      <span class="number">' + code + '</span>\n                    </td>\n                  </tr>\n                </table>\n    \n              </td>\n            </tr>\n            <!-- data -->\n            <tr>\n              <td class="margin">\n                \n                <table class="data">\n                  <tr>\n                    <td>\n                      <span class="meetingTitle">' + name + '</span><br/>\n                      <span>' + (0, _moment2.default)(date).format('dddd') + ' ' + (0, _moment2.default)(date).format('L') + ' ' + (0, _moment2.default)(date).format('LT') + '</span>\n                    </td>\n                    <td style="width:136px">\n                      <a href="https://meeting.insideone.cloud/' + code + '" class="btn">INGRESAR</a>\n                    </td>\n                  </tr>\n                </table>\n              </td>\n            </tr>\n            <tr>\n              <td class="link">\n                <span>Pod\xE9s copiar y pegar el siguiente enlace para ingresar desde tu navegador<br/><a href="https://meeting.insideone.cloud/' + code + '">https://meeting.insideone.cloud/' + code + '</a></span>\n              </td>\n            </tr>\n            ' + (participants.length < 1 ? null : '<tr>\n                <td class="participants">\n                  <span class="subtitle">OTROS PARTICIPANTES</span>\n                  ' + renderParticipants(participants).replace(/,/g, '') + '\n                </td>\n              </tr>') + '\n            <tr>\n              <td class="separator"></td>\n            </tr>\n            <!-- phone + mobile -->\n            <tr>\n              <td class="phone">\n                <span>Para unirte telef\xF3nicamente<br/><strong>Llam\xE1 al (011) 5353-7253 e ingres\xE1 el c\xF3digo ' + code + '</span>\n              </td>\n            </tr>\n            <!-- stores -->\n            <tr>\n              <td class="stores">\n                <span>Tambi\xE9n pod\xE9s ingresar desde tu smartphone <br />descargando la app de InsideOne</span>\n              </td>\n            </tr>\n            <tr>\n              <td class="labels">\n                <a href="https://meeting.insideone.cloud/' + code + '" target="_blank"><img src="https://s3-sa-east-1.amazonaws.com/insideone/appstore.png" width="117px" title="Descargar la app desde AppStore"></a>\n                <a href="https://meeting.insideone.cloud/' + code + '" target="_blank"><img src="https://s3-sa-east-1.amazonaws.com/insideone/googleplay.png" width="117px" title="Descargar la app desde Google Play"></a>\n              </td>\n            </tr>\n        </table> \n      </body>\n    </html>\n    ';
};

var renderParticipants = function renderParticipants(participants) {
  return participants.map(function (participant) {
    return participant.name + '<br />';
  });
};

exports.default = invite;