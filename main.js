let heads = 0;
let tails = 0;
let speed = 5;
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
  }, 3000);
}

flipBtn.addEventListener("click", () => {
  let i = Math.random();
  coin.style.animation = "none";
  if (i < 0.5) {
    setTimeout(function () {
      coin.style.animation = `flip-heads ${speed}s forwards`;
    }, 100);
    heads++;
  } else {
    setTimeout(function () {
      coin.style.animation = `flip-tails ${speed}s forwards`;
    }, 100);
    tails++;
  }
  setTimeout(updateStats, speed *1000);
  disableButton();
});
resetBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  heads = 0;
  tails = 0;
  updateStats();
});
