const endTime = new Date("2022-01-01 00:00:00").getTime();

setInterval(() => {
  const nowTime = new Date().getTime();
  const time = endTime - nowTime;

  const days = Math.floor(time / 1000 / 60 / 60 / 24);
  let hours = Math.floor((time / 1000 / 60 / 60) % 24);
  let minutes = Math.floor((time / 1000 / 60) % 60);
  let seconds = Math.floor((time / 1000) % 60);

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  document.querySelector(`.d`).textContent = days;
  document.querySelector(`.h`).textContent = hours;
  document.querySelector(`.m`).textContent = minutes;
  document.querySelector(`.s`).textContent = seconds;
}, 1000);
