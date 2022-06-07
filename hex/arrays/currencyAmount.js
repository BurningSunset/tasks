// 07.06.2022
// the function accepts a wallet with money and the currency as an array and returns the amount of money of the specified currency
// by the condition of the task, it was necessary to use "break" and "continue"


const money1 = ['eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5', ];
const money2 = ['eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',]; 
const money3 = ['eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',];

getTotalAmount = (wallet, currency) => {
    let sum = 0;
    for (const curEl of wallet) {
        if (curEl.slice(0, 3) === currency){
            let am = ``;
            am += curEl.slice(4, curEl.length);
            sum += Number(am);
        }
    }
    return sum;
};
console.log(getTotalAmount(money1, 'usd')); // 16
console.log(getTotalAmount(money2, 'eur')); // 135
console.log(getTotalAmount(money3, 'rub')); // 270