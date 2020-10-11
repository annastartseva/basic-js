const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let arrayone = matrix.reduce((result, element) => result.concat(element), []);
    return Number(arrayone.reduce((acc, element) => ((element === '^^') ? acc + 1 : acc), 0));


    // remove line with error and write your code here
};