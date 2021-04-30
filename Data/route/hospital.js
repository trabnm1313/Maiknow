const express = require('express')
const app = express.Router()
const { hospital } = require("../models")
app.use(express.json())

app.post('/create', async (req, res) => {
    console.log(req.body)
    let data = await hospital.create({
        hospital_ID: req.body.hospital_ID,
        name: req.body.name,
        address: req.body.address,
        province_ID: req.body.province_ID,
        community_ID: req.body.community_ID
    }).catch((err) => { res.send(err) })
    res.send(data)
})
//read-------------------------------------------------------------------------------------------------
app.get('/read/:id', async (req, res) => {
    let uu = await hospital.findOne({
        where: {
            hospital_ID: req.params.id
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

app.get('/read', async (req, res) => {
    let filter = req.params.filter
    let data = await hospital.findAll({
    })
    res.send(data)
    console.log(filter)
})


module.exports = app;