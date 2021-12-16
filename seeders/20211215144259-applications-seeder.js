'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('applications', [
      {
        "job_id": 1,
        "user_id": 2,
        "description": "Position for Frontend Developer",
        "ctc": 500000,
        "ectc": 600000,
        "notice_period": 7
      },
      {
        "job_id": 2,
        "user_id": 2,
        "description": "Senior Software Architect",
        "ctc": 1500000,
        "ectc": 1600000,
        "notice_period": 30
      },
      {
        "job_id": 5,
        "user_id": 3,
        "description": "Position open for Backend Devloper",
        "ctc": 500000,
        "ectc": 600000,
        "notice_period": 15
      },
      {
        "job_id": 4,
        "user_id": 3,
        "description": "Position open for Node Js Developer",
        "ctc": 800000,
        "ectc": 900000,
        "notice_period": 20
      },
      {
        "job_id": 4,
        "user_id": 4,
        "description": "Position open for Node Js Developer",
        "ctc": 500000,
        "ectc": 800000,
        "notice_period": 7
      },
      {
        "job_id": 5,
        "user_id": 3,
        "description": "Position open for Backend Devloper",
        "ctc": 600000,
        "ectc": 800000,
        "notice_period": 30
      },
      {
        "job_id": 2,
        "user_id": 4,
        "description": "Senior Software Architect requirement",
        "ctc": 1200000,
        "ectc": 1700000,
        "notice_period": 15
      },
      {
        "job_id": 3,
        "user_id": 3,
        "description": "Position open for Front End Dev",
        "ctc": 1000000,
        "ectc": 2000000,
        "notice_period": 20
      },
      {
        "job_id": 2,
        "user_id": 2,
        "description": "Senior Software Architect requirement",
        "ctc": 1500000,
        "ectc": 1800000,
        "notice_period": 20
      },
      {
        "job_id": 2,
        "user_id": 5,
        "description": "Senior Software Architect requirement",
        "ctc": 1800000,
        "ectc": 2500000,
        "notice_period": 60
      },
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('applications', null, {});
     
  }
};
