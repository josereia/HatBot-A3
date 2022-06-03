const express = require('express')
const router = express.Router()
const { detectIntent } = require("../chatbot")
const url = require("url")

router.get('/message', async (req, res) => {
	const params = url.parse(req.url, true).query;
	await detectIntent(params.lang, params.text, params.userId).then((response) => {
		res.send({
			intent: response[0].queryResult.intent.displayName,
			messages: response[0].queryResult.fulfillmentMessages
		})
	})
})

module.exports = router