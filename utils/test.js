

let col1 = document.querySelector(".one1")
let col2 = document.querySelector(".one2")
let col3 = document.querySelector(".one3")
let col4 = document.querySelector(".one4")
let col5 = document.querySelector(".one5")

// function generate() {
//     let baseHue = Math.floor(Math.random() * 360)
//     let hue2 = baseHue + 120
//     let hue3 = baseHue + 240
//     Math.floor(Math.random() * 50)
//     let c1 = `hsl( ${baseHue}, ${sat()}, ${sat()})`
//     let c2 = `hsl( ${hue2}, ${sat()}, ${sat()})`
//     let c3 = `hsl( ${hue3}, ${sat()}, ${sat()})`
//     let c4 = `hsl( ${baseHue}, ${sat()}, ${sat()})`
//     let c5 = `hsl( ${hue2}, ${sat()}, ${sat()})`
//     col1.style.background = c1
//     col2.style.background = c2
//     col3.style.background = c3
//     col4.style.background = c4
//     col5.style.background = c5
// }

// function sat() { 
//     return `${10 + Math.floor(Math.random() * 80)}%`
// }


generate()


function generate() {
    let baseHue = Math.floor(Math.random() * 360)
    let hue2 = baseHue + 120
    let hue3 = baseHue + 240
    Math.floor(Math.random() * 50)
    let paletteHSL = {
         color1: {h: baseHue, s: sat(), l: sat()},
         color2: {h: baseHue, s: sat(), l: sat()},
         color3: {h: hue2, s: sat(), l: sat()},
         color4: {h: hue2, s: sat(), l: sat()},
         color5: {h: hue3, s: sat(), l: sat()},
    }

    // let color1 = `hsl( ${baseHue}, ${sat()}, ${sat()})`
    // let color2 = `hsl( ${hue2}, ${sat()}, ${sat()})`
    // let color3 = `hsl( ${hue3}, ${sat()}, ${sat()})`
    // let color4 = `hsl( ${baseHue}, ${sat()}, ${sat()})`
    // let color5 = `hsl( ${hue2}, ${sat()}, ${sat()})`

    // let paletteHEX = {
    //     color1: 
    //     color2,
    //     color3,
    //     color4,
    //     color5
    // }

    console.log(paletteHSL)

    return 
}

//convert from hue to hex

//coonvert from hex to hue

//generator but with existing colors


function sat() {
    return `${10 + Math.floor(Math.random() * 80)}%`
}