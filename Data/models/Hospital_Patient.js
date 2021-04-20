module.exports = (sequelize, Datatype) => {
    const user = sequelize.define("Hospital_patient", {
        hospital_ID:{
            type: Datatype.STRING,
            allowNull: false
        },
        hn:{
            type: Datatype.STRING,
            allowNull: false
        },
    }, { freezeTableName:true, timestamps:false})

    return user
}