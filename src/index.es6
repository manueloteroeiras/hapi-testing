import Hapi from 'hapi';

import config from './config';

import sendEmail from './utils/sendEmail';

import { sendInvitation } from './proyects/meet';



const server = new Hapi.Server();

server.connection({
    host: '0.0.0.0',
    // host: 'localhost',
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

server.route({
    method: 'POST',
    path:'/send-email',
    handler: (request, reply)=> {
        sendEmail(request.payload, config )
        .then((data)=> reply({ message: "Send Success", data }))
        .catch((error) => reply('Error to sent!'))
    }
});

server.route({
    method: 'POST',
    path:'/payment/success',
    handler: (request, reply)=> {
        sendEmail(request.payload, config )
        .then((data)=> reply({ message: "Send Success", data }))
        .catch((error) => reply('Error to sent!'))
    }
});

server.route({
    method: 'POST',
    path:'/payment/cancel',
    handler: (request, reply)=> {
        sendEmail(request.payload, config )
        .then((data)=> reply({ message: "Send Success", data }))
        .catch((error) => reply('Error to sent!'))
    }
});



// Meet
server.route({
    method: 'POST',
    path:'/meet/invitation',
    handler: (request, reply)=> {
        sendInvitation(request.payload, config)
        .then((data)=> reply({ message: "Send Success", data }))
        .catch((error) => reply('Error to sent!'))
    }
});


server.start((err) => {
    if (err) throw err;
    console.log('Server running at:', server.info.uri);
});
