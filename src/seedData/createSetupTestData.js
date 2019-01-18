const patients = require("../app/ford/api/models/patientModel");

const createSetupTestData = (app) => {
 
    app.get('/api/createSetupTestData', (req,res) => {

        const  patientsSeed = [{
            patientID:0422,
            patientName:"Ramu",
            age:500,
            contactNo:9584715311,
            IPNo:0148,
            bloodGroup:"O Positive",
            address:"Velcahery,Chennai",
            emailAddress:"ramc90@gmail.com",
            doctorName:"Karthick",
            speciality:"Cardiology",
            paitentClinicalHistory:"Alergic to Milk",
            treatmentsProcedures:"Admit to hospital",
            diagnosisProvisional:"Fever",
            notes:"NA",
            treatment:"Tabltes",
            investigation:"Blood test",
            reviewAdvise:"Come after 5 days",
            amount:2000,
            consent:"NA"
          }]
          patients.create(patientsSeed, (err,result) => {
              res.send(result);
          })
    });
}

module.exports = createSetupTestData;