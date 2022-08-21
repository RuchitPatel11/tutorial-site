const assToggle = document.querySelector(".toggle")
assToggle.addEventListener('click', () => {
  const nav = document.querySelector(".ass-nav");
  nav.classList.toggle("visible")
})

window.onresize = () => {
  const nav = document.querySelector(".nav-item");
  nav.classList.add("visible");
};