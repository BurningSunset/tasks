// 04.06.2022
// function extracts an element from the array at the specified index, if the index exists, or returns the default value.
const cities = ['moscow', 'london', 'berlin', 'porto'];
const func = (ar, i, def = null) =>{ // "def = null" - default parameter
    if (i < ar.length && i >= 0){
        return ar[i]
    } else {
        return def;
    };
};
console.log(func(cities, 3));
console.log(func(cities, 4, 'kekis'));
console.log(func(cities, -1, 'oops'));