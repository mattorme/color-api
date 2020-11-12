const {Pool} = require('pg')
const pool = new Pool({database: 'colors_api', password: 'password'})
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

let users = [
    {
        email: "steve@mail.com",
        password: "1234"
    },
    {
        email: "ned@mail.com",
        password: "1234"
    },
]

console.log("Starting")

users.forEach(user => {
    bcrypt.hash(String(user.password), saltRounds, function(err, hash) {
        pool.query('INSERT INTO users( email, password ) VALUES ($1, $2);', [user.email, hash], (err, db) => {
        } )
    });
})

console.log("Seeeded")