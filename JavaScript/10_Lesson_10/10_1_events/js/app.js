let offset = 0;
const sliderRow = document.querySelector(".slider-row");
const btnPrev = document.querySelector(".slider-prev");
const btnNext = document.querySelector(".slider-next");
const step = 256;
btnPrev.addEventListener("click", () => {
  offset = offset - step;
  if (offset < 0) {
    offset = 2304;
  }
  sliderRow.style.left = -offset + "px";
});
btnNext.addEventListener("click", () => {
  offset = offset + step;
  if (offset > 2304) {
    offset = 0;
  }
  sliderRow.style.left = -offset + "px";
});
