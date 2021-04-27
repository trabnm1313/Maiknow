const express = require('express')
const app = express.Router()
const { Patient } = require("../models")
app.use(express.json())

app.post('/create', async (req, res) => {
    console.log(req.body)
    let data = await Patient.create({
        hn: req.body.hn,
        fname: req.body.fname,
        lname: req.body.lname,
        address: req.body.address,
        birth_date: req.body.birth_date,
        person_id: req.body.person_id,
        age: req.body.age,
        nationlity: req.body.nationlity,
        religion: req.body.religion,
        occupation: req.body.occupation,
        office_name: req.body.office_name
    }).catch((err) => { res.send(err) })
    res.send(data)
})

//read-------------------------------------------------------------------------------------------------
app.get('/read/:id', async (req, res) => {
    let uu = await Patient.findOne({
        where: {
            hn: req.params.id
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
    let data = await Patient.findAll({
    })
    res.send(data)
    console.log(filter)
})

module.exports = app;