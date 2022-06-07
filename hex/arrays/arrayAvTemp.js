// 07.06.2022;
// the function calculates the arithmetic mean of the elements of the passed array
// using «for...of»
const calculateAverage = arrayTemp => {
    if (arrayTemp === []) {
        return NaN
    };
    avgTemp = 0;
    for (const curTemp of arrayTemp) {
        avgTemp += curTemp;
    }
    avgTemp /= arrayTemp.length;
    return avgTemp;
};
const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5]; // 38.5
const temperatures2 = [36, 37.4, 39, 41, 36.6]; // 38
const temperatures3 = []; // NaN
console.log(calculateAverage(temperatures1));
console.log(calculateAverage(temperatures2));
console.log(calculateAverage(temperatures3));