require('dotenv').config()
const dialogflow = require('@google-cloud/dialogflow')
//.env
const env = process.env

//client configuration
const CONFIGURATION = {
    credentials: {
        private_key: env.PRIVATE_KEY,
        client_email: env.CLIENT_EMAIL
    }
}

//new session
const sessionClient = new dialogflow.SessionsClient(CONFIGURATION)

//detect user intent
async function detectIntent(lang, text, userId) {
    try {
        let session = sessionClient.projectAgentSessionPath(env.PROJECT_ID, userId)

        const query = {
            session: session,
            queryInput: {
                text: {
                    text: text,
                    languageCode: lang,

                }
            }
        }

        return await sessionClient.detectIntent(query)

    } catch (error) {
        console.log("detectIntent:", error)
    }
}

module.exports = {detectIntent}