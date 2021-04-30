const express = require('express')
const app = express.Router()
const { Claim_Type } = require("../models")
app.use(express.json())

//create----------------------------------------------------------------------------------------------
app.post('/create', async (req, res) => {
    console.log(req.body)
    let data = await Claim_Type.create({
        claim_ID: req.body.claim_ID,
        claim: req.body.claim
    }).catch((err) => { res.send(err) })
    res.send(data)
})

//read-------------------------------------------------------------------------------------------------
app.get('/read/:id', async (req, res) => {
    let uu = await Claim_Type.findOne({
        where: {
            claim_ID: req.params.id
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
    let data = await Claim_Type.findAll({
    })
    res.send(data)
    console.log(filter)
})

module.exports = app;