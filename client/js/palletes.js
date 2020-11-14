console.log("hello");

const exportOptions = document.querySelectorAll(".export-container");
const exportOptionsUl = document.querySelectorAll(".export-container-ul");
const exportBtn = document.querySelectorAll(".export-img");
const primaryColor = document.querySelector(".primary-color");
const primaryInput = document.querySelector(".primary-input");
const secondaryInput = document.querySelector(".secondary-input");
const secondaryColor = document.querySelector(".secondary-color");
const tertiaryInput = document.querySelector(".tertiary-input");
const tertiaryColor = document.querySelector(".tertiary-color");
const quaternaryInput = document.querySelector(".quaternary-input");
const quaternaryColor = document.querySelector(".quaternary-color");
const quinaryInput = document.querySelector(".quinary-input");
const quinaryColor = document.querySelector(".quinary-color");
const palletDiv = document.querySelector(".pallete-div");

for (let i = 0; i < exportBtn.length; i++) {
  exportBtn[i].addEventListener("click", () => {
    if (exportOptions[i].classList.contains("hidden")) {
      exportOptions[i].classList.remove("hidden");
    } else {
      exportOptions[i].classList.add("hidden");
    }
  });
}

const url = "http://localhost:8080/api/palettes";
axios.get(url).then((res) => {
  console.log(res.data.data[0].primary_color_hex);

  primaryColor.style.backgroundColor = res.data.data[0].primary_color_hex;
  primaryInput.value = res.data.data[0].primary_color_hex;
  secondaryColor.style.backgroundColor = res.data.data[0].secondary_color_hex;
  secondaryInput.value = res.data.data[0].secondary_color_hex;
  tertiaryColor.style.backgroundColor = res.data.data[0].tertiary_color_hex;
  tertiaryInput.value = res.data.data[0].tertiary_color_hex;
  quaternaryColor.style.backgroundColor = res.data.data[0].quaternary_color_hex;
  quaternaryInput.value = res.data.data[0].quaternary_color_hex;
  quinaryColor.style.backgroundColor = res.data.data[0].quinary_color_hex;
  quinaryInput.value = res.data.data[0].quinary_color_hex;
});
