const mongoose = require('../../database');

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        lowercase: true
    },
    password: {
        type: String,
        select: false
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;