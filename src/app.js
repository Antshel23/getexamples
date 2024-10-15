const express = require("express");
const app = express();
const Restaurant = require("../models/index")
const db = require("../db/connection");

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/restaurants', async (req, res) => {
    const restaurants = await Restaurant.findAll()
    res.json(restaurants)
})

app.get('/restaurants/:id', async (req,res) => {
    const id = req.params.id
    const restaurantid = await Restaurant.findByPk(id)
    res.json(restaurantid)
})

app.post('/restaurants', async (req,res) => {
    const restaurant = await Restaurant.create(req.body)
    res.json(restaurant)
})

app.put('/restaurants/:id', async (req,res) => {
const updatedId = await Restaurant.update(req.body, {where: {id: req.params.id}})
res.json(updatedId)
})

app.delete('/restaurants/:id', async (req,res) => {
    const deletedId = await Restaurant.destroy({where: {id: req.params.id}})
    res.json(deletedId)
})

module.exports = app;