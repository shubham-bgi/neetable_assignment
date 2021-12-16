const {Job} = require('../models');

module.exports = {

    create: (req,res) => {
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
    },

    delete: async (req,res) => {
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
    },

    update: (req,res) => {
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
    },

    filter: async (req,res) => {
        const {id, name, location, company} = req.query;
        let searchCriteria = {};

        if(id)
        searchCriteria["id"] = id;
        if(name)
        searchCriteria["name"] = name;
        if(location)
        searchCriteria["location"] = location;
        if(company)
        searchCriteria["company"] = company;
        
        const jobDetails = await Job.findAll({
            where: searchCriteria
        }).catch( err=>{
            console.log('Error :',err)
        });

        res.json(jobDetails);
    },

    page: async (req,res)=>{
        const pageAsNumber = Number.parseInt(req.query.page);
        const sizeAsNumber = Number.parseInt(req.query.size);

        let page = 0;
        if(!Number.isNaN(pageAsNumber) && pageAsNumber > 0){
            page = pageAsNumber;
        }

        let size = 5;
        if(!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 5){
            size = sizeAsNumber;
        }

        const jobs = await Job.findAndCountAll({
            limit: size,
            offset: page*size
        });
        res.send({
            content: jobs.rows,
            totalPages: Math.ceil(jobs.count / size)
        })
    }
}