import dispatchEmail from '../dispatchEmail'
import moment from 'moment';

const sendInvitation = async (payload, config) =>{
        let { meet, ics } = payload
        meet.participants.map((user) =>{
            var template_content = [
                { "name": "guestName",  "content": `Hola ${ user.name }` },
                { "name": "guestEmail", "content": user.email },
                { "name": "roomCode",   "content": meet.code },
                { "name": "roomTitle",  "content": meet.title },
                { "name": "roomDate",   "content": `${ moment(meet.date).format('dddd') } ${ moment(meet.date).format('DD/MM/YYYY') } ${ moment(meet.date).subtract(3, 'hour').format('hh:mm A') }` },
                { "name": "ownerName",  "content": meet.owner.name },
                { "name": "ownerEmail", "content": meet.owner.email }
            ];
            
            const params = {
                message : {
                    to: [{email: user.email, name:  user.name }],
                    from_email: 'no-reply@insideone.com.ar',
                    from_name: 'Inside One',
                    subject : `Videollamada: ${ meet.title } ${ moment(meet.date).format('dddd').substring(0,3).toUpperCase() } ${ moment(meet.date).format('DD/MM/YYYY') } ${ moment(meet.date).subtract(3, 'hour').format('hh:mm A') }`,
                    "global_merge_vars": [
                        {
                            "name": "LINK",
                            "content": `https://meet.insideone.cloud/${ meet.code }`
                        },
                        {
                            "name": "participants",
                            "content": meet.participants.filter((item) => item.email != user.email)
                        },
                        {
                            "name": "hasParticipants",
                            "content": meet.participants.filter((item) => item.email != user.email).length
                        }
                    ],
                    "attachments": [
                        { 
                            "type": "text/calendar",
                            "name": "meeting.ics",
                            "content": ics
                        }
                    ]

                },
                template_name : 'meeting-invite',
                template_content
            }

            return dispatchEmail(params)
        })
}

export { sendInvitation }
