const {Job} = require('../models');

module.exports = (req,res) => {
    let job = req.body;
    Job.create(job)
    .then((data)=>{
        res.status(200).json({
            message: 'Job Added...',
            jobData: job
        })
    })
    .catch((err)=>{
        console.error(err);
        res.send('Some error Occured!');
    })
}