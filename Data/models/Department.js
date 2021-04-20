module.exports = (sequelize, Datatype) => {
    const user = sequelize.define("Department", {
        department_ID:{
            type: Datatype.STRING,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type: Datatype.STRING,
            allowNull: false
        },
        hospital_ID:{
            type: Datatype.STRING,
            allowNull: false
        },
        supervisor_ID:{
            type: Datatype.STRING,
            allowNull: false
        },
    }, { freezeTableName:true, timestamps:false})

    return user
}