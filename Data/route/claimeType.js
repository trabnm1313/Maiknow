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

module.exports = app;