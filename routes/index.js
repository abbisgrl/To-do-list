const express = require('express');  //importing the express

const router = express.Router();     //Creating the router variable by using inbuild module

const homecontrol = require('../controller/home');  //importing the home file from controller

router.get('/',homecontrol.home);           //setting the file for home page

router.use('/work', require('./work'));     //redirecting to the work

console.log('router is working');           //just for checking the connection

module.exports = router;                    //exporting the router to the main index file