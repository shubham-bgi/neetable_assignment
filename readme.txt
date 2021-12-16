Tech Stack Used - Node Js(v16.13.0), Mysql, Sequelize, express

Create database in mysql - job
Import postman collection from './job application.postman_collection.json' 

Run Following commands:
1)sequelize db:migrate (To let sequelize migrate tables)
2)sequelize db:seed:all (To let sequelize fill tables)
3)npm start (Starts the local server)
5)npm run test (To run test cases on APIs)
6)node ./exportApplicationsXL.js (to generate excel report to list all the job applications in ./applications.xlsx)
7)node '.\read&Parse.js' (To parse the xlsx file, it will log the data into terminal)