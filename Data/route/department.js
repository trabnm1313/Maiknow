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

module.exports = app;