const mongoose = require('../db');

const PermissionSchema = new mongoose.Schema({
    permissionName: { type: String, required: true, unique: true }
});

const Permission = mongoose.model('Permission', PermissionSchema);

module.exports = Permission;

