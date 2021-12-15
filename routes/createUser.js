const {User} = require('../models');

module.exports = (req,res) => {
    let user = req.body;
    User.create(user)
    .then((data)=>{
        console.log(data);
        res.status(200).json({
            message: 'User Added...',
            userData: user
        })
    })
    .catch((err)=>{
        console.error(err);
        res.send('Some error Occured!');
    })
}