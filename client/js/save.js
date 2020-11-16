const saveBtn = document.querySelector(".save-btn");
// const primaryHex = document.querySelector('.primary-hex')
// const secondaryHex = document.querySelector('.secondary-hex')
// const tertiaryHex = document.querySelector('.tertiary-hex')
// const quaternaryHex = document.querySelector('.quaternary-hex')
// const quinaryHex = document.querySelector('.quinary-hex')

saveBtn.addEventListener('click', function() { 
    let pallete = {
        user_id: `${saveBtn.dataset.userid}`, 
        primary_color_hex: `${primaryHex.textContent}`, 
        secondary_color_hex: `${secondaryHex.textContent}`, 
        tertiary_color_hex: `${tertiaryHex.textContent}`, 
        quaternary_color_hex: `${quaternaryHex.textContent}`, 
        quinary_color_hex: `${quinaryHex.textContent}`, 
    }
    console.log(pallete)
})