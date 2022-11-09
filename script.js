let progress = document.getElementById("progress");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let circles = document.querySelectorAll(".circle");
let arr = Array.from(circles);
let currentActive = 1;
next.addEventListener("click", () => {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});
prev.addEventListener("click", () => {
  currentActive--;
  if (currentActive > 1) {
    currentActive = 1;
  }
  //   update();
});
function update() {
  arr.map((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  let active = document.querySelectorAll(".active");
  progress.style.width =
    ((active.length - 1) / (circles.length - 1)) * 100 + "%";
  console.log(active.length - 1);
}
