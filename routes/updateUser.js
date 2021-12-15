const {User} = require('../models');

module.exports = (req,res) => {
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