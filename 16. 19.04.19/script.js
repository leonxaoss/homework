// Упражнения с объектами и массивами
// 1) С помощью метода reduce необходимо перебрать
// массив и составить объект, у которого ключ —
// уникальный элемент массива,
// значение — сколько раз он встречается в массиве.
// Например, перебирая массив
// ['ololo', 'anna', 'red', 'ololo', 'qwe', 'anna', 'ololo']
// мы получим {ololo: 3, anna: 2, red: 1, qwe: 1]

const arr = ['ololo', 'anna', 'red', 'ololo', 'qwe', 'anna', 'ololo'];

function createObj(array) {

    return array.reduce(function (item, current) {

        if(!item[current]){
            item[current] = 1;
        } else {
            item[current] += 1;
        }

        return item;
    }, {});

}

console.log('1. ', createObj(arr));



// 2) Создать функцию, которая принимает объект, меняет
// местами ключ и значение и возвращает новый
// объект. {name: 'mykola', age: 56} -> {mykola: 'name', 56: 'age'}

const obj = {name: 'mykola', age: 56};

function changeObj(obje){
    const newObj = {};

    for (let key in obje){
        newObj[obje[key]] = key;
    }

    return newObj;

    // return Object.keys(obje).reduce(function (item, current) {
    //
    //     item[obje[current]] = current;
    //
    //     return item;
    // },{})
}

console.log('2. ', changeObj(obj));
