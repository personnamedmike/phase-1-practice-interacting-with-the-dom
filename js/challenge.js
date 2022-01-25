const counter = document.querySelector("h1#counter");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");
const pause = document.querySelector("#pause");
const restart = document.querySelector("#restart");
const likes = document.querySelector(".likes");
const comments = document.querySelector("#list");
const form = document.querySelector("form");

let like = 0;
let counterId = 0;

// auto timer
const timer = setInterval(() => {
  like = 0;
  counter.textContent = counterId;
  counterId++;
}, 1000);

// decrease counter
minus.addEventListener("click", () => {
  if (counter.innerText >= 0) counterId--;
});

// incrase counter
plus.addEventListener("click", () => {
  counterId++;
});

// increase likes
heart.addEventListener("click", () => {
  const li = document.createElement("li");
  li.innerText = `${counter.innerText} has been liked ${(like += 1)} ${
    like < 2 ? "time" : "times"
  }`;
  likes.appendChild(li);
});

// leave comment
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const comment = document.querySelector("#comment-input");
  const p = document.createElement("p");
  console.log(comment.value);
  p.innerText = comment.value;
  p.style.fontWeight = "normal";
  document.querySelector("h3").append(p);
  form.reset();
});

// pause timer
pause.addEventListener("click", (e) => {
  clearInterval(timer);
});

restart.addEventListener("click", () => {
  restart.textContent = "resume";
  const timer = setInterval(() => {
    like = 0;
    counter.textContent = counterId;
    counterId++;
  }, 1000);
});
