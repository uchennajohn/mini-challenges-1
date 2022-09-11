  /**
 * Implement the solution in this function
 *
 * @param {number[]} array The array to transpose
 * @returns {number[]} The transposed array
 */
function transpose(array) {
    let answer = [];
    let temp = [];
    let x = 0;
    for (let index = 0; index < array.length; index++) {
        const i = array[index];
        if(x < i.length){
            temp.push(i[x])
        }
        if(index == array.length - 1 && x < i.length ){
            answer.push(temp);
            temp = []
            
            x += 1
            index = -1
        }
    }
    return answer
}

module.exports = transpose;
