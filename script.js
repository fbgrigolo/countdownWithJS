import Coutdown from './countdown.js';

timeForChristimas = new Coutdown(' 24 December 2022 23:49:59');
timeForNewYear = new Coutdown(' 31 December 2022 23:49:59 GMT-0300');

setInterval(() => {
  console.log(timeForNewYear.total);
}, 1000);
