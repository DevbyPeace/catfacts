
const button = document.querySelector(".change-btn");
const factDisp = document.querySelector(".random-fact");

// function catapi() {
//   // console.log("linked");
//   const request = new XMLHttpRequest();
//   request.open("GET", "https://catfact.ninja/fact");
//   request.send();

//   request.addEventListener("load", () => {
//     // console.log("loaded");
//     const factData = JSON.parse(request.responseText);
//     console.log(factData);
//     console.log(factData.fact);
//     factDisp.textContent = factData.fact;
//   });
// }
// catapi();

// button.addEventListener("click", catapi);

const factGetter = function () {
  fetch("https://catfact.ninja/fact")
    .then((response) => response.json())
    .then((data) => (factDisp.textContent = data.fact));
};

factGetter();
button.addEventListener("click", factGetter);
