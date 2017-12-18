import Hapi from 'hapi';

import config from './config/config';

import sendEmail from './utils/sendEmail';

const data = {
    GMAIL_USER: process.env.GMAIL_USER,
    GMAIL_PASS: process.env.GMAIL_PASS
}

// Create a server with a host and port
const server = new Hapi.Server();

server.connection({
    // host: '0.0.0.0',
    host: 'localhost',
    port: process.env.PORT || 8000,
    routes : {
        cors : true
    }
});

// Add the route
server.route({
    method: 'GET',
    path:'/',
    handler: (request, reply)=> reply("Working!")
});

// Add the route
server.route({
    method: 'POST',
    path:'/send-email',
    handler: (request, reply)=> {
        sendEmail(request.payload, config )
        .then((data)=> {
            console.log('====================================');
            console.log({ msg: 'SEND_SUCCESS', data });
            console.log('====================================');
            reply({ message: "Send Success", data })
        })
        .catch((error) => {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
            reply('Error to sent!')
        })

    }
});

server.route({
    method: 'POST',
    path:'/payment/success',
    handler: (request, reply)=> {
        console.log('====================================');
        console.log(request.payload);
        console.log('====================================');
        sendEmail(request.payload, config )
        .then((data)=> {
            console.log('====================================');
            console.log({ msg: 'SEND_SUCCESS', data });
            console.log('====================================');
            reply({ message: "Send Success", data })
        })
        .catch((error) => {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
            reply('Error to sent!')
        })

    }
});

server.route({
    method: 'POST',
    path:'/payment/cancel',
    handler: (request, reply)=> {
        console.log('====================================');
        console.log(request.payload);
        console.log('====================================');
        sendEmail(request.payload, config )
        .then((data)=> {
            console.log('====================================');
            console.log({ msg: 'SEND_SUCCESS', data });
            console.log('====================================');
            reply({ message: "Send Success", data })
        })
        .catch((error) => {
            console.log('====================================');
            console.log(error);
            console.log('====================================');
            reply('Error to sent!')
        })

    }
});


// Start the server
server.start((err) => {
    if (err) throw err;
    console.log('Server running at:', server.info.uri);
});
