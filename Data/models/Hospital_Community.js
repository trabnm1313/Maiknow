module.exports = (sequelize, Datatype) => {
    const user = sequelize.define("Hospital_community", {
        community_ID:{
            type: Datatype.STRING,
            primaryKey: true,
            allowNull: false
        },
        name:{
            type: Datatype.STRING,
            allowNull: false
        },
        province_ID:{
            type: Datatype.STRING,
            allowNull: false
        },
    }, { freezeTableName:true, timestamps:false})
    user.associate = models =>{
        user.belongsTo(models.Province, {foreignKey:'province_ID'});
    }
    return user
}