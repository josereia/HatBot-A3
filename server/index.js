const express = require('express')
const cors = require('cors')
const router = require('./routes')

const app = express()

app.use(cors())
app.use('/', router)

app.listen(3334, () => {
  console.log('App running on port 3334')
})