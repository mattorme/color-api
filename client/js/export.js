const exportModal = document.getElementById("exportModal");
const exportBtn = document.querySelector(".export-btn");
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

// copy button
//copy css code 
var copyCssBtn = document.querySelector('.css-copy-btn')

copyCssBtn.addEventListener('click', copyCssFunction)

function copyCssFunction () {
  var cssCode = document.querySelector('.css-textarea')
  cssCode.select();
  document.execCommand("copy");
  alert("CSS code copied!");
}

//copy api
var copyApiBtn = document.querySelector('.api-copy-btn')

copyApiBtn.addEventListener('click', copyApiFunction)

function copyApiFunction () {
  var apiCode = document.querySelector('.api-textarea')
  apiCode.select();
  document.execCommand("copy");
  alert("API copied!");
}

                