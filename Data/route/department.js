const express = require('express')
const app = express.Router()
const { Department } = require("../models")
app.use(express.json())

app.post('/create', async (req, res) => {
    console.log(req.body)
    let data = await Department.create({
        department_ID: req.body.department_ID,
        name: req.body.name,
        hospital_ID: req.body.hospital_ID,
        supervisor_ID: req.body.supervisor_ID
    }).catch((err) => { res.send(err) })
    res.send(data)
})

//read-------------------------------------------------------------------------------------------------
app.get('/read/:id', async (req, res) => {
    let uu = await Department.findOne({
        where: {
            department_ID: req.params.id
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
    let data = await Department.findAll({
    })
    res.send(data)
    console.log(filter)
})

module.exports = app;