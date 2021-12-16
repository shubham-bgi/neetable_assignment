'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('jobs', [
      {
        "name" : "Frontend Developer",
        "company" : "Apple",
        "location" : "Bengaluru",
        "description" : "Position open for Frontend Developer, 1+ year xp required",
      },
      {
        "name" : "Senior Software Architect",
        "company" : "Infosys",
        "location" : "Delhi",
        "description" : "Senior Software Architect requirement, 5+ year xp required",
      },
      {
        "name" : "Frontend Developer",
        "company" : "Rappid Innovation",
        "location" : "Remote",
        "description" : "Position open for Front End Dev, 1+ year xp required",
      },
      {
        "name" : "Node Js Developer",
        "company" : "Neetable",
        "location" : "Bengaluru",
        "description" : "Position open for Node Js Developer, 2+ year xp required",
      },
      {
        "name" : "Backend Developer",
        "company" : "Google",
        "location" : "Delhi",
        "description" : "Position open for Backend Devloper, 1+ year xp required",
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('jobs', null, {});
     
  }
};
