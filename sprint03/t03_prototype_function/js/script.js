String.prototype.removeDuplicates = function (){
    let arr = str.split(' ')
    let removed = [...new Set(arr)]
    return removed.join(' ')
}
let str = `Giant Spiders?  What's next? Giant Snakes?`
console.log(str);
str = str.removeDuplicates()
console.log(str);
str = str.removeDuplicates()
console.log(str);

str = '. . . . ? . . . . . . . . . . '
console.log(str);
str = str.removeDuplicates()
console.log(str);
