// 04.06.2022
// если принимает на вход значение short, выдаёт sat, sun
// если принимает на вход значение long, выдаёт saturday, sunday
const getWeekends = ls =>{
    const long = ['saturday', 'sunday'];
    const short = ['sat', 'sun'];
    if (ls === 'long'){
        return long;
    } else if (ls === 'short'){
        return short;
    } else {
        return undefined;
    }
};
console.log(getWeekends('long'));