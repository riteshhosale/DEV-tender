const express = require('express')
const app = express()
const port = 3000

app.get('/test', (req, res) => {
  res.send('Hello World!') 
})

app.get('/dashboard', (req, res) => {
  res.send('Hello Dashboard!') 
})

app.get('/settings', (req, res) => {
  res.send('Hello Settings!') 
})



app.listen(port, () => {
  console.log(`server is successfully running on port ${port}`)
})
module.exports = app