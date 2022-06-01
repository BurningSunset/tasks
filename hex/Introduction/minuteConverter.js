// 30.05.2022
// takes a value and converts it to hours and minutes into a string hh:mm format
formattedTime = min =>{
    while (min >= 1440) {
        min -= 1440;
        // console.log(min); проверка минут пройдённых с начала суток
    }
    const h = Math.floor(min/60);
    const m = min - h * 60;
    const formH = h > 10 ? h : `0` + h;
    const formM = m > 10 ? m : `0` + m;
    const res = formH + `:` + formM;
    return(res);
};
console.log(formattedTime(0)) // 00:00
console.log(formattedTime(1)) // 00:00
console.log(formattedTime(720));
console.log(formattedTime(1440)); // 00:00
console.log(formattedTime(15742));