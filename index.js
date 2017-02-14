'use strict';

const Hapi = require('hapi');
const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: '',
        pass: ''
    }
});


// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
    host: '0.0.0.0', 
    port: process.env.PORT || 8000
});

// Add the route
server.route({
    method: 'GET',
    path:'/send-email', 
    handler: (request, reply)=> {
        console.log(sendEmail(request.query) )
        reply(200)
    }
});

server.route({
    method: 'GET',
    path:'/users', 
    handler: (request, reply)=> {
        reply({
            name : 'manuel',
            lastname: 'otero'
        })
    }
});

// Start the server
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});

const sendEmail = (params)=>{
    console.log("Prepearing Email")
    console.log(params)
    transporter.sendMail({
        from: params.from || 'customservice@hapi.com',
        to: params.to || '', 
        subject: params.subject, // Subject line
        text: params.text,
        html: '<b>Hello world ?</b>' // html body
    }, (error, info) => {
        if (error) {
            return error;
        }
        return info
    });
}
