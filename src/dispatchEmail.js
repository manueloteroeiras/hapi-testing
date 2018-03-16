const mandrill = require('mandrill-api/mandrill');

import config from './config'

const mandrill_client = new mandrill.Mandrill(config.MANDRIL_API);

const dispatchEmail = (payload) =>{
    return new Promise((resolve, reject) => {
        mandrill_client.messages.sendTemplate(payload, result => resolve(result), e => reject(e));  
    })
}

export default dispatchEmail