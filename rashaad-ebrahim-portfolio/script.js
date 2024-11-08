"use strict";

// Project card tab component

const btnTabsContainer = document.querySelector(".projects--btn-container");
const cardsContent = document.querySelectorAll(".project-card");
const btnTabs = document.querySelectorAll(".projects-btn");

btnTabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".projects-btn");

  if (!clicked) return;
  btnTabs.forEach((btn) => btn.classList.remove("projects-btn--active"));
  cardsContent.forEach((card) => card.classList.remove("project-card--active"));

  clicked.classList.add("projects-btn--active");

  document
    .querySelector(`.project-card-${clicked.dataset.btn}`)
    .classList.add("project-card--active");
});
