import dotenv from 'dotenv';

dotenv.config()

const data = {
    GMAIL_USER: process.env.GMAIL_USER,
    GMAIL_PASS: process.env.GMAIL_PASS,
    MANDRIL_API : process.env.MANDRIL_API
}

export default data