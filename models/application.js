const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

module.exports = sequelize.define("applications", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    job_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    ctc:{
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    ectc:{
        type: Sequelize.INTEGER(11),
        allowNull: false
    },
    notice_period:{
        type: Sequelize.INTEGER(11),
        allowNull: false
    }
});