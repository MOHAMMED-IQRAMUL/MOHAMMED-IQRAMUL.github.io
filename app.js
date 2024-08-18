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



// const getRandColor = () => {
//   let R = Math.floor(Math.random() * 255);
//   let G = Math.floor(Math.random() * 255);
//   let B = Math.floor(Math.random() * 255);
//   return `rgb(${R},${G},${B})`;
// };
// let alphabet = document.querySelectorAll(".TEXT");
// alphabet.forEach((color) => {
//   color.style.color = getRandColor();
// });

const getRandColor = () => {
  // Set a minimum value for R, G, B to ensure bright colors
  const min = 150;
  const max = 255;
  
  let R = Math.floor(Math.random() * (max - min + 1)) + min;
  let G = Math.floor(Math.random() * (max - min + 1)) + min;
  let B = Math.floor(Math.random() * (max - min + 1)) + min;

  return `rgb(${R},${G},${B})`;
};

let alphabet = document.querySelectorAll(".TEXT");
alphabet.forEach((color) => {
  color.style.color = getRandColor();
});