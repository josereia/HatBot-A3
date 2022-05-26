const express = require('express')
const router = express.Router()

const json = [{id: 1, name: 'joao'}, {id: 1, name: 'Pedro'}, {id: 1, name: 'Lucas'}]

router.get('/', (req, res) => {
  res.send('bot')
})

router.get('/api/users', (req, res) => {
  res.send(json)
})

module.exports = router