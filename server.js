const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session');
const app = express();
const userController = require('./controllers/userController')
const port = process.env.PORT || 8080;


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.use(bodyParser.json())
app.use(express.static('client'))

<<<<<<< HEAD


// get all colors --- FOR TESTING ONLY ---

// before using please set up your db and then run seed-colors-and-paletts.js 

app.get('/api/colors', (req, res) => {
    pool.query('select * from colors;', [], (err, db) => {
        res.json({message: "ok", data: db.rows})

    })
})

// get all palettes
app.get('/api/palettes', (req, res) => {
    pool.query('select * from palettes;', [], (err, db) => {
        res.json({message: "ok", data: db.rows})

    })
})


// get favourite palettes by user id
app.get('/api/favourites/:user_id', (req, res) => {
    const sql = `select * from favourites where user_id = ${
        req.params.user_id
    };`
    pool.query(sql, [], (err, db) => {
app.get('/', (req, res) => {
app.get('/', checkSession, (req, res) => {
    pool.query('select * from users;', [], (err, db) => {
        return res.json({ message: "ok", data: db.rows })
    })
})


// create a palette
app.post('/api/palettes', (req, res) => {
    const sql = 'INSERT INTO palettes (primary_color_hex, secondary_color_hex, tertiary_color_hex, quaternary_color_hex, quinary_color_hex, user_id) values ($1, $2, $3, $4, $5, $6);'
    console.log(req.body.primary_color_hex)
    // console.log(sql)
    pool.query(sql, [
        req.body.primary_color_hex,
        req.body.secondary_color_hex,
        req.body.tertiary_color_hex,
        req.body.quaternary_color_hex,
        req.body.quinary_color_hex,
        req.body.user_id
    ], (err, db) => {
        if (err) {
            res.json({
                message: 'invalid request'
            }, 400)
        } else {
            res.json({
                message: 'palette created'
            }, 201)
        }
    })
})

// add a palette to favourites
app.post('/api/favourites', (req, res) => {
    const sql = 'INSERT INTO favourites (user_id, palette_id) values ($1, $2);'
    console.log(req.body.primary_color_hex)
    // console.log(sql)
    pool.query(sql, [
        req.body.user_id, req.body.palette_id
    ], (err, db) => {
        if (err) {
            res.json({
                message: 'invalid request'
            }, 400)
        } else {
            res.json({
                message: 'added pallet to favourites'
            }, 201)
        }
    })
})


app.listen(port, () => {
    console.log(`listening from port ${port}`)
});
//router to create a user
//need to handle errors
app.post('/users', async (req, res) => {
    bcrypt.hash(String(req.body.password), saltRounds, function (err, hash) {
        pool.query('INSERT INTO users( email, password_hash ) VALUES ($1, $2);', [req.body.email, hash], (err, db) => {
            res.json({ message: "ok" })
        })
    });
})


//router to login a user
app.post('/login', (req, res) => {
    pool.query('SELECT * FROM users WHERE email = $1;', [req.body.email], (err, db) => {
        if (err) {
            return res.json({ message: "error", err })
        }
        if (db.rowCount === 0) {
            return res.json({ message: "No such user", login: false })
        }
        bcrypt.compare(String(req.body.password), db.rows[0].password_hash, function (err, result) {
            if (err) {
                return res.json({ message: "error", err })
            }
            if (result) {
                let user = db.rows[0]
                delete user.password_hash
                req.session.user = user
                req.session.loggedIn = true
                return res.json({ message: "ok", login: result, user })
            }
            res.json({ message: "Password incorrect", login: result })
        });
    })
})
app.get('/', userController.checkSession, userController.allUsers)
=======
app.get('/users/all', userController.checkSession, userController.allUsers) //No purpose just for testing really
>>>>>>> 4bfea53 (created utils)
app.post('/users', userController.createUser )
app.post('/login', userController.loginUser )
app.get('/logout', userController.checkSession, userController.logoutUser )
