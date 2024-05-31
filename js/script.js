// export * from "./modal.js";
const photos = document.querySelectorAll(".c_grid__photo");
const modal = document.getElementById("modal");
const modalPhoto = document.querySelector(".c_grid__modalPhoto");
const modalButton = document.querySelector(".c_grid__modalButton");
const htmlArea = document.querySelector("html");
const bodyArea = document.querySelector("body");
photos.forEach((photo) => {
  photo.addEventListener("click", () => {
    modalPhoto.src = photo.src;
    if (modal.getAttribute("aria-hidden")) {
      modalButton.setAttribute("aria-hidden", "false");
      modal.setAttribute("aria-hidden", "false");
      htmlArea.classList.add("js_modal");
      bodyArea.classList.add("js_modal");
    }
  });
  // photo.obsrver();
});
modal.addEventListener("click", (e) => {
  if (e.target == modal) {
    modalButton.setAttribute("aria-hidden", "true");
    modal.setAttribute("aria-hidden", "true");
    htmlArea.classList.remove("js_modal");
    bodyArea.classList.remove("js_modal");
  }
});
modalButton.addEventListener("click", () => {
  modalButton.setAttribute("aria-hidden", "true");
  modal.setAttribute("aria-hidden", "true");
  htmlArea.classList.remove("js_modal");
  bodyArea.classList.remove("js_modal");
});
