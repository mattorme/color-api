const express = require('express');
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts');

const session = require('express-session');
const app = express();
const userController = require('./controllers/userController');
const paletteController = require('./controllers/paletteController');
const port = process.env.PORT || 8080;

let connString = process.env.DATABASE_URL 
const { Pool } = require('pg')
let pool 

if (process.env.DATABASE_URL) {
    pool = new Pool({ connectionString : connString })
} else {
    pool = new Pool({ database: 'colors_api', password: 'password' })
}

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
    res.render('home', { session: req.session })
})

/*********** color genertaor page *********/
app.get('/colors', (req, res) => {
    if (req.session.user) {
        res.render('colors_selection', { session: req.session })
    } else {
        res.render('colors_login', { session: req.session })
    }
})

/*********** Specific pallet selection page *********/ //does not actually work yet.... 
app.get('/colors/:paletteId', (req, res) => {
    pool.query('select * from palettes WHERE id=$1;', [req.params.paletteId], (err, db) => {
        res.render('colors_selection', { session: req.session, data: db.rows })
    })
})

/*********** Palettes page *********/
app.get('/palettes', (req, res) => {
    res.render('palletes', { session: req.session })
})

/*********** All Palettes page *********/
app.get('/palettes/all', (req, res) => {
    res.render('allPalletes', { session: req.session })
})

/*********** Docs/API page *********/
app.get('/api-access', (req, res) => {
    res.render('docs_api', { session: req.session })
})

app.get('/api/colors', paletteController.allColors) //Only purpose is testing 
app.get('/api/palettes', paletteController.allPalettes)
app.get('/api/colors/palettes/favourites/:user_id', paletteController.usersFavouritePalettes)
app.post('/api/palettes', paletteController.createPalette)
app.post('/api/favourites', paletteController.addFavourite)
app.get('/users/all', userController.checkSession, userController.allUsers) //Only purpose is testing 
app.post('/users', userController.createUser)
app.post('/login', userController.loginUser)
app.get('/logout', userController.checkSession, userController.logoutUser)

app.listen(port, () => {
    console.log(`listening from port ${port}`)
});
