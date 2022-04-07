const mongoose = require('mongoose');  //import the mongoose 
mongoose.connect('mongodb://localhost/to_do_list');  //connecting the server to the database

const db = mongoose.connection;     //for checking the connection of the database 

//error will throw if connection is not establish 
db.on('error',console.error.bind(console,'error connecting to db'));


//this will print once connection will succesfull
db.once('open',function(){
    console.log('Successfully connecting to the database')
})