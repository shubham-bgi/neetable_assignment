const { Application, Job, User } = require('./models');
const excel = require('excel4node');
let workbook = new excel.Workbook();
let worksheet = workbook.addWorksheet('Sheet 1');

(async function (){

    let applications = await Application.findAll();
    let jobs = await Job.findAll();
    let users = await User.findAll();

    applications = applications.map(item => item.dataValues);
    jobs = jobs.map(item => item.dataValues);
    users = users.map(item => item.dataValues);

    applications = applications.map( application => {
        application["job_name"] = jobs[application.job_id-1].name;
        application["user_name"] = users[application.user_id-1].name;
        delete application.job_id;
        delete application.user_id;
        return application;
    });

    let headingColumnNames = Object.keys(applications[0]);
    let headingColumnIndex = 1;
    headingColumnNames.forEach(heading => {
        worksheet.cell(1, headingColumnIndex++)
            .string(heading)
    });
    let rowIndex = 2;
    applications.forEach( application => {
        let columnIndex = 1;
        Object.keys(application).forEach(columnName =>{
            let ws = worksheet.cell(rowIndex,columnIndex++);
            if(typeof application[columnName] === 'number')
                ws.number((application[columnName]));
            else
                ws.string(String(application[columnName]));
        });
        rowIndex++;
    });
    workbook.write('./applications.xlsx');
})()