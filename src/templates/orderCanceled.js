

const orderCanceled = (props) =>{
  let { subsidiary, user, order, reason } = props.payload

  return(`
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Order Canceled</title>
        <style>
          body{
            margin:0;
            background-color: #fff;
          }
          .box {
            background-color: #fff;
            max-width: 600px; }
          .footer {
            background-color: #E7EDF4;
            width: 100%;
            text-align: center;
            margin-top:15px;
            padding:15px 0px;
            }
        </style>
      </head>
      <body>
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="box">
            <tr>
              <td style="border-bottom: 2px solid #E7EDF4; text-align:center">
                <img src="https://s3.amazonaws.com/foodcore-cdn/email/foodcloud_logo.png" height="30px" style="padding:25px">
              </td>
            </tr>
            <!-- title -->
            <tr>
              <td style="padding:25px 15px 0px 15px">
                <span style="font-family:Arial, Helvetica, sans-serif;font-size:16px;color:#494949;line-height:24px;font-weight:600">Hola ${ user.firstname },<br />Tu pedido #${ order.orderID } en ${ subsidiary.name } ha sido cancelado</span>
              </td>
            </tr>
            <!-- detail -->
            <tr>
              <td style="padding:25px 15px 0px 15px">
                <span style="font-family:Arial, Helvetica, sans-serif;font-size:16px;color:#494949;line-height:24px;font-weight:600">El local indicó</span>
              </td>
            </tr>
            <tr>
              <td style="padding:25px 15px 0px 15px">
                <span style="font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#494949;line-height:24px;font-weight:400"><i>"${ reason }"</i></span>
              </td>
            </tr>
            <!-- signature -->
            <tr>
                <td style="padding:50px 15px 15px 15px">
                  <span style="font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#494949;line-height:24px;font-weight:400;display:block">Saludos,<br />Equipo de FoodCloud</span>
                </td>
            </tr>
            <!-- footer -->
            <tr>
                <td style="padding-top:15px;border-top: 2px solid #E7EDF4; text-align:center">
                    <span style="font-family:Arial, Helvetica, sans-serif;font-size:12px;color:#8A8A8A;font-weight:400;display:block">Hecho con <span style="color:#FF363E">♥</span> en Buenos Aires</span>

                </td>
              </tr>
              <tr>
                  <td style="padding-top:15px;text-align:center">
                        <span style="font-family:Arial, Helvetica, sans-serif;font-size:11px;color:#8A8A8A;line-height:16px;font-weight:200;">Av.Alicia Moreau de Justo 2050, Buenos Aires Argentina
                          <br />Estás recibiendo este e-mail ya que hiciste un pedido en FoodCloud
                          <br />¿Tenés dudas o sugerencias? Escribinos a <a href="mailto:hola@foodcloud.com.ar" style="color:#8A8A8A">hola@foodcloud.com.ar</a>
                        </span>
                  </td>
                </tr>
        </table>
      </body>
    </html>
  `)
}

export default orderCanceled
