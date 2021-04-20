module.exports = (sequelize, Datatype) => {
    const user = sequelize.define("Claim_Type", {
        claim_ID:{
            type: Datatype.STRING,
            primaryKey: true,
            allowNull: false
        },
        claim:{
            type: Datatype.STRING,
            allowNull: false
        },
      
    }, { freezeTableName:true, timestamps:false})

    return user}