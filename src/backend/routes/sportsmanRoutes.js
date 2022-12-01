const express = require("express")
const sportsmanControllers = require("../controllers/sportsmanController.js")

const router = express.Router()

router
.route("/")
.get(sportsmanControllers.getAllSportsmen)
.post(sportsmanControllers.addNewSportsman)

router
.route("/:id")
.get(sportsmanControllers.findSportsmanById)
// .put(sportsmanControllers.updateSportsmanById)
// .delete(sportsmanControllers.deleteSportsmanById)

module.exports = router