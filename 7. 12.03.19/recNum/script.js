// нужно написать функции каждая из которых будет принимать 
// число, и возвращать результат указаный в задании
//
// нужно вычислить двумя способами обычным циклом и рекурсивно:
//
// найти разницу натуральных чисел до заданного числа, то 
// есть если вы передали число 3, то результат будет -4, потому что 1-2-3=-4


function diffNatNum(n) {
    let dif = 2;
    for (let i = 1; i <= n; i++){
        dif -= i
    }
    return dif;
}

console.log('Цикл ', diffNatNum(3));
console.log('Цикл ', diffNatNum(4));


function diffNatNumRec(n) {

    return n !== 1 ? -n + diffNatNumRec(n - 1) : n;

    // if (n !== 1){
    //     return -n + diffNatNumRec(n - 1);
    // }
    //
    // return n;
}

console.log('Рекурсия ', diffNatNumRec(3));
console.log('Рекурсия ', diffNatNumRec(4));