const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    // if (typeof sampleActivity !== "string" || sampleActivity === '' || 0 >= sampleActivity || sampleActivity >= 9000 || sampleActivity > 15) {
    if (typeof sampleActivity !== "string" || sampleActivity === '' || 0 >= sampleActivity || sampleActivity > 15) {
        return false;
    }
    let sampleActivityCopy = Number(sampleActivity);
    console.log('sampleActivityCopy ' + sampleActivityCopy);
    let age = Math.ceil(MODERN_ACTIVITY / sampleActivityCopy) / (0.693 / HALF_LIFE_PERIOD);
    console.log("age " + age);

    return isNaN(age) ? false : age === Infinity ? false : Number(age);
};