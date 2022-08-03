# countdownWithJS

A simple class to countdown some input date
Advisable to use together with setInterval() with 1 second interval for continuous update.

### Working example:
Use this script as a module

`timeForChristimas = new Coutdown(' 24 December 2022 23:49:59 GMT-0300');
// GTM is optional, if not used it will get the timezone`

`setInterval(() => {
timeForNewYear = new Coutdown(' 31 December 2022 23:49:59 GMT-0300');
}, 1000);`
