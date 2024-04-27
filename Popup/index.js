document.addEventListener("DOMContentLoaded", () => {
  const btnClick = document.querySelector(".btn-danger");
  const popup = document.querySelector(".popup");
  const btnOk = document.querySelector(".btn-info");

  btnClick.addEventListener("click", () => {
    popup.classList.add("show");
  });

  btnOk.addEventListener("click", () => {
    popup.classList.remove("show");
  });
});
