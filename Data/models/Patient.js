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
        age:{
            type: Datatype.INTEGER,
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

    return user
}