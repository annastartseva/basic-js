const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date === undefined) {
        return 'Unable to determine the time of year!';
    } else if (typeof(date) !== 'object' || Object.prototype.toString.call(date) !== "[object Date]") {
        throw new "THROWN";
    } else {
        let season = ['winter', 'spring', 'summer', 'autumn'];
        let month = Math.floor((date.getMonth() + 1) % 12 / 3);
        return season[month];
    }

};