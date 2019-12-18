//Mostrar web
//introduccion express
//plantillas

var express = require('express');
var app = express();
const hbs = require('hbs');
const port = process.env.port || 3000;
//llamado a helpers
require('./hbs/helpers')

app.use(express.static(__dirname + '/public'));

//express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', function(req, res) {
    res.render('home', {
        nombre: "juLiO Saráuz"
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});



app.listen(3000, () => {
    console.log(`Escuchando peticiones en el puerto: ${port}`);
});