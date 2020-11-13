const { Pool } = require('pg')
var colors = require('./colors-list');
const pool = new Pool({ database: 'colors_api', password: 'password' })
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
    bcrypt.hash(String(user.password), saltRounds, function (err, hash) {
        pool.query('INSERT INTO users( email, password_hash ) VALUES ($1, $2);', [user.email, hash], (err, db) => {
        })
    });
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