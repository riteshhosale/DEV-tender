const express = require('express')
const app = express()
const port = 3000

app.use('/test/1', (req, res) => {
  res.send('Hello from the other side!') 
})

app.use('/test', (req, res) => {
  res.send('Hello World!') 
})

app.use('/dashboard', (req, res) => {
  res.send('Hello Dashboard!') 
})

app.use('/settings', (req, res) => {
  res.send('Hello Settings!') 
})



app.listen(port, () => {
  console.log(`server is successfully running on port ${port}`)
})
module.exports = app