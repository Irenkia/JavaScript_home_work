function addImg() {
  const pictureHolder = document.getElementById("pictureHolder");
  const img = document.createElement("img");
  img.src = "./images/stone3.jpg";
  img.setAttribute("class", "stone3");
  pictureHolder.appendChild(img);
  img.style.cssText =
    "display:block; margin:1rem auto; max-width:100%; max-height:15rem";
}
function removeImg() {
  const imgElement = document.querySelector(".stone3");
  //   while (imgElement) {
  //     imgElement.remove();
  //   }
  imgElement.remove();
}

const inner = document.querySelector(".inner");
const squareColors = [
  "#ed220d",
  "#b542e5",
  "#0d93ed",
  "#f2770b",
  "#8affbc",
  "#f2ff8a",
  "#ff38c2",
  "#e37f35",
];
const BLOCKS = 672;
for (let i = 0; i < BLOCKS; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
  inner.appendChild(square);
}
function getRondomColor() {
  return squareColors[Math.floor(Math.random() * squareColors.length)];
}
function setColor(elem) {
  const color = getRondomColor();
  elem.style.background = color;
  elem.style.boxShadow = `0 0 12px ${color}`;
}
function removeColor(elem) {
  elem.style.background = "#2d2d2d";
  elem.style.boxShadow = "0 0 4px #000";
}
