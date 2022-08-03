import Coutdown from './modules/countdown.js';

let timeForChristimas = new Coutdown(' 24 December 2022 23:49:59');
let timeForNewYear = new Coutdown(' 31 December 2022 23:49:59 GMT-0300');

setInterval(() => {
	console.log(timeForChristimas.total, 'Time for christimas');
	// console.log(timeForNewYear.total, 'Time for new year');
}, 1000);
