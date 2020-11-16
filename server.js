const express = require('express');
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts');

const session = require('express-session');
const app = express();
const userController = require('./controllers/userController');
const paletteController = require('./controllers/paletteController');
const port = process.env.PORT || 8080;

let connString = process.env.DATABASE_URL || { database: 'colors_api', password: 'password' }
const { Pool } = require('pg')
const pool = new Pool({ connectionString : connString })

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.use(bodyParser.json())
app.use(express.static('client'))
app.use(expressLayouts)

/*********** EJS *********/ 
app.set('views', './views')
app.set('view engine', 'ejs')
// app.set('layout','layout')

/*********** Home page *********/ 
app.get('/', (req, res) => {
    console.log(req.session)
    res.render('home', {session:  req.session}) 
})
// , {layout: 'layout'}

/*********** Login page *********/ 
app.get('/colors/login', (req, res) => {
    res.render('colors_login', {session:  req.session}) 
})

/*********** Colors selection page *********/ 
app.get('/colors/:id', (req, res) => {
    res.render('colors_selection', {session:  req.session}) 
})

/*********** Palettes page *********/ 
app.get('/palettes', (req, res) => {
    res.render('palletes', {session:  req.session}) 
})

/*********** All Palettes page *********/ 
app.get('/palettes/all', (req, res) => {
    res.render('allPalletes', {session:  req.session}) 
})

/*********** Docs/API page *********/ 
app.get('/api-access', (req, res) => {
    res.render('docs_api', {session:  req.session}) 
})

// get all colors --- FOR TESTING ONLY ---
// before using please run "npm run setup" and "npm run seed"
app.get('/api/colors', paletteController.colors)
app.get('/api/palettes', paletteController.palettes ) // get all palettes
app.get('/api/favourites/:user_id', paletteController.paletteByUser)
app.get('/api/favourites/colors/:user_id', paletteController.paletteByUser)
app.post('/api/palettes', paletteController.createPalette)
app.post('/api/favourites', paletteController.addFavourite)

app.get('/users/all', userController.checkSession, userController.allUsers) //No purpose just for testing really
app.post('/users', userController.createUser )
app.post('/login', userController.loginUser )
app.get('/logout', userController.checkSession, userController.logoutUser )

app.listen(port, () => {
    console.log(`listening from port ${port}`)
});
