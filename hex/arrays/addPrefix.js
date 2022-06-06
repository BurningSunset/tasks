// 05.06.2022
// the function takes an array and a string prefix as input, and returns a new array in which the passed prefix is added to each element of the source array
// there is no check implemented here to see if the received value is an array (we can use «Array.isArray(object)»)
const names = ['John', 'Smith', 'Karl'];
const addPrefix = (nameArray, pref = 'Mr') =>{
    let newArray = [``];
    for (i = 0; i < nameArray.length; i+=1){
        newArray[i] = pref + ` ` + nameArray[i];
    }
    return (newArray);
}
console.log(addPrefix(names))
const newNames = addPrefix(names, 'Dr');
console.log(newNames);
console.log(addPrefix('lol'));
