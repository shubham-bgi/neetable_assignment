const {User} = require('../models');

module.exports = async (req,res) => {
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
}