const {Pool} = require('pg')
const pool = new Pool({database: 'colors_api', password: 'password'})
const bcrypt = require('bcrypt');
const saltRounds = 10;

let users = [
    {
        email: "steve@mail.com",
        password: "1234"
    },
    {
        email: "ned@mail.com",
        password: "1234"
    },
    {
        email: "matt@mail.com",
        password: "1234"
    },
    {
        email: "jian@mail.com",
        password: "1234"
    },
    {
        email: "naveen@mail.com",
        password: "1234"
    },
]

console.log("Starting")

users.forEach(user => {
    bcrypt.hash(String(user.password), saltRounds, function(err, hash) {
        pool.query('INSERT INTO users( email, password_hash ) VALUES ($1, $2);', [user.email, hash], (err, db) => {
        } )
    });
})

console.log("Seeded")