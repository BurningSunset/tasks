// 05.06.2022
// function takes an array as input and arranges the elements inside it in reverse order
// without using the «reverse()» method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const fruits = ['apple', 'bananas', 'orange', 'peach', 'apricot'];
const reverse = (arr) =>{
    for (let i = 0; i < Math.floor(arr.length/2); i+=1){
        let temp = arr[i];
        arr[i]=arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    };
    return arr;
};
console.log(reverse(numbers));
console.log(reverse(fruits));
