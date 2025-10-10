const releaseDate = new Date("Nov 19, 2025 00:00:00").getTime();
const countdownEl = document.getElementById("countdown");
const timer = setInterval(() => {
const now = new Date().getTime();
const distance = releaseDate - now;
if (distance < 0) {
clearInterval(timer);
countdownEl.innerHTML = "OUT NOW!";
return;
}
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);
countdownEl.innerHTML = `
<span>${days}d</span>
<span>${hours}h</span>
<span>${minutes}m</span>
<span>${seconds}s</span>
`;
}, 1000);