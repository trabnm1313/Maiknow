module.exports = (sequelize, Datatype) => {
    const user = sequelize.define("hospital_patient", {
        hospital_ID:{
            type: Datatype.STRING,
            allowNull: false
        },
        hn:{
            type: Datatype.STRING,
            allowNull: false
        },
        register_ID:{
            type: Datatype.STRING,
            allowNull: false,
            primaryKey: true
        },
        register_date:{
            type: Datatype.DATE,
            allowNull: false
        }
    }, { freezeTableName:true, timestamps:false})
    user.associate = models =>{
        user.hasMany(models.Case, {foreignKey:'register_ID'});
        
    }
    return user
}