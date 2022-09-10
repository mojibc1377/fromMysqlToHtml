var express = require('express');
const { listenerCount } = require('../database');

var router = express.Router();

var database = require('../database');

router.get('/',function(request, response, next){
    var query = "select * from testi order by age desc";
    database.query(query, function(error, data){
        if (error){
            throw error
        }
        else{
            response.render('sample_data',{title : 'nodeJS MYSQL crud application', 
            action : 'list',
            sampleData : data
        });

        }
    })
});


module.exports = router;
