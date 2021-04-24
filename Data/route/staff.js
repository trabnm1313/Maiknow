const express = require('express')
const app = express.Router()
const { Staff } = require("../models")
app.use(express.json())

app.post('/create', async (req, res) => {
    console.log(req.body)
    let data = await Staff.create({
        staff_ID: req.body.staff_ID,
        fname: req.body.fname,
        lname: req.body.lname,
        address: req.body.address,
        birth_date: req.body.birth_date,
        email: req.body.email,
        phone_number: req.body.phone_number,
        age: req.body.age,
        sex: req.body.sex,
        department_id: req.body.department_id
    }).catch((err) => { res.send(err) })
    res.send(data)
})

module.exports = app;