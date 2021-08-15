"use strict";

// tasks 1, 2
const button = document.querySelector(".square-button");
button.addEventListener("click", changeSquareColor);

function changeSquareColor() {
  const blockElement = document.querySelector(".square");
  blockElement.style.backgroundColor = "green";
}

// task 3
const modalButton = document.querySelector(".modal-button");
modalButton.addEventListener("click", showModal);

const modalWindow = createModal();

function showModal() {
  const findModalEl = document.querySelector(".modal-window");
  if (findModalEl) {
    findModalEl.remove();
    return;
  }
  document.body.append(modalWindow);
}
function createModal() {
  const modalElement = document.createElement("div");
  modalElement.classList.add("modal-window");

  const closeBtn = document.createElement("div");
  closeBtn.classList.add("modal-window__close-button");
  closeBtn.innerText = "close";
  closeBtn.addEventListener("click", showModal);

  const imgElement = new Image();
  imgElement.classList.add("modal-window__image");
  imgElement.setAttribute(
    "src",
    "https://i.pinimg.com/originals/9d/07/fa/9d07fa19cf4d580c03c2df328ded76cb.jpg"
  );
  modalElement.append(closeBtn);
  modalElement.append(imgElement);
  return modalElement;
}

//task 4
async function getData() {
  try {
    const response = await fetch(
      "https://api.jsonbin.io/b/60ec02d6a63d2870c1927632/3"
    );
    let data = await response.json();
    return console.log("fetched json: ", data);
  } catch (err) {
    console.log(err);
  }
}
getData();

//task 5
const array = ["Василий", "Петр", "Альберт"];
console.log("sorted array:", array.sort());
