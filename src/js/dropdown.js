document
  .querySelectorAll(".dropdown-menu")
  .forEach((dropdown) => Dropdown(dropdown));
document.addEventListener("click", closeCurrentMenu);

function getCurrentMenu() {
  return document.querySelector(".menu.visible");
}

function closeCurrentMenu() {
  getCurrentMenu()?.classList.remove("visible");
}

export default function Dropdown(dropdown) {
  const menu = dropdown.querySelector(".menu");

  function dropdownHandler(dropdownEl, e) {
    if (dropdownEl.classList.contains("toggle-button")) {
      if (menu !== getCurrentMenu()) closeCurrentMenu();
      menu.classList.toggle("visible");
      e.stopPropagation();
    }
  }

  dropdown.addEventListener("click", (e) => dropdownHandler(e.target, e));
}
