// Дан массив
//     [
//     [16,-37,54,-4,72],
//         [-56,47,4,-16,25],
//         [-37,46,4,-51,27],
//         [-63,4,-54,76,-4],
//         [12,-35,4,47]
//     ]
//
// 1. Найти сумму и количество положительных элементов.
// 2. Найти минимальный элемент массива и его порядковый номер.
// 3. Найти максимальный элемент массива и его порядковый номер.
// 4. Определить количество отрицательных элементов.
// 5. Найти количество нечетных положительных элементов.
// 6. Найти количество четных положительных элементов.
// 7. Найти сумму четных положительных элементов.
// 8. Найти сумму нечетных положительных элементов.
// 9. Найти произведение положительных элементов.
// 10. Найти определить количество элементов, равных 4.
// 11. Найти наибольший среди элементов массива, остальные обнулить.



    const arr = [
            [16,-37,54,-4,72],
            [-56,47,4,-16,25],
            [-37,46,4,-51,27],
            [-63,4,-54,76,-4],
            [12,-35,4,47]
        ];

// 1. Найти сумму и количество положительных элементов.

    let sumPositive = 0;
    let countPositive = 0;

// 2. Найти минимальный элемент массива и его порядковый номер.

    let min = Infinity;
    let minArr;
    let minNumber;

    let arrLenMin = 0;
    let currentArrLenMin = 0;

// 3. Найти максимальный элемент массива и его порядковый номер.

    let max = -Infinity;
    let maxArr;
    let maxNumber;

    let arrLenMax = 0;
    let currentArrLenMax = 0;

// 4. Определить количество отрицательных элементов.

    let countNegative = 0;

// 5. Найти количество нечетных положительных элементов.

    let countUneven = 0;

// 6. Найти количество четных положительных элементов.

    let countEven = 0;

// 7. Найти сумму четных положительных элементов.

    let sumEven = 0;

// 8. Найти сумму нечетных положительных элементов.

    let sumUneven = 0;

// 9. Найти произведение положительных элементов.

    let mulPositive = 1;

// 10. Найти определить количество элементов, равных 4.

    let countFour = 0;

// 11. Найти наибольший среди элементов массива, остальные обнулить.

    let maxElem = -Infinity;
    let maxIndexArr;
    let maxElemIndex;

/////////////////////////////////////

    for(let i = 0; i < arr.length; i++){

        for(let j = 0; j < arr[i].length; j++){

            if(arr[i][j] > 0){
                sumPositive += arr[i][j];
                countPositive++;
                mulPositive *= arr[i][j];
            }

            if(min > arr[i][j]){
                min = arr[i][j];
                minArr = i + 1;
                minNumber = j + 1;

                arrLenMin = arr[i].length;
                currentArrLenMin += arr[i].length;
            }

            if(max < arr[i][j]){
                max = arr[i][j];
                maxArr = i + 1;
                maxNumber = j + 1;

                arrLenMax = arr[i].length;
                currentArrLenMax += arr[i].length;
            }

            if(arr[i][j] < 0){
                countNegative++;
            }

            if((arr[i][j] > 0) && (arr[i][j] % 2 === 1)){
                countUneven++;
                sumUneven += arr[i][j];
            }

            if((arr[i][j] > 0) && (arr[i][j] % 2 === 0)){
                countEven++;
                sumEven += arr[i][j];
            }

            if(arr[i][j] === 4){
                countFour++;
            }

            if(maxElem < arr[i][j]){
                maxElem = arr[i][j];

                if((maxIndexArr && maxElemIndex) !== undefined){
                    arr[maxIndexArr][maxElemIndex] = 0;
                }

                maxIndexArr = i;
                maxElemIndex = j;

            } else {
                arr[i][j] = 0;
            }

        }
    }

    console.log('1. Сумма положительных элементов - ' + sumPositive + ', их количество - ' + countPositive);
    console.log('2. Минимальный элемент массива - ' + min + ' он находится в масиве под номером - ' + minArr + ', его порядковый номер в этом масиве - ' + minNumber + ', его порядковый номер во всем масиве - ' + ((currentArrLenMin - arrLenMin) + (minNumber)));
    console.log('3. Максимальный элемент массива - ' + max + ' он находится в масиве под номером - ' + maxArr + ', его порядковый номер - ' + maxNumber + ', его порядковый номер во всем масиве - ' + ((currentArrLenMax - arrLenMax) + (maxNumber)));
    console.log('4. Количество отрицательных элементов - ' + countNegative);
    console.log('5. Количество нечетных положительных элементов - ' + countUneven);
    console.log('6. Количество четных положительных элементов - ' + countEven);
    console.log('7. Сумма четных положительных элементов - ' + sumEven);
    console.log('8. Сумма нечетных положительных элементов - ' + sumUneven);
    console.log('9. Произведение положительных элементов - ' + mulPositive);
    console.log('10. Количество элементов, равных 4 - ' + countFour);
    console.log('11. Наибольший среди элементов массива, остальные обнулить - ');
    console.log(arr);
