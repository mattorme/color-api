var colors = require ('./colors-list');
const {Pool} = require('pg')
const pool = new Pool({database: 'colors_api', password: 'password'})


colors = colors.split('\n')
var pallete = []

colors.forEach(item => {
    item = item.split("\t")
    pallete.push(item[3])
    if (pallete.length == 5) {
        pool.query(`insert into palettes (primary_color_hex, secondary_color_hex, tertiary_color_hex, quaternary_color_hex, quinary_color_hex) values ('${
            pallete[0]
        }', '${
            pallete[1]
        }','${
            pallete[2]
        }', '${
            pallete[3]
        }','${
            pallete[4]
        }');`)
        pallete = []
    }
    
    pool.query(`insert into colors (color_name, color_hex) values ('${
        item[0]
    }', '${
        item[3]
    }');`)


});
