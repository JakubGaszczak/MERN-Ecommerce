import express from "express"

const app = express()

app.get("/", (req, res) => {
    res.send("Hello World 3 e2f3fgregreg")
})

app.listen(3001)