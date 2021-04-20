module.exports = (sequelize, Datatype) => {
    const user = sequelize.define("Case", {
        case_ID:{
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
        detail:{
            type: Datatype.TEXT,
            allowNull: false
        },
        date:{
            type: Datatype.DATE,
            allowNull: false
        },
        cost:{
            type: Datatype.FLOAT,
            allowNull: false
        },
        type:{
            type: Datatype.ENUM(['new','old']),
            allowNull: false
        },
        staff_ID:{
            type: Datatype.STRING,
            allowNull: false
        },
        hn:{
            type: Datatype.STRING,
            allowNull: false
        },
        claim_ID:{
            type: Datatype.STRING,
            allowNull: false
        },
        share:{
            type: Datatype.BOOLEAN

        }
    }, { freezeTableName:true, timestamps:false})

    return user
}