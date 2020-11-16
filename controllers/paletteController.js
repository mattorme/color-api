// const { Pool } = require('pg')
// const pool = new Pool(process.env.DATABASE_URL || { database: 'colors_api', password: 'password' })

let connString = process.env.DATABASE_URL 
const { Pool } = require('pg')
let pool 

if (process.env.DATABASE_URL) {
    pool = new Pool({ connectionString : connString })
} else {
    pool = new Pool({ database: 'colors_api', password: 'password' })
}


module.exports = {
    allColors: (req, res) => {
        pool.query('select * from colors;', [], (err, db) => {
            res.json({ message: "ok", data: db.rows })

        })
    },
    allPalettes: (req, res) => {
        pool.query('select * from palettes;', [], (err, db) => {
            res.json({ message: "ok", data: db.rows })

        })
    },
    createPalette: (req, res) => {
        const sql = 'INSERT INTO palettes (primary_color_hex, secondary_color_hex, tertiary_color_hex, quaternary_color_hex, quinary_color_hex) values ($1, $2, $3, $4, $5) RETURNING id;'
        pool.query(sql, [
            req.body.primary_color_hex,
            req.body.secondary_color_hex,
            req.body.tertiary_color_hex,
            req.body.quaternary_color_hex,
            req.body.quinary_color_hex,
        ], (err, db) => {
            if (err) {
                return res.json({ message: "error", err })
            } else {
                const sql = 'INSERT INTO favourites (user_id, palette_id) values ($1, $2);'
                pool.query(sql, [req.body.user_id, db.rows[0].id], (err, db) => {
                    if (err) {
                        res.json({
                            message: 'invalid request'
                        }, 400)
                    } else {
                        res.json({
                            message: 'created palette and added to favourites'
                        }, 201)
                    }
                })
            }
        })
    },
    addFavourite: (req, res) => {
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
    },
    usersFavouritePalettes: (req, res) => {
        let sql = 'SELECT favourites.palette_id, palettes.primary_color_hex, palettes.secondary_color_hex, palettes.tertiary_color_hex , palettes.quaternary_color_hex , palettes.quinary_color_hex  FROM favourites INNER JOIN palettes ON favourites.palette_id=palettes.id WHERE favourites.user_id=$1;'
        pool.query(sql, [req.params.user_id], (err, db) => {
            res.json({ message: "ok", data: db.rows })
        })
    },
}