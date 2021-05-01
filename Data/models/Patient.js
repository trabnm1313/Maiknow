module.exports = (sequelize, Datatype) => {
    const user = sequelize.define("Patient", {
       hn:{
            type: Datatype.CHAR,
            primaryKey: true,
            allowNull: false
        },
        fname:{
            type: Datatype.STRING,
            allowNull: false
        },
        lname:{
            type: Datatype.STRING,
            allowNull: false
        },
        address:{
            type: Datatype.TEXT,
            allowNull: false
        },
        birth_date:{
            type: Datatype.DATE,
            allowNull: false
        },
        person_id:{
            type: Datatype.STRING,
            allowNull: false
        },
        nationlity:{
            type: Datatype.STRING,
            allowNull: false
        },
        religion:{
            type: Datatype.STRING,
            allowNull: false
        },
        occupation:{
            type: Datatype.STRING,
            allowNull: false
        },
        office_name:{
            type: Datatype.STRING,
            allowNull: false
        },
    }, { freezeTableName:true, timestamps:false})
    // user.associate = models =>{
    //     user.belongsToMany(models.hospital, {foreignKey:'hn', through: 'hospital_patient'});
    // }
    return user
}