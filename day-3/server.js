const express = require('express');

const app = express();

app.use(express.json()); 
const notes = [];

app.post('/',(req,res)=>{
    notes.push(req.body)
    res.send('Note created')
});

app.get('/',(req,res)=>{
    res.send(notes)
})

app.listen(3000,()=>{
    console.log('server is running on port 3000');
});