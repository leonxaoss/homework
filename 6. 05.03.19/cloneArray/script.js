// Клонирование массива
// реализовать функцию clone которая бы работала следующим образом:
//
// var arr = [1,2,3,4,5,6];
// var brr = clone(arr);
// console.log(brr); // [1,2,3,4,5,6]
//
// brr[0] = 42;
// console.log(brr); // [42,2,3,4,5,6]
// console.log(arr); // [1,2,3,4,5,6]
//
// * сдалать для любого уровня вложенности, например:
//
// var arr = [[11,22],2,3,4,5,6];
// var brr = clone(arr);
// console.log(brr); // [[11,22],2,3,4,5,6]
//
// brr[0][0] = 42;
// console.log(brr); // [[42, 22],2,3,4,5,6]
// console.log(arr); // [[11, 22],2,3,4,5,6]

const arr = [[11,22],[[3, 3], 3] ,4,5,6];


function clone (array) {
    const newArr = [];

    for(let i = 0; i < array.length; i++){
        newArr.push(array[i]);
        if(Array.isArray(array[i])){
            newArr[i] = clone(newArr[i]);
        }
    }

    return newArr;
}



const brr = clone(arr);

brr[0][0] = 42;
brr[1][0][0] = 54;
console.log('Масив brr - ', brr); // [[42,22],[[54, 3],3],4,5,6];
console.log('Масив arr - ', arr); // [[11,22],[[3, 3],3],4,5,6];

