// Еще одна странная функция
// Дана функция:
//
//     function f (a, b, c) {
//         function sum (a, b) {
//             return a + b;
//         }
//     }
//
// Перепишите её следующим образом:
// 1. Если агрументы a и b не переданы, они равны по умолчанию 2 и 3 соответсвенно.
// 2. Если аргумент c передан и он является функцией, то он выполняется после вызова функции sum.
// 4. Функция f должны возвращать результат функции аргумента c, если он есть, либо результат функции sum.


function f (a, b, c) {

    a = a || 2;
    b = b || 3;

    function sum (a, b) {
        return a + b;
    }

    if(typeof c === 'function' && c() !== undefined){
        return c();
    } else{
        return sum(a, b);
    }

}

function func() {
    return 'Hello world';
}

console.log(f(5, 7, func));

