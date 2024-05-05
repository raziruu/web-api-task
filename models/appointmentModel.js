const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },

});

// Create a collection in mongodb with the name users
const Appointment = mongoose.model('usersAppointment', appointmentSchema);
module.exports = Appointment;