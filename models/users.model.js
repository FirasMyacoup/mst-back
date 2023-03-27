'use strict';

module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define("users", {
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
        last_login_dateTime_UTC: {
            type: DataTypes.DATE,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date_Of_Birth: {
            type: DataTypes.DATE,
            allowNull: false
        },
    });

    return users;
};