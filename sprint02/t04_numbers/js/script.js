let beginRange, endRange;

beginRange = prompt('Enter begin of a range from 1 to 100', 1);
endRange = prompt ('Enter end of a range from 1 to 100', 100);
checkDivision(beginRange, endRange);
function checkDivision(beginRange, endRange){
    let result = '';
    for (let i = beginRange; i < endRange; i++){
        if (i % 10 == 0 && i % 3 == 0 && i % 2 == 0){
            result += `${i} is even, a multiple of 3, a multiple of 10 `
        }else if(i % 10 == 0 && i % 2 == 0){
            result += `${i} is even, a multiple of 10`
        }else if (i % 3 == 0 && i % 2 == 0){
            result += `${i} is even, a multiple of 3`
        }else if (i % 3 == 0){
            result += `${i} is a multiple of 3`
        }else if (i % 2 == 0){
            result += `${i} is even`
        }else{
            result += `${i} -`
        }
        result += '\n'
    }
    console.log(result)
}