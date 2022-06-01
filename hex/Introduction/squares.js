// 29.05.2022
// "square" returns the square of a number
// "sumOfSquares" returns the sum of the squares of two numbers
// "squareSumOfSquares" returns the sum of the squares of two numbers squared
/* const square = (a) =>{
    return (a**2);
  };
  const sumOfSquares = (a, b) =>{
    return(a**2+b**2);
  };
  const squareSumOfSquares = (a, b) =>{
    return ((a**2+b**2)**2)
  }; */
  const square = (a) => {
    return (a**2);
  };
  const sumOfSquares = (a, b) => {
    return (square(a)+square(b));
  };
  const squareSumOfSquares = (a,b) => {
    return (sumOfSquares(a, b)**2);
  }
console.log(square(5)); // 25
console.log(square(10)); // 100
console.log(sumOfSquares(5, 10)); // 125
console.log(sumOfSquares(10, -9)); // 181
console.log(squareSumOfSquares(1, 1)); // 4
console.log(squareSumOfSquares(2, 3)); // 169