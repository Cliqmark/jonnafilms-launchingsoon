const starsContainer = document.querySelector(".stars");

for (let i = 0; i < 180; i++) {
  let star = document.createElement("span");
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDuration = (Math.random() * 3 + 2) + "s";
  starsContainer.appendChild(star);
}
