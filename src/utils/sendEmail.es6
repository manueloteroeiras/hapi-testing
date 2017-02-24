import nodemailer from 'nodemailer';

// templeates
import welcome from '../templates/welcome';

    // create reusable transporter object using the default SMTP transport



const sendEmail = (props, config) =>{
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: config.GMAIL_USER,
            pass: config.GMAIL_PASS
        }
    });

    let mailOptions = {
        from: props.from || 'customservice@hapi.com',
        to: props.to || '', 
        subject: props.subject, // Subject line
        text: props.text,
        html: welcome(props) // html body
    }

    transporter.sendMail( mailOptions ,(error, info) => (error) ? 500 : 200 );
}


export default sendEmail;