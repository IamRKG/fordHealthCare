const patientController =  require("./controller");
const bodyParser = require("body-parser");
const Router = (app) => {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    app.get('/api/patients', patientController.getRepoAllPatient);

    app.get('/api/patients/:id', patientController.getRepoPatientById);

    app.post('/api/patients', patientController.repoSavePatient);

    app.put('/api/patients', patientController.repoUpdatePatient);

}

module.exports = Router;