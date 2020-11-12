const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = 8080;
const {Pool} = require('pg')
const pool = new Pool({database: 'colors_api', password: 'password'})


app.use(bodyParser.json())
app.use(express.static('client'))


// get user palettes


app.get('/api/colors', (req, res) => {
    pool.query('select * from colors;', [], (err, db) => {
        res.json({message: "ok", data: db.rows})

    })
})
app.get('/api/palettes', (req, res) => {
    pool.query('select * from palettes;', [], (err, db) => {
        res.json({message: "ok", data: db.rows})

    })
})

app.get('/api/palettes/:user/favourites', (req, res) => {
    res.send("nice")
})

app.post('/api/palettes', (req, res) => {
    const sql = 'INSERT INTO palettes (primary_color_hex, secondary_color_hex, tertiary_color_hex, quaternary_color_hex, quinary_color_hex) values ($1, $2, $3, $4, $5);'
    console.log(req.body.primary_color_hex)
    // console.log(sql)
    pool.query(sql, [
        req.body.primary_color_hex,
        req.body.secondary_color_hex,
        req.body.tertiary_color_hex,
        req.body.quaternary_color_hex,
        req.body.quinary_color_hex
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

app.listen(port, () => {
    console.log(`listening from port ${port}`)
});
