const mongoose = require('mongoose');
const { Profiler } = require('react');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    ProfileImage: {type: String},

});

module.exports = mongoose.model('User', userSchema);