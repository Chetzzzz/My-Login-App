const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));


const hardcodedUser = {
    username: 'demo',
    
    password: 'password_hashed',
};

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

   
    if (username === hardcodedUser.username && password === hardcodedUser.password) {
        res.status(200).json({ success: true, message: 'Login successful' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
});

app.get('/success.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'success.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
