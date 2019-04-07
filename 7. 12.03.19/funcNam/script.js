// Создаем именованное функциональное выражение,
// аргументом передаем число. Функция возвращает "1",
// если это число является точной степенью двойки,
// и "0" — если не является. Операцией возведения в
// степень пользоваться нельзя => используем рекурсию.
//
// Точная степень двойки — 1, 2, 4, 8, 16, 32...

const nfe = function funcNam(n) {
    if( n >= 2 ){
        return funcNam(n / 2);
    } else if( n === 1 ){
        return 1;
    } else{
        return 0;
    }
};

console.log(nfe( 1));
console.log(nfe( 2));
console.log(nfe( 4));
console.log(nfe( 32));

console.log(nfe( 5));
console.log(nfe( 10));
console.log(nfe( 24));
