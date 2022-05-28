const express = require('express')
const router = express.Router()
const { detectIntent } = require("../chatbot")
const url = require("url")

router.get('/message', async (req, res) => {
	const params = url.parse(req.url, true).query;
	await detectIntent(params.lang, params.text, params.userId).then((response) => {
		res.send(response[0].queryResult)
	})
})

module.exports = router