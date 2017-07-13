import nodemailer from 'nodemailer';

// templeates
import welcome from '../templates/welcome';



    // create reusable transporter object using the default SMTP transport
const sendEmail = async (props, config) =>{

    let auth = {
        user: config.GMAIL_USER,
        pass: config.GMAIL_PASS
    }
    const transporter = nodemailer.createTransport({ service: 'gmail', auth });
    
    let mailOptions = {
        from: props.from || 'customservice@hapi.com',
        to: props.to || '', 
        subject: props.subject, // Subject line
        text: props.text,
        html: ( props.type == 'welcome' ) ? welcome(props) : props.html // html body
    }

    return await transporter.sendMail(mailOptions)
}


export default sendEmail;