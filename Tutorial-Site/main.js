const toggle = document.querySelector(".toggle");
toggle.addEventListener("click", () => {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("show");
});

function myFunctionBlock(id) {
  const element = document.querySelectorAll(id);
  element.forEach(ele => {
    ele.classList.toggle("show-li")
  });
}