const express = require('express')
const app = express.Router()
const { hospital_patient } = require("../models")
app.use(express.json())

app.post('/create', async (req, res) => {
    console.log(req.body)
    let data = await hospital_patient.create({
        hospital_ID: req.body.hospital_ID,
        hn: req.body.hn,
        register_ID: req.body.register_ID,
        register_date: req.body.register_date,

    }).catch((err) => { res.send(err) })
    res.send(data)
})
//read-------------------------------------------------------------------------------------------------
app.get('/read/:id', async (req, res) => {
    let uu = await hospital_patient.findOne({
        where: {
            community_ID: req.params.id
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
    let data = await Hospital_community.findAll({
    })
    res.send(data)
    console.log(filter)
})

module.exports = app;