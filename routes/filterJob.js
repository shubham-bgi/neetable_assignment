const {Job} = require('../models');

module.exports = async (req, res)=>{
    
    const {id, name, location, company} = req.query;
    let searchCriteria = {};

    if(id){
        searchCriteria["id"] = id;
    }
    if(name){
        searchCriteria["name"] = name;
    }
    if(location){
        searchCriteria["location"] = location;
    }
    if(company){
        searchCriteria["company"] = company;
    }

    const jobDetails = await Job.findAll({
        where: searchCriteria
    }).catch( err=>{
        console.log('Error :',err)
    });

    res.json(jobDetails);
}