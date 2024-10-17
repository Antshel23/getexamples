const express = require("express");
const app = express();
const router = require('../routes/restaurants.js')
const db = require("../db/connection");

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/restaurants', router)

module.exports = app;