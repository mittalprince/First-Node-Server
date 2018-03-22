const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

var app = express();

app.use('/', express.static(path.join(__dirname, 'public_static')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.render(path.join(__dirname,'public_static/index.html'));
})

app.post('/data',function(req,res){

    res.send(req.body);

})


app.listen(8080,function(){
    console.log('Server started at port 8000 ');
})