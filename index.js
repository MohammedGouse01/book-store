const express= require('express');
const bodyParser= require('body-parser');
const mongoose = require('mongoose');

const homeRouter= require('./routes/homeRouter');
const bookRouter= require('./routes/bookRouter');

const app= express();

const PORT= 3000;

app.listen(PORT,()=>console.log(`The server is running on port ${PORT}`));

// main().catch(err=>console.log(err));// calling the main function

// async function main(){
    mongoose.connect('mongodb://127.0.0.1:27017/book-store',()=>console.log('connected to DB'))
// }// defining the main function to connect to db

app.use(bodyParser.json());

app.use('/',homeRouter);
app.use('/books',bookRouter);
app.get('*',(req,res)=>{
    res.status(404);
    res.send('Page Not Found');
});
