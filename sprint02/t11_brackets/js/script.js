// let brackRegExp = new RegExp('[(|)]');
// let a = 0,
//     b = 0;
    
// function checkBrackets(str) {
//     if (!str || !brackRegExp.test(str)) {
//         return -1;
//     } 
//     for (let i = 0; i < str.length; i++) 
//     if (str[i] == "(" ) {
//         a++
//     } else if (str[i] == ")" ) {
//         b++
//     } 
    
//     let res = a - b 
//     if (res < 0 ) {
//         res *= -1
//     }
//     return res
// }

// console.log(checkBrackets(str))

    // let result = 0;

    let brackRegExp = new RegExp('[(|)]');

    function checkBrackets(str) {
        if (!brackRegExp.test(str) || !typeof(str) === 'string') {
            return -1;
        }
        for (let i = 0; i < str.length; i++) {
            let a = 0;
            let b = 0;
            if (str[i] == '(') {
                a++;
            } else if (str[i] == ')') {
                b++;
            }
            let res = a - b;
            if (res < 0) {
               Math.abs(res);
            }
            return res;
        }
        
    }

    // console.log(checkBrackets(NaN)); // -1
    // console.log(checkBrackets(12)); // -1
    // console.log(checkBrackets(true)); // -1
    // console.log(checkBrackets({name:'Vasya'}));// -1
    // console.log(checkBrackets('Hello'));// -1    

console.log(checkBrackets('1)()(())2(()')); // 0
console.log(checkBrackets('(')); // 1
console.log(checkBrackets('(dwadfwaf)()')); // 0
console.log(checkBrackets('((dwarf)')); // 1
console.log(checkBrackets('))121r((test))')); // 2
console.log(checkBrackets('(((')); // 3
console.log(checkBrackets('great)')); // 1
console.log(checkBrackets('(1+wadw())))')); // 2
console.log(checkBrackets('KO[(  )')); // 0
console.log(checkBrackets('     false((')); // 2
    // 
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] === "(") {
    //         result++;
    //     } else if (str[i] === ")") {
    //         result--;
    //     }
    //     return result;
        
    // } console.log(result);
    
    // if (!typeof(str) === "string") {
    //     result = -1;
    //     console.log(result);
    // }
    // if (!brackRegExp.test(str)) {
    //     result = -1;
    //     console.log(result);
    // }else {
    //     result = 0;
    // }
    
    
    // return result = Math.abs(residual);


// console.log(checkBrackets('1)()(())2(())')); 
