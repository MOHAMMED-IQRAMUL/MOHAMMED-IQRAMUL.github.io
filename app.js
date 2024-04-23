let burgerIcon = document.querySelector(".img1");
let burgerIconImg = document.querySelector(".hmImg");
let burgerContent = document.querySelector(".hmbgr-cont");

(() => {
  burgerIconImg.src = "assets/hambj-horiz.avif";
})();

burgerIcon.addEventListener("click", () => {
  if (burgerIconImg.src.includes("hambj-horiz")) {
    burgerIconImg.src = "assets/hambj-X.avif";
    burgerContent.classList.add("hmbgr-cont-bl");
  } else {
    burgerIconImg.src = "assets/hambj-horiz.avif";
    burgerContent.classList.remove("hmbgr-cont-bl");
  }
});

const getRandColor = () => {
  let R = Math.floor(Math.random() * 255);
  let G = Math.floor(Math.random() * 255);
  let B = Math.floor(Math.random() * 255);
  return `rgb(${R},${G},${B})`;
};
let colorrr = document.querySelectorAll(".paras");
// code to change color of each paras to a different color
colorrr.forEach((color) => {
  color.style.color = getRandColor();
});


