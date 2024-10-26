const secondHeader = document.querySelector(".navBar");

document.getElementById("menu").onclick = () => {
  secondHeader.classList.toggle("active");
};

window.onscroll = () => {
  secondHeader.classList.remove("active");
};
