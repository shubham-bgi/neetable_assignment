const {Job} = require('../models');

module.exports = (req,res) => {
    let {name, company} = req.params;
    let updatedData = req.body;
    Job.update( updatedData, { where: { name: name, company: company } } )
    .then((documentsAffected)=>{
        if(documentsAffected != 0) {
            res.status(200).json({
                message: 'Job Updated...'
            })
        } else {
            res.status(404).json({
                message: 'Job Not Found!'
            })
        } 
    })
    .catch((err)=>{
        console.error(err);
        res.send('Some error Occured!')  
    })
    
}