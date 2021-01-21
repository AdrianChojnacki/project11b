const endTime = new Date("2022-01-01 00:00:00").getTime();

setInterval(() => {
  const nowTime = new Date().getTime();
  const time = endTime - nowTime;
  const days = Math.floor(time / 1000 / 60 / 60 / 24);
  const hours =
    Math.floor((time / 1000 / 60 / 60) % 24) < 10
      ? `0${Math.floor((time / 1000 / 60 / 60) % 24)}`
      : Math.floor((time / 1000 / 60 / 60) % 24);
  const minutes =
    Math.floor((time / 1000 / 60) % 60) < 10
      ? `0${Math.floor((time / 1000 / 60) % 60)}`
      : Math.floor((time / 1000 / 60) % 60);
  const seconds =
    Math.floor((time / 1000) % 60) < 10 ? `0${Math.floor((time / 1000) % 60)}` : Math.floor((time / 1000) % 60);

  document.querySelector(`.d`).textContent = days;
  document.querySelector(`.h`).textContent = hours;
  document.querySelector(`.m`).textContent = minutes;
  document.querySelector(`.s`).textContent = seconds;
}, 1000);
