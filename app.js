const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Model1 = require('./src/Model1');

const app = express();

mongoose.connect(***);
mongoose.Promise = global.Promise;


const myPort = (process.env.PORT || 4000);

app.use( bodyParser.urlencoded({extended: true})); //parse text as urlencoded
app.use( bodyParser.json() ); //parse text as json

app.get('/', function(req, res){
        console.log('GET it yo');
        res.send({say: 'yo sup fo'})
        });

app.post('/', function(req, res){
	console.log('we be postin ' + req );
	var newModel1 = new Model1();
	newModel1.key1 = req.body.key1;
	newModel1.key2 = req.body.key2
	newModel1.save( function(err, model1){
		if(err){ console.log('DJ f-n up')}else{ 
			res.json( model1 ); 
		}
	 });
});

app.listen( myPort, function(){
    console.log('listenin for requests on port ' + myPort +' yo.');   
});
