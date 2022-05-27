const express = require('express')
const cors = require('cors')
const router = require('./routes')
const { detectIntent } = require('./chatbot')

const app = express()

app.use(cors())
app.use('/', router)


app.listen(3334, () => {
  console.log('App running on port 3334')
})

detectIntent("pt-br", "oi", "123456789").then((res)=> console.log(res[0].queryResult))