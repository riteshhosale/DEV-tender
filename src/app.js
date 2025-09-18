const express = require('express')
const app = express()
const port = 3000

app.get("/user", (req, res) => {  res.send({firstname: "ritesh", lastname: "bhosale", age: 18, city: "thane"})
})

app.post("/user/1", (req, res) => {
  res.send({"message": "user created successfully"})
})  

app.use("/test", (req, res) => {
  res.send({"message": "test route"})
  })

app.listen(port, () => {
  console.log(`server is successfully running on port ${port}`)
})
module.exports = app