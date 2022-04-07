const express = require('express');
const router = express.Router();

//importing the workfile file from controller
const workingController = require('../controller/work_control');

//it is a inbuild middleware which work is to encode the recieve data
router.use(express.urlencoded({extended:true}));

// this is for adding task through /work/add-task url 
router.post('/add-task',workingController.add);


// this is for adding task through /work/delete-task url 
router.post('/delete-task',workingController.delete)


module.exports = router;