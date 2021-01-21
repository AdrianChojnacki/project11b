const endTime = new Date("2022-01-01 00:00:00").getTime();

setInterval(() => {
  const nowTime = new Date().getTime();
  const time = Math.floor((endTime - nowTime) / 1000);
  console.log(time);
}, 1000);
