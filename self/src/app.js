const express = require('express');

const app = express();

app.use(express.json());
let user = {
    username: "Test",
    rateLimit: 5,
    apiKey: "test@123"
};

// Create Request
app.post('/api/:index', (req, res) => {
    let index = req.params.index
    if (user.apiKey == index && user.rateLimit > 0) {
        user.rateLimit = user.rateLimit - 1
        res.send(`Request Completed, Limits Left ${user.rateLimit}`);
    } if (user.apiKey == index && user.rateLimit <= 0) {
        res.send('Rate Limit Exceeded');
    } else {
        res.send('Invalid Request');
    }
})

// Read User Details
app.get('/api/:index', (req, res) => {
    let index = req.params.index
    if (user.apiKey == index) {
        res.send(user);
    }
})

// Increase Limits
app.patch('/api/:index', (req, res) => {
    let index = req.params.index
    if (user.apiKey == index) {
        user.rateLimit = req.body.rateLimit
        res.send('RateLimit Increased');
    }
})

// Update User Details
app.put('/api/:index',(req,res)=>{
    let index = req.params.index
    if (user.apiKey == index){
        user.username = req.body.username
        user.rateLimit = req.body.rateLimit
        user.apiKey = req.body.apiKey
        res.send('User Profile Updated');
        
    }
})

// Delete User
app.delete('/api/:index', (req, res) => {
    let index = req.params.index
    if (user.apiKey == index) {
         user.username = null
         user.rateLimit = null
        res.send('user deleted');
    }
})

module.exports = app