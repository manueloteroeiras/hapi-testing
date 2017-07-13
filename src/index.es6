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
    host: (process.env.DEV) ? 'localhost' : '0.0.0.0', 
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

        sendEmail(request.payload, data )
        .then((data)=> reply({ message: "Send Success", data }))
        .catch((error) => reply('Error to sent!'))
        
    }
});


// Start the server
server.start((err) => {
    if (err) throw err;
    console.log('Server running at:', server.info.uri);
});
