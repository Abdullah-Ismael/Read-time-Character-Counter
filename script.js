// Get the main elements
let txtArea = document.getElementById("txt-area");
let total = document.querySelector("#total span");
let remain = document.querySelector("#remain span");

// Check at locatStorage function
function checkStorage(storageName, element) {
  if (window.localStorage.getItem(storageName)) {
    element.innerText = window.localStorage.getItem(storageName);
  }
}

// Update the values
checkStorage("areaValue", txtArea);
checkStorage("total", total);
checkStorage("remain", remain);

if (!window.localStorage.getItem("areaValue")) {
  total.innerText = 30;
  remain.innerText = 20;
}

txtArea.addEventListener("input", (e) => {
  let counter = e.target.value.length;
  total.innerText = counter;
  remain.innerText = 50 - counter;
  if (counter === 50) {
    e.target.setAttribute("maxlength", counter);
  }
  // Adding to localStorage
  addToStorage("areaValue", e.target.value);
  addToStorage("total", JSON.stringify(counter));
  addToStorage("remain", JSON.stringify(50 - counter));
});

// Add to localStorage function
function addToStorage(name, value) {
  window.localStorage.setItem(name, value);
}
