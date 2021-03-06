// Внимание, это задание нужно выполнить
// используя методы массива (никаких for)
//
// дан массив
//
// var arr = [-246,753,-468,475,-683,476,-583,746,-581];
//
// 1) найти сумму элементов массива
//
// 2) получить массив который состоит
// из отрицательных элементов из исходного массива
//
// 3) отсортировать массив по возрастанию
//
// 4) получить массив из тех же элементов,
// только они должны быть в обратном порядке
//
// 5) получить массив из элементов деленных на два
// (например, если был массив [4, 3, 8] то получим [2,1.5,4])

const arr = [-246,753,-468,475,-683,476,-583,746,-581];
console.log('Исходный масив', arr);

// 1) найти сумму элементов массива

let sumArr = arr.reduce(function(sum, item) {
    return sum + item
});

console.log('1. Сумма элементов массива', sumArr);

// 2) получить массив который состоит
// из отрицательных элементов из исходного массива

const negativeArr = arr.filter(function(item) {
    return item < 0;
});

console.log('2. Масив с отрицательных элементов', negativeArr);

// 3) отсортировать массив по возрастанию

const sortArr = arr.slice(0);

function sortArray(a, b) {
    return a - b;
}

sortArr.sort(sortArray);

console.log('3. Отсортированный масив по возрастанию', sortArr);

// 4) получить массив из тех же элементов,
// только они должны быть в обратном порядке

const reverseArr = arr.slice(0);

reverseArr.reverse();

console.log('4. Масив с обратным порядком', reverseArr);

// 5) получить массив из элементов деленных на два
// (например, если был массив [4, 3, 8] то получим [2,1.5,4])

const divideArr = arr.map(function(item) {
    return item/2;
});

console.log('5. Масив из элементов деленных на два', divideArr);