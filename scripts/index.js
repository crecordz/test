const dropDownContent = document.querySelectorAll(".header__dropdown-content");
const dropDown = document.querySelectorAll(".header__dropdown");
const dropBtn = document.querySelectorAll(".header__dropbtn");
const header = document.querySelector(".header");
const arrows = document.querySelectorAll(".header__arrow");
const dick = document.querySelector(".founders__dick");
const depp = document.querySelector(".founders__depp");
const tube = document.querySelector(".founders__flying-tube");

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

const createFlyingTubeDepp = (offset) => {
  setTimeout(() => {
    const flyingTube = document.createElement("div");
    flyingTube.classList.add("founders__flying-tube");
    const maxLeft = depp.offsetWidth - flyingTube.offsetWidth;
    const randomLeft = Math.floor(Math.random() * (maxLeft + 1));
    flyingTube.style.left = `${randomLeft}px`;
    depp.append(flyingTube);
  }, offset);
};

for (let i = 0; i < 7; i++) {
  createFlyingTubeDepp(i * 500);
}

const createFlyingTubeDick = (offset) => {
  setTimeout(() => {
    const flyingTube = document.createElement("div");
    flyingTube.classList.add("founders__flying-tube");
    const maxLeft = dick.offsetWidth - flyingTube.offsetWidth;
    const randomLeft = Math.floor(Math.random() * (maxLeft + 1));
    flyingTube.style.left = `${randomLeft}px`;
    dick.append(flyingTube);
  }, offset);
};

for (let i = 0; i < 7; i++) {
  createFlyingTubeDick(i * 500);
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

function dickToLight(event) {
  dick.classList.add("founders__dick_light");
  const currentName = event.currentTarget.querySelector(".founders__name");
  currentName.classList.add("founders__name_red");
}

function dickToDark(event) {
  dick.classList.remove("founders__dick_light");
  const currentName = event.currentTarget.querySelector(".founders__name");
  currentName.classList.remove("founders__name_red");
}

function deppToLight(event) {
  depp.classList.add("founders__depp_light");
  const currentName = event.currentTarget.querySelector(".founders__name");
  currentName.classList.add("founders__name_red");
}

function deppToDark(event) {
  depp.classList.remove("founders__depp_light");
  const currentName = event.currentTarget.querySelector(".founders__name");
  currentName.classList.remove("founders__name_red");
}

dropDown.forEach((item) => {
  item.addEventListener("mouseover", showDropDown);
});
dropDown.forEach((item) => {
  item.addEventListener("mouseleave", closeDropDown);
});

dick.addEventListener("mouseover", dickToLight);
dick.addEventListener("mouseleave", dickToDark);

depp.addEventListener("mouseover", deppToLight);
depp.addEventListener("mouseleave", deppToDark);
