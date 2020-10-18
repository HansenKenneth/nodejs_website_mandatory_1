const express = require("express")
const app = express()

app.use(express.static("public"))


app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/public/index.html")
})

app.get("/intro1", (req, res) => {
    return res.sendFile(__dirname + "/public/intro1.html")
})

app.get("/backend2", (req, res) => {
    return res.sendFile(__dirname + "/public/backend2.html")
})

app.get("/api3", (req, res) => {
    return res.sendFile(__dirname + "/public/api3.html")
})

app.get("/html4", (req, res) => {
    return res.sendFile(__dirname + "/public/html4.html")
})

app.get("/jQuery5", (req, res) => {
    return res.sendFile(__dirname + "/public/jQuery5.html")
})

app.get("/design6", (req, res) => {
    return res.sendFile(__dirname + "/public/terminal6.html")
})

app.get("/fleshing7", (req, res) => {
    return res.sendFile(__dirname + "/public/fleshing7.html")
})




const serverPort = process.env.PORT || 7845

app.listen(serverPort, (error) => {
    if (error) {
        console.log("error starting the server")
    }
    console.log("server is running on port: ", Number(serverPort))
})