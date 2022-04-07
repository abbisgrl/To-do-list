const mongoose = require('mongoose'); //importing the mongoose for creating the model


//creating a model for storing the data and use it 
const listSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        // required: true
    }
});

//creating of list for exporting it 
const list = mongoose.model('List',listSchema);

module.exports = list;