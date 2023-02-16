// Nickname Generator

//#region Initialize Variables
let firstNameEl = document.getElementById("firstNameIn");
let lastNameEl = document.getElementById("lastNameIn");

let modeSelectEl = document.getElementById("modeSelect");
let goBtnEl = document.getElementById("goBtn");

let outputEl = document.getElementById("output");

let nicknames = ["Boomer", "Ace", "Captain Obvious", "Goofball"];
//#endregion

goBtnEl.addEventListener("click", getOption);

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
    case "displayAll":
      writeOut(displayAll());
      break;
    case "displayRandom":
      writeOut(displayRandom());
      break;
    case "addNick":
      writeOut(addNick());
      break;
    case "removeLast":
      writeOut(removeIndex(nicknames.length - 1));
      break;
    case "removeIndex":
      writeOut(removeIndex(prompt("Index to remove:")));
      break;
    case "removeName":
      writeOut(removeName());
      break;
    default:
    case "none":
      writeOut('Select a Mode and Press "Go"');
      break;
  }
}

function displayAll() {
  let result = new Array();
  for (let i = 0; i < nicknames.length; i++) {
    result.push(`${firstNameEl.value} "${nicknames[i]}" ${lastNameEl.value}`);
  }
  return result;
}

function displayRandom() {
  let randInt = Math.floor(Math.random() * nicknames.length);
  let result = `${randInt}: ${firstNameEl.value} "${nicknames[randInt]}" ${lastNameEl.value}`;
  return result;
}

function addNick() {
  let newNick = prompt("Name to add:");
  if (nicknames.includes(newNick))
    return `Nickname "${newNick}" Already Exists`;
  nicknames.push(newNick);
  return `Nickname Added: ${newNick}`;
}

function removeIndex(index) {
  if (index < 0 || index >= nicknames.length) return "Invalid Index";
  let removedNick = nicknames.splice(index, 1);
  return `Removed Nickname at Index ${index}: ${removedNick[0]}`;
}

function removeName() {
  let removeNick = prompt("Name to remove:");
  let removeIndex = nicknames.indexOf(removeNick);
  if (removeIndex === -1) return "Invalid Name";
  return removeIndex(removeIndex);
}
//#endregion
