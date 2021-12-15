'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { 
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
          allowNull: false
      },
      education: {
          type: Sequelize.STRING,
          allowNull: false
      },
      employment: {
        type: Sequelize.STRING,
        allowNull: false 
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');  
  }
};
