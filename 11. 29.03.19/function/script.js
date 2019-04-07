// Реализовать map, filter, every, some
// * reduce

const arr = [42,-24,52,45,-34,53,45,34,-53,54];
// const arr = [42,24,52,45,34,53,45,34,53,54];

// filter

function filter(array, func) {

    const newArr = [];

    array.forEach(function (item, i, arr) {
        if (func(item, i, arr)) {
            newArr.push(item);
        }
    });

    return newArr;

}

const newFilter = filter(arr,function (elem) {
    return elem > 0;
});

console.log('Filter', newFilter);

// every

function every(array, func) {

    for (let i = 0; i < array.length; i++){
        if (!func(array[i])) {
            return false;
        }
    }

    return true;

}

const newEvery = every(arr,function (elem) {
    return elem > 0;
});

console.log('Every', newEvery);

// some

function some(array, func) {

    for (let i = 0; i < array.length; i++){
        if (func(array[i])) {
            return true;
        }
    }

    return false;

}

const newSome = some(arr,function (elem) {
    return elem < 0;
});

console.log('Some', newSome);

// map

function map(array, func) {

    const newArr = [];

    array.forEach(function (item, i, arr) {
        newArr.push(func(item));
    });

    return newArr;

}

const newMap = map(arr,function (elem) {
    return elem * 2;
});

console.log('Map', newMap);

// reduce

function reduce(array, func, init) {

    let result = init || 0;

    array.forEach(function (item, i, arr) {
        result = func(result, item);
        // console.log(result);
    });

    return result;

}

const newReduce = reduce(arr,function (cur, sum) {
    return sum + cur;
});

console.log('Reduce', newReduce);
