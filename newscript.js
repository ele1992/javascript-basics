function updateCounters() {
  const total = document.getElementById("total-count");
  const done = document.getElementById("done-count");
  const todo = document.getElementById("todo-count");

  const donelist = document.querySelectorAll("input:checked");
  const donenumber = donelist.length;
  done.innerText = donenumber;

  const totallist = document.querySelectorAll("input[type=checkbox]");
  const totalnumber = totallist.length;
  total.innerText = totalnumber;

  const todonumber = totalnumber - donenumber;
  todo.innerText = todonumber;

  //console.log(todonumber);
  //console.log(donenumber);
  //console.log(totalnumber);
}

function toggleDone(event) {
  const checkbox = event.currentTarget;

  if (checkbox.checked) {
    checkbox.parentElement.parentElement.className = "todo completed";
  } else {
    checkbox.parentElement.parentElement.className = "todo";
  }
  updateCounters();
}

const checkboxes = document.querySelectorAll(".todo input");
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("change", toggleDone);
}

function createTodo(text) {
  const newLabel = document.createElement("label");
  const newText = document.createTextNode(text);

  const newCheckbox = document.createElement("input");
  newCheckbox.type = "checkbox";
  newCheckbox.addEventListener("change", toggleDone);
  newLabel.appendChild(newCheckbox);
  newLabel.appendChild(newText);

  const newList = document.createElement("li");
  newList.appendChild(newLabel);
  document.getElementById("todolist").appendChild(newList);
}

document
  .querySelector("form")
  .addEventListener("submit", function addNewTodo(event) {
    const input = document.getElementById("textboxid");
    const inputText = input.value;
    event.preventDefault();
    createTodo(inputText);
    // console.log(inputText);
    input.value = null;
    updateCounters();
  });

function cleanUpDoneTodos() {
  const doneItems = document.querySelectorAll("input:checked");

  for (let i = 0; i < doneItems.length; i++) {
    doneItems[i].parentElement.parentElement.remove();
  }
}

document.addEventListener("click", function () {
  updateCounters();
});
