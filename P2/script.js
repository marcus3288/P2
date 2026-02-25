const card = document.querySelector(".card__inner");
const btns = document.querySelectorAll(".card-btn");
btns.forEach((btn) => {
  btn.addEventListener("click", function () {
    card.classList.toggle("is-flipped");
  });
});
