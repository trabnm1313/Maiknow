const express = require('express')
const app = express()
const db = require("./models")
const { Case } = require("./models")
const { Claim_Type } = require("./models")
const { Department } = require("./models")
const { Hospital_community } = require("./models")
const { Hospital } = require("./models")
const { Patient } = require("./models")
const { Province } = require("./models")
const { Staff } = require("./models")
app.use(express.json())
//province----------------------------------------------------------------------------------------------
const province = require("./route/province")
app.use("/province", province)
//case--------------------------------------------------------------------------------------------------
const case_ = require("./route/case")
app.use("/case", case_)



// create--------------------------------------------------------------------------------------------------//


app.post('/create/claimeType', async (req, res) => {
    console.log(req.body)
    let data = await Claim_Type.create({
        claim_ID: req.body.claim_ID,
        claim: req.body.claim
    }).catch((err) => { res.send(err) })
    res.send(data)
})

app.post('/create/department', async (req, res) => {
    console.log(req.body)
    let data = await Department.create({
        department_ID: req.body.department_ID,
        name: req.body.name,
        hospital_ID: req.body.hospital_ID,
        supervisor_ID: req.body.supervisor_ID
    }).catch((err) => { res.send(err) })
    res.send(data)
})

app.post('/create/hospitalc', async (req, res) => {
    console.log(req.body)
    let data = await Hospital_community.create({
        community_ID: req.body.community_ID,
        name: req.body.name,
        province_ID: req.body.province_ID
    }).catch((err) => { res.send(err) })
    res.send(data)
})

app.post('/create/hospital', async (req, res) => {
    console.log(req.body)
    let data = await Hospital.create({
        hospital_ID: req.body.hospital_ID,
        name: req.body.name,
        address: req.body.address,
        province_ID: req.body.province_ID,
        community_ID: req.body.community_ID
    }).catch((err) => { res.send(err) })
    res.send(data)
})

app.post('/create/patient', async (req, res) => {
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


app.post('/create/staff', async (req, res) => {
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


app.get('/sync', async (req, res) => {
    db.sequelize.sync({ force: true })
    res.send(200)
})
app.listen(8000, () => {
    console.log('server is Ready!')
})

