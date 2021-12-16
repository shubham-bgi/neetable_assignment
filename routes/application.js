const {Job, Application, User} = require('../models');

module.exports = {
    applyJob: async (req,res) => {

        let application = req.body;

        const job = await Job.findAll({
            where: {
                name: application.jobName
            }
        });
        const user = await User.findAll({
            where: {
                name: application.userName
            }
        });
        
        delete application.jobName;
        delete application.userName;
        application["job_id"] = job[0].id;
        application["user_id"] = user[0].id;

        Application.create(application)
        .then((data)=>{
            res.status(200).json({
                message: 'Application posted...',
                application: application
            })
        })
        .catch((err)=>{
            console.error(err);
            res.send('Some error Occured!');
        })
    }

}