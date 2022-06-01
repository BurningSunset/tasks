// 29.05.2022
// flips the line
const reverse = (st) => {
    let i = st.length;
   // console.log(i);
    let res = '';
    while (i > 0){
        i = i - 1;
        res = `${res}${st[i]}`
      //  console.log(res)
    };
    return(res)
};
console.log(reverse('Hello, world!'));