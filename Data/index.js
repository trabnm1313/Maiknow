const express = require('express')
const app = express()
const db = require("./models")
const { Case } = require("./models")
const { Claim_Type } = require("./models")
const { Department } = require("./models")
const { Hospital_community } = require("./models")
const { hospital_patient } = require("./models")
const { hospital } = require("./models")
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
app.use("/claimeType", claimeType)
//department--------------------------------------------------------------------------------------------
const department = require("./route/department")
app.use("/department", department)
//hospitalc---------------------------------------------------------------------------------------------
const hospitalc = require("./route/hospitalc")
app.use("/hospitalc", hospitalc)
//hospital----------------------------------------------------------------------------------------------
const hospitale = require("./route/hospital")
app.use("/hospital", hospitale)
//Patient-----------------------------------------------------------------------------------------------
const patient = require("./route/patient")
app.use("/patient", patient)
// staff--------------------------------------------------------------------------------------------------//
const staff = require("./route/staff")
app.use("/staff", staff)
//hospitalc---------------------------------------------------------------------------------------------
const hospitalp = require("./route/hospitalp")
app.use("/hospitalp", hospitalp)












app.get('/sync', async (req, res) => {
    db.sequelize.sync({ force: true })
    res.send(200)
})
app.listen(8000, () => {
    console.log('server is Ready!')
})

// //Authenticating database
// db.sequelize.authenticate().then(()=>{
//     console.log("Connected to database.")
// }).catch((err)=>{
//     console.log("Failed to connect to database: \n" + err)
// })

// app.get('/sync', async (req, res) => {
//     db.sequelize.sync({ force: true })
//     res.send(200)
// })
// app.listen(PORT, () => {
//     console.log(`Server is lisening on port ${PORT}`)
// })
