document.addEventListener("DOMContentLoaded", function () {
  const col = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
  ];
  const btn = document.getElementById("btn");
  const colorName = document.querySelector(".colorName");
  btn.addEventListener("click", function () {
    let randomColor = "#";

    for (let i = 0; i < 6; i++) {
      randomColor += col[Math.floor(Math.random() * 15)];
    }
    document.body.style.backgroundColor = randomColor;
    colorName.textContent = randomColor;
    console.log(randomColor);
  });
});
