import moment from 'moment';

const orderApproved = (props) =>{
  let { subsidiary, user, order } = props.payload

  return(`
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Order Approved</title>
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
                <span style="font-family:Arial, Helvetica, sans-serif;font-size:16px;color:#494949;line-height:24px;font-weight:600">Hola ${ user.firstname },<br />${ subsidiary.name } confirmó tu pedido #${ order.orderID } para las ${ moment(order.deliveredDate).subtract(3, 'hour').format('HH:mm A') }</span>
              </td>
            </tr>
            <!-- detail -->
            <tr>
              <td style="padding:25px 15px 0px 15px">
                <span style="font-family:Arial, Helvetica, sans-serif;font-size:12px;color:#8A8A8A;line-height:24px;font-weight:200;display:block">DETALLE</span>
                  ${ order.products.map(product =>{
                    return `<span style="font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#494949;line-height:24px;font-weight:400">${ product.name }</span><br />`
                  })
                }
              </td>
            </tr>
            <!-- payment -->
            <tr>
                <td style="padding:25px 15px 0px 15px">
                  <span style="font-family:Arial, Helvetica, sans-serif;font-size:12px;color:#8A8A8A;line-height:24px;font-weight:200;display:block">PAGO</span>
                  ${ renderPayment(order) }
                </td>
            </tr>
            <!-- payment -->
            <tr>
                <td style="padding:25px 15px 0px 15px">
                  <span style="font-family:Arial, Helvetica, sans-serif;font-size:12px;color:#8A8A8A;line-height:24px;font-weight:200;display:block">ENTREGA</span>
                  ${ order.deliveredMethod.type === 'takeAway'
                    ?
                    `<span style="font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#494949;line-height:24px;font-weight:400;display:block">Take Away en ${ subsidiary.name } - ${ subsidiary.address.street }</span>`
                    :
                    `<span style="font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#494949;line-height:24px;font-weight:400;display:block">Delivery en ${ order.address.address }</span>`
                   }
                </td>
            </tr>


            <tr>
                <td style="padding:50px 15px 15px 15px">
                  <span style="font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#494949;line-height:24px;font-weight:400;display:block">Saludos,<br />Equipo de FoodCloud</span>
                </td>
            </tr>

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

const getTotal = (order) =>{
  let total = 0;

  order.products.map((product) =>{
    total = total + product.finalPrice
  })

  return total
}

const getCardImage = (transaction) =>{
  switch (transaction.card.payment_method) {
    case 'visa':
      return 'https://s3.amazonaws.com/foodcore-cdn/email/visa.png'
    case 'debvisa':
      return 'https://s3.amazonaws.com/foodcore-cdn/email/visa.png'
    case 'master':
      return 'https://s3.amazonaws.com/foodcore-cdn/email/mastercard.png'
    case 'amex':
      return 'https://s3.amazonaws.com/foodcore-cdn/email/amex.png'
    default:
      return 'https://s3.amazonaws.com/foodcore-cdn/email/generic.png'

  }
}

const renderPayment = (order) =>{
  if(order.transaction){
    return(`
      <div>
        <span style="font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#494949;line-height:24px;font-weight:400;display:block"><img src="${ getCardImage(order.transaction) }" height="25" style="padding-right:5px;vertical-align:middle"/>  •••• ${ order.transaction.card.last_four_digits }</span>
        <span style="font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#494949;line-height:24px;font-weight:400;display:block">Importe: $${ getTotal(order) }<br />Nro.Comprobante: ${ order.transaction.id }</span>
        <span style="font-family:Arial, Helvetica, sans-serif;font-size:12px;color:#8A8A8A;line-height:24px;font-weight:200;display:block;text-decoration:none">En tu resumen verás el cargo como WWW&zwnj;.MERCADOPAGO.C&zwnj;OM</span>
      </div>
    `)
  }
  else {
    return(`
      <div>
        <span style="font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#494949;line-height:24px;font-weight:400;display:block"><img src="https://s3.amazonaws.com/foodcore-cdn/email/cash.png" height="25" style="padding-right:5px;vertical-align:middle"/>  Efectivo</span>
        <span style="font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#494949;line-height:24px;font-weight:400;display:block">Importe: $${ getTotal(order) }<br /></span>
      </div>
    `)
  }
}

export default orderApproved
