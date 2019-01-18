const patientModel = require("../patients/model");

const patientRepo = function (){

        getAllPatient = function(req,res){
                
                patientModel.find({}, (err,response) => res.send(response));
        }
        
        getPatientById = function (req,res){
            patientModel.findById({_id:req.params.id}, (err,response) => res.send(response));
        }

        savePatient = function(req,res){
            const newPatient = patientModel({
                    patientID:req.body.patientID,
                    patientName:req.body.patientName,
                    age:req.body.age,
                    contactNo:req.body.contactNo,
                    IPNo:req.body.IPNo,  
                    bloodGroup:req.body.bloodGroup,
                    address:req.body.address,
                    emailAddress:req.body.emailAddress,
                    doctorName:req.body.doctorName,
                    speciality:req.body.speciality,
                    paitentClinicalHistory:req.body.paitentClinicalHistory,
                    treatmentsProcedures:req.body.treatment,
                    diagnosisProvisional:req.body.diagnosisProvisional,
                    notes:req.body.notes,
                    treatment:req.body.treatment,
                    investigation:req.body.investigation,
                    reviewAdvise:req.body.reviewAdvise,
                    amount:req.body.amount,
                    consent:req.body.consent
            })
            newPatient.save((err) => res.send("succes"));
        }
        
        updatePatient = function(req,res){
            const updatePatient = {
                patientID:req.body.patientID,
                patientName:req.body.patientName,
                age:req.body.age,
                contactNo:req.body.contactNo,
                IPNo:req.body.IPNo,  
                bloodGroup:req.body.bloodGroup,
                address:req.body.address,
                emailAddress:req.body.emailAddress,
                doctorName:req.body.doctorName,
                speciality:req.body.speciality,
                paitentClinicalHistory:req.body.paitentClinicalHistory,
                treatmentsProcedures:req.body.treatment,
                diagnosisProvisional:req.body.diagnosisProvisional,
                notes:req.body.notes,
                treatment:req.body.treatment,
                investigation:req.body.investigation,
                reviewAdvise:req.body.reviewAdvise,
                amount:req.body.amount,
                consent:req.body.consent
        }
        console.log(req.body._id)
            patientModel.findByIdAndUpdate(req.body._id,updatePatient, (err) => res.send("updated"))
        }
    

    return {
        getAllPatient:getAllPatient,
        getPatientById:getPatientById,
        savePatient:savePatient,
        updatePatient:updatePatient
    }
}

module.exports = patientRepo();