"use strict";

module.exports = (sequelize, DataTypes) => {
    const deals = sequelize.define("deals", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        server_dateTime: {
            type: DataTypes.DATE,
            allowNull: false
        },
        dateTime_UTC: {
            type: DataTypes.DATE,
            allowNull: false
        },
        update_dateTime_UTC: {
            type: DataTypes.DATE,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
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

    return deals;
}