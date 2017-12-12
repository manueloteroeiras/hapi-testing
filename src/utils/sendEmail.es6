import nodemailer from 'nodemailer';

// templeates
import welcome from '../templates/welcome';
import orderApproved from '../templates/orderApproved';



    // create reusable transporter object using the default SMTP transport
const sendEmail = async (props, config) =>{

    let auth = {
        user: config.GMAIL_USER,
        pass: config.GMAIL_PASS
    }
    const transporter = nodemailer.createTransport({ service: 'gmail', auth });

    let mailOptions = {
        from: (props.from) ? `${ props.from } <no-reply@foodcloud.com.ar>` : `FoodCloud <no-reply@foodcloud.com.ar>`,
        to: props.to || '',
        subject: props.subject, // Subject line
        text: props.text,
        html: ( props.type == 'welcome' ) ? welcome(props) : props.type == 'approved' ? orderApproved(props) :props.html // html body
    }

    return await transporter.sendMail(mailOptions)
}


export default sendEmail;
