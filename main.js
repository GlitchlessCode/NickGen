// Nickname Generator

//#region Initialize Variables
let firstNameEl = document.getElementById("firstNameIn");
let lastNameEl = document.getElementById("firstNameIn");

let modeSelectEl = document.getElementById("modeSelect");
let goBtnEl = document.getElementById("goBtn");

let outputEl = document.getElementById("output");

let nicknames = ["Boomer", "Ace", "Captain Obvious", "Goofball"];
//#endregion

goBtnEl.addEventListener("mousedown", getOption);

//#region Functions
function writeOut(output) {
  if (output instanceof Array) {
    outputEl.innerHTML = "";
    for (let i = 0; i < output.length; i++) {
      outputEl.innerHTML += `<p>${i}: ${output[i]}</p>`;
    }
  } else {
    outputEl.innerHTML = `<p>${output}</p>`;
  }
}

function getOption() {
  switch (modeSelectEl.value) {
    default:
    case "none":
      writeOut('Select a mode and press "Go"');
      break;
    case "displayAll":
      break;
  }
}
//#endregion
