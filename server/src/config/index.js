require('dotenv').config()

//.env
const env = process.env

//client configuration
const CONFIGURATION = {
    credentials: {
        private_key: env.PRIVATE_KEY,
        client_email: env.CLIENT_EMAIL
    }
}

module.exports = CONFIGURATION