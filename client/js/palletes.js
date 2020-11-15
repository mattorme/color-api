// const bodyParser = require("body-parser");

console.log("hello");

const body = document.querySelector("body");
const subContainer = document.querySelector(".sub-container");
const exportOptions = document.querySelectorAll(".export-container");
const exportOptionsUl = document.querySelectorAll(".export-container-ul");
const exportBtn = document.querySelectorAll(".export-img");

// exportBtn.addEventListener("click", (event) => {
//   for (let i = 0; i < event.length; i++) {
//     console.log("HELLO");
//   }
// });

for (let i = 0; i < exportBtn.length; i++) {
  exportBtn[i].addEventListener("click", () => {
    if (exportOptions[i].classList.contains("hidden")) {
      exportOptions[i].classList.remove("hidden");
    } else {
      exportOptions[i].classList.add("hidden");
      //   exportOptionsUl[i].style.animationName = "";
      //   exportOptionsUl[i].style.animationName = "hideExportOptions";
    }
  });
}

const url = "http://localhost:8080/api/palettes";
axios.get(url).then((res) => {
  console.log(res.data.data[0].primary_color_hex);
  for (let i = 0; i < 10; i++) {
    var mainDiv = document.createElement("div");

    mainDiv.classList.add("pallete-div");
    subContainer.appendChild(mainDiv);

    var primaryColorDiv = document.createElement("div");
    primaryColorDiv.classList.add("primary-color");
    primaryColorDiv.style.backgroundColor = res.data.data[i].primary_color_hex;
    mainDiv.appendChild(primaryColorDiv);

    var primaryColorInput = document.createElement("input");
    primaryColorInput.classList.add("primary-input");
    primaryColorInput.value = res.data.data[i].primary_color_hex;
    primaryColorDiv.appendChild(primaryColorInput);

    var secondaryColorDiv = document.createElement("div");
    secondaryColorDiv.classList.add("secondary-color");
    secondaryColorDiv.style.backgroundColor =
      res.data.data[i].secondary_color_hex;
    mainDiv.appendChild(secondaryColorDiv);

    var secondaryColorInput = document.createElement("input");
    secondaryColorInput.classList.add("secondary-input");
    secondaryColorInput.value = res.data.data[i].secondary_color_hex;
    secondaryColorDiv.appendChild(secondaryColorInput);

    var tertiaryColorDiv = document.createElement("div");
    tertiaryColorDiv.classList.add("tertiary-color");
    tertiaryColorDiv.style.backgroundColor =
      res.data.data[i].tertiary_color_hex;
    mainDiv.appendChild(tertiaryColorDiv);

    var tertiaryColorInput = document.createElement("input");
    tertiaryColorInput.classList.add("tertiary-input");
    tertiaryColorInput.value = res.data.data[i].tertiary_color_hex;
    tertiaryColorDiv.appendChild(tertiaryColorInput);

    var quaternaryColorDiv = document.createElement("div");
    quaternaryColorDiv.classList.add("quaternary-color");
    quaternaryColorDiv.style.backgroundColor =
      res.data.data[i].quaternary_color_hex;
    mainDiv.appendChild(quaternaryColorDiv);

    var quaternaryColorInput = document.createElement("input");
    quaternaryColorInput.classList.add("quaternary-input");
    quaternaryColorInput.value = res.data.data[i].quaternary_color_hex;
    quaternaryColorDiv.appendChild(quaternaryColorInput);

    var quinaryColorDiv = document.createElement("div");
    quinaryColorDiv.classList.add("quinary-color");
    quinaryColorDiv.style.backgroundColor = res.data.data[i].quinary_color_hex;
    mainDiv.appendChild(quinaryColorDiv);

    var quinaryColorInput = document.createElement("input");
    quinaryColorInput.classList.add("quinary-input");
    quinaryColorInput.value = res.data.data[i].quinary_color_hex;
    quinaryColorDiv.appendChild(quinaryColorInput);

    var exportDiv = document.createElement("div");
    exportDiv.classList.add("pallete-img");
    mainDiv.appendChild(exportDiv);
    var exportImg = document.createElement("img");
    exportImg.src = "./img/export.png";
    exportImg.classList.add("export-img");
    exportDiv.appendChild(exportImg);

    var exportContainer = document.createElement("div");
    exportContainer.classList.add("export-container");
    exportContainer.classList.add("hidden");
    mainDiv.appendChild(exportContainer);

    var exportContainerUl = document.createElement("ul");
    exportContainerUl.classList.add("export-container-ul");
    exportContainer.appendChild(exportContainerUl);

    var exportContainerLi1 = document.createElement("li");
    exportContainerUl.appendChild(exportContainerLi1);
    var exportContainerA1 = document.createElement("a");
    exportContainerA1.textContent = "Save";
    exportContainerLi1.appendChild(exportContainerA1);

    var exportContainerLi2 = document.createElement("li");
    exportContainerUl.appendChild(exportContainerLi2);
    var exportContainerA2 = document.createElement("a");
    exportContainerA2.textContent = "Favorite";
    exportContainerLi2.appendChild(exportContainerA2);

    var exportContainerLi3 = document.createElement("li");
    exportContainerUl.appendChild(exportContainerLi3);
    var exportContainerA3 = document.createElement("a");
    exportContainerA3.textContent = "Export";
    exportContainerLi3.appendChild(exportContainerA3);
    // primaryColor.style.backgroundColor = res.data.data[i].primary_color_hex;
    // primaryInput.value = res.data.data[i].primary_color_hex;
    // secondaryColor.style.backgroundColor = res.data.data[i].secondary_color_hex;
    // secondaryInput.value = res.data.data[i].secondary_color_hex;
    // tertiaryColor.style.backgroundColor = res.data.data[i].tertiary_color_hex;
    // tertiaryInput.value = res.data.data[i].tertiary_color_hex;
    // quaternaryColor.style.backgroundColor =
    //   res.data.data[i].quaternary_color_hex;
    // quaternaryInput.value = res.data.data[i].quaternary_color_hex;
    // quinaryColor.style.backgroundColor = res.data.data[i].quinary_color_hex;
    // quinaryInput.value = res.data.data[i].quinary_color_hex;
  }
});
