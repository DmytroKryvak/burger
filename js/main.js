document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".header__nav");
  const body = document.body;
  const closeButton = document.createElement("button");
  closeButton.classList.add("close-btn");
  closeButton.innerHTML = "&times;";
  nav.appendChild(closeButton);

  burger.addEventListener("click", function () {
    nav.classList.add("active");
    body.classList.add("no-scroll");
    burger.classList.add("hidden");
  });

  closeButton.addEventListener("click", function () {
    nav.classList.remove("active");
    body.classList.remove("no-scroll");
    burger.classList.remove("hidden");
  });
});
