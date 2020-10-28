const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let separator = (options.separator !== undefined) ? options.separator : '+';
    let addition = options.addition !== undefined ? String(options.addition) : '';
    let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '';
    // let additionSeparator = options.additionSeparator !== undefined ?  options.additionSeparator : '|';
    // console.log('addition ' + addition);
    let count = options.repeatTimes;
    let newStr = '';
    if (count < 1 || count === undefined) {
        newStr = `${newStr}${String(str)}${addition}`;
    } else {
        while (count > 0) {
            newStr = `${newStr}${String(str)}`;
            let countAddition = options.additionRepeatTimes;
            if (countAddition > 1) {
                while (countAddition > 0) {

                    if (countAddition > 1) {
                        newStr = `${newStr}${addition}${additionSeparator}`;
                    } else {
                        newStr = `${newStr}${addition}`;
                    }
                    countAddition -= 1;
                }
            } else {
                newStr = `${newStr}${addition}`;
            }
            if (count > 1) {
                newStr = `${newStr}${separator}`;
            }
            count -= 1;
        }
    }
    return newStr;
};

// throw new CustomError('Not implemented');
// remove line with error and write your code here