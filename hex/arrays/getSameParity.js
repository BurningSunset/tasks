// 07.06.2022
// the function takes an array of numbers as input and returns a new one consisting of elements that have the same parity as the first element of the input array

/* const getSameParity = arr => {
    const result = [];
    if (arr[0] % 2 === 0){
        for (curVar of arr){
            if (curVar % 2 === 0){
                result.push(curVar);
            }
        }
    } else {
        for (curVar of arr){
            if (curVar % 2 !== 0){
                result.push(curVar);
            }
        }
    };
    return(result);
} */

    const getSameParity = arr => {
        const result = [];
        const c = arr[0] % 2;
        for (curVar of arr){
            if (curVar % 2 === c){
                result.push(curVar)
            }
        };
        return result;
}
console.log(getSameParity([1, 2, 3]));
console.log(getSameParity([2, 4, 6, 7]));
console.log(getSameParity([]));