let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

function formatTime(value) {
  return value < 10 ? "0" + value : value;
}

function watch() {
  let date = new Date();

  let hformet = date.getHours();
  let mformet = date.getMinutes();
  let sformet = date.getSeconds();

  // 12-hour korar jonno
    hformet = hformet % 12;
    hformet = hformet === 0 ? 12 : hformet;
  // 0 hole 12 dekanur jonno

  hrs.innerHTML = formatTime(hformet);
  min.innerHTML = formatTime(mformet);
  sec.innerHTML = formatTime(sformet);
}

setInterval(watch, 1000);
