module.exports = (sequelize, Datatype) => {
    const hospital = sequelize.define("hospital", {
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
    hospital.associate = models =>{
        hospital.belongsToMany(models.Patient, {foreignKey:'hospital_ID', through: 'hospital_patient'});
        hospital.belongsTo(models.Province, {foreignKey:'province_ID'});
        hospital.belongsTo(models.Hospital_community, {foreignKey:'community_ID'});
        hospital.hasMany(models.Department, {foreignKey:'hospital_ID'});
    }
    return hospital
}