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
        age:{
            type: Datatype.INTEGER,
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

    return user
}