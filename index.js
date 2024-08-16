const mongoose = require('./db');
const { fetchData, getData } = require('./rbac');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function signIn(username, password) {
    try {
        const user = await fetchData(username);

        if (!user) {
            console.log('User not found');
            return;
        }

        if (user.password !== password) {
            console.log('Invalid password');
            return;
        }

        getData(user);

    } catch (err) {
        console.error('Error during sign-in:', err);
    } finally {
        mongoose.connection.close();
        rl.close(); 
    }
}

rl.question('Username: ', (username) => {
    rl.question('Password: ', (password) => {
        signIn(username, password);
    });
});
