// 29.05.2022
// uppercase the first letter of each word in the string
const solution = a => {
    let str = ``;
    for (let i = 0; i < a.length; i++) {

    const check = a[i] !== ' ' && (i === 0 || a[i-1] === ' '); // "check" takes the value "true" if a[i] is not equal to a " " and there was " " before it || if this is the first character
    str += check ? a[i].toUpperCase() : a[i];  // ternary operator, if "check" = "true", then the character a[i] is concatenated to "str" in "uppercase", otherwise - in the current case
    };
    return(str);
  };
  console.log(solution('hello, world! memes kekes etc.etc.'));
export default solution