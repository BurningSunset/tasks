// 28.05.2022
// the function finds the smallest divisor of a given number
// and imperative programming
const smallestDivisor = (num) => {
  if (num < 1){
    return(NaN);
  }
  const sor = (n) => {
    if (n === 1){
      return(1);
    } else {
    let count = 2;
    while (n % count != 0){
      count = count + 1;}
      return (count)
    }};
  return sor(num);
};
 console.log(smallestDivisor(1));