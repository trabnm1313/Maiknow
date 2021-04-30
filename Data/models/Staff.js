module.exports = (sequelize, Datatype) => {
    const user = sequelize.define("Staff", {
        staff_ID:{
            type: Datatype.STRING,
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
        email:{
            type: Datatype.STRING,
            allowNull: false
        },
        phone_number:{
            type: Datatype.STRING,
            allowNull: false
        },
        sex:{
            type: Datatype.ENUM(['female','male']),
            allowNull: false
        },
        department_id:{
            type: Datatype.STRING,
            allowNull: false
        },
    }, { freezeTableName:true, timestamps:false})
    user.associate = models =>{
        user.hasMany(models.Case, {foreignKey:'staff_ID'});
        user.belongsTo(models.Department, {foreignKey:'department_ID'});
        user.hasMany(models.Department, {foreignKey:'staff_ID'});
    }
    return user
}