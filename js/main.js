const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const btnIgm = document.querySelector("#nav-btn-image");

navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    btnIgm.src = "./image/icons/nav-close.svg";
  } else {
    btnIgm.src = "./image/icons/nav-open.svg";
  }
};
AOS.init({
  once: true,
  disable: "phone",
});
