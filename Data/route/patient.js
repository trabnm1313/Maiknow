const { request } = require('express')
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
    // data.addHospital(req.body.hospital_ID, {through :{register_ID: req.body.register_ID ,register_date: new Date()} }).catch((err) => { console.log(err) })
    res.send(data)
})

//read-------------------------------------------------------------------------------------------------
app.get('/read/:id', async (req, res) => {
    let data = await Patient.findOne({
        where: {
            hn: req.params.id
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
    let data = await Patient.findAll({raw:true})
    data = data.map((all)=> {
        let d = new Date();
        let age = d.getFullYear()-all.birth_date.getFullYear()
        console.log(all.birth_date.getFullYear())
        if(all.birth_date.getMonth()> d.getMonth()+1 ){
            age -= 1
        }
        else if(all.birth_date.getMonth() == d.getMonth()+1 ){
            if(all.birth_date.getDate()> d.getDate()){ 
                age -= 1 
            }  
        }
        all.age = age
        console.log(all)
        return all
    }) 
    res.send(data)
    console.log(filter)
})

module.exports = app;