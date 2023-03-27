"use strict";

module.exports = (sequelize, DataTypes) => {
    const claimed = sequelize.define("claimed", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        deal_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        server_dateTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        dateTime_UTC: {
            type: DataTypes.DATE,
            allowNull: false
        },
        amount: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        currency: {
            type: DataTypes.STRING,
            allowNull: false
        },

    });

    return claimed;
}