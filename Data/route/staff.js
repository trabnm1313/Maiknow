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

// read-----------------------------------------------------------------------------------------
app.get('/read/:id', async (req, res) => {
    let data = await Staff.findOne({
        where: {
            staff_ID: req.params.id
        },
        raw: true
    })
    if (data == null) {
        res.sendStatus(404)
        return data
    }
    let d = new Date();
    console.log('year:',d.getFullYear())
    console.log('month:',d.getMonth()+1)
    console.log('day',d.getDate())
    let age = d.getFullYear()-data.birth_date.getFullYear()
    if(data.birth_date.getMonth()> d.getMonth()+1 ){
        age -= 1 
    }
    else if(data.birth_date.getMonth() == d.getMonth()+1 ){
          if(data.birth_date.getDate()> d.getDate()){ 
                age -= 1  
            }  
    }
    console.log('age:',age)
    console.log(req.params)
    console.log(data)
    res.send(data)
})

app.get('/read', async (req, res) => {
    let filter = req.params.filter
    let data = await Staff.findAll({
    })
    res.send(data)
    console.log(filter)
})

module.exports = app;