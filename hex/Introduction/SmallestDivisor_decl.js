// 28.05.2022
// the function finds the smallest divisor of a given number
// and declarative programming

const smallestDivisor = (num) => {
  if (num === 0){
    return(NaN);
  }
  if (num === 1){
    return(1);
  }
  const sor = (n, a) => {
    if (n % a === 0) {
      return a;
    };
    return sor(n, a + 1);
  };
  return sor(num, 2);
};
 console.log(smallestDivisor(113));