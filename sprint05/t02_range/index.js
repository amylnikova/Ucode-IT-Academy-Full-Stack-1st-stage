'use strict'

exports.checkDivision = (beginRange = 1, endRange = 60) => {
    for (let i = beginRange; i <= endRange; i++) {
        if (i % 10 === 0 && i % 3 === 0 && i % 2 ===0) {
            console.log(`The number ${i} is divisible by 2, is divisible by 3, is divisible by 10`);
        } else if(i % 3 === 0 && i % 2 ===0) {
            console.log(`The number ${i} is divisible by 2, is divisible by 3`);
        }else if(i % 2 ===0) {
            console.log(`The number ${i} is divisible by 2`);
        }else {
            console.log(`The number ${i} -`);
        }
    }
}