const invite = (props) =>{
    let { code, name, username, owner } = props.payload;
    return(`
    <!doctype html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Meeting Invite</title>
        <style>
          body{
            margin:0;
            background-color: #F4F4F4;
            font-family: Arial, Helvetica, sans-serif;
            font-size:14px;
            line-height:21px;
            font-weight:400;
            color: #5C6F7B;
          }
          .contenttable {
            min-width: 640px !important;
            background-color: #FFF;
            border: solid 1px #D6E2EA;
            border-radius: 3px;
            margin: 30px auto;
          }
          .margin{
            padding: 30px 30px 0px 30px;
          }
          .right{
            text-align: right;
            padding-right:30px;
          }
          .subtitle{
            font-weight:200;
            color: #8D9AA3;
            font-size: 11px;
            display: block;
          }
          .number{
            font-size: 24px;
            letter-spacing: -0.25px;
            font-weight: 600;
            color: #8D9AA3;
          }
          .data{
            background-color: #D2E3EF;
            padding: 20px 30px;
            border-radius: 3px;
            min-width: 100%;
          }
          .btn{
            background-color: #F15C22;
            color: #FFF;
            font-weight: 600;
            font-size: 14px;
            text-decoration: none;
            padding: 15px 30px;
            border-radius:3px;
            border-bottom: solid 1px #FF7540;
          }
          .meetingTitle{
            font-size: 16px;
            font-weight: 600;
          }
          .link{
            padding: 10px 0px 10px 30px;
            font-size: 11px;
            line-height: 16.5px;
          }
          .link a{
            color: #00B5CC;
            text-decoration: none;
          }
          .participants{
            padding: 15px 0px 0px 30px;
          }
          .separator{
            padding-top: 30px;
            border-bottom: solid 1px #D6E2EA;
          }
          .phone{
            padding-top:30px;
            text-align: center;
            font-size:13px;
          }
          .stores {
            padding-top: 15px;
            font-size:13px;
            text-align: center;
          }
          .labels {
            text-align: center;
            padding:15px 0;
          }
          @media only screen and (max-device-width: 480px) {
              .contenttable {
                max-width: 100% !important;
                background-color: #FFF;
                margin: 0px auto;
                border: 0px;
              }
              .margin{
                padding: 30px 20px 0px 20px;
              }
              .right{
                padding-right:20px;
              }
              .btn{
                width:100%;
              }          
              .link, .participants{
                padding-left: 20px;
              }
            }
          </style>
      </head>
      <body>
          <table align="center" border="0" cellpadding="0" cellspacing="0" class="contenttable">
           <!-- logo -->
            <tr>
              <td style="border-bottom: 1px solid #D6E2EA; text-align:center; width:100%">
                <img src="https://s3-sa-east-1.amazonaws.com/insideone/insideone.png" height="45px" style="padding:15px 0 10px 0" title="Inside One">
              </td>
            </tr>
            <!-- title -->
            <tr>
              <td>
    
                <table style="width:100%">
                  <tr>
                    <td class="margin">
                      <span><strong>Hola ${ username },</strong><br />${ owner } te ha invitado a una video llamada</span>
                    </td>
                    <td class="right" style="padding-top:30px">
                      <span class="subtitle">CODIGO</span>
                      <span class="number">${ code }</span>
                    </td>
                  </tr>
                </table>
    
              </td>
            </tr>
            <!-- data -->
            <tr>
              <td class="margin">
                
                <table class="data">
                  <tr>
                    <td>
                      <span class="meetingTitle">${ name }</span><br/>
                      <span>Miércoles 02/01 03:30 PM</span>
                    </td>
                    <td style="width:136px">
                      <a href="#" class="btn">INGRESAR</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td class="link">
                <span>Podés copiar y pegar el siguiente enlace para ingresar desde tu navegador<br/><a href="https://meetings.insideone.cloud/invite/${ code }">https://meetings.insideone.cloud/invite/${ code }</a></span>
              </td>
            </tr>
            <tr>
              <td class="participants">
                <span class="subtitle">OTROS PARTICIPANTES</span>
                Alex Kravchuk<br />
                Alberto Kravchuk
              </td>
            </tr>
            <tr>
              <td class="separator"></td>
            </tr>
            <!-- phone + mobile -->
            <tr>
              <td class="phone">
                <span>Para unirte telefónicamente<br/><strong>Llamá al (011) 5353-7253 e ingresá el código ${ code }</span>
              </td>
            </tr>
            <!-- stores -->
            <tr>
              <td class="stores">
                <span>También podés ingresar desde tu smartphone <br />descargando la app de InsideOne</span>
              </td>
            </tr>
            <tr>
              <td class="labels">
                <a href="https://meetings.insideone.cloud/8435" target="_blank"><img src="https://s3-sa-east-1.amazonaws.com/insideone/appstore.png" width="117px" title="Descargar la app desde AppStore"></a>
                <a href="https://meetings.insideone.cloud/8435" target="_blank"><img src="https://s3-sa-east-1.amazonaws.com/insideone/googleplay.png" width="117px" title="Descargar la app desde Google Play"></a>
              </td>
            </tr>
        </table> 
      </body>
    </html>
    `)
}

export default invite;