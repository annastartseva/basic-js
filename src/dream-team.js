const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {

    if (!(Array.isArray(members)) || members.length === 0) {
        return false;
    } else {
        let abreviatura = members.filter(element => typeof element === 'string').map(element => element.trim().charAt(0).toUpperCase()).sort().reduce((acc, element) => acc += element, '');

        //console.log(abreviatura);
        return abreviatura;
    }
}