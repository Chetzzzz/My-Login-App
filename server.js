// server.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Serve static files from the root directory
app.use(express.static(__dirname));

// Hardcoded user for demonstration purposes
const hardcodedUser = {
    username: 'demo',
    // Use a secure password hashing library like bcrypt in production
    password: 'password_hashed',
};

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Compare the received credentials with the hardcoded user
    if (username === hardcodedUser.username && password === hardcodedUser.password) {
        res.status(200).json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
