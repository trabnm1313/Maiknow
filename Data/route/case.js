const express = require('express')
const app = express.Router()
const { Case } = require("../models")
app.use(express.json())
//create----------------------------------------------------------------------------------------------
app.post('/create', async (req, res) => {
    console.log(req.body)
    let data = await Case.create({
        case_ID: req.body.case_ID,
        fname: req.body.fname,
        lname: req.body.lname,
        detail: req.body.detail,
        date: req.body.date,
        cost: req.body.cost,
        type: req.body.type,
        staff_ID: req.body.staff_ID,
        hn: req.body.hn,
        claim_ID: req.body.claim_ID
    }).catch((err) => { res.send(err) })
    res.send(data)
})
//read-------------------------------------------------------------------------------------------------
app.get('/read/:id', async (req, res) => {
    let uu = await Case.findOne({
        where: {
            case_ID: req.params.id
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

app.get('/readag/:filter&:text', async (req, res) => {
    let filter = req.params.filter
    let data = await Case.findAll({
        where: {
            filter: req.params.text
        },
    })
    res.send(data)
    console.log(filter)
})

// update----------------------------------------------------------------------------------------------//
app.patch('/update/:id', async (req, res) => {
    let data = await Case.update(
        req.body, {
        where: { case_ID: req.params.id }
    })
    res.send(data)
})

// delete-----------------------------------------------------------------------------------------------//
app.delete('/delete/:id', async (req, res) => {
    let data = await Case.findOne({
        where: {
            case_ID: req.params.id
        }

    }).then(data => {
        return Case.destroy({
            where: {
                case_ID: req.params.id
            }
        }).then(() => { return data })
    })
    res.send(data)
})


module.exports = app;