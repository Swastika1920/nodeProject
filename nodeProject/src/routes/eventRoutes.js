var express = require('express');
var eventRouter = express.Router();
var mongodb = require("mongodb").MongoClient;




eventRouter.route('/')
   .get(function(req,res){
       
       var url = 'mongodb://localhost:27017/eventsApp';
    mongodb.connect(url, function(err,db){
        var collection = db.collection('events');
        collection.find({}).toArray(function (err,results) {
            res.render('events', { 
                list: ['first event', '2nd event', '3rd event'],
                nav: [{ Link :'Services', Text :'Services'}, 
                { Link :'Portfolio', Text :'Portfolio'}, 
                { Link : 'About' , Text :'About'}, 
                { Link :'Team' ,Text :'Team'}, 
                { Link :'Contact' , Text :'Contact'},
                 { Link :'Events' , Text :'Events'}
                ],
                events : results
        
        });  
    }); 
       
       
       
    });
});

// eventRouter.route('/event')
//     .get(function(req,res){
//         res.send('hey single ninja Events !!');
//     }) //route is setup


eventRouter.route('/:id')
    .get(function(req,res){
        var id =req.params.id;
        res.render('event', { 
        list: ['first event', '2nd event', '3rd event'],
        nav: [{ Link :'Services', Text :'Services'}, 
        { Link :'Portfolio', Text :'Portfolio'}, 
        { Link : 'About' , Text :'About'}, 
        { Link :'Team' ,Text :'Team'}, 
        { Link :'Contact' , Text :'Contact'},
         { Link :'Events' , Text :'Events'}
        ],
        events : eventsData[id]
        });
   
    }) //route is setup

module.exports = eventRouter;

    

