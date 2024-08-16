const mongoose = require('../db');
const Permission = require('./Permission'); 

const RoleSchema = new mongoose.Schema({
    roleName: { type: String, required: true, unique: true },
    permissions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Permission' }]
});

const Role = mongoose.model('Role', RoleSchema);

module.exports = Role;

