const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    let newArr = [];
    // console.log('arr ' + arr);

    if (!(Array.isArray(arr))) {
        throw "Error";
    } else if (arr.length === 0) {
        return newArr;
    } else {
        for (let i = 0; i < arr.length;) {
            let newArrLentgh = newArr.length;
            // console.log( 'newArrLentgh ' + newArrLentgh); 
            // console.log( 'arr[i] && typeof arr[i] ' + arr[i] + '  ' + typeof arr[i]); 
            // console.log( '  ' ); 
            if (typeof arr[i] !== 'undefined' && arr[i] !== '--discard-prev' && arr[i] !== '--discard-next' && arr[i] !== '--double-next' && arr[i] !== '--double-prev') {
                newArr.push(arr[i]);
            } else if (arr[i] === '--discard-prev' && arr[i - 1] !== '' && arr[i - 2] !== '--discard-next') {
                newArr.pop();

            } else if (arr[i] === '--discard-next' && arr[i + 1] !== '--discard-prev' && arr[i + 1] !== '--discard-next' && arr[i + 1] !== '--double-next' && arr[i + 1] !== '--double-prev' && arr[i + 1] !== '') {
                i += 1;

            } else if (arr[i] === '--double-next' && arr[i + 1] !== '--discard-prev' && arr[i + 1] !== '--discard-next' && arr[i + 1] !== '--double-next' && arr[i + 1] !== '--double-prev' && arr[i + 1] !== '' && typeof arr[i + 1] !== 'undefined') {
                newArr.push(arr[i + 1], arr[i + 1]);
                i += 1;
            } else if (arr[i] === '--double-prev' && typeof arr[i - 1] !== 'undefined' && arr[i - 1] !== '' && arr[i - 2] !== '--discard-next') {
                // console.log( 'arr[i-1] && typeof arr[i-1] ' + arr[i-1] + '  ' + typeof arr[i-1]); 
                newArr.push(arr[i - 1]);
            }

            // console.log( 'newArr ' + newArr); 
            i += 1;
        }
    }
    // console.log( 'newArr ' + newArr); 
    return newArr;
};