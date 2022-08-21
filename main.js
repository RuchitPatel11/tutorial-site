const toggle = document.querySelector(".aaa-toggle");
toggle.addEventListener("click", () => {
  const nav = document.querySelector(".aaa-navbar");
  nav.classList.toggle("aaa-show");
});

function myFunctionBlock(id) {
  const element = document.querySelectorAll(id);
  element.forEach(ele => {
    ele.classList.toggle("show-li")
  });
}