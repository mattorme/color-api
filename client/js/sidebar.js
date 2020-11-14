const heart = document.querySelector(".fa-heart");
const save = document.querySelector(".fa-save");
const exportModal = document.getElementById("cssModal");
const exportBtn = document.querySelector(".export");
const exportClose = document.getElementsByClassName("close")[0];
exportBtn.onclick = function () {
  exportModal.style.display = "block";
};
exportClose.onclick = function () {
  exportModal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == exportModal) {
    exportModal.style.display = "none";
  }
  if (event.target == cssModal) {
    cssModal.style.display = "none";
  }
  if (event.target == apiModal) {
    apiModal.style.display = "none";
  }
};

heart.addEventListener("click", () => {
  if (heart.classList.contains("red-heart")) {
    heart.classList.remove("red-heart");
  } else {
    heart.classList.add("red-heart");
  }
});

save.addEventListener("click", () => {
  if (save.classList.contains("blue-save")) {
    save.classList.remove("blue-save");
  } else {
    save.classList.add("blue-save");
  }
});

// css modal
var cssModal = document.getElementById("cssModal");
const cssBtn = document.querySelector(".css-export-btn");
var cssClose = document.getElementsByClassName("close")[1];
cssBtn.onclick = function () {
  cssModal.style.display = "block";
};
cssClose.onclick = function () {
  cssModal.style.display = "none";
};
// api modal
var apiModal = document.getElementById("apiModal");
var apiBtn = document.querySelector(".api-export-btn");
var apiClose = document.getElementsByClassName("close")[2];
apiBtn.onclick = function () {
  apiModal.style.display = "block";
};
apiClose.onclick = function () {
  apiModal.style.display = "none";
};
