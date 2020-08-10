// init code
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//static web server
app.use(express.static(path.join(__dirname,'dist')));

//connection to mongodb
mongoose.connect('mongodb+srv://invoiceuser:invoiceuser@cluster0-6csto.mongodb.net/invoiceStorage?retryWrites=true&w=majority',
{ useUnifiedTopology: true,
  useNewUrlParser:true  
 });

mongoose.connection.on('error',(error)=>{
    console.log('ERROR' + error);
});
mongoose.connection.once('open',() => {
    console.log('The Connection to mongodb is working')
});

//body-parser
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());


//route
app.use('/api/createinvoice',require('./routes/create'));

app.use('/api/readinvoice',require('./routes/read'));

app.use('/api/updateinvoice',require('./routes/update'));

app.use('/api/deleteinvoice',require('./routes/delete'));

app.get('*',(req,res) => {
    res.send("<h1> Error 404 page not found</h1>")
})


//port
app.listen(3000,()=>{
    console.log('Listening at localhost : 3000')
});