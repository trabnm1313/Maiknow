const express = require('express')
const app = express.Router()
const { Hospital_community } = require("../models")
app.use(express.json())

app.post('/create', async (req, res) => {
    console.log(req.body)
    let data = await Hospital_community.create({
        community_ID: req.body.community_ID,
        name: req.body.name,
        province_ID: req.body.province_ID
    }).catch((err) => { res.send(err) })
    res.send(data)
})

module.exports = app;