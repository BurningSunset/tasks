// 29.05.2022
// calculates the area of a triangle
// exported to solution_tri.js
const getTriangleArea = (h, b) => {
    let A = (1/2) * h * b;
    return A;
};
// console.log(getTriangleArea(5, 10)); - result is 25
export default getTriangleArea;