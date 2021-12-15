const {Job} = require('../models');

module.exports = async (req,res) => {
    let {name, company} = req.params;
    try{
        if(await Job.destroy({
            where: {
                name: name,
                company: company
            }
        })){
            res.status(200).json({
                message: 'Job Deleted...'
            })
        } else {
            res.send('Document not found!');
        }
    } catch (err){
        console.error(err);
        res.send('Some error Occured!');
    }
}