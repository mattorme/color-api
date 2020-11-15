const { Pool } = require('pg')
var colors = require('./colors-list');
const pool = new Pool({ database: 'colors_api', password: 'password' })
const bcrypt = require('bcrypt');
const saltRounds = 10;
const apiKeyGenerator = require("../utils/apikeygenerator")

let users = [
    {
        id: 1,
        name: "stephen",
        email: "steve@mail.com",
        password: "1234"
    },
    {
        id: 2,
        name: "nedward",
        email: "ned@mail.com",
        password: "1234"
    },
    {
        id: 3,
        name: "matty",
        email: "matt@mail.com",
        password: "1234"
    },
    {
        id: 4,
        name: "Jian",
        email: "jian@mail.com",
        password: "1234"
    },
    {
        id: 5,
        name: "Naveen",
        email: "naveen@mail.com",
        password: "1234"
    },
]

console.log("Starting")

users.forEach(user => {

    bcrypt.hash(String(user.password), saltRounds, function (err, hash) {
        let sql = 'INSERT INTO users( email, password_hash, name, api_key ) VALUES ($1, $2, $3, $4);'
        pool.query(sql, [user.email, hash, user.name, apiKeyGenerator()], (err, db) => {
            pool.query('INSERT INTO favourites (user_id, palette_id) VALUES ($1, $2)', [user.id, Math.floor(Math.random() * 50)]);
            pool.query('INSERT INTO favourites (user_id, palette_id) VALUES ($1, $2)', [user.id, Math.floor(Math.random() * 50)]);
            pool.query('INSERT INTO favourites (user_id, palette_id) VALUES ($1, $2)', [user.id, Math.floor(Math.random() * 50)]);
         })
    })
    
})


colors = colors.split('\n')
var pallete = []

colors.forEach(item => {
    item = item.split("\t")
    pallete.push(item[3])
    if (pallete.length == 5) {
        pool.query(`insert into palettes (primary_color_hex, secondary_color_hex, tertiary_color_hex, quaternary_color_hex, quinary_color_hex) values ('${pallete[0]
            }', '${pallete[1]
            }','${pallete[2]
            }', '${pallete[3]
            }','${pallete[4]
            }');`)
        pallete = []
    }

    pool.query(`insert into colors (color_name, color_hex) values ('${item[0]
        }', '${item[3]
        }');`)


});

console.log("Seeded")