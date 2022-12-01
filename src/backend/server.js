require("dotenv").config()
const express = require("express")
const app = express()

app.use(express.json())

//CORS
app.use(function (req, res, next) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-With, X-CSRF-Token"
      );
      res.setHeader("Access-Control-Allow-Credentials", true);
      res.setHeader("Content-type", "application/json");
      next();
});

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