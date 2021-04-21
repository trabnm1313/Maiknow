const express = require('express')
const app = express.Router()
const { Province } = require("../models")
app.use(express.json())

// create---------------------------------------------------------------------------------------
app.post('/create', async (req, res) => {
    console.log(req.body)
    let data = await Province.create({
        province_ID: req.body.province_ID,
        name: req.body.name
    }).catch((err) => { res.send(err) })
    res.send(data)
})
// read-----------------------------------------------------------------------------------------
app.get('/read/:id', async (req, res) => {
    let uu = await Province.findOne({
        where: {
            province_ID: req.params.id
        },
        raw: true
    })
    if (uu == null) {
        res.sendStatus(404)
        return uu
    }
    console.log(req.params)
    console.log(uu)
    res.send(uu)
})

app.get('/readag/:filter&:text', async (req, res) => {
    let filter = req.params.filter
    let data = await Province.findAll({
        where: {
            filter: req.params.text
        },
    })
    res.send(data)
    console.log(filter)
})


module.exports = app;