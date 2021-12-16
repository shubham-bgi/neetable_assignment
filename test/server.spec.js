require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
const host = "http://localhost:3000";

chai.should();
chai.use(chaiHttp);

describe('Job APIs', ()=>{

    describe("Test POST route /user", ()=>{
        it("It should insert the user details into DB", (done)=>{
            var path = "/user";
            chai.request(host)
                .post(path)
                .set('content-type', 'application/json')
                .send({
                    "name": "Renu Aggarwal",
                    "email": "renu95@gmail.com",
                    "phone": "+91 8700769995",
                    "role": "Junior Frontend Developer",
                    "location": "Jaipur",
                    "profile": "profile",
                    "photo_url": "http://imgur.com/58746",
                    "skills": "React, UI/UX designer, Vanila JS",
                    "education": "Graduate",
                    "employment": "Tesla"
                })
                .end((err, response)=>{
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                done();
                });
        });
    });

    describe("Test PATCH route /user/:name", ()=>{
        it("It should update the given user details.", (done)=>{
            var path = "/user/Renu Aggarwal";
            chai.request(host)
                .patch(path)
                .set('content-type', 'application/json')
                .send({
                    "phone": "+918879543215",
                    "location": "Bangladesh",
                    "profile": "VIP",
                })
                .end((err, response)=>{
                    response.should.have.status(200);
                done();
                });
        });
    });

    describe("Test DELETE route /user/:name", ()=>{
        it("It should delete the user details of the given name", (done)=>{
            var path = "/user/Renu Aggarwal";
            chai.request(host)
                .delete(path)
                .end((err, response)=>{
                    response.should.have.status(200);
                done();
                });
        });
    });

    describe("Test POST route /job", ()=>{
        it("It should insert the job details into DB", (done)=>{
            var path = "/job";
            chai.request(host)
                .post(path)
                .set('content-type', 'application/json')
                .send({
                    "name" : "Python Developer",
                    "company" : "Apple",
                    "location" : "Bengaluru",
                    "description" : "Position open for Python Developer"
                })
                .end((err, response)=>{
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                done();
                });
        });
    });

    describe("Test PATCH route /job/:name/:company", ()=>{
        it("It should update the given job details.", (done)=>{
            var path = "/job/Python Developer/Apple";
            chai.request(host)
                .patch(path)
                .set('content-type', 'application/json')
                .send({
                    "company" : "Google",
                    "location" : "Mumbai",
                })
                .end((err, response)=>{
                    response.should.have.status(200);
                done();
                });
        });
    });

    describe("Test GET route /job/query", ()=>{
        it("It should return all the jobs that matches the query criteria.", (done)=>{
            var path = "/job/?location=Delhi";
            chai.request(host)
                .get(path)
                .end((err, response)=>{
                    response.should.have.status(200);
                    response.body.should.be.a('array');
                done();
                });
        });
    });

    describe("Test GET route /job/page/query", ()=>{
        it("It should return 3 job details.", (done)=>{
            var path = "/job/page/?page=0&size=3";
            chai.request(host)
                .get(path)
                .end((err, response)=>{
                    response.should.have.status(200);
                    response.body.should.be.a('Object');
                    response.body.content.length.should.be.eq(3);
                done();
                });
        });
    });

    describe("Test DELETE route /job/:name/:company", ()=>{
        it("It should delete the job details of the given name and company", (done)=>{
            var path = "/job/Python Developer/Apple";
            chai.request(host)
                .delete(path)
                .end((err, response)=>{
                    response.should.have.status(200);
                done();
                });
        });
    });

    describe("Test POST route /application", ()=>{
        it("It should insert the job application into table apllications.", (done)=>{
            var path = "/application";
            chai.request(host)
                .post(path)
                .set('content-type', 'application/json')
                .send({
                    "jobName": "Senior Software Architect",
                    "userName": "Manish Rithaliya",
                    "ctc": 500000,
                    "ectc": 600000,
                    "description": "Looking for software dev",
                    "notice_period": 7
                })
                .end((err, response)=>{
                    response.should.have.status(200);
                    response.body.should.be.a('object');
                done();
                });
        });
    });
})