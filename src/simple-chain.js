const CustomError = require("../extensions/custom-error");

const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        if (arguments.length === 0) {
            this.chain.push("");
        }
        this.chain.push(value);
        return this;
    },
    removeLink(position) {
        if (typeof position !== 'number' || this.chain[position - 1] === undefined) {
            this.chain = [];
            throw new 'Error';
        } else {
            this.chain.splice(position - 1, 1);
            return this;
        }
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let chainFinish = this.chain.reduce((acc, elem, index) => {
            if (index === 0) {
                acc += `( ${elem} )`;
                return acc;
            } else {
                acc += `~~( ${elem} )`;
                return acc;
            }
        }, "");
        this.chain = [];
        return chainFinish;
    }
};

module.exports = chainMaker;