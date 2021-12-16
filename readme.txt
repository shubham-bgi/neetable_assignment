Tech Stack Used - Node Js(v16.13.0), Mysql, Sequelize, express

Create database in mysql - job 

Run Following commands:
1)sequelize db:migrate - To let sequelize migrate tables
2)sequelize db:seed:all - to let sequelize fill tables
3)npm start - Start the local server
4*)NOT A COMMAND, IMPORT POSTMAN COLLECTION FROM './job application.postman_collection.json' - Use Postman Collection to test the APIs 
5)npm run test - To run test cases on APIs
6)node ./exportApplicationsXL.js - To export applications.xlsx
7)node '.\read&Parse.js' - To parse the xlsx file, it will log the data into terminal