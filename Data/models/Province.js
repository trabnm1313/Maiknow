module.exports = (sequelize, Datatype) => {
    const user = sequelize.define("Province", {
        province_ID:{
            type: Datatype.STRING,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type: Datatype.STRING,
            allowNull: false
        },
    }, { freezeTableName:true, timestamps:false})
    user.associate = models =>{
        user.hasOne(models.Hospital_community, {foreignKey:'province_ID'});
    }
    return user
}