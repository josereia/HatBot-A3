require('dotenv').config()
const dialogflow = require('@google-cloud/dialogflow')
const CONFIGURATION = require('../config')
const uuid = require('uuid');

const env = process.env

//new session
const sessionClient = new dialogflow.SessionsClient(CONFIGURATION)
const sessionId = uuid.v4();

// detect user intent
async function detectIntent(lang, text, userId) {
    let sessionPath = sessionClient.projectAgentSessionPath(env.PROJECT_ID, sessionId)
    try {
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: text,
                    languageCode: lang,
                }
            }
        }

        const responses = await sessionClient.detectIntent(request);
        return responses
    } catch (error) {
        console.log("detectIntent:", error)
    }
}

module.exports = { detectIntent }