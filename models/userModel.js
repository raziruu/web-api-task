const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,

    },

});

// Create a collection in mongodb with the name users
const User = mongoose.model('users', userSchema);
module.exports = User;