document.addEventListener("DOMContentLoaded", function () {
  let count = 0;

  const number = document.querySelector(".number");
  const btns = document.querySelectorAll(".btn");

  btns.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      const styles = event.currentTarget.classList;
      if (styles.contains("increase")) {
        count++;
        number.textContent = count;
      } else if (styles.contains("decrease")) {
        count--;
        number.textContent = count;
      } else {
        count = 0;
        number.textContent = count;
      }

      if (count >= 0) {
        number.style.color = "Green";
      } else {
        number.style.color = "Red";
      }
    });
  });
});
