const db = require('../config/mongoose'); // importing the mongoose

//importing the schema of the database model
const list = require('../model/list');

module.exports.add = function (req, res) {
    let newDate;
    //if there is no date is select no then no deadline will show
    if (req.body.date.length == 0) {
        newDate = 'No Deadline'
    }
    // If date is select
    else {
        let temp = req.body.date;
        let date = temp.substring(8, 10);
        let mon = temp.substring(5, 7);
        let year = temp.substring(0, 4);

        if (date[0] == '0') {
            date = date.substring(1);
        }
        if (mon[0] == '0') {
            mon = mon.substring(1);
        }

        let months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
        newDate = "" + months[mon - 1] + " " + date + ", " + year;
    }

    list.create({
        description : req.body.description,
        category : req.body.category,
        date : newDate
    },function(err){
        if(err){
            console.log('Error in creating list');
            return;
        }
        return res.redirect('back');
    });
}


module.exports.delete = function(req, res){
    // if any task is not selected to delete then nothing will happen and this will print on console
    if(req.body.id == undefined){
        console.log("User haven't selected any task to delete");
        return res.redirect('back');
    }

    // If only one task is selected  to deleted
    else if(typeof(req.body.id) == 'string'){
        list.findByIdAndDelete(req.body.id, function(err){
                if(err){
                    console.log("error deleting task ");
                    return;
                }
                return res.redirect('/');
            });
    }
    // If multiple tasks are selected to be deleted
    else{
        for(let i of req.body.id){
            list.findByIdAndDelete(i, function(err){
                if(err){
                    console.log("error deleting tasks ");
                    return;
                }
            });
        }
        return res.redirect('/');
    }
};