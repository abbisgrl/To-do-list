const express = require('express');  //exporting the express 
const port = 8004;                      
const app = express();      

app.use(express.static('assets'));  //setting to the assset directory for the static file

app.set('view engine','ejs');       //setting of the template engine of type ejs

app.set('views','./views');         //setting to the ejs files 

app.use('/',require('./routes'));   //redirecting to the routes folder for all url /


// Setting express to listen to port 8004
app.listen(port,function(err){
    if(err){
        console.log(`Error in the server:${err}`);
        return;
    }

    console.log(`There is no error in the server:${port}`);
});