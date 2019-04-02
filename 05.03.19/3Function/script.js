// 3 простенькие функции

// 1. Написать функцию заполнения двумерного массива случайными числами.
// Имя произвольное.

function arrRandom(lengthArr, lengthItem) {
    const array = [];
    for(let i = 0; i < lengthArr; i++){
        array[i] = [];
        for(let j = 0; j < lengthItem; j++){
            array[i][j] = (Math.floor(Math.random() * 101) + 1);
        }
    }
    return array;
}


console.log('1. Двумерный массив случайныч чисел -', arrRandom(5, 5));

// 2. написать функцию, которая примет как аргумент(параметр)
// два массива и сравнит суммы всех ЧИСЛОВЫХ элементов. Тот массив,
// сумма которого большая - должен вернутся функцией.


const arrOne = [12,32,13,12,43,45,65,75,34,10];
const arrSecond = [86,15,58,13,21,'67a',98,21,15,55];

function maxSumArr(arrO, arrS) {
    // let sumO = arrO.reduce(function(sum, itemCur) {
    //     return sum + itemCur
    // });
    // let sumS = arrS.reduce(function(sum, itemCur) {
    //     return sum + itemCur
    // });
    
    let sumO = 0;
    let sumS = 0;

    arrO.forEach(function (item) {
        if (typeof item === 'number') {
            sumO += item;
        }
    });
    arrS.forEach(function (item) {
        if (typeof item === 'number') {
            sumS += item;
        }
    });

    if(sumO < sumS){
        return arrS;
    } else if(sumO > sumS){
        return arrO;
    } else{
        return 'Суммы всех числовых значений двух масивов равны'
    }
}


console.log('2.', maxSumArr(arrOne, arrSecond));



// 3. Написать функцию `doMath(x, znak, y)`, которая получает 3
// аргумента: числа `x` и `y`, строку `znak`. В переменной знак может
// быть: `+, -, *, /, %, ^`. Вывести результат математического
// действия, указанного в переменной `znak`.

// function doMath(x, znak, y) {
//     return eval(x + znak + y) ;
// }

function doMath(x, znak, y) {
    switch (znak) {
        case '+': return x + y;
        case '-': return x - y;
        case '*': return x * y;
        case '/': return x / y;
        case '%': return x % y;
        case '^': return x ^ y;
        default: return 'Нет такой операции'
    }
}

console.log('3. Математическое действие - ' + doMath(8, '*', 4));
