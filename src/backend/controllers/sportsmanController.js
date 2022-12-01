const Sportsman = require("../models/Sportsman.js")

// Get all sportsmen
exports.getAllSportsmen = async(req, res, next) => {
    try {
        const [sportsmen, _] = await Sportsman.findAll()
        res.status(200).json({count: sportsmen.length, sportsmen})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

// Get certain sportsman
exports.findSportsmanById = async(req, res, next) => {
    try {
        let sportsmanId = Number(req.params.id)
        let [sportsman, _] = await Sportsman.findById(sportsmanId)
        res.status(200).json({sportsman: sportsman[0]})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

// Add new sportsman
exports.addNewSportsman = async(req, res, next) => {
    try {
        let {first_name, nickname, last_name, image_url, birth_year, weight, sport, records} = req.body 
        let sportsman = new Sportsman(first_name, nickname, last_name, image_url, birth_year, weight, sport, records)

        sportsman = await sportsman.save()
        res.status(201).json({message: "Sportsman added"})

    } catch (error) {
        console.log(error)
        next(error)
    }
} 

// Update sportsman
exports.updateSportsmanById = async(req, res, next) => {
    try {
        let sportsmanId = Number(req.params.id)
        let {first_name, nickname, last_name, image_url, birth_year, weight, sport, records} = req.body
        let [sportsman, _] = await Sportsman.findById(sportsmanId)
        console.log(sportsman)
        sportsman = await Sportsman.updateById(sportsmanId, first_name, nickname, last_name, image_url, birth_year, weight, sport, records)
        res.status(204).json({message: "Sportsman updated!"})          
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.deleteSportsmanById = async(req, res, next) => {
    try {
        let sportsmanId = Number(req.params.id)
        let [sportsman, _] = await Sportsman.findById(sportsmanId)
        sportsman = await Sportsman.deleteById(sportsmanId)
        res.status(200).json({message: "Post deleted"})
    } catch (error) {
        console.log(error)
        next(error)
    }
}