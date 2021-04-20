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
app.patch('/update/:id', async (req,res) =>{
    let data = await Case.update(
        req.body,{where: { case_ID:req.params.id }
    })
    res.send(data)
})

app.delete('/delete/:id',async(req,res) =>{ 
    let data = await Case.findOne({
        where:{
            case_ID: req.params.id
         }
         
    }).then(data => {return Case.destroy({
        where:{
            case_ID: req.params.id
        }
    }).then(()=>{return data}) 
} )
    res.send(data)
})

app.get('/read/:id', async (req, res) => {
    let uu = await db.Case.findOne({
        where:{
            case_ID: req.params.id
         },
        raw:true
    })
    if(uu == null){
        res.sendStatus(404)
        return uu
    }
    console.log(req.params)
    console.log(uu)
    res.send(uu)
})

app.get('/readag/:filter&:text', async (req,res) =>{
    let filter = req.params.filter
    let data = await db.Case.findAll({
        where:{
            filter: req.params.text
        },
    })
    res.send(data)
    console.log(filter)
})

app.post('/create/case', async (req, res) => {
    console.log(req.body)
    let data = await Case.create({
        case_ID: req.body.case_ID,
        fname: req.body.fname,
        lname: req.body.lname,
        detail:  req.body.detail,
        date: req.body.date,
        cost: req.body.cost,
        type: req.body.type,
        staff_ID: req.body.staff_ID,
        hn: req.body.hn,
        claim_ID: req.body.claim_ID
    }).catch( (err) => {res.send(err)} )
    res.send(data)
})

app.post('/create/claimeType', async (req, res) => {
    console.log(req.body)
    let data = await Claim_Type.create({
        claim_ID:req.body.claim_ID,
        claim:req.body.claim
    }).catch( (err) => {res.send(err)} )
    res.send(data)
})

app.post('/create/department', async (req, res) => {
    console.log(req.body)
    let data = await Department.create({
        department_ID:req.body.department_ID,
        name:req.body.name,
        hospital_ID:req.body.hospital_ID,
        supervisor_ID:req.body.supervisor_ID
    }).catch( (err) => {res.send(err)} )
    res.send(data)
})

app.post('/create/hospitalc', async (req, res) => {
    console.log(req.body)
    let data = await Hospital_community.create({
        community_ID:req.body.community_ID,
        name:req.body.name,
        province_ID:req.body.province_ID
    }).catch( (err) => {res.send(err)} )
    res.send(data)
})

app.post('/create/hospital', async (req, res) => {
    console.log(req.body)
    let data = await Hospital.create({
        hospital_ID:req.body.hospital_ID,
        name:req.body.name,
        address:req.body.address,
        province_ID:req.body.province_ID,
        community_ID:req.body.community_ID
    }).catch( (err) => {res.send(err)} )
    res.send(data)
})

app.post('/create/patient', async (req, res) => {
    console.log(req.body)
    let data = await Patient.create({
        hn:req.body.hn,
        fname:req.body.fname,
        lname:req.body.lname,
        address:req.body.address,
        birth_date:req.body.birth_date,
        person_id:req.body.person_id,
        age:req.body.age,
        nationlity:req.body.nationlity,
        religion:req.body.religion,
        occupation:req.body.occupation,
        office_name:req.body.office_name
    }).catch( (err) => {res.send(err)} )
    res.send(data)
})

app.post('/create/province', async (req, res) => {
    console.log(req.body)
    let data = await Province.create({
        province_ID:req.body.province_ID,
        name:req.body.name
    }).catch( (err) => {res.send(err)} )
    res.send(data)
})

app.post('/create/staff', async (req, res) => {
    console.log(req.body)
    let data = await Staff.create({
        staff_ID:req.body.staff_ID,
        fname:req.body.fname,
        lname:req.body.lname,
        address:req.body.address,
        birth_date:req.body.birth_date,
        email:req.body.email,
        phone_number:req.body.phone_number,
        age:req.body.age,
        sex:req.body.sex,
        department_id:req.body.department_id
    }).catch( (err) => {res.send(err)} )
    res.send(data)
})


app.get('/sync', async (req, res) => {
   db.sequelize.sync({ force:true})
    res.send(200)
})
app.listen(8000,() => {
    console.log('server is Ready!')
})

