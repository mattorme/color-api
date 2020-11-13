const express = require('express');
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts');

const session = require("express-session");
const app = express();
const userController = require('./controllers/userController');
const paletteController = require('./controllers/paletteController');
const port = process.env.PORT || 8080;
const { Pool } = require("pg");
const pool = new Pool({ database: "colors_api", password: "password" });

app.set("views", "./client");
app.set("view engine", "ejs");

app.use(bodyParser.json())
app.use(express.static('client'))
app.use(expressLayouts)

/*********** EJS *********/ 
app.set('views', './views')
app.set('view engine', 'ejs')
// app.set('layout','layout')

/*********** Home page *********/ 
app.get('/', (req, res) => {
    res.render('home', {layout: 'layout'}) 
})

/*********** Login page *********/ 
app.get('/colors/login', (req, res) => {
    res.render('colors_login') 
})

/*********** Colors selection page *********/ 
app.get('/colors/:id', (req, res) => {
    res.render('colors_selection') 
})

// get all colors --- FOR TESTING ONLY ---
// before using please run "npm run setup" and "npm run seed"
app.get('/api/colors', paletteController.colors)
app.get('/api/palettes', paletteController.palettes ) // get all palettes
app.get('/api/favourites/:user_id', paletteController.paletteByUser)
app.post('/api/palettes', paletteController.createPalette)
app.post('/api/favourites', paletteController.addFavourite)

app.get('/users/all', userController.checkSession, userController.allUsers) //No purpose just for testing really
app.post('/users', userController.createUser )
app.post('/login', userController.loginUser )
app.get('/logout', userController.checkSession, userController.logoutUser )

app.listen(port, () => {
    console.log(`listening from port ${port}`)
});
