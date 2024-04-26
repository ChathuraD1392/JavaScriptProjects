document.addEventListener("DOMContentLoaded", () => {
  const api = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
  const url = document.querySelector(".form-control");
  const btn = document.querySelector(".btn");
  const qrImg = document.querySelector(".qrImg");

  btn.addEventListener("click", function () {
    if (url.value == "") {
      url.classList.add("error");
      setTimeout(() => {
        url.classList.remove("error");
      }, 500);
    } else {
      qrImg.src = api + url.value;
      qrImg.classList.add("showImg");
    }
  });
});
