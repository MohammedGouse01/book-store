const mongoose= require('mongoose');

const schema= new mongoose.Schema({
    name: String,
    author: String,
    price: Number,
    postedDate: Date,
    updatedDate: {type: Date,default: Date.now},
});

const bookModel=mongoose.model('book',schema);

module.exports= bookModel;