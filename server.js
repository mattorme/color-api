const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = 8080;
const {Pool} = require('pg')
const pool = new Pool({database: 'colors_api', password: 'password'})


app.use(bodyParser.json())
app.use(express.static('client'))



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
        res.json({message: "ok", data: db.rows})

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
