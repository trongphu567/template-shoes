window.addEventListener("load", function () {
  const toggle = document.querySelector(".header-toggle");
  const menu = document.querySelector(".header-middle");
  const isExpand = "is-expand";
  toggle.addEventListener("click", function () {
    menu.classList.add("is-expand");
  });
  window.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !e.target.matches(".header-toggle")) {
      menu.classList.remove("is-expand");
    }
  });
});
