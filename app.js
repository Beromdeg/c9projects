var express = require("express");
var app = express();
var bodyParser= require("body-parser");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

//use DataBase, but to start with the simple array of campsites dictona
    var campsite = [
        {name:'site1', image:'https://images.unsplash.com/photo-1489914169085-9b54fdd8f2a2?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
        {name:'site1', image:'https://images.unsplash.com/photo-1489914169085-9b54fdd8f2a2?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
        {name:'site4', image:'https://images.unsplash.com/photo-1486180939859-b2fe47b8037d?auto=format&fit=crop&w=752&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
        {name:'site3', image:'https://images.unsplash.com/photo-1468956398224-6d6f66e22c35?auto=format&fit=crop&w=755&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
        {name:'site1', image:'https://images.unsplash.com/photo-1489914169085-9b54fdd8f2a2?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
        {name:'site3', image:'https://images.unsplash.com/photo-1468956398224-6d6f66e22c35?auto=format&fit=crop&w=755&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
        ];

//landing route
app.get('/', function(req, res){
    res.render('landing');
});

//restful routes
app.get('/campsites', function(req,res){
    
    res.render('campsites', {campsite:campsite});
});

app.post('/campsites', function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampsite = {name:name, image:image};
    campsite.push(newCampsite);
    res.redirect('/campsites');     //back to get request campsites route 
});

app.get('/campsites/new', function(req, res){
    res.render('new');
});

app.listen(process.env.PORT, process.env.ID, function(){
    console.log('camping_app started!');
});