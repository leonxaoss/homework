// клики по списку
// Сделать список, по клику на любой
// из элементов он выделяется красным
// цветом, если один уже выделен, а кликнули
// по-другому, то выделение с прошлого — снимается,
// и ставится на тот по котором кликнули

// 1. Варіант я зробив сам

const listLi = document.querySelectorAll('li');

listLi.forEach(function (item, i, arr) {
    item.addEventListener('click', function () {
        arr.forEach(function (item) {
            item.classList.remove('red');
        });
        this.classList.add('red');
    })
});


// 2. Варіант я побачив в прикладі з делегуванням і він певно буде правильніший

// const listLi = document.querySelectorAll('li');
// let selectedLi;
//
// listLi.forEach(function (item) {
//     item.addEventListener('click', function () {
//         select(this);
//     })
// });
//
// function select(elem) {
//     if (selectedLi) {
//         selectedLi.classList.remove('red');
//     }
//     selectedLi = elem;
//     selectedLi.classList.add('red');
// }



