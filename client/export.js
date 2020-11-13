const primaryContainer = document.querySelector('.primary-color-container')
const secondaryContainer = document.querySelector('.secondary-color-container')
const tertiaryContainer = document.querySelector('.tertiary-color-container')
const quaternaryContainer = document.querySelector('.quaternary-color-container')
const quinaryContainer = document.querySelector('.quinary-color-container')
const primaryHex = document.querySelector('.primary-hex')
const secondaryHex = document.querySelector('.secondary-hex')
const tertiaryHex = document.querySelector('.tertiary-hex')
const quaternaryHex = document.querySelector('.quaternary-hex')
const quinaryHex = document.querySelector('.quinary-hex')
const generateBtn = document.querySelector('.generate-btn')

const randomColorGenerator = () => {
    
    var pad = '#000000';
    originalColor = Math.floor(Math.random()*16777215).toString(16);
    originalColor = pad.substring(0, pad.length - originalColor.length) + originalColor;
    primaryColor = '#' + originalColor.substr(5,2) + originalColor.substr(1,4);
    secondaryColor = '#' + originalColor.substr(3,4) + originalColor.substr(1,2);
    tertiaryColor = '#' + originalColor.substr(4,3) + originalColor.substr(1,3);
    quaternaryColor = '#' + originalColor.substr(5,3) + originalColor.substr(2,4);
    quinaryColor = '#' + originalColor.substr(2,3) + originalColor.substr(1,3);
   
    primaryContainer.style.background = primaryColor;
    secondaryContainer.style.background = secondaryColor;
    tertiaryContainer.style.background = tertiaryColor;
    quaternaryContainer.style.background = quaternaryColor;
    quinaryContainer.style.background = quinaryColor;

    primaryHex.innerText = primaryColor;
    secondaryHex.innerText = secondaryColor;
    tertiaryHex.innerText = tertiaryColor;
    quaternaryHex.innerText = quaternaryColor;
    quinaryHex.innerText = quinaryColor;
}

const primaryColPickr = Pickr.create({
    el: '.primary-color-picker',
    container: '.color-picker-background',
    theme: 'nano', 
    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 1)',
        'rgba(156, 39, 176, 1)',
        'rgba(103, 58, 183, 1)',
        'rgba(63, 81, 181, 1)',
        'rgba(33, 150, 243, 1)',
        'rgba(3, 169, 244, 1)',
        'rgba(0, 188, 212, 1)',
        'rgba(0, 150, 136, 1)',
        'rgba(76, 175, 80, 1)',
        'rgba(139, 195, 74, 1)',
        'rgba(205, 220, 57, 1)',
        'rgba(255, 235, 59, 1)',
        'rgba(255, 193, 7, 1)'
    ],
    components: {
        preview: true,
        opacity: true,
        hue: true       
    }
});

const secondaryColPickr = Pickr.create({
    el: '.secondary-color-picker',
    container: '.color-picker-background',
    theme: 'nano', 
    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 1)',
        'rgba(156, 39, 176, 1)',
        'rgba(103, 58, 183, 1)',
        'rgba(63, 81, 181, 1)',
        'rgba(33, 150, 243, 1)',
        'rgba(3, 169, 244, 1)',
        'rgba(0, 188, 212, 1)',
        'rgba(0, 150, 136, 1)',
        'rgba(76, 175, 80, 1)',
        'rgba(139, 195, 74, 1)',
        'rgba(205, 220, 57, 1)',
        'rgba(255, 235, 59, 1)',
        'rgba(255, 193, 7, 1)'
    ],
    components: {
        preview: true,
        opacity: true,
        hue: true
    }
});

const tertiaryColPickr = Pickr.create({
    el: '.tertiary-color-picker',
    container: '.color-picker-background',
    theme: 'nano', 
    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 1)',
        'rgba(156, 39, 176, 1)',
        'rgba(103, 58, 183, 1)',
        'rgba(63, 81, 181, 1)',
        'rgba(33, 150, 243, 1)',
        'rgba(3, 169, 244, 1)',
        'rgba(0, 188, 212, 1)',
        'rgba(0, 150, 136, 1)',
        'rgba(76, 175, 80, 1)',
        'rgba(139, 195, 74, 1)',
        'rgba(205, 220, 57, 1)',
        'rgba(255, 235, 59, 1)',
        'rgba(255, 193, 7, 1)'
    ],
    components: {
        preview: true,
        opacity: true,
        hue: true
    }
});

const quaternaryColPickr = Pickr.create({
    el: '.quaternary-color-picker',
    container: '.color-picker-background',
    theme: 'nano', 
    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 1)',
        'rgba(156, 39, 176, 1)',
        'rgba(103, 58, 183, 1)',
        'rgba(63, 81, 181, 1)',
        'rgba(33, 150, 243, 1)',
        'rgba(3, 169, 244, 1)',
        'rgba(0, 188, 212, 1)',
        'rgba(0, 150, 136, 1)',
        'rgba(76, 175, 80, 1)',
        'rgba(139, 195, 74, 1)',
        'rgba(205, 220, 57, 1)',
        'rgba(255, 235, 59, 1)',
        'rgba(255, 193, 7, 1)'
    ],
    components: {
        preview: true,
        opacity: true,
        hue: true
    }
});

const quinaryColPickr = Pickr.create({
    el: '.quinary-color-picker',
    container: '.color-picker-background',
    theme: 'nano', 
    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 1)',
        'rgba(156, 39, 176, 1)',
        'rgba(103, 58, 183, 1)',
        'rgba(63, 81, 181, 1)',
        'rgba(33, 150, 243, 1)',
        'rgba(3, 169, 244, 1)',
        'rgba(0, 188, 212, 1)',
        'rgba(0, 150, 136, 1)',
        'rgba(76, 175, 80, 1)',
        'rgba(139, 195, 74, 1)',
        'rgba(205, 220, 57, 1)',
        'rgba(255, 235, 59, 1)',
        'rgba(255, 193, 7, 1)'
    ],
    components: {
        preview: true,
        opacity: true,
        hue: true
    }
});

const handleColorUpdate = (colorPicker) => {
    let userColorSelection = colorPicker.getColor().toHEXA().join("")
    let selectedClass = colorPicker._root.root.parentElement.parentElement.classList[0]
    let selectedContainer = document.querySelector(`.${selectedClass}`)
    selectedContainer.style.background = `#${userColorSelection}`;
    colorPicker._root.root.parentElement.childNodes[3].innerText = `#${userColorSelection}`;
}

const colorPickerInitialise = (colorPicker) => {
    colorPicker.on('init', instance => {
        handleColorUpdate(colorPicker)
        randomColorGenerator()
    }).on('save', (color, instance) => {
        handleColorUpdate(colorPicker)
    }).on('change', (color, instance) => {
        handleColorUpdate(colorPicker)
    })
}

colorPickerInitialise(primaryColPickr)
colorPickerInitialise(secondaryColPickr)
colorPickerInitialise(tertiaryColPickr)
colorPickerInitialise(quaternaryColPickr)
colorPickerInitialise(quinaryColPickr)
generateBtn.addEventListener('click', randomColorGenerator)

// export button


// Get the modal
var exportModal = document.getElementById("exportModal");

// Get the button that opens the modal
const exportBtn = document.querySelector('.export-btn')

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
exportBtn.onclick = function() {
  exportModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  exportModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == exportModal) {
    exportModal.style.display = "none";
  }
}