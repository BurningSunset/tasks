// 04.06.2022
// swaps the first and last element of the array
// or returns an array if the number of elements is less than 2
const swap = massive => {
    if (massive.length < 2){
        return massive
    };
    let temp = massive[0];
    massive[0] = massive[massive.length-1];
    massive[massive.length-1] = temp;
    return massive;
};
console.log(swap([1, 2, 3, 4, 5]));
console.log(swap(1));
console.log(swap(['apple', 'orange', 'banana']))