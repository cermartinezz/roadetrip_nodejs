require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname+'/views/partials');

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.render('home', {
        nombre: 'Cesar Martinez',
        titulo: 'Curso de node'
    });
})

app.get('/generic', (req,res) => {
    res.render('home', {
        nombre: 'Cesar Martinez',
        titulo: 'Curso de node - Generic'
    });
})

app.get('/elements', (req,res) => {
    res.render('home', {
        nombre: 'Cesar Martinez',
        titulo: 'Curso de node - Elements'
    });
})

app.listen(port);