'use strict'
let frequencyRegExp = /[a-z][а-я]/i; 
const StrFrequency =  class {
    constructor(str) {
        this.str = str.toLowerCase();
    }

    letterFrequencies() {
        if (frequencyRegExp.test(this.str) {
            let arr = str.replace(/[^a-zA-Z]/gi,'').replace(/\s+/gi,', ').split('').sort();
            let resultArr = [];
            let k = 1;

            for (let i of arr) {
                if (i == arr[k]) {
                    if (!resultArr.includes(i)) {
                        resultArr.push(i);
                    }
                }
                k++;
            }

            return resultArr.length
        })
    }
}