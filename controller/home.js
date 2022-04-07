//importing the schema of the database model
const list = require('../model/list');


//This is for '/' 
module.exports.home = function (req, res) {
    list.find({}, function (err, list) {
        if (err) {
            console.log('Error in fetching the to do list');
            return;
        }
        return res.render('home', {
            work_list: list,
        });
    });
}