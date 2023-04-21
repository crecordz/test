const dropDownContent = document.querySelectorAll(".header__dropdown-content");
const dropDown = document.querySelectorAll(".header__dropdown");
const dropBtn = document.querySelectorAll(".header__dropbtn");
const header = document.querySelector(".header");
const arrows = document.querySelectorAll(".header__arrow");
const dick = document.querySelector(".founders__dick");
const depp = document.querySelector(".founders__depp");

function showDropDown(event) {
  const currentDropDownContent = event.currentTarget.querySelector(
    ".header__dropdown-content"
  );
  if (currentDropDownContent) {
    currentDropDownContent.classList.add("header__dropdown_show-dropdown");
  }

  const currentDropBtn = event.currentTarget.querySelector(".header__dropbtn");
  if (currentDropBtn) {
    currentDropBtn.classList.add("header__dropbtn_hover");
  }
  const currentArrow = event.currentTarget.querySelector(".header__arrow");
  if (currentArrow) {
    currentArrow.classList.add("header__arrow_rotate");
  }
}

function closeDropDown(event) {
  dropDownContent.forEach((item) => {
    item.classList.remove("header__dropdown_show-dropdown");
  });

  dropBtn.forEach((item) => {
    item.classList.remove("header__dropbtn_hover");
  });

  arrows.forEach((item) => {
    item.classList.remove("header__arrow_rotate");
  });
}

function dickToLight() {
  dick.classList.toggle("founders__dick_light");
}

function deppToLight() {
  depp.classList.toggle("founders__depp_light");
}

dropDown.forEach((item) => {
  item.addEventListener("mouseover", showDropDown);
});
dropDown.forEach((item) => {
  item.addEventListener("mouseleave", closeDropDown);
});

dick.addEventListener("mouseover", dickToLight);
dick.addEventListener("mouseleave", dickToLight);

depp.addEventListener("mouseover", deppToLight);
depp.addEventListener("mouseleave", deppToLight);
