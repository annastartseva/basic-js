const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    constructor(reverseVal) {
        this.reverseVal = reverseVal;
    }

    encrypt(message, key) {
        if (this.message === '' || this.key === '') {
            throw new "Error";
        }
        let encryptMessage = "";
        //perebiraem message
        for (var i = 0, j = 0; i < message.length; i++) {
            //toUpperCase
            let mesUpCase = message[i].toUpperCase();
            // if A-Z
            if (mesUpCase.match(/[A-Z]/i)) {
                let keyUpCase = key[j % key.length].toUpperCase();
                j++;
                let mesCharCode = mesUpCase.charCodeAt(0);
                let keyCharCode = keyUpCase.charCodeAt(0);
                let sumMesKey = ((mesCharCode - 65) + (keyCharCode - 65));
                encryptMessage += String.fromCharCode((sumMesKey % 26) + 65);
            } else {
                encryptMessage = `${encryptMessage}${mesUpCase}`;
            }
        }

        function reverseFunc(encryptMessage) {
            return encryptMessage.split("").reverse().join("");
        }
        if (this.reverseVal === false) {
            return reverseFunc(encryptMessage);
        } else {
            return encryptMessage;
        }
    }

    decrypt(message, key) {
        if (this.message === '' || this.key === '') {
            throw new "Error";
        }
        let encryptMessage = "";
        //perebiraem message
        for (var i = 0, j = 0; i < message.length; i++) {
            //toUpperCase
            let mesUpCase = message[i].toUpperCase();
            // if A-Z
            if (mesUpCase.match(/[A-Z]/i)) {
                let keyUpCase = key[j % key.length].toUpperCase();
                j++;
                let mesCharCode = mesUpCase.charCodeAt(0);
                let keyCharCode = keyUpCase.charCodeAt(0);
                let sumMesKey = (mesCharCode - 65) - (keyCharCode - 65);
                if (sumMesKey < 0) { sumMesKey = (mesCharCode - 65) + 26 - (keyCharCode - 65); }
                let perem = ((sumMesKey) % 26) + 65;
                encryptMessage += String.fromCharCode(perem);
            } else {
                encryptMessage = `${encryptMessage}${mesUpCase}`;
            }
        }

        function reverseFunc(encryptMessage) {
            return encryptMessage.split("").reverse().join("");
        }
        if (this.reverseVal === false) {
            return reverseFunc(encryptMessage);
        } else {
            return encryptMessage;
        }
    }
}

module.exports = VigenereCipheringMachine;