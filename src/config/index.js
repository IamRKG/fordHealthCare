const configValue = require("./config");

const getDBConnectionString = () => "mongodb://" + configValue.userName + ":" + configValue.password + "@ds157544.mlab.com:57544/rmd_dev"


module.exports = {
    getDBConnectionString:getDBConnectionString
}