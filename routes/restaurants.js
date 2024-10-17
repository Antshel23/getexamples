const express = require('express')
const router = express.Router()
const Restaurant = require("../models/index")


router.get('/', async (req, res) => {
    const restaurants = await Restaurant.findAll()
    res.json(restaurants)
})

router.get('/:id', async (req,res) => {
    const id = req.params.id
    const restaurantid = await Restaurant.findByPk(id)
    res.json(restaurantid)
})

router.post('/', async (req,res) => {
    const restaurant = await Restaurant.create(req.body)
    res.json(restaurant)
})

router.put('/:id', async (req,res) => {
const updatedId = await Restaurant.update(req.body, {where: {id: req.params.id}})
res.json(updatedId)
})

router.delete('/:id', async (req,res) => {
    const deletedId = await Restaurant.destroy({where: {id: req.params.id}})
    res.json(deletedId)
})

module.exports = router