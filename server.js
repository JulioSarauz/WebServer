//Mostrar web
//introduccion express
//plantillas

var express = require('express');
var app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;
//llamado a helpers
require('./hbs/helpers')

app.use(express.static(__dirname + '/public'));

//express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');
app.engine('hbs', hbs.__express);



app.get('/', function(req, res) {
    res.render('home', {
        nombre: "juLiO Saráuz"
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});



app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto: ${port}`);
});