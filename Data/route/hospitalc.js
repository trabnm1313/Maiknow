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
//read-------------------------------------------------------------------------------------------------
app.get('/read/:id', async (req, res) => {
    let uu = await Hospital_community.findOne({
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