const { json } = require('body-parser');
const express=require('express');
const userApiRouter=require('./Routes/api/users');
const mongoose=require('mongoose');
const app=express();


app.use(json());

app.use('/api/users',userApiRouter);


mongoose.set('strictQuery',true).connect('mongodb://127.0.0.1/practic').then(()=>{
    console.log('Successfully Connected to the database');
}).catch((e)=>{
    console.log('Error while connecting to the database');
})

app.listen(3000)