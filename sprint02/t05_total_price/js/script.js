let myNumber;
function total(addCount = 1, addPrice = 1, currentTotal = 0){
    return addCount * addPrice + currentTotal
}
myNumber = total(1, 0.1);
myNumber = total(1, 0.2, myNumber);
myNumber = total(1, 0.78, myNumber);
console.log(myNumber);