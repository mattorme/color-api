const saveBtn = document.querySelector(".save-btn");

saveBtn.addEventListener('click', function() { 
    let pallete = {
        user_id: saveBtn.dataset.userid, 
        primary_color_hex: `${primaryHex.textContent}`, 
        secondary_color_hex: `${secondaryHex.textContent}`, 
        tertiary_color_hex: `${tertiaryHex.textContent}`, 
        quaternary_color_hex: `${quaternaryHex.textContent}`, 
        quinary_color_hex: `${quinaryHex.textContent}`, 
    }

    axios.post(`/api/palettes`, pallete)
        .then((res) => {
            //Can add something here that lets you know a palette has been saved
            saveBtn.style.background = "yellow"
           console.log(res)
        })
})