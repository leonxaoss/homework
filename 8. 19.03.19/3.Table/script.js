// 1. Вывести таблицу 10 × 10, заполненую числами от 1 до 100

// я зробив як функцію

const container = document.querySelector('.container');

function createTable(tableWidth, tableHeight) {
    const table = document.createElement('table');
    let count = 1;

    for (let i = 0; i < tableHeight; i++){
        const tr = document.createElement('tr');

        table.appendChild(tr);
        for(let j = 0; j < tableWidth; j++){
            const td = document.createElement('td');

            td.innerText = '' + count++ + '';
            tr.appendChild(td);
        }
    }
    return table;
}



container.appendChild(createTable(10, 10));

console.log(createTable(10, 10));

// 2. В папке **images** есть изображения
// **1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg**.
// Вывести случайное изображение из этой папки

const img = document.createElement('img');
const randomImg = Math.floor(Math.random()* (10 - 1) + 1);

container.appendChild(img).src = './image/'+ randomImg +'.jpg';

console.log(img);
