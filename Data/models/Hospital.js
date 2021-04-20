module.exports = (sequelize, Datatype) => {
    const user = sequelize.define("Hospital", {
        hospital_ID:{
            type: Datatype.STRING,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type: Datatype.STRING,
            allowNull: false
        },
        address:{
            type: Datatype.TEXT,
            allowNull: false
        },
        province_ID:{
            type: Datatype.STRING,
            allowNull: false
        },
        community_ID:{
            type: Datatype.STRING,
            allowNull: false
        },
    }, { freezeTableName:true, timestamps:false})

    return user
}