const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const port = process.env.PORT || 5000;

const portfolioRoutes = require('./routes/portfolio')

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/portfolio', portfolioRoutes);

app.listen(port, () =>{
    console.log('Server up!')
})