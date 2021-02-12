const textbox = document.querySelector("input");
const container = document.querySelector(".container");
let counter = 0;
textbox.addEventListener("keyup", putInputInNewDiv, false);

function createNewLabel(text) {
  const newlabel = document.createElement("label");
  newlabel.textContent = text;
  //newlabel.id = 'newDivId'+counter;
  //console.log(newDiv.id)
  return newlabel;
}

function putInputInNewDiv(key) {
  if (key.keyCode == "13") {
    counter++;
    const inputText = document.getElementById("textboxid").value;

    container.appendChild(createNewLabel(inputText));

    const label = document.querySelector("label");
    container.appendChild(createCheckBox());

    console.log(inputText);
    console.log(counter);
    clearTextBox();
  }
}

function clearTextBox() {
  textbox.value = "";
}

function createCheckBox() {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  return checkbox;
}
