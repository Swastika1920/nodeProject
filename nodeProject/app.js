var express = require("express");// reference to express
var app = express(); //execute express to create the instance

var port = process.env.PORT;
// var eventRouter = express.Router();

var eventRouter = require('./src/routes/eventRoutes');
var dbRouter = require('./src/routes/dbRoutes');


app.use(express.static('public'));

app.use(express.static('bower_components'));

app.set('views','./src/views');
app.set('view engine','ejs');

// eventRouter.route('/event')
//     .get(function(req,res){
//         res.send('hey single ninja Events !!');
//     }) //route is setup
    
app.use('/Events',eventRouter);
app.use('/db',dbRouter);

app.get('/',function(req,res){
    //res.send('hey ninja!!');
    res.render('index', { 
        list: ['first val', '2nd val', '3rd val'],
        nav: [{ Link :'Services', Text :'Services'}, 
        { Link :'Portfolio', Text :'Portfolio'}, 
        { Link : 'About' , Text :'About'}, 
        { Link :'Team' ,Text :'Team'}, 
        { Link :'Contact' , Text :'Contact'},
         { Link :'Events' , Text :'Events'}
        ]
    });
});



app.get('/routing',function(req,res){
    res.send('hey ninja routing!!');
});
app.listen(port, function (err){
    
    console.log('The server is running on port :' + port);
});
