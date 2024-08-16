const User = require('./models/User');
const Role = require('./models/Role'); 
const Permission = require('./models/Permission'); 

async function fetchData(username) {
    try {
        const user = await User.findOne({ username }).populate({
            path: 'role',
            populate: { path: 'permissions' }
        });

        if (!user) {
            console.log('User not found');
            return null;
        }

        return user;
    } catch (err) {
        console.error('Error fetching data:', err);
        return null;
    }
}

function getData(user) {
    if (!user) {
        console.log('No user data available');
        return;
    }

    console.log(`Role: ${user.role.roleName}`);
    console.log('Permissions:');
    user.role.permissions.forEach(permission => {
        console.log(`- ${permission.permissionName}`);
    });
}

module.exports = { fetchData, getData };
