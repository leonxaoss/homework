// Генерация списка
// написать функцию generateList(array)
// принимает массив из чисел и массивов чисел, например
// [1,2, [1.1,1.2,1.3] ,3]
// нужно сгенерировать список из елементов,
// * а если в массиве встречается массив то делать вложенный список
// Пример
// [1,2,3]
// Должен создать
//
// <ul>
// <li>1</li>
// <li>2</li>
// <li>3</li>
// </ul>
//
// * Пример 2
//
// [1,2, [1.1,1.2,1.3] ,3]
//
// Должен создать
//
// <ul>
// <li>1</li>
// <li>2</li>
// <li>
// <ul>
// <li>1.1</li>
// <li>1.2</li>
// <li>1.3</li>
// </ul>
// </li>
// <li>3</li>
// </ul>

const arr = [1,2,[1.1,1.2,1.3], 3, [4.1,[4.11,4.12,4.13],4.2]];
const container = document.querySelector('.container');

function generateList(array) {

    const ul = document.createElement('ul');

    array.forEach(function (item) {

        const li = document.createElement('li');

        if(!Array.isArray(item)){
            li.innerText = '' + item + '';
            ul.appendChild(li);
        } else {
            li.appendChild(generateList(item));
            ul.appendChild(li);
        }
    });

    return ul;
}

container.appendChild(generateList(arr));
console.log(generateList(arr));









// const ulList = generateList(item);
// if(ulList){
//     li.appendChild(ulList)
// }
