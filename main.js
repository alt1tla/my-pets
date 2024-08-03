let heads = 0;
let tails = 0;
let speed = 1;
let currentSide = "head";
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#btn-flip");
let resetBtn = document.querySelector("#btn-reset");

function updateStats() {
  document.querySelector("#heads-count").textContent = `Earth: ${heads}`;
  document.querySelector("#tails-count").textContent = `Moon: ${tails}`;
}

function disableButton() {
  flipBtn.disabled = true;
  setTimeout(function () {
    flipBtn.disabled = false;
  }, speed * 1000);
}

flipBtn.addEventListener("click", () => {
  let i = Math.random();
  coin.style.animation = "none";

  if (currentSide === "head") {
    if (i < 0.5) {
      setTimeout(function () {
        coin.style.animation = `flip-head-to-head ${speed}s forwards`;
      }, 100);
      heads++;
      currentSide = "head";
    } else {
      setTimeout(function () {
        coin.style.animation = `flip-head-to-tail ${speed}s forwards`;
      }, 100);
      tails++;
      currentSide = "tail";
    }
    setTimeout(updateStats, speed * 1000);
    disableButton();
  } else {
    if (i < 0.5) {
      setTimeout(function () {
        coin.style.animation = `flip-tail-to-head ${speed}s forwards`;
      }, 100);
      heads++;
      currentSide = "head";
    } else {
      setTimeout(function () {
        coin.style.animation = `flip-tail-to-tail ${speed}s forwards`;
      }, 100);
      tails++;
      currentSide = "tail";
    }
    setTimeout(updateStats, speed * 1000);
    disableButton();
  }
});
resetBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  heads = 0;
  tails = 0;
  currentSide = "head";
  updateStats();
});
