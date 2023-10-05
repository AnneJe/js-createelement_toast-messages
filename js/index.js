console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container

  //Tipp:
  // append ist der Tipp für die Liste, man soll der Liste ein Element anfügen
  //daher Listenelement Create und der Liste anfügen
  const toast = document.createElement("li");
  toast.classList.add("toast-container__message");
  toast.textContent = "Im a toast message";
  toastContainer.append(toast);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = "";
});
