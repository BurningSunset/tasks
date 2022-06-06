// 05.06.2022
// the function calculates the sum of all the elements of the array, which are divided without remainder by 3
const coll1 = [8, 9, 21, 19, 18, 22, 7]; // 48
const coll2 = [2, 0, 17, 3, 9, 15, 4]; // 27
const coll3 = []; // 0
const calculateSum = val =>{
    let sum = 0;
    for (let i = 0; i < val.length; i+=1){
        if (val[i] % 3 === 0){
            sum += val[i];
        };
    };
    return sum;
};
console.log(calculateSum(coll1));
console.log(calculateSum(coll2));
console.log(calculateSum(coll3));