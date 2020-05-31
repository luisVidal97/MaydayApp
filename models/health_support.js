const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Health_SupportSchema = new mongoose.Schema({
    idProfessional: {type: String, required:true},
    schedules: [{
        dayOfWeek: String,
        startTime: String,
        endTime: String
    }]

})

module.exports = mongoose.model('Health_Support', Health_SupportSchema);