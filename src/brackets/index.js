/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */





function isValid(str) {
 let bracketStr = [];
 let strArr = str.split('');
 let firstStrIndex = str[0]; 

 if(firstStrIndex === ')' || firstStrIndex=== '}' || firstStrIndex === ']') {
    return 'invalid'
 }else{

    for(let i = 0; i< strArr.length; i++) {
        //const bracket = strArr[i]

        if(strArr[i] ==='{' || strArr[i] === '(' || strArr[i] === '[') {
            bracketStr.push(strArr[i])
            }else{

                    if(strArr[strArr.length-1] ==='{' && strArr[i] === '}'){
                        bracketStr.pop()
                    }
                    if(strArr[strArr.length-1] === '[' && strArr[i] ===']'){
                        bracketStr.pop()
                    }
                   if(strArr[strArr.length-1] === '(' && strArr[i] ===')') {
                        bracketStr.pop()
                    }
            }

    }
 }
    if(bracketStr.length == 0){
        return "valid"
    }else{
        return "invalid"
    }
}
        
module.exports = isValid;
console.log(isValid("{{{{{{{{{{{{}}}}}}}}}}}()[}]"))
console.log(isValid("(){}[]"))
