const express = require('express');
const app = express();
require('./database/connection');
const PORT = process.env.PORT || 3000;
const routes = require('./routes');

app.listen(PORT, () => {
    console.log(`Server started on : http://localhost:${PORT}`);
});
app.use(express.json());

// API 1:
// Api to Create a user ,delete user , update user
app.post('/user', (req, res)=>{
    routes.createUser(req,res);
});
app.delete('/user/:name', (req, res)=>{
    routes.deleteUser(req,res);
});
app.patch('/user/:name', (req, res)=>{
    routes.updateUser(req,res);
});

// API 2:
// Api to Create a Job, delete job , update job,
// get job with paginated
// result , filterjob based on name/location/company
app.post('/job', (req, res)=>{
    routes.createJob(req,res);
});
app.delete('/job/:name/:company', (req, res)=>{
    routes.deleteJob(req,res);
});
app.patch('/job/:name/:company', (req, res)=>{
    routes.updateJob(req,res);
});
app.get('/job', (req, res)=>{
    routes.filterJob(req,res);
});

// API 3:
// Api to apply a job against each job
app.post('/application', (req,res)=>{
    routes.applyJob(req,res);
})