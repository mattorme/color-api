const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const port = 8080;
const {Pool} = require('pg')
const pool = new Pool({database: 'colors_api', password: 'password'})


app.use(bodyParser.json())
app.use(express.static('client'))

app.get('/', (req, res) => {
    pool.query('select * from users;', [], (err, db) => {
        res.json({message: "ok", data: db.rows})

    })
})

app.listen(port, () => {
    console.log(`listening from port ${port}`)
});
