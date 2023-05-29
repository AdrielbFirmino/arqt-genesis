const express = require('express');
var exphbs  = require('express-handlebars');
let hbs = exphbs.create({defaultLayout: 'main', 
extname:'.hbs'});
const empregadoDAO = require('./repository/EmpregadoDAO');

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

app.get('/list', (req, res)=>{
    const [empregados] = empregadoDAO.listarEmpregado();
    res.render('main',{layout:'lista',empregados});
})

app.post('/cad',async(req,res)=>{
    const empregado ={
        "nome": req.body.nome,
        "logradouro":req.body.logradouro,
        "cep":req.body.cep,
        "numero":req.body.numero,
        "complemento":req.body.complemento,
        "telefone":req.body.telefone,
        "email":req.body.email
    }

   await empregadoDAO.salvarEmpregado(empregado);
    res.redirect('/');
});

app.listen(3307, function(){
    console.log("Servidor rodando na url http://localhost:3307");
});