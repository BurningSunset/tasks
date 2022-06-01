// 29.05.2022
/*   Compares the number of capital letters in strings. 
     Outputs 1 if firstCount > secondCount
     -1 if firstCount < secondCount
     0 if firstCount = secondCount
*/
const bigLettersCount = (str) => {
  let res = 0;
  /* 
  forgot that the index starts from 0
  the error was in "i <= str.length"
  console.log(str);
  console.log(str.length);
  console.log(str[1]);
  console.log(str[1].toUpperCase());
  if (str[0].toUpperCase() === str[0]){
    console.log('kek');
    }; */
  for (let i = 0; i < str.length; i+=1){
  if (str[i].toUpperCase() === str[i]){
  res = res + 1;
  };
};
// console.log(res);
  return res;
};


const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);
  if (firstCount > secondCount){
    return 1;
  } else if (firstCount < secondCount){
    return (-1);
  } else if (firstCount === secondCount) {
    return 0;
  } else {
    return (NaN);
  };
  };
  console.log(compare('Pipis', 'KeKiS'))

