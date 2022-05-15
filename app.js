const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.get("/", (req, res) => {
    res.send("Welcome to Lab 12")
})
app.listen(3000, () => {
    console.log("Listening on PORT 3000")
})
