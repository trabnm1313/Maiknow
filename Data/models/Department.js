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
    user.associate = models =>{
        user.belongsTo(models.hospital, {foreignKey:'hospital_ID'});
        user.hasMany(models.Staff, {foreignKey:'department_ID'});
        user.belongsTo(models.Staff, {foreignKey:'staff_ID'});     
    }
    return user
}