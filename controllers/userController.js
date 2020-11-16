//router to create a user
//need to handle errors
// const { Pool } = require('pg')
// const pool = new Pool( process.env.DATABASE_URL || { database: 'colors_api', password: 'password' })

let connString = process.env.DATABASE_URL || { database: 'colors_api', password: 'password' }
const { Pool } = require('pg')
const pool = new Pool({ connectionString : connString })

const bcrypt = require('bcrypt');
const saltRounds = 10;
const apiKeyGenerator = require("../utils/apikeygenerator")

module.exports = {
    createUser: async (req, res) => {
        bcrypt.hash(String(req.body.password), saltRounds, function (err, hash) {
            let sql = 'INSERT INTO users( email, password_hash, name, api_key ) VALUES ($1, $2, $3, $4);'
            pool.query(sql, [req.body.email, hash, req.body.name, apiKeyGenerator()], (err, db) => {
                if (err) {
                    return res.json({ message: "error", err })
                }
                res.json({ message: "ok" })
            })
        });
    },

    loginUser: (req, res) => {
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
    },

    logoutUser: (req, res) => {
        req.session.user = null
        req.session.loggedIn = false
        res.render('home', {session:  req.session}) 
    },

    checkSession: (req, res, next) => {
        if (req.session.loggedIn) {
            next()
        } else {
            return res.json({ message: "Not logged in", loggedIn: false })
        }
    },

    allUsers: (req, res) => {
        pool.query('select * from users;', [], (err, db) => {
            return res.json({ message: "ok", data: db.rows })
        })
    },
}
