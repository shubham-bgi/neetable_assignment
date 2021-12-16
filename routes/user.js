const {User} = require('../models');

module.exports = {

    create: (req,res) => {
        let user = req.body;
        User.create(user)
        .then((data)=>{
            res.status(200).json({
                message: 'User Added...',
                userData: user
            })
        })
        .catch((err)=>{
            console.error(err);
            res.send('Some error Occured!');
        })
    },

    delete: async (req,res) => {
        let {name} = req.params;
        try{
            if(await User.destroy({
                where: {
                    name: name
                }
            })){
                res.status(200).json({
                    message: 'User Deleted...'
                })
            } else {
                res.send('Document not found!');
            }
        } catch (err){
            console.error(err);
            res.send('Some error Occured!');
        }
    },

    update: (req,res) =>{
        let {name} = req.params;
        let updatedData = req.body;
        User.update( updatedData, { where: { name: name } } )
        .then((documentsAffected)=>{
            if(documentsAffected != 0) {
                res.status(200).json({
                    message: 'User Updated...'
                })
            } else {
                res.status(404).json({
                    message: 'User Not Found!'
                })
            } 
        })
        .catch((err)=>{
            console.error(err);
            res.send('Some error Occured!')  
        })
    }

}