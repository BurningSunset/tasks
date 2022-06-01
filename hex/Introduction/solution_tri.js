import {getTriangleArea} from './myMathModule.js'; 
// 29.05.2022
// the function takes the argument n and returns the area of a triangle with height n and base (n^2)/2
// VS Code ругается на импорт, хотя в других местах всё работает
const getNArea = (n) =>{
  return(1/2*n*(n**2)/2);
};
export default getNArea;
console.log(getNArea = getTriangleArea(5, 10))