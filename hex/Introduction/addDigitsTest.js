// 29.05.2022
// sums up all the digits of the number until there is one digit left
const addDigits = num =>{
    num = String(num);
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += +num[i];
    }
    if (sum >= 10) {
        return addDigits(sum);
    } else {
        return sum;
    }
  };
  console.log(addDigits(14));
  console.log(addDigits(66));
export default addDigits;
