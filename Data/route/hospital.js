const express = require('express')
const app = express.Router()
const { Hospital } = require("../models")
app.use(express.json())

app.post('/create', async (req, res) => {
    console.log(req.body)
    let data = await Hospital.create({
        hospital_ID: req.body.hospital_ID,
        name: req.body.name,
        address: req.body.address,
        province_ID: req.body.province_ID,
        community_ID: req.body.community_ID
    }).catch((err) => { res.send(err) })
    res.send(data)
})

module.exports = app;