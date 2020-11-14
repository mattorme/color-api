console.log("hello");

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
