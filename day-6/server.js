const app = require('./src/app');
const mongoose = require('mongoose')

function connectToDb(){
    mongoose.connect('mongodb://localhost:27017/day-6')
    .then(()=>{
        console.log('connected to database')
    })
}

connectToDb();

app.listen(3000,()=>{
    console.log('server is running on port 3000')
});