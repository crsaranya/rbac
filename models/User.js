const mongoose = require('../db');
const Role = require('./Role'); 
const Permission = require('./Permission'); 

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
