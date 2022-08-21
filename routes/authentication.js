'use strict'

const express = require('express')
const app = express()
const port = 3000

app.get('/auth', (req, res) => {
  res.send('Sup?')
})

app.listen(port, () => {
  console.log(`listening on ${port}`)
})
