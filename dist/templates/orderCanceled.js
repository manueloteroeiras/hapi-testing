"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var orderCanceled = function orderCanceled(props) {
  var _props$payload = props.payload,
      subsidiary = _props$payload.subsidiary,
      user = _props$payload.user,
      order = _props$payload.order,
      reason = _props$payload.reason;


  return "\n    <!doctype html>\n    <html>\n      <head>\n        <meta name=\"viewport\" content=\"width=device-width\" />\n        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n        <title>Order Canceled</title>\n        <style>\n          body{\n            margin:0;\n            background-color: #fff;\n          }\n          .box {\n            background-color: #fff;\n            max-width: 600px; }\n          .footer {\n            background-color: #E7EDF4;\n            width: 100%;\n            text-align: center;\n            margin-top:15px;\n            padding:15px 0px;\n            }\n        </style>\n      </head>\n      <body>\n          <table align=\"center\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\" class=\"box\">\n            <tr>\n              <td style=\"border-bottom: 2px solid #E7EDF4; text-align:center\">\n                <img src=\"https://s3.amazonaws.com/foodcore-cdn/email/foodcloud_logo.png\" height=\"30px\" style=\"padding:25px\">\n              </td>\n            </tr>\n            <!-- title -->\n            <tr>\n              <td style=\"padding:25px 15px 0px 15px\">\n                <span style=\"font-family:Arial, Helvetica, sans-serif;font-size:16px;color:#494949;line-height:24px;font-weight:600\">Hola " + user.firstname + ",<br />Tu pedido #" + order.orderID + " en " + subsidiary.name + " ha sido cancelado</span>\n              </td>\n            </tr>\n            <!-- detail -->\n            <tr>\n              <td style=\"padding:25px 15px 0px 15px\">\n                <span style=\"font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#494949;line-height:24px;font-weight:400\">" + reason + "</span>\n              </td>\n            </tr>\n            <!-- signature -->\n            <tr>\n                <td style=\"padding:50px 15px 15px 15px\">\n                  <span style=\"font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#494949;line-height:24px;font-weight:400;display:block\">Saludos,<br />Equipo de FoodCloud</span>\n                </td>\n            </tr>\n            <!-- footer -->\n            <tr>\n                <td style=\"padding-top:15px;border-top: 2px solid #E7EDF4; text-align:center\">\n                    <span style=\"font-family:Arial, Helvetica, sans-serif;font-size:12px;color:#8A8A8A;font-weight:400;display:block\">Hecho con <span style=\"color:#FF363E\">\u2665</span> en Buenos Aires</span>\n\n                </td>\n              </tr>\n              <tr>\n                  <td style=\"padding-top:15px;text-align:center\">\n                        <span style=\"font-family:Arial, Helvetica, sans-serif;font-size:11px;color:#8A8A8A;line-height:16px;font-weight:200;\">Av.Alicia Moreau de Justo 2050, Buenos Aires Argentina\n                          <br />Est\xE1s recibiendo este e-mail ya que hiciste un pedido en FoodCloud\n                          <br />\xBFTen\xE9s dudas o sugerencias? Escribinos a <a href=\"mailto:hola@foodcloud.com.ar\" style=\"color:#8A8A8A\">hola@foodcloud.com.ar</a>\n                        </span>\n                  </td>\n                </tr>\n        </table>\n      </body>\n    </html>\n  ";
};

exports.default = orderCanceled;