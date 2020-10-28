const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let numberTransfers = 2 ** disksNumber - 1;
    let timeTransfers = Math.floor(numberTransfers * 3600 / turnsSpeed);

    let result = { // объект
        turns: numberTransfers, // под ключом "name" хранится значение "John"
        seconds: timeTransfers // под ключом "age" хранится значение 30
    };
    // let numberTransfers = 2**disksNumber-1;
    // let timeTransfers = Math.floor(numTransfers * 3600 / turnsSpeed);
    // let object = {turns: numberTransfers}
    return result;
};