// 1. Написать функцию isSymbolPresentInString(str,symbol) -
// возврает true если символ найден в строке и false если нет.
//
// isSymbolPresentInString("abc","a") // true
// isSymbolPresentInString("abc","e") // false


function isSymbolPresentInString(str, symbol) {
    return str.indexOf(symbol) !== -1;
}

console.log('1.1 Результат поиска символа в строке - ', isSymbolPresentInString("abc","a"));
console.log('1.2 Результат поиска символа в строке - ', isSymbolPresentInString("abc","e"));
console.log('1.3 Результат поиска символа в строке - ', isSymbolPresentInString("abc","c"));


// 2. Написать функцию getSymbolIndex(str,symbol) - возвращает
// индекс первого найденного символа в строк, или -1 если символ не найден
//
// getSymbolIndex("hello lol","h") // 0
// getSymbolIndex("hello lol","l") // 2
// getSymbolIndex("hello lol","v") // -1

function getSymbolIndex(str, symbol) {
    return str.indexOf(symbol);
}

console.log('2.1 Индекс первого найденного символа - ', getSymbolIndex("hello lol","h"));
console.log('2.2 Индекс первого найденного символа - ', getSymbolIndex("hello lol","l"));
console.log('2.3 Индекс первого найденного символа - ', getSymbolIndex("hello lol","v"));

// 3. Написать функцию getNumberOfEven(n) -
// получить количество четных цифр в числе
//
// getNumberOfEven(223344) // 4
// getNumberOfEven(111) // 0

function getNumberOfEven(n) {
    let str = String(n);
    let count = 0;
    for(let i = 0; i < String(n).length; i++){
       if( +str[i] % 2 === 0 ) {
           count++
       }
    }
    return count
}

console.log('3.1 Количество четных цифр в числе - ', getNumberOfEven(223344));
console.log('3.2 Количество четных цифр в числе - ', getNumberOfEven(111));
