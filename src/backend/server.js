require("dotenv").config()
const express = require("express")
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

// Redirect requests to endpoint starting with /posts
app.use("/posts", require("./routes/sportsmanRoutes.js"))

app.use((err, req, res, next) => {
    console.log(err.stack)
    console.log(err.name)
    console.log(err.code)

    res.status(500).json({
        message: "something went rely wrong"
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log("server is running on PORT: " + PORT))