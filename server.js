const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')

var app = express();
var port = process.env.PORT || 5050;

app.use('/', express.static(path.join(__dirname, 'public_static')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/',function(req,res){
    res.render(path.join(__dirname,'public_static/index.html'));
})

app.post('/data',function(req,res){

    res.send(req.body);

})


app.listen(port, function () {
    console.log('Example app listening on port ' + port);
});