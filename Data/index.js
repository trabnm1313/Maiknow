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
//claimeType--------------------------------------------------------------------------------------------
const claimeType = require("./route/claimeType")
app.use("/claimeType", case_)
//department--------------------------------------------------------------------------------------------
const claimeType = require("./route/department")
app.use("/department", case_)
//hospitalc---------------------------------------------------------------------------------------------
const claimeType = require("./route/hospitalc")
app.use("/hospitalc", case_)
//hospital----------------------------------------------------------------------------------------------
const claimeType = require("./route/hospital")
app.use("/hospital", case_)
//Patient-----------------------------------------------------------------------------------------------
const claimeType = require("./route/patient")
app.use("/patient", case_)
// staff--------------------------------------------------------------------------------------------------//
const claimeType = require("./route/staff")
app.use("/staff", case_)












app.get('/sync', async (req, res) => {
    db.sequelize.sync({ force: true })
    res.send(200)
})
app.listen(8000, () => {
    console.log('server is Ready!')
})

