const asstoggle = document.querySelector(".toggle")
console.log("hello")
asstoggle.addEventListener('click', () => {
  const nav = document.querySelector(".nav-item");
  if (!nav.classList.contains("visible")) {
    nav.classList.remove("hidden");
    nav.classList.add("visible");
  } else {
    nav.classList.add("hidden");
    nav.classList.remove("visible");
  }
});
window.onresize = () => {
  const nav = document.querySelector(".nav-item");
  nav.classList.remove("hidden");
  nav.classList.add("visible");
};

