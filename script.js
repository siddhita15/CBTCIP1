let inputBox = document.querySelector("#inputBox");
let list = document.querySelector("#list");
let btn = document.querySelector("#btn");

inputBox.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addItem(this.value);
    this.value = "";
  }
});
btn.addEventListener("click", function () {
  addItem(inputBox.value);
  inputBox.value = "";
});

let addItem = (inputBox) => {
  let listItem = document.createElement("li");
  listItem.innerHTML = `${inputBox}<i>`;

  listItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  listItem.querySelector("i").addEventListener("click", function () {
    listItem.remove();
  });

  list.appendChild(listItem);
};