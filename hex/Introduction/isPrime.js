// 28.05.2022
// accepts a number and returns "true" if it is prime
// the trial division algorithm was useful there
// https://en.wikipedia.org/wiki/Trial_division
// https://upload.wikimedia.org/wikipedia/commons/4/4d/Trial_division.jpg
const isPrime = (n) => {
    if (n <= 1) {
      return (false);
    }
    let res = true;
    for (let i = 2; i*i <= n && res === true; i += 1) {
        console.log(`n =`, n, `; i =`, i, `; res =`, res)
        if (n % i === 0) {
            res = false;
        }
    };
    return(res);
};
console.log(isPrime(-3));