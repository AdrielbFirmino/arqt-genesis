const express = require('express');
var exphbs  = require('express-handlebars');
let hbs = exphbs.create({defaultLayout: 'main', 
extname:'.hbs'});

const app = express();
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(__dirname+'/public'));

app.get('/', (req, res)=>{
    res.render('main',{layout:'home'});
});

app.get('/cad', (req, res)=>{
    res.render('main',{layout:'form'})
});

app.listen(80, function(){
    console.log("Servidor rodando na url http://localhost:80");
});