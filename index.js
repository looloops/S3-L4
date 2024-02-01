const tabellone = document.getElementById("tabellone");

function addCaselle() {
  for (let i = 0; i <= 76; i++) {
    const casella = document.createElement("div");
    const numCasella = document.createElement("span");
    casella.setAttribute("class", "casella");
    numCasella.innerText = i + 1;
    casella.appendChild(numCasella);
    tabellone.appendChild(casella);
  }
  const button = document.createElement("div");
  tabellone.appendChild(button);
  const randomBtn = document.createElement("button");
  randomBtn.innerText = "Generate";
  randomBtn.setAttribute("class", "randomButton");
  randomBtn.setAttribute("id", "generateRandom");
  button.appendChild(randomBtn);
}
addCaselle();
let numRandom;
const button = document.getElementById("generateRandom");
button.onclick = function () {
  numRandom = Math.floor(Math.random() * 76);
  console.log(numRandom);
};
