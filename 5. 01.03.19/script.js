// Функции
// создать функции которые вычисляют:
//
// 1) площадь круга
//
// 2) длину окружности
//
// 3) среднее арифметическое двух чисел
//
// 4) среднее арифметическое любого массива
//
// привести примеры их использования


// 1) площадь круга

function calcAreaCircle(radius) {
    return Math.PI * Math.pow(radius, 2);
    // return 3.14159265359 * radius * radius;
}

console.log('1. Площать круга (с радиусом 10) - ' + calcAreaCircle(10));


// 2) длину окружности

function calcLengthCircle(radius) {
    return 2 * Math.PI * radius;
    // return 2 * 3.14159265359  * radius;
}

console.log('2. Длина окружности (с радиусом 10) - ' + calcLengthCircle(10));

// 3) среднее арифметическое двух чисел

function calcAverage(a, b) {
    return (a + b)/2
}

console.log('3. Среднее арифметическое двух чисел (10, 6) - ' + calcAverage(10, 6));

// 4) среднее арифметическое любого массива

const array = [16,54,72,47,4,6,25,46,4,27,4,76,4,12,35,4,47];

function calcAverageArr(arr) {
    let sum = 0;
    arr.forEach(function (item) {
        sum += item;
    });
    return sum/arr.length;
}

console.log('4. Среднее арифметическое массива (array) - ' + calcAverageArr(array));







