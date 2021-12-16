const express = require('express');
const app = express();
require('./database/connection');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;
const routes = require('./routes');

app.listen(PORT, () => {
    console.log(`Server started on : http://localhost:${PORT}`);
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Api to Create a user ,delete user , update user
app.post('/user', (req, res)=>{
    routes.user.create(req,res);
});
app.delete('/user/:name', (req, res)=>{
    routes.user.delete(req,res);
});
app.patch('/user/:name', (req, res)=>{
    routes.user.update(req,res);
});

// Api to Create a Job, delete job , update job,
// get job with paginated
// result , filterjob based on name/location/company
app.post('/job', (req, res)=>{
    routes.job.create(req,res);
});
app.delete('/job/:name/:company', (req, res)=>{
    routes.job.delete(req,res);
});
app.patch('/job/:name/:company', (req, res)=>{
    routes.job.update(req,res);
});
app.get('/job', (req, res)=>{
    routes.job.filter(req,res);
});
app.get('/job/page', (req, res)=>{
    routes.job.page(req,res);
});

// Api to apply a job against each job
app.post('/application', (req,res)=>{
    routes.application.applyJob(req,res);
})

// Api to upload a file to local storage
app.post('/upload',(req,res)=>{
    routes.upload(req,res);
})