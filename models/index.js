const User = require('./user');
const Job = require('./job');
const Application = require('./application');

Application.belongsTo(User, { 
    as: "User", 
    foreignKey: "user_id"
});
Application.belongsTo(Job, { 
    as: "Job", 
    foreignKey: "job_id"
});
User.hasMany(Application, {
    as: "Applications", 
    foreignKey: "user_id"
});
Job.hasMany(Application, { 
    as: "Applications", 
    foreignKey: "job_id"
});
User.belongsToMany(Job, {
    through: {
        model: Application
    },
    foreignKey: "user_id"
});
Job.belongsToMany(User, {
    through: {
        model: Application
    },
    foreignKey: "job_id"
});

module.exports= {
    User,
    Job,
    Application
}