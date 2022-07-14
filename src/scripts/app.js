import "modern-normalize/modern-normalize.css";
import "../styles/app.scss";

const menuTrigger = document.querySelector("#openMenu");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".modal__close");

menuTrigger.addEventListener("click", () =>
  modal.classList.add("modal_opened"),
);

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("modal_opened");
});
