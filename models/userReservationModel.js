const mongoose = require('mongoose');

const userReservationSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    eventDate: {
        type: Date,
        required: true
    },
    numberOfGuest: {
        type: Number,
        required: true,

    },
});

// Create a collection in mongodb with the name users
const UserReservation = mongoose.model('usersReservation', userReservationSchema);
module.exports = UserReservation;