const Sequelize = require("sequelize");
const sequelize = require("../database/connection");

module.exports = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
          type: Sequelize.STRING,
          allowNull: false
      },
      email: {
          type: Sequelize.STRING,
          allowNull: false
      },
      phone: {
          type: Sequelize.STRING,
          allowNull: false
      },
      role: {
          type: Sequelize.STRING,
          allowNull: false
      },
      profile: {
          type: Sequelize.STRING,
          allowNull: false
      },
      location: {
          type: Sequelize.STRING,
          allowNull: false
      },
      photo_url: {
          type: Sequelize.STRING,
          allowNull: false
      },
      skills: {
          type: Sequelize.STRING,
          allowNull: false,
        //   get() {
        //       return this.getDataValue('skills').split(';')
        //     },
        //     set(val) {
        //         this.setDataValue('skills',val.join(';'));
        //     }
      },
      education: {
          type: Sequelize.STRING,
          allowNull: false
      },
      employment: {
        type: Sequelize.STRING,
        allowNull: false 
      }
});