'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        "name": "Manish Rithaliya",
        "email": "manish90@gmail.com",
        "phone": "+97622688055",
        "role": "FrontEnd Developer",
        "profile": "profile",
        "location": "Delhi",
        "photo_url": "http://imgur.com/52268",
        "skills": "ReactJS, Javascipt ES6, ",
        "education": "Graduate",
        "employment": "Google"
    },
      {
        "name": "Rishab Khanna",
        "email": "khanna9974@gmail.com",
        "phone": "+99415587668",
        "role": "FrontEnd Developer",
        "profile": "profile",
        "location": "Mumbai",
        "photo_url": "http://imgur.com/44769",
        "skills": "ReactJS, Javascipt ES6",
        "education": "Post Graduate,B.Tech",
        "employment": "Dashclicks"
    },
      {
        "name": "Evlyn Simran Renjith",
        "email": "ev1995@gmail.com",
        "phone": "+97699688055",
        "role": "Backend Developer",
        "profile": "profile",
        "location": "Bengaluru",
        "photo_url": "http://imgur.com/25468",
        "skills": "Python, AWS",
        "education": "B.Tech",
        "employment": "Handilooms"
    },
      {
        "name": "Shubham Aggarwal",
        "email": "shubhamaggarwal3011@gmail.com",
        "phone": "+919968418404",
        "role": "Bakend Developer",
        "profile": "Generalist",
        "location": "Delhi",
        "photo_url": "http://imgur.com/99987",
        "skills": "NodeJS, JS, ES6, KewlXD",
        "education": "Graduate,B.Arch",
        "employment": "Self Employed"
    },
      {
        "name": "Shruti Aggarwal",
        "email": "shrutiagg@gmail.com",
        "phone": "+918700769991",
        "role": "FullStack Developer",
        "profile": "profile",
        "location": "Kolkata",
        "photo_url": "http://imgur.com/59978",
        "skills": "Javascript, ReactJS ",
        "education": "Graduate",
        "employment": "Netomi"
    } 
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
     
  }
};
